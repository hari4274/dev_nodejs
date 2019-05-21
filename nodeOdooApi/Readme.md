Node.js, Express, and Postgres API
----------------------------------------------------

# NPM Install :
        npm init
        npm i --save express odoo-xmlrpc
        (OR)
        npm install

# To Run Server: 
    cd nodeOdooApi
    node app.js

# Ref Links:
    - https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8
    - https://www.npmjs.com/package/odoo-xmlrpc

# Get all details:
    - curl http://localhost:3000/users

# Get User by ID:
    - curl http://localhost:3000/users/1

# Update User:
    - curl -X PUT -d "name=Kramer" -d "email=kramer@example.com"  http://localhost:3000/users/44

# Delete User:
    - curl -X "DELETE" http://localhost:3000/users/43