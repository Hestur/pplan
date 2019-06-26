This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


How to install and run the project:

Download or clone project folder: https://github.com/Hestur/pplan
Download or clone server folder: https://github.com/Hestur/Server

If not already using node - download it: https://nodejs.org/en/download/

create new folder (PPlan)
Place them as follows:
(PPlan)
<br>
:
:---pplan (project folder)
:
<br>
:---server (server folder)

Once folders are in place
Open PPlan(including both server & project folder) in a code editor

Type npm install -g nodemon

Find the package.json in pplan (project folder) and open a terminal with the scope (PPlan/pplan) and type npm install (if using node) - this will install all dependencies for the project 
Then find the package.json in server (server folder) and open a terminal with the scope (PPlan/server) and type npm install (node) - this will install all dependencies for the server 

Restart project + editor

Open Server folder + terminal: scoped like (PPlan/server) and type "nodemon server" in terminal
this should respond with something like: 
[nodemon] 1.19.1 <br>
[nodemon] to restart at any time, enter `rs` <br>
[nodemon] watching: *.* <br>
[nodemon] starting `node server.js` <br>
server is running on port: 4000 <br>
MongoDB database connection established :)

Now we got connection to the backend...(do not close or exit)
(Database data will be empty untill you fill it in locally (create data from the /create component))




Now start up the React app:
Open folder pplan and terminal (PPlan/pplan) and type "npm start"
This should fire a message in the terminal: 

`Compiled successfully!`
You can now view pplan in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://10.131.163.105:3000/

Then a browser window will open the frontpage of the website and it will be running...






