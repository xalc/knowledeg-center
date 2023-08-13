// docker run -it --rm --name mongo-express --network web_default -p 8081:8081 -e ME_CONFIG_OPTIONS_EDITORTHEME="ambiance" -e ME_CONFIG_BASICAUTH_USERNAME="hunter" -e ME_CONFIG_MONGODB_URL="mongodb://mongo:27017" mongo-express



//     db.createUser({user: "hunter",pwd: "xalc",roles: [{ role: "readWrite", db: "unrealdata" }]})