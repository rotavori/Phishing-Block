chrome.extension.onMessage.addListener(function(request, sender, sendResponse){
    if(request.action == "play"){
        var myAudio = new Audio(chrome.runtime.getURL("alert.mp3"));
        myAudio.loop = false;
        myAudio.play();
    }
})