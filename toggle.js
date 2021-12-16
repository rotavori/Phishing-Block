var enabled = false; //disabled by default
var myButton = document.getElementById('toggle_button');

chrome.storage.local.get('enabled', data => {
    enabled = data.enabled;
    myButton.textContent = enabled ? 'Disable' : 'Enable';
});

//when clicking the enable-disable button, change the appropriate value and play the corresponding audio.
myButton.onclick = () => {
    enabled = !enabled;
    if(enabled){
        myButton.textContent = 'Disable';
        var myAudio = new Audio(chrome.runtime.getURL("on_sound.mp3"));
        myAudio.loop = false;
        myAudio.play();
    }
    else{
        myButton.textContent = 'Enable';
        var myAudio = new Audio(chrome.runtime.getURL("off_sound.mp3"));
        myAudio.loop = false;
        myAudio.play();
    }
    chrome.storage.local.set({enabled:enabled});
};