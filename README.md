# http2-express-app
React + ExpressJS with http2 protocol demo app


# HTTP/2 Node.js Server Implementation with Express.js

# Pre-requirements

You need to create the files:
1. server.crt
2. server.csr
3. server.key

(Reference : https://webapplog.com/http2-node/ ) 

# Steps to install and run the application
1. npm install 
2. run the command : node index.js (To run the express server).
3. cd client/
4. run the command : HTTPS=true npm start

this will open the browser in `https` mode with the screenshot like shown


![https screen1](https://ibb.co/SfFjh62)
Click on advance button and click `Proceed to localhost (unsafe)`.

Now this is what you should be seeing.

![https screen2](https://ibb.co/RDZWjpq)

Can you see this "Hi, I am a Express API Response" , This is from the express API https://localhost:3000/express_backend

Well Done.










