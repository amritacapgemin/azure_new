/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 */

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

/**set port using env variable */
 var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function () {
    console.log("Listening on --- Port 3000");
});
 app.post('/azure', function (req, response) {
	 
	  switch (req.body.queryResult.intent.displayName) {			
           case "resourcegroup":	
		   
		   response.send(JSON.stringify({ "fulfillmentText": "test data hiii" }));
			
				break;
	  }				
 });