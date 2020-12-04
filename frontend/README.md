## While launching server for the first time: 
1. Install Node and NPM (visit https://nodejs.org/en/download/package-manager/ )
2. Download Dependencies by running `npm i` or `npm install`
3. Start server by running `node server.js` or `npm start server`

As all the dependencies downloaded, if you need to re-start server, just use `node server.js` to launch for the next time (no need to download dependencies as there is no updates with modules)


Structure:

### server.js
Entry point for the server, then with Express it will launch web server and response with public folder

### public/*
Just a simple web-structure, including styles, js and index.html


##Docker image build:  
`docker build -t frontend .`  
Run: `docker run -it -p 8080:4000 --rm frontend`