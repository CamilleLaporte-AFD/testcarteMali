var format_mli_admbnda_adm2_gov_ocha_itos = new ol.format.GeoJSON();
var features_mli_admbnda_adm2_gov_ocha_itos = format_mli_admbnda_adm2_gov_ocha_itos.readFeatures(geojson_mli_admbnda_adm2_gov_ocha_itos, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mli_admbnda_adm2_gov_ocha_itos = new ol.source.Vector();
jsonSource_mli_admbnda_adm2_gov_ocha_itos.addFeatures(features_mli_admbnda_adm2_gov_ocha_itos);var lyr_mli_admbnda_adm2_gov_ocha_itos = new ol.layer.Vector({
                source:jsonSource_mli_admbnda_adm2_gov_ocha_itos, 
                style: style_mli_admbnda_adm2_gov_ocha_itos,
                title: "mli_admbnda_adm2_gov_ocha_itos"
            });var format_projets_Mali_GPSFeuil1 = new ol.format.GeoJSON();
var features_projets_Mali_GPSFeuil1 = format_projets_Mali_GPSFeuil1.readFeatures(geojson_projets_Mali_GPSFeuil1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_projets_Mali_GPSFeuil1 = new ol.source.Vector();
jsonSource_projets_Mali_GPSFeuil1.addFeatures(features_projets_Mali_GPSFeuil1);var lyr_projets_Mali_GPSFeuil1 = new ol.layer.Vector({
                source:jsonSource_projets_Mali_GPSFeuil1, 
                style: style_projets_Mali_GPSFeuil1,
                title: "projets_Mali_GPS-Feuil1"
            });

lyr_mli_admbnda_adm2_gov_ocha_itos.setVisible(true);lyr_projets_Mali_GPSFeuil1.setVisible(true);
var layersList = [lyr_mli_admbnda_adm2_gov_ocha_itos,lyr_projets_Mali_GPSFeuil1];
lyr_mli_admbnda_adm2_gov_ocha_itos.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'admin0Name': 'admin0Name', 'admin0Pcod': 'admin0Pcod', 'admin1Name': 'admin1Name', 'admin1Pcod': 'admin1Pcod', 'admin2Name': 'admin2Name', 'admin2Pcod': 'admin2Pcod', 'admin2RefN': 'admin2RefN', 'admin2AltN': 'admin2AltN', 'admin2Al_1': 'admin2Al_1', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_projets_Mali_GPSFeuil1.set('fieldAliases', {'région': 'région', 'Cercle': 'Cercle', 'Commune': 'Commune', 'Villages / Sites': 'Villages / Sites', 'typologie action (CAD)': 'typologie action (CAD)', 'libellé action': 'libellé action', 'Code Projet ': 'Code Projet ', 'libellé projet': 'libellé projet', 'Estimation réalisation': 'Estimation réalisation', });
lyr_mli_admbnda_adm2_gov_ocha_itos.set('fieldImages', {'OBJECTID': 'TextEdit', 'admin0Name': 'TextEdit', 'admin0Pcod': 'TextEdit', 'admin1Name': 'TextEdit', 'admin1Pcod': 'TextEdit', 'admin2Name': 'TextEdit', 'admin2Pcod': 'TextEdit', 'admin2RefN': 'TextEdit', 'admin2AltN': 'TextEdit', 'admin2Al_1': 'TextEdit', 'date': 'TextEdit', 'validOn': 'TextEdit', 'validTo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_projets_Mali_GPSFeuil1.set('fieldImages', {'région': 'TextEdit', 'Cercle': 'TextEdit', 'Commune': 'TextEdit', 'Villages / Sites': 'TextEdit', 'typologie action (CAD)': 'TextEdit', 'libellé action': 'TextEdit', 'Code Projet ': 'TextEdit', 'libellé projet': 'TextEdit', 'Estimation réalisation': 'TextEdit', });
lyr_mli_admbnda_adm2_gov_ocha_itos.set('fieldLabels', {'OBJECTID': 'no label', 'admin0Name': 'no label', 'admin0Pcod': 'no label', 'admin1Name': 'no label', 'admin1Pcod': 'no label', 'admin2Name': 'no label', 'admin2Pcod': 'no label', 'admin2RefN': 'no label', 'admin2AltN': 'no label', 'admin2Al_1': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_projets_Mali_GPSFeuil1.set('fieldLabels', {'région': 'no label', 'Cercle': 'no label', 'Commune': 'no label', 'Villages / Sites': 'no label', 'typologie action (CAD)': 'no label', 'libellé action': 'no label', 'Code Projet ': 'no label', 'libellé projet': 'no label', 'Estimation réalisation': 'no label', });
lyr_projets_Mali_GPSFeuil1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});