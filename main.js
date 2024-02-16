function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DyVlysjGZ/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}


function gotResults(error,results){
if(error){
    console.log(error);
} else{

    document.getElementById("hear").innerHTML='I can hear-'+results[0].label;

if(results[0].label=="lion"){
    img=document.getElementById("img").src="download(33).jpg";
}else if (results[0].label=="cat"){
    img=document.getElementById("img").src="download(1).webp";
}else if (results[0].label=="dog"){
    img=document.getElementById("img").src="download.webp";
}
}
}