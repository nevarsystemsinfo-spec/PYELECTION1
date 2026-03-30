var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ACBOUNDARY_1 = new ol.format.GeoJSON();
var features_ACBOUNDARY_1 = format_ACBOUNDARY_1.readFeatures(json_ACBOUNDARY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACBOUNDARY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACBOUNDARY_1.addFeatures(features_ACBOUNDARY_1);
var lyr_ACBOUNDARY_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ACBOUNDARY_1, 
                style: style_ACBOUNDARY_1,
                popuplayertitle: 'AC BOUNDARY',
                interactive: true,
    title: 'AC BOUNDARY<br />\
    <img src="styles/legend/ACBOUNDARY_1_0.png" /> 1 (MANNADIPET)<br />\
    <img src="styles/legend/ACBOUNDARY_1_1.png" /> 10 (KAMARAJ NAGAR)<br />\
    <img src="styles/legend/ACBOUNDARY_1_2.png" /> 11 (LAWSPET)<br />\
    <img src="styles/legend/ACBOUNDARY_1_3.png" /> 12 (KALAPET)<br />\
    <img src="styles/legend/ACBOUNDARY_1_4.png" /> 13 (MUTHIALPET)<br />\
    <img src="styles/legend/ACBOUNDARY_1_5.png" /> 14 (RAJ BHAVAN)<br />\
    <img src="styles/legend/ACBOUNDARY_1_6.png" /> 15 (OUPALAM)<br />\
    <img src="styles/legend/ACBOUNDARY_1_7.png" /> 16 (ORLEAMPETH)<br />\
    <img src="styles/legend/ACBOUNDARY_1_8.png" /> 17 (NELLITHOPE)<br />\
    <img src="styles/legend/ACBOUNDARY_1_9.png" /> 18 (MUDALIARPET)<br />\
    <img src="styles/legend/ACBOUNDARY_1_10.png" /> 19 (ARIANKUPPAM)<br />\
    <img src="styles/legend/ACBOUNDARY_1_11.png" /> 2 (THIRUBHUVANAI)<br />\
    <img src="styles/legend/ACBOUNDARY_1_12.png" /> 20 (MANAVELY)<br />\
    <img src="styles/legend/ACBOUNDARY_1_13.png" /> 21 (EMBALAM)<br />\
    <img src="styles/legend/ACBOUNDARY_1_14.png" /> 22 (NETTAPAKKAM)<br />\
    <img src="styles/legend/ACBOUNDARY_1_15.png" /> 23 (BAHOUR)<br />\
    <img src="styles/legend/ACBOUNDARY_1_16.png" /> 24 (NEDUNGADU)<br />\
    <img src="styles/legend/ACBOUNDARY_1_17.png" /> 25 (THIRUNALLAR)<br />\
    <img src="styles/legend/ACBOUNDARY_1_18.png" /> 26 (KARAIKAL NORTH)<br />\
    <img src="styles/legend/ACBOUNDARY_1_19.png" /> 27 (KARAIKAL SOUTH)<br />\
    <img src="styles/legend/ACBOUNDARY_1_20.png" /> 28 (NERAVY-T.R.PATTINAM)<br />\
    <img src="styles/legend/ACBOUNDARY_1_21.png" /> 29 (MAHE)<br />\
    <img src="styles/legend/ACBOUNDARY_1_22.png" /> 3 (OUSSUDU)<br />\
    <img src="styles/legend/ACBOUNDARY_1_23.png" /> 30 (YANAM)<br />\
    <img src="styles/legend/ACBOUNDARY_1_24.png" /> 4 (MANGALAM)<br />\
    <img src="styles/legend/ACBOUNDARY_1_25.png" /> 5 (VILLIANUR)<br />\
    <img src="styles/legend/ACBOUNDARY_1_26.png" /> 6 (OZHUKARAI)<br />\
    <img src="styles/legend/ACBOUNDARY_1_27.png" /> 7 (KADIRGAMAM)<br />\
    <img src="styles/legend/ACBOUNDARY_1_28.png" /> 8 (INDIRA NAGAR)<br />\
    <img src="styles/legend/ACBOUNDARY_1_29.png" /> 9 (THATTANCHAVADY)<br />' });
var format_29DroneBuffer_2 = new ol.format.GeoJSON();
var features_29DroneBuffer_2 = format_29DroneBuffer_2.readFeatures(json_29DroneBuffer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_29DroneBuffer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_29DroneBuffer_2.addFeatures(features_29DroneBuffer_2);
var lyr_29DroneBuffer_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_29DroneBuffer_2, 
                style: style_29DroneBuffer_2,
                popuplayertitle: '29 Drone Buffer',
                interactive: true,
    title: '29 Drone Buffer<br />\
    <img src="styles/legend/29DroneBuffer_2_0.png" /> Ariyankuppam<br />\
    <img src="styles/legend/29DroneBuffer_2_1.png" /> Bahour<br />\
    <img src="styles/legend/29DroneBuffer_2_2.png" /> Embalam<br />\
    <img src="styles/legend/29DroneBuffer_2_3.png" /> Indira Nagar<br />\
    <img src="styles/legend/29DroneBuffer_2_4.png" /> Kadirkamam<br />\
    <img src="styles/legend/29DroneBuffer_2_5.png" /> Kalapet<br />\
    <img src="styles/legend/29DroneBuffer_2_6.png" /> Kamaraj Nagar<br />\
    <img src="styles/legend/29DroneBuffer_2_7.png" /> Karaikal North<br />\
    <img src="styles/legend/29DroneBuffer_2_8.png" /> Karaikal South<br />\
    <img src="styles/legend/29DroneBuffer_2_9.png" /> Lawspet<br />\
    <img src="styles/legend/29DroneBuffer_2_10.png" /> Mahe<br />\
    <img src="styles/legend/29DroneBuffer_2_11.png" /> Manavely<br />\
    <img src="styles/legend/29DroneBuffer_2_12.png" /> Mangalam<br />\
    <img src="styles/legend/29DroneBuffer_2_13.png" /> Mannadipet<br />\
    <img src="styles/legend/29DroneBuffer_2_14.png" /> Mudaliarpet<br />\
    <img src="styles/legend/29DroneBuffer_2_15.png" /> Muthialpet<br />\
    <img src="styles/legend/29DroneBuffer_2_16.png" /> Nedungadu<br />\
    <img src="styles/legend/29DroneBuffer_2_17.png" /> Nellithope<br />\
    <img src="styles/legend/29DroneBuffer_2_18.png" /> Neravy-TR Pattinam<br />\
    <img src="styles/legend/29DroneBuffer_2_19.png" /> Nettapakkam<br />\
    <img src="styles/legend/29DroneBuffer_2_20.png" /> Orleanpet<br />\
    <img src="styles/legend/29DroneBuffer_2_21.png" /> Ossudou<br />\
    <img src="styles/legend/29DroneBuffer_2_22.png" /> Oulgaret<br />\
    <img src="styles/legend/29DroneBuffer_2_23.png" /> Ouppalam<br />\
    <img src="styles/legend/29DroneBuffer_2_24.png" /> Rajbhavan<br />\
    <img src="styles/legend/29DroneBuffer_2_25.png" /> Thattanchavady<br />\
    <img src="styles/legend/29DroneBuffer_2_26.png" /> THIRUKANUR<br />\
    <img src="styles/legend/29DroneBuffer_2_27.png" /> Thirunallar<br />\
    <img src="styles/legend/29DroneBuffer_2_28.png" /> Villianur<br />\
    <img src="styles/legend/29DroneBuffer_2_29.png" /> Yanam<br />' });
var format_29DronePoint_3 = new ol.format.GeoJSON();
var features_29DronePoint_3 = format_29DronePoint_3.readFeatures(json_29DronePoint_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_29DronePoint_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_29DronePoint_3.addFeatures(features_29DronePoint_3);
var lyr_29DronePoint_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_29DronePoint_3, 
                style: style_29DronePoint_3,
                popuplayertitle: '29 Drone Point',
                interactive: true,
    title: '29 Drone Point<br />\
    <img src="styles/legend/29DronePoint_3_0.png" /> Ariyankuppam<br />\
    <img src="styles/legend/29DronePoint_3_1.png" /> Bahour<br />\
    <img src="styles/legend/29DronePoint_3_2.png" /> Indira Nagar<br />\
    <img src="styles/legend/29DronePoint_3_3.png" /> Kadirkamam<br />\
    <img src="styles/legend/29DronePoint_3_4.png" /> Kalapet<br />\
    <img src="styles/legend/29DronePoint_3_5.png" /> Kamaraj Nagar<br />\
    <img src="styles/legend/29DronePoint_3_6.png" /> Karaikal North<br />\
    <img src="styles/legend/29DronePoint_3_7.png" /> Karaikal South<br />\
    <img src="styles/legend/29DronePoint_3_8.png" /> Lawspet<br />\
    <img src="styles/legend/29DronePoint_3_9.png" /> Mahe<br />\
    <img src="styles/legend/29DronePoint_3_10.png" /> Manavely<br />\
    <img src="styles/legend/29DronePoint_3_11.png" /> Mangalam<br />\
    <img src="styles/legend/29DronePoint_3_12.png" /> Mannadipet<br />\
    <img src="styles/legend/29DronePoint_3_13.png" /> Mudaliarpet<br />\
    <img src="styles/legend/29DronePoint_3_14.png" /> Muthialpet<br />\
    <img src="styles/legend/29DronePoint_3_15.png" /> Nedungadu<br />\
    <img src="styles/legend/29DronePoint_3_16.png" /> Nellithope<br />\
    <img src="styles/legend/29DronePoint_3_17.png" /> Neravy-TR Pattinam<br />\
    <img src="styles/legend/29DronePoint_3_18.png" /> Nettapakkam<br />\
    <img src="styles/legend/29DronePoint_3_19.png" /> Orleanpet<br />\
    <img src="styles/legend/29DronePoint_3_20.png" /> Ossudou<br />\
    <img src="styles/legend/29DronePoint_3_21.png" /> Oulgaret<br />\
    <img src="styles/legend/29DronePoint_3_22.png" /> Ouppalam<br />\
    <img src="styles/legend/29DronePoint_3_23.png" /> Rajbhavan<br />\
    <img src="styles/legend/29DronePoint_3_24.png" /> Thattanchavady<br />\
    <img src="styles/legend/29DronePoint_3_25.png" /> Thirukanur<br />\
    <img src="styles/legend/29DronePoint_3_26.png" /> Thirunallar<br />\
    <img src="styles/legend/29DronePoint_3_27.png" /> Villianur<br />' });
var group_ELECTIONDRONE_29 = new ol.layer.Group({
                                layers: [lyr_29DroneBuffer_2,lyr_29DronePoint_3,],
                                fold: 'open',
                                title: 'ELECTION DRONE_29'});

lyr_GoogleSatellite_0.setVisible(true);lyr_ACBOUNDARY_1.setVisible(true);lyr_29DroneBuffer_2.setVisible(true);lyr_29DronePoint_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ACBOUNDARY_1,group_ELECTIONDRONE_29];
lyr_ACBOUNDARY_1.set('fieldAliases', {'AC No and': 'AC No and', });
lyr_29DroneBuffer_2.set('fieldAliases', {'Name': 'Name', 'Team': 'Team', 'Adhar Card': 'Adhar Card', 'AC Name': 'AC Name', 'Latitude ': 'Latitude ', 'Longitude': 'Longitude', 'Address': 'Address', 'Bike': 'Bike', 'Room': 'Room', 'Room Location': 'Room Location', 'District': 'District', 'Laptop': 'Laptop', 'Mobile Number': 'Mobile Number', 'Drone Type': 'Drone Type', 'Controller': 'Controller', });
lyr_29DronePoint_3.set('fieldAliases', {'Name': 'Name', 'Team': 'Team', 'Adhar Card': 'Adhar Card', 'AC Location': 'AC Location', 'Address': 'Address', 'latitude ': 'latitude ', 'longitude': 'longitude', 'Location Point': 'Location Point', 'Bike': 'Bike', 'Room Number': 'Room Number', 'Room Location': 'Room Location', 'District': 'District', 'Laptop': 'Laptop', 'Phone Number': 'Phone Number', 'Drone Type': 'Drone Type', 'Controller': 'Controller', });
lyr_ACBOUNDARY_1.set('fieldImages', {'AC No and': 'TextEdit', });
lyr_29DroneBuffer_2.set('fieldImages', {'Name': 'TextEdit', 'Team': 'TextEdit', 'Adhar Card': 'TextEdit', 'AC Name': 'TextEdit', 'Latitude ': 'TextEdit', 'Longitude': 'TextEdit', 'Address': 'TextEdit', 'Bike': 'TextEdit', 'Room': 'TextEdit', 'Room Location': 'TextEdit', 'District': 'TextEdit', 'Laptop': 'TextEdit', 'Mobile Number': 'TextEdit', 'Drone Type': 'TextEdit', 'Controller': 'TextEdit', });
lyr_29DronePoint_3.set('fieldImages', {'Name': 'TextEdit', 'Team': 'TextEdit', 'Adhar Card': 'TextEdit', 'AC Location': 'TextEdit', 'Address': 'TextEdit', 'latitude ': 'TextEdit', 'longitude': 'TextEdit', 'Location Point': 'TextEdit', 'Bike': 'TextEdit', 'Room Number': 'TextEdit', 'Room Location': 'TextEdit', 'District': 'TextEdit', 'Laptop': 'TextEdit', 'Phone Number': 'TextEdit', 'Drone Type': 'TextEdit', 'Controller': 'TextEdit', });
lyr_ACBOUNDARY_1.set('fieldLabels', {'AC No and': 'inline label - visible with data', });
lyr_29DroneBuffer_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'Team': 'inline label - visible with data', 'Adhar Card': 'inline label - visible with data', 'AC Name': 'inline label - visible with data', 'Latitude ': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Bike': 'inline label - visible with data', 'Room': 'inline label - visible with data', 'Room Location': 'inline label - visible with data', 'District': 'inline label - visible with data', 'Laptop': 'inline label - visible with data', 'Mobile Number': 'inline label - visible with data', 'Drone Type': 'inline label - visible with data', 'Controller': 'inline label - visible with data', });
lyr_29DronePoint_3.set('fieldLabels', {'Name': 'inline label - visible with data', 'Team': 'inline label - visible with data', 'Adhar Card': 'inline label - visible with data', 'AC Location': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'latitude ': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'Location Point': 'inline label - visible with data', 'Bike': 'inline label - visible with data', 'Room Number': 'inline label - visible with data', 'Room Location': 'inline label - visible with data', 'District': 'inline label - visible with data', 'Laptop': 'inline label - visible with data', 'Phone Number': 'inline label - visible with data', 'Drone Type': 'inline label - visible with data', 'Controller': 'inline label - visible with data', });
lyr_29DronePoint_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});