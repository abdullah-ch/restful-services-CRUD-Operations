

							BEWARE OF NAMING WHEN WORKING IN NODE, USE LOWER CASE- ALWAYS
SOME IMPORTANT LINKS :-

https://stackoverflow.com/questions/630453/put-vs-post-in-rest
// TO SET PRODUCTION ENVIRONMENT, type         $env:NODE_ENV="production"    in powershell !
// 400 means a BAD REQUEST
// 404 means NOT FOUND
// When you are not passing arguments to the method, then when exporting just export it by its name, dont put brackets
1-> What is JSON ?

JSON stands for JavaScript Object Notation

JSON is a lightweight format for storing and transporting data

JSON is often used when data is sent from a server to a web page

JSON is "self-describing" and easy to understand

Example :- "firstName":"John"

2-> Semantic Versioning , Also Known as SemVer 
"dependencies": {
    "mongoose": "^5.9.6",
    "underscore": "^1.9.2"
  }
Above is my dependencies for my npm_Modules, if we look at  "mongoose": "^5.9.6" , here 5.9.5 is the semantic version, it is in the order , major.minor.patch
-> If a bug is resolved in the current version of mangoose, its semantic version will be 5.9.6
-> If some new features are added in the mangoose that do not break the application, it will be 5.10.0
-> If some new features are added in the mangoose that do break the application, it will be 6.0.0 
-> "^" character means that if there is a new version  of mangoose available as long as the new version revolves around the minor and patch, we are interested in it.


"underscore": "~1.9.2", here it means 1.9.x , we are only interested in the patch version.
"underscore": "1.9.2" means that we are only and only interested in version 1.9.2 ! 

"npm list" will tell you all the current version of npm libraries present in your project.
"npm list --depth=0" wil tell you the current version of only those npm libraries you are currently working in your project.

3-> Call Back Functions :-

Simply put: A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.
More complexly put: In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions.
 Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.

4-> Package JSON:-

To Create a Package JSON file, use "npm init --yes" .

5-> HTTP messages are how data is exchanged between a server and a client.
 There are two types of messages: requests sent by the client to trigger an action on the server, and responses, the answer from the server.


6-> The POST method is used to request that the origin server accept the entity enclosed in the request as
 a new subordinate of the resource identified by the Request-URI in the Request-Line

In other words, POST is used to create.

The PUT method requests that the enclosed entity be stored under the supplied Request-URI.
 If the Request-URI refers to an already existing resource, the enclosed entity SHOULD be considered as a modified version of the one residing on the origin server.
 If the Request-URI does not point to an existing resource, and that URI is capable of being defined as a new resource by the requesting user agent,
 the origin server can create the resource with that URI."

7-> CRUD => CREATE-READ-UPDATE-DELETE

8-> Every route handler ( call back function (req,res) => { // logic}) is actually a middle ware Function	

 Middleware will either send the request to another middleware , which will either create a response or send it to another middle ware function 
 For Example : app.use(express.json()) - is a middle ware function which that parse the req.body to a JSON object.
 By using the nex() method , we pass the request to the next middlware and this wil happen continuosly until a request was been returned ! 

we use app.use() to add some middleware into our request processing pipeline	
