This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.




How to install and run the project:

Download or clone project folder: https://github.com/Hestur/pplan
Download or clone server folder: https://github.com/Hestur/Server

create new folder (PPlan)
Place them as follows:
(PPlan)
:
:---pplan (project folder)
:
:---server (server folder)

Once folders are in place
Open PPlan(including both server & project folder) in a code editor

Type npm install -g nodemon

Find the package.json in pplan (project folder) and open a terminal with the scope (PPlan/pplan) and type npm install (if using node) - this will install all dependencies for the project 
Then find the package.json in server (server folder) and open a terminal with the scope (PPlan/server) and type npm install (node) - this will install all dependencies for the server 

Restart project + editor

Open Server folder + terminal: scoped like (PPlan/server) and type "nodemon server" in terminal
this should respond with something like: 
[nodemon] 1.19.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
server is running on port: 4000
MongoDB database connection established :)

Now we got connection to the backend...(do not close or exit)

Now start up the React app:
Open folder pplan and terminal (PPlan/pplan) and type "npm start"
This should fire a message in the terminal: 

`Compiled successfully!`
You can now view pplan in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://10.131.163.105:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.

Then a browser window will open the frontpage of the website and it will be running...






