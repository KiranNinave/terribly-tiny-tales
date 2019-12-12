# terribly-tiny-tales

## tech-stack
1. front end := React, react-bootstrap
2. back end := NodeJs, ExpressJs
3. Hosting := Docker

## code content
1. client folder contain React code
2. server folder contain NodeJs(backend) code 

## how to run
clone the github repositiory, after that cd inside the repo and type command __$> docker-compose up__

## code explaination

## back end
1. __server/util/frequency-counter__ folder
  * this folder contains the code for frequency counter.
  * the index.js file contain one singletone IIF function that have two methods __createInstance__ and __getTopRecords__
  *  __createInstance__ async function is invoked before server to get start, Responsible for fetching test.text file from network and creation of word and frequncy array.
  * __getTopRecords__ sync function is invoked for every request takes N input and return N records
  * __getNetworkFile.js__ file contain http code for fetching text file from network.
  * __frequncyCounter.js__ file contain the code for counting work frequncy from string

2. __server/routes/index.js__ file contain defination of router wich will pass request to controller
3. __server/controllers/wordController.js__ file contain the code that invoke __getTopRecords__ function from __server/util/frequency-counter__ witch will return top N records to the client
4. __server.js__ file contain the bootstrap code that will create and start the server
 
## front end
1. __client/App.js__ file is the main root file wich contain the FORM and logic for fetching data from backend.
2. __client/components__ folder contain two components Header( Navbar ) and ListItem ( for rendering list item)

## hosting
1. used __Nginx__ for load balancing
2. __Docker__ for hosting client and server on __AWS__

