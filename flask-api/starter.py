import app

mass_post = [
    {
        "username": "semperrry",
        "password": "1234",
        "bio": "programming teacher",
        "picture": "https://source.unsplash.com/random/?selfie+man",
        "fullname": "ryan curtis",
        "age": 32,
        "gender": "male"
    },
    {
        "username": "terryr1995",
        "password": "1234",
        "bio": "programming student",
        "picture": "https://source.unsplash.com/random/?profile+picture+woman",
        "fullname": "preston phillips",
        "age": 25,
        "gender": "male"
    },
    {
        "username": "tbytheway",
        "password": "1234",
        "bio": "programming student2",
        "picture": "https://source.unsplash.com/random/?profile+picture+man",
        "fullname": "terry bytheway",
        "age": 45,
        "gender": "male"
    },
    {
        "username": "prestonian",
        "password": "1234",
        "bio": "programming student3",
        "picture": "https://source.unsplash.com/random/?selfie+woman",
        "fullname": "preston phillips",
        "age": 25,
        "gender": "male"
    },
    {
        "username": "tylerwhyler",
        "password": "1234",
        "bio": "programming student4",
        "picture": "https://source.unsplash.com/random/?profile+picture+lady",
        "fullname": "tyler isaacson",
        "age": 22,
        "gender": "male"
    },
    {
        "username": "dirtyharryp",
        "password": "1234",
        "bio": "the other chosen one",
        "picture": "https://source.unsplash.com/random/?profile+picture+guy",
        "fullname": "harry potter",
        "age": 20,
        "gender": "male"
    },
    {
        "username": "michaelflippers",
        "password": "1234",
        "bio": "won olympic gold 50 times",
        "picture": "https://source.unsplash.com/random/?profile+picture+man",
        "fullname": "michael phelps",
        "age": 30,
        "gender": "male"
    },
    {
        "username": "yankeelover",
        "password": "1234",
        "bio": "creator of devcamp and super cool",
        "picture": "https://source.unsplash.com/random/?selfie+man",
        "fullname": "jordan hudgens",
        "age": 38,
        "gender": "male"
    },
    {
        "username": "loosygoosey",
        "password": "1234",
        "bio": "won olympic gold 50 times",
        "picture": "https://source.unsplash.com/random/?profile+picture+girl",
        "fullname": "lucy turner",
        "age": 30,
        "gender": "female"
    },
    {
        "username": "donnytrumpet",
        "password": "1234",
        "bio": "aced a cognitive test",
        "picture": "https://source.unsplash.com/random/?selfie+man",
        "fullname": "donald trump",
        "age": 65,
        "gender": "male"
    }
]


for profile in mass_post:
    new_profile = app.Profile(profile["username"], profile["password"], profile["bio"], profile["picture"], profile["fullname"], profile["age"], profile["gender"])

    app.db.session.add(new_profile)
    app.db.session.commit()


print("All records added")