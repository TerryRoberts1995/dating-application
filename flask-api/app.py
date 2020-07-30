from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_heroku import Heroku

import os

app = Flask(__name__)
CORS(app)
heroku = Heroku(app)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config["SQLALCHEMY_DATABASE_URI"] = 'postgres://hygsdjpctemdkc:096069411fe5de877fb0d6ac566a8b1d1951e50ffc59becea52747583b2a24b7@ec2-50-19-26-235.compute-1.amazonaws.com:5432/dedleskp5oo9q1'
# app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///' + os.path.join(basedir, 'app.sqlite')
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Profile(db.Model):
    __tablename__ = "profiles"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(16), nullable=False)
    password = db.Column(db.String(24), nullable=False)
    bio = db.Column(db.String(128))
    picture = db.Column(db.String(1048), nullable=False)
    fullname = db.Column(db.String(32), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(12), nullable=False)

    def __init__(self, username, password, bio, picture, fullname, age, gender):
        self.username = username
        self.password = password
        self.bio = bio
        self.picture = picture
        self.fullname = fullname
        self.age = age
        self.gender = gender

class ProfileSchema(ma.Schema):
    class Meta:
        fields = ("id", "username", "password", "bio", 
                  "picture", "fullname", "age", "gender")

profile_schema = ProfileSchema()
profiles_schema = ProfileSchema(many=True)

@app.route("/", methods=["GET"])
def home():
    return "<h1>dating profile api</h1>"

@app.route("/profiles", methods=["GET"])
def get_profiles():
    all_profiles = Profile.query.all()
    result = profiles_schema.dump(all_profiles)

    return jsonify(result)

@app.route("/profile/<id>", methods=["GET"])
def get_profile(id):
    profile = Profile.query.get(id)
    result = profile_schema.dump(profile)

    return jsonify(result)

@app.route("/profile", methods=["POST"])
def add_profile():
    username = request.json["username"]
    password = request.json["password"]
    bio = request.json["bio"]
    picture = request.json["picture"]
    fullname = request.json["fullname"]
    age = request.json["age"]
    gender = request.json["gender"]

    new_profile = Profile(username, password, bio, picture, fullname, age, gender)

    db.session.add(new_profile)
    db.session.commit()

    profile = Profile.query.get(new_profile.id)
    return profile_schema.jsonify(profile)

@app.route("/profile/<id>", methods=["PUT"])
def update_profile(id):
    profile = Profile.query.get(id)

    profile.username = request.json["username"]
    profile.password = request.json["password"]
    profile.bio = request.json["bio"]
    profile.picture = request.json["picture"]
    profile.age = request.json["picture"]
    profile.gender = request.json["gender"]

    db.session.commit()

    return profile_schema.jsonify(profile)

@app.route("/del/profile/<id>", methods=["DELETE"])
def delete_profile(id):
    record = Profile.query.get(id)

    db.session.delete(record)
    db.session.commit()

    return jsonify({"message": "Bye ugly"})


if __name__ == "__main__":
    app.run(debug=True)