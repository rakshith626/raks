
respond = function() {
	var user_text = document.getElementById('chat').value;       
	var reply = bot.replyAsync("local-user", user_text, this, function(error, reply){
		add_response(user_text, reply);
	});
	document.getElementById('chat').value = "";

}

add_response = function(user_text, reply) {
          var response_area = document.getElementById('bot_chat');
          response_area.innerHTML += 'USER : ' + user_text + '<br>';
          response_area.innerHTML += 'BOT : ' + reply + '<br>';
}



var bot = new RiveScript();
bot.loadFile([
        "brain/begin.rive",
        "brain/clients.rive"
        ], loading_done, loading_error);
      
    
    
checkenter = function(e) {
        if (e.keyCode == 13) {
            respond();
            
            return false;
        }
    
}


    
function loading_done (batch_num) {
    console.log("Batch #" + batch_num + " has finished loading!");
    bot.sortReplies();
}
    
function loading_error (error) {
    console.log("Error when loading files: " + error);
}
    
        
    
