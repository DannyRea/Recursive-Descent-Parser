/* Recursive Descent Parser
Author: Daniel Rea
*/

var parser = function () {
	var input = document.getElementById("input");
	var output = document.getElementById("output");
	var inputValue = input.value;
	inputValue = inputValue.trim();
	var token = inputValue.split("");
	exp(token);
	
	if(token[0] != "$" || token[1] != null ) {
		return invalid();
	}
};

var exp = function(token) {/* Searches for a "+" or "-" token in EXP portion of the grammar. If found, continue to TERM.*/
	term(token);
	while(token[0] =="+" || token[0] =="-"){
		switch(token[0]){
			case"+": { 
				token = match("+",token);
				term(token);
				break;
			}
			case"-": {
				token = match("-",token);
				term(token);
				break;
			}
		}
	}
};

var term  = function(token){ /* Searches for "*" or "/" token in string. If found continue to FACTOR. */
	factor(token);
	while(token[0] == "*" || token[0] =="/"){
		switch(token[0]){
			case"*": {
				token = match("*",token);
				factor(token);
				break;
			}
			case"/":{
				token = match("/",token);
				factor(token);
				break;
			}
		}
	}
};

var factor = function(token){ /* Function scans for "(". If found, matches and continues through string until string is
								fully parsed. If string is valid in the language, returns "String is valid". Otherwise, returns	
								"String is invalid".*/
 switch(token[0]) {
        case "(": {
            token = match("(", token);
            exp(token);
            token = match(")", token);
            break;
        }
        case "0": token = match("0", token); break;
        case "1": token = match("1", token); break;
        case "2": token = match("2", token); break;
        case "3": token = match("3", token); break;
        default: invalid();
	
	}
};
		
var match = function(c, token){ /* Token matching based on given expression */
	if (token[0] == c){
			return nextToken(token);
	}
	else {
		invalid();
	}
};

var nextToken = function(token){ /* Function is used to check whether a terminator token is used.
									Required for all strings. If string is valid but missing terminator, then
									returns invalid. */
	token.shift();
	if(token[0] == "$"){
		return valid();
	}
	return token;
};

var invalid = function() {
    var input = document.getElementById("input");
    var output = document.getElementById("output");
    var inputValue = input.value;
    output.innerHTML = inputValue + " is invalid";
    output.style.color = "red";
    exit(0);
};

var valid = function() {
    var input = document.getElementById("input");
    var output = document.getElementById("output");
    var inputValue = input.value;
    output.innerHTML = inputValue + " is valid";
    output.style.color = "green";
    exit(0);
}

	
	
	
	