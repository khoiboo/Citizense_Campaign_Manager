var FreeTextSingle = function (ID, Type, Label){
	
	this.quesID = ID;
	this.quesType = Type;
	this.quesLabel = Label;
}
$.extend(FreeTextSingle.prototype, {
    getID:       function() {return this.quesID;},
    getType:     function() {return this.quesType;},
    getLabel:    function() {return this.quesLabel;},
    deserialize: function(obj) 
    {
    	this.quesID     = obj.quesID;
    	this.quesType   = obj.quesType;
    	this.quesLabel  = obj.quesLabel;    	
    }
});

var FreeNumericSingle = function (ID, Type, Label){
	
	this.quesID = ID;
	this.quesType = Type;
	this.quesLabel = Label;
}
$.extend(FreeNumericSingle.prototype, {
    getID:       function() {return this.quesID;},
    getType:     function() {return this.quesType;},
    getLabel:    function() {return this.quesLabel;},
    deserialize: function(obj) 
    {
    	this.quesID     = obj.quesID;
    	this.quesType   = obj.quesType;
    	this.quesLabel  = obj.quesLabel;    	
    }
});

var DateInput = function (ID, Type, Label){
	
	this.quesID = ID;
	this.quesType = Type;
	this.quesLabel = Label;
}
$.extend(DateInput.prototype, {
    getID:       function() {return this.quesID;},
    getType:     function() {return this.quesType;},
    getLabel:    function() {return this.quesLabel;},
    deserialize: function(obj) 
    {
    	this.quesID     = obj.quesID;
    	this.quesType   = obj.quesType;
    	this.quesLabel  = obj.quesLabel;    	
    }
});

var TimeInput = function (ID, Type, Label){
	
	this.quesID = ID;
	this.quesType = Type;
	this.quesLabel = Label;
}
$.extend(TimeInput.prototype, {
    getID:       function() {return this.quesID;},
    getType:     function() {return this.quesType;},
    getLabel:    function() {return this.quesLabel;},
    deserialize: function(obj) 
    {
    	this.quesID     = obj.quesID;
    	this.quesType   = obj.quesType;
    	this.quesLabel  = obj.quesLabel;    	
    }
});

var WifiSensor = function (ID, Type, Label){
	
	this.quesID = ID;
	this.quesType = Type;
	this.quesLabel = Label;
}
$.extend(WifiSensor.prototype, {
    getID:       function() {return this.quesID;},
    getType:     function() {return this.quesType;},
    getLabel:    function() {return this.quesLabel;},
    deserialize: function(obj) 
    {
    	this.quesID     = obj.quesID;
    	this.quesType   = obj.quesType;
    	this.quesLabel  = obj.quesLabel;    	
    }
});

var Campaign = function (CamID, CamDescription, onetime_Boolean, expiryValue, startDateValue, endDateValue, geoBoolean_input, 
						 PoI_list_input, Mercator_format_list,startQues, quesArray,work_flow, username, cyto_config, extrinsicBooleanInput, 
						 incentiveListInput,  incentiveContactInput, showResultValue, secretCodeValue, authorCodeValue, showAuthorBoolean, authorFirstName, authorLinkPic, continuousSubmissionValue) {
	
	this.Campaign_ID = CamID;
	this.Campaign_Description = CamDescription;
	this.onetime = onetime_Boolean;
	this.expiry = expiryValue;
	this.startDate = startDateValue;
	this.endDate = endDateValue;
	this.geoBoolean = geoBoolean_input;
	this.PoI_list = PoI_list_input;
	this.PoI_list_WebMercator = Mercator_format_list;
	this.startQuestion = startQues;
	this.Question_Array = quesArray;
	this.workflow = work_flow;		
	this.userID = username;		
	this.cytoscape = cyto_config;
	
	this.extrinsicBoolean = extrinsicBooleanInput;
	this.incentiveList = incentiveListInput;
	this.incentiveContact = incentiveContactInput;
	
	this.showResult = showResultValue;
	
	this.secretCode = secretCodeValue;
	
	this.authorCode = authorCodeValue;
	
	this.showAuthor = showAuthorBoolean;
	this.firstName = authorFirstName;
	this.linkPic = authorLinkPic;
	
	this.continuousSubmission = continuousSubmissionValue;	
}
$.extend(Campaign.prototype, {
    getCamID:               function() {return this.Campaign_ID;},
    getCamDes:          	function() {return this.Campaign_Description;},
    getstartQuestion:   	function() {return this.startQuestion;},
    getquesArray:       	function() {return this.Question_Array;},
    getworkflow:        	function() {return this.workflow;},
    getCytoscape:       	function() {return this.cytoscape;},
    getUserID:          	function() {return this.userID;},
    getQuestionQuantity:	function() {return this.Question_Array.length;},
    getMercatorList:        function() {return this.PoI_list_WebMercator;},
    getAreaList:            function() {return this.PoI_list;},
	
	getExtrinsicBoolean:	function() {return this.extrinsicBoolean;},
	getIncentiveList:		function() {return this.incentiveList;},
	getIncentiveContact:	function() {return this.incentiveContact;},
	getShowResultBoolean:	function() {return this.showResult;},
	getSecretCode:			function() {return this.secretCode;},
	getAuthorCode:			function() {return this.authorCode;}
});

var CampaignExtended = function (CamID, CamDescription, onetime_Boolean, expiryValue, startDateValue, endDateValue, geoBoolean_input, 
						 PoI_list_input, Mercator_format_list,startQues, quesArray,work_flow, username, cyto_config, extrinsicBooleanInput, 
						 incentiveListInput,  incentiveContactInput, showResultValue, secretCodeValue, authorCodeValue, showAuthorBoolean, authorFirstName, authorLinkPic, continuousSubmissionValue, followUpValue) {
	
	this.Campaign_ID = CamID;
	this.Campaign_Description = CamDescription;
	this.onetime = onetime_Boolean;
	this.expiry = expiryValue;
	this.startDate = startDateValue;
	this.endDate = endDateValue;
	this.geoBoolean = geoBoolean_input;
	this.PoI_list = PoI_list_input;
	this.PoI_list_WebMercator = Mercator_format_list;
	this.startQuestion = startQues;
	this.Question_Array = quesArray;
	this.workflow = work_flow;		
	this.userID = username;		
	this.cytoscape = cyto_config;
	
	this.extrinsicBoolean = extrinsicBooleanInput;
	this.incentiveList = incentiveListInput;
	this.incentiveContact = incentiveContactInput;
	
	this.showResult = showResultValue;
	
	this.secretCode = secretCodeValue;
	
	this.authorCode = authorCodeValue;
	
	this.showAuthor = showAuthorBoolean;
	this.firstName = authorFirstName;
	this.linkPic = authorLinkPic;
	
	this.continuousSubmission = continuousSubmissionValue;	
	this.followUp = followUpValue;
}
$.extend(Campaign.prototype, {
    getCamID:               function() {return this.Campaign_ID;},
    getCamDes:          	function() {return this.Campaign_Description;},
    getstartQuestion:   	function() {return this.startQuestion;},
    getquesArray:       	function() {return this.Question_Array;},
    getworkflow:        	function() {return this.workflow;},
    getCytoscape:       	function() {return this.cytoscape;},
    getUserID:          	function() {return this.userID;},
    getQuestionQuantity:	function() {return this.Question_Array.length;},
    getMercatorList:        function() {return this.PoI_list_WebMercator;},
    getAreaList:            function() {return this.PoI_list;},
	
	getExtrinsicBoolean:	function() {return this.extrinsicBoolean;},
	getIncentiveList:		function() {return this.incentiveList;},
	getIncentiveContact:	function() {return this.incentiveContact;},
	getShowResultBoolean:	function() {return this.showResult;},
	getSecretCode:			function() {return this.secretCode;},
	getAuthorCode:			function() {return this.authorCode;},
	getFollowUp:			function() {return this.followUp;}
});

var GeoComponent = function(lat_input, lon_input, radius_input) {
	
	this.lat = lat_input;
	this.lon = lon_input;
	this.radius = radius_input;
}
$.extend(GeoComponent.prototype, {
    getLat:           function() {return this.lat;},
    getLong:          function() {return this.lon;},
    getRadius:        function() {return this.radius;},
    deserialize:      function(obj)
    {
    	this.lat     =   obj.lat;
    	this.lon     =   obj.lon;
    	this.radius  =   obj.radius;
    }
});

var Branch = function(input_expression, input_next) {
	
	this.expression = input_expression;
	this.next       = input_next;
}
$.extend(Branch.prototype, {
	getExpression: function() { return this.expression;},
	getNext:       function() { return this.next;},
	deserialize:   function(obj)
	{
		this.expression = obj.expression;
		this.next       = obj.next;
	}
	
});

var Workflow_Element = function(questionID, input_condition) {
	
	this.QuesID = questionID;
	this.Condition = input_condition;	
}
$.extend(Workflow_Element.prototype, {
	getQuesID:          function() { return this.QuesID;},
	getCondition:       function() { return this.Condition;}
});

	
var FreeTextMulti = function (ID, Type, Label,sub_component) {
	
	this.quesID = ID;
	this.quesType = Type;
	this.quesLabel = Label;
	this.subcomponent = sub_component;	
}
$.extend(FreeTextMulti.prototype, {
    getID:              function() {return this.quesID;},
    getType:            function() {return this.quesType;},
    getLabel:           function() {return this.quesLabel;},
    getSubcomponent:    function() {return this.subcomponent;},
    deserialize:        function(obj)
    {
    	this.quesID        = obj.quesID;
    	this.quesType      = obj.quesType;
    	this.quesLabel     = obj.quesLabel;
    	this.subcomponent  = obj.subcomponent;    	
    }
});

var MultipleChoiceSingle = function (ID, Type, Label,sub_component) {
	
	this.quesID = ID;
	this.quesType = Type;
	this.quesLabel = Label;
	this.subcomponent = sub_component;	
}
$.extend(MultipleChoiceSingle.prototype, {
    getID:              function() {return this.quesID;},
    getType:            function() {return this.quesType;},
    getLabel:           function() {return this.quesLabel;},
    getSubcomponent:    function() {return this.subcomponent;},
    deserialize:        function(obj)
    {
    	this.quesID        = obj.quesID;
    	this.quesType      = obj.quesType;
    	this.quesLabel     = obj.quesLabel;
    	this.subcomponent  = obj.subcomponent;    	
    }
});

var MultipleChoiceMulti = function (ID, Type, Label,sub_component) {
	
	this.quesID = ID;
	this.quesType = Type;
	this.quesLabel = Label;
	this.subcomponent = sub_component;	
}
$.extend(MultipleChoiceMulti.prototype, {
    getID:              function() {return this.quesID;},
    getType:            function() {return this.quesType;},
    getLabel:           function() {return this.quesLabel;},
    getSubcomponent:    function() {return this.subcomponent;},
    deserialize:        function(obj)
    {
    	this.quesID        = obj.quesID;
    	this.quesType      = obj.quesType;
    	this.quesLabel     = obj.quesLabel;
    	this.subcomponent  = obj.subcomponent;    	
    }
});

var AudioSensor = function (ID, Type, Label){
	
	this.quesID = ID;
	this.quesType = Type;
	this.quesLabel = Label;
}
$.extend(AudioSensor.prototype, {
    getID:       function() {return this.quesID;},
    getType:     function() {return this.quesType;},
    getLabel:    function() {return this.quesLabel;},
    deserialize: function(obj) 
    {
    	this.quesID     = obj.quesID;
    	this.quesType   = obj.quesType;
    	this.quesLabel  = obj.quesLabel;    	
    }
});

var TextDisplay = function (ID, Type, Label){
	
	this.quesID = ID;
	this.quesType = Type;
	this.quesLabel = Label;
}
$.extend(TextDisplay.prototype, {
    getID:       function() {return this.quesID;},
    getType:     function() {return this.quesType;},
    getLabel:    function() {return this.quesLabel;},
    deserialize: function(obj) 
    {
    	this.quesID     = obj.quesID;
    	this.quesType   = obj.quesType;
    	this.quesLabel  = obj.quesLabel;    	
    }
});

var ContRange = function (ID, Type, Label,sub_component) {
	
	this.quesID = ID;
	this.quesType = Type;
	this.quesLabel = Label;
	this.subcomponent = sub_component;	
}
$.extend(ContRange.prototype, {
    getID:              function() {return this.quesID;},
    getType:            function() {return this.quesType;},
    getLabel:           function() {return this.quesLabel;},
    getSubcomponent:    function() {return this.subcomponent;},
    deserialize:        function(obj)
    {
    	this.quesID        = obj.quesID;
    	this.quesType      = obj.quesType;
    	this.quesLabel     = obj.quesLabel;
    	this.subcomponent  = obj.subcomponent;    	
    }
});

var UploadPhoto = function (ID, Type, Label){
	
	this.quesID = ID;
	this.quesType = Type;
	this.quesLabel = Label;
}
$.extend(UploadPhoto.prototype, {
    getID:       function() {return this.quesID;},
    getType:     function() {return this.quesType;},
    getLabel:    function() {return this.quesLabel;},
    deserialize: function(obj) 
    {
    	this.quesID     = obj.quesID;
    	this.quesType   = obj.quesType;
    	this.quesLabel  = obj.quesLabel;    	
    }
});

var IncentiveType = function (incentiveType, incentiveParameter, finishedBoolean, incentiveParameter2) {
	this.typeNumber 			= incentiveType;
	this.parameter			 	= incentiveParameter;
	this.finishedComputation 	= finishedBoolean;
	this.parameter2 			= incentiveParameter2
}
$.extend(IncentiveType.prototype, {
	getType:              		function() {return this.typeNumber;},
	getParameter:         		function() {return this.parameter;},
	getFinishedBooleanValue:	function() {return this.finishedComputation;},
	getParameter2:				function() {return this.parameter2;},
	deserialize:		  function(obj)
	{
		this.typeNumber  				= obj.typeNumber;
		this.parameter 					= obj.parameter;
		this.finishedComputation 		= obj.finishedComputation;
		this.parameter2 				= obj.parameter2;
	}
});