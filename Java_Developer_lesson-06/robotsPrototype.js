'use strict'

function Robot(){
	var self = this;
	var speech = '';	
}

Robot.prototype.work = function() {
	console.log(this.speech);
}

Robot.prototype.setSpeech = function(value) {
	this.speech = value;
}

function CoffeRobot(){
}

CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constructor = CoffeRobot;

function RobotDancer(){
}

RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;

function RobotCoocker(){
}

RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constructor = RobotCoocker;

var BD1 = new CoffeRobot();
BD1.setSpeech('I am CoffeRobot - I just make coffee');
var BD2 = new RobotDancer();
BD2.setSpeech('I am RobotDancer - I just dance');
var BD3 = new RobotCoocker();
BD3.setSpeech('I am RobotCoocker - I just cook');
var BD4 = new Robot();
BD4.setSpeech('I am Robot - I just work');

var arrayOfRobots = [ BD1, BD2, BD3, BD4 ];

for (var i = 0; i < arrayOfRobots.length; i++) {
	arrayOfRobots[i].work();
}