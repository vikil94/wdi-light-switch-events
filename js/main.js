document.addEventListener('DOMContentLoaded', function() {


    const lightSwitch = document.getElementsByTagName('button')[0];
    lightSwitch.addEventListener('click', function() {
        alert('Light has been triggered');

        var text = document.getElementsByTagName('h1')[0]
        var body = document.getElementsByTagName('body')[0]


        if (body.classList.contains('light')) {
            body.classList.remove('light');
            body.classList.add('dark');
            text.innerText = "Hey! Who turned off the lights?";
            lightSwitch.classList.remove('on');
            lightSwitch.classList.add('off');
        } else {
            body.classList.remove('dark');
            body.classList.add('light');
            text.innerText = "It's so bright in here!";
            lightSwitch.classList.remove('off');
            lightSwitch.classList.add('on');
        }





    })




})