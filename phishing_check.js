chrome.storage.local.get('enabled', data => {
    if (data.enabled) {
        var url = window.location.hostname;

        //remove the 'www.' prefix - if exsits
        if(url.substring(0, 3) == "www"){
        url = url.substring(4);
        }

        //split the domain into array of strings and check each one for double letter ending
        var tokens = url.split(".");
        for(var i = 0; i < tokens.length; i++){
        var len = tokens[i].length;
        if(tokens[i].charAt(len - 2) == tokens[i].charAt(len - 1)){

            //dispatch message for alarm.js listener
            chrome.extension.sendMessage({action: "play"})
            
            alert("We noticed this part of the page URL ends with a double letter: "+
            tokens[i] +
            "\nPlease verify you entered the correct URL.")
            }
        }
    }
});