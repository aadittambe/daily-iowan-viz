var mymap = L.map('mapid').setView([41.6608501,-91.5305475], 14);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 150,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWFkaXR0YW1iZSIsImEiOiJja2dndWpvOGgwNHZwMzNwMjljOXVldGQ1In0.YpMQ60BId8KySt-vLFbaRg'
}).addTo(mymap);


let csv = 'tracker.csv'

let data = dl.csv(csv)


data.forEach( row => {
    console.log("!")
    let marker = L.circleMarker([row.Lat,row.Lon], {
        color: row.Color,
        fillColor: row.Color,
        fillOpacity: 0.9,
        radius: 5
    }).addTo(mymap)

    let popup = '<b>' + row.Candidate + '</b>' + '<br>' + row.Date +
        '<br>' + (row.TripDescription || ' ') +
        '<br><a href="' + row.URL + '" target="__blank">Read all about it.</a>'


    
    //+'<br>' + (row.TripDescription || '')
    

    marker.bindPopup(popup)

})




console.log(data)
