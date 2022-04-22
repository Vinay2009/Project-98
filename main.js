var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
})
recognition.onresult = function(event){
    console.log(event);
    
    var Content = event.results[0] [0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    speak();
}

function take_snapshot()
{
    console.log(img_id)
    Webcam.snap(function(data_uri){
        if(img_id=='selfie1'){
            document.getElementById("selfie1").src = data_uri;
        }
        if(img_id=='selfie2'){
            document.getElementById("selfie2").src = data_uri;
        }
        if(img_id=='selfie3'){
            document.getElementById("selfie3").src = data_uri;
        }
    });
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        img_id="selfie1";
        speak_data = "taking your selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_snapshot();
        save();
    }, 5000);
    setTimeout(function()
    {
        img_id="selfie2";
        speak_data = "taking your selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_snapshot();
        save();
    }, 5000);
    setTimeout(function()
    {
        img_id="selfie3";
        take_snapshot();
        save();
    }, 5000);
    
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90,
});
camera = document.getElementById("camera");
