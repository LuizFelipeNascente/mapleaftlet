var map = L.map('map').setView([-16.681250430688017, -49.25615568115328], 15);

var Camada_Satelite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    subdomains:['mt0','mt1','mt2','mt3'],
/*Creditos*/ 	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'

});
Camada_Satelite.addTo(map);

//Camada de satelite do google

Satelite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
   maxZoom: 20,
   subdomains:['mt0','mt1','mt2','mt3']
 });
 Satelite.addTo(map);
 
//Camada de stret

openstreetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 /*Creditos*/   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});


//controle de camadas

var camadas = {

    "Satelite":Camada_Satelite,
    "StreetMap": openstreetmap,
    "Satelite Google":Satelite,
    
};



var marker = L.marker([-16.681250430688017, -49.25615568115328]).addTo(map)
    marker.bindPopup('Praça Cívica de Goiânia')
    marker.openPopup();

var marker1 = L.marker([-16.6605172657032, -49.25932338311144]).addTo(map)
    marker1.bindPopup('Rodoviária de Goiânia')
    

var marker2 = L.marker([-16.629036956608907, -49.21409550075123]).addTo(map)
    marker2.bindPopup('Aeroporto de Goiânia')
   

var cities = L.layerGroup([marker, marker1, marker2]);


var marker = {

    "1º Marcador":marker,
    "2º Marcador":marker1,
    "3º Marcador":marker2,
};

L.control.layers(camadas, marker).addTo(map);



