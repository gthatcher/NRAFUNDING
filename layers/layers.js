var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_NRAgrantrecipients_0 = new ol.format.GeoJSON();
var features_NRAgrantrecipients_0 = format_NRAgrantrecipients_0.readFeatures(json_NRAgrantrecipients_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NRAgrantrecipients_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NRAgrantrecipients_0.addFeatures(features_NRAgrantrecipients_0);var lyr_NRAgrantrecipients_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NRAgrantrecipients_0, 
                style: style_NRAgrantrecipients_0,
                title: '<img src="styles/legend/NRAgrantrecipients_0.png" /> NRA grant recipients '
            });

lyr_NRAgrantrecipients_0.setVisible(true);
var layersList = [baseLayer,lyr_NRAgrantrecipients_0];
lyr_NRAgrantrecipients_0.set('fieldAliases', {'year': 'year', 'org_name': 'org_name', 'address': 'address', 'city': 'city', 'state': 'state', 'zip': 'zip', 'irc_section': 'irc_section', 'grant_purpose': 'grant_purpose', 'cash_grant': 'cash_grant', 'non_cash_grant': 'non_cash_grant', 'total_grant': 'total_grant', 'county': 'county', 'fips': 'fips', 'urban_classification': 'urban_classification', 'school': 'school', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Accuracy Score': 'Accuracy Score', 'Accuracy Type': 'Accuracy Type', 'Number': 'Number', 'Street': 'Street', 'City_1': 'City_1', 'State_1': 'State_1', 'County_1': 'County_1', 'Zip_1': 'Zip_1', 'Country': 'Country', 'Source': 'Source', });
lyr_NRAgrantrecipients_0.set('fieldImages', {'year': 'TextEdit', 'org_name': 'TextEdit', 'address': 'Hidden', 'city': 'Hidden', 'state': 'Hidden', 'zip': 'Hidden', 'irc_section': 'Hidden', 'grant_purpose': 'TextEdit', 'cash_grant': 'TextEdit', 'non_cash_grant': 'TextEdit', 'total_grant': 'Hidden', 'county': 'Hidden', 'fips': 'Hidden', 'urban_classification': 'Hidden', 'school': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Accuracy Score': 'Hidden', 'Accuracy Type': 'Hidden', 'Number': 'Hidden', 'Street': 'Hidden', 'City_1': 'Hidden', 'State_1': 'Hidden', 'County_1': 'Hidden', 'Zip_1': 'Hidden', 'Country': 'Hidden', 'Source': 'Hidden', });
lyr_NRAgrantrecipients_0.set('fieldLabels', {'year': 'no label', 'org_name': 'no label', 'grant_purpose': 'header label', 'cash_grant': 'header label', 'non_cash_grant': 'header label', });
lyr_NRAgrantrecipients_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});