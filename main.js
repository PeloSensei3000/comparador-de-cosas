Webcam.set({
    width: 350, 
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function TomarFoto(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="fotocapturada" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DX1cHqyLs/model.json' , modelLoaded);
function modelLoaded(){
    console.log('Modelo Cargado');
}
function Check(){
    img=document.getElementById('fotocapturada');
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("ResultadoNombreObjeto").innerHTML=results[0].label;
        document.getElementById("ObjetoPrecision").innerHTML=results[0].confidence.toFixed(3);
    }
}