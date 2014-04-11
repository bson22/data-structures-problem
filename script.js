var users_joined = [];
var chatrooms = {'west_side':{}, 'east_side':{}};

window.new_user_joined = function(name) {
	users_joined.unshift(name);
}

//this function is only called once by the server every five seconds
window.assign_to_chatroom = function() {
	var addUser = users_joined.pop();
	//add this element for every user assigned to a chatroom: <p><button type="button" class="btn btn-warning btn-xs">[[name]]</button></p>
	var eastUsers = Object.keys(chatrooms.east_side).length; //returns the length of the array chatrooms = [sarah:, saba:]  chatrooms.length = 2
	var westUsers = Object.keys(chatrooms.west_side).length;
	if(eastUsers > westUsers) {
		//if my eastUsers has divs lengths larger than west side users move names to the westside  (chat-1)
		if(!chatrooms.west_side.hasOwnProperty(addUser)) {  //if it doesn't have the property, add the propperty and html
			chatrooms.west_side[addUser] = addUser;  //add sarah: "sarah"
			$(".chat-1 > .users").append('<p><button type="button" class="btn btn-warning btn-xs">' + addUser + '</button></p>');
		}

	}
	else {
		if(!chatrooms.east_side.hasOwnProperty(addUser)) {
			chatrooms.east_side[addUser] = addUser;
			$(".chat-2 > .users").append('<p><button type="button" class="btn btn-warning btn-xs">' + addUser + '</button></p>');
		}
	}


    console.log("assigning users to rooms");
    console.log(chatrooms.west_side);
    console.log(chatrooms.east_side);
}

