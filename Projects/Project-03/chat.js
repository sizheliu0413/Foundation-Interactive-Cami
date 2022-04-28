nlp = window.nlp_compromise;

var messages = [], 
    lastUserMessage = "",
    botMessage= "",
    botName = 'best bot',
    talking = true;

function chatbotResponse() {
    talking = true;
    text = "Yes.";
    
    if(lastUserMessage.toLowerCase().includes("hi") || lastUserMessage.toLowerCase().includes("hey") || lastUserMessage.toLowerCase().includes("hello")) {
        botMessage = "Hi, I'm here.";
    }
    if(lastUserMessage.toLowerCase().includes("for") && lastUserMessage.toLowerCase().includes("what")) {
        botMessage = "This is a space to reshape your body";
    }
    if(lastUserMessage.toLowerCase().includes("how")) {
        botMessage = "Just go ahead and click the figure on the left side ";
    }
    if(lastUserMessage.toLowerCase().includes("next")) {
        botMessage = "Then you will be able to make a choice!";
    }
    
}

function newEntry() {
  if (document.getElementById("chatbox").value != "") {
    lastUserMessage = document.getElementById("chatbox").value;
    document.getElementById("chatbox").value = "";
    messages.push(lastUserMessage);
    chatbotResponse();
    messages.push("<b>" + botName + ":</b> " + botMessage);
    Speech(botMessage);
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}
function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    speechSynthesis.speak(utterance);
  }
}
document.onkeypress = keyPress;
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
  }
}
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}