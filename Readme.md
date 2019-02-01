Project NODE JS
----------------


sudo apt-get install mongodb-server-core


sudo mkdir /opt/data_mongodb
sudo chmod -R 777 /opt/data_mongodb/


mongod --dbpath="/opt/data_mongodb/"

default port DB: 27017  (--port=27018)

npm init

<!-- NPM init sample template -->
npm init -y

Requirements
------------

1) Routes
    routes
2) Models
    models


Express:
    npm install express body-parser --save
For Log:
    morgan
for mongodb:
    mongoose

npm install mongoose morgan --save

If existing package.json:
    npm install

For Start:
    if start cmd in package.json:
        <!-- "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node index.js"
        }, -->
        npm start
    if not:
        node index.js

npm audit