var mymap = L.map('mapid').setView([41.6611, -91.5302], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWFkaXR0YW1iZSIsImEiOiJjanNkcGMxbmowMG5lNDRydDd3Mm5taHVjIn0.fP9wK52zPEVxVfVau5bQOQ'
}).addTo(mymap);


let csv = 'https://docs.google.com/spreadsheets/d/1fC_leedjjY8GuVErCSSe0uB9s9FpeOuQvyv2DxqQ3PE/export?format=csv&id=1fC_leedjjY8GuVErCSSe0uB9s9FpeOuQvyv2DxqQ3PE&gid=0'

let data = dl.csv(csv)


data.forEach( row => {
    console.log("!")
    let marker = L.circleMarker([row.Lat,row.Lon], {
        color: row.Color,
        fillColor: row.Color,
        fillOpacity: 0.5,
        radius: 10
    }).addTo(mymap)
    let popup = '<b>' + row.Candidate + '</b>' + '<br>' + row.Date +
        '<br>' + (row.TripDescription || ' ') +
        '<br><a href="' + row.URL + '" target="__blank">Read all about it.</a>'


    
    //+'<br>' + (row.TripDescription || '')
    

    marker.bindPopup(popup)

})



console.log(data)
