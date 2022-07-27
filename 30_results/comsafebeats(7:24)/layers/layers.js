ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-78.970157, 35.937066, -78.803572, 36.125947]);
var wms_layers = [];


        var lyr_Wikimedialabelledlayer_0 = new ol.layer.Tile({
            'title': 'Wikimedia labelled layer',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png'
            })
        });
var format_PoliceBeats_1 = new ol.format.GeoJSON();
var features_PoliceBeats_1 = format_PoliceBeats_1.readFeatures(json_PoliceBeats_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PoliceBeats_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoliceBeats_1.addFeatures(features_PoliceBeats_1);
var lyr_PoliceBeats_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoliceBeats_1, 
                style: style_PoliceBeats_1,
                interactive: true,
                title: '<img src="styles/legend/PoliceBeats_1.png" /> Police Beats'
            });
var format_Trespass_2 = new ol.format.GeoJSON();
var features_Trespass_2 = format_Trespass_2.readFeatures(json_Trespass_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Trespass_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trespass_2.addFeatures(features_Trespass_2);
var lyr_Trespass_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trespass_2, 
                style: style_Trespass_2,
                interactive: true,
                title: '<img src="styles/legend/Trespass_2.png" /> Trespass'
            });
var format_WelfareCheck_3 = new ol.format.GeoJSON();
var features_WelfareCheck_3 = format_WelfareCheck_3.readFeatures(json_WelfareCheck_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WelfareCheck_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WelfareCheck_3.addFeatures(features_WelfareCheck_3);
var lyr_WelfareCheck_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WelfareCheck_3, 
                style: style_WelfareCheck_3,
                interactive: true,
                title: '<img src="styles/legend/WelfareCheck_3.png" /> Welfare Check'
            });
var format_SuicideThreat_4 = new ol.format.GeoJSON();
var features_SuicideThreat_4 = format_SuicideThreat_4.readFeatures(json_SuicideThreat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SuicideThreat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuicideThreat_4.addFeatures(features_SuicideThreat_4);
var lyr_SuicideThreat_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SuicideThreat_4, 
                style: style_SuicideThreat_4,
                interactive: true,
                title: '<img src="styles/legend/SuicideThreat_4.png" /> Suicide Threat'
            });
var format_PanhandelingorNuisance_5 = new ol.format.GeoJSON();
var features_PanhandelingorNuisance_5 = format_PanhandelingorNuisance_5.readFeatures(json_PanhandelingorNuisance_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PanhandelingorNuisance_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PanhandelingorNuisance_5.addFeatures(features_PanhandelingorNuisance_5);
var lyr_PanhandelingorNuisance_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PanhandelingorNuisance_5, 
                style: style_PanhandelingorNuisance_5,
                interactive: true,
                title: '<img src="styles/legend/PanhandelingorNuisance_5.png" /> Panhandeling or Nuisance'
            });
var format_IntoxicatedPerson_6 = new ol.format.GeoJSON();
var features_IntoxicatedPerson_6 = format_IntoxicatedPerson_6.readFeatures(json_IntoxicatedPerson_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IntoxicatedPerson_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IntoxicatedPerson_6.addFeatures(features_IntoxicatedPerson_6);
var lyr_IntoxicatedPerson_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IntoxicatedPerson_6, 
                style: style_IntoxicatedPerson_6,
                interactive: true,
                title: '<img src="styles/legend/IntoxicatedPerson_6.png" /> Intoxicated Person'
            });
var format_Crisis_7 = new ol.format.GeoJSON();
var features_Crisis_7 = format_Crisis_7.readFeatures(json_Crisis_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Crisis_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Crisis_7.addFeatures(features_Crisis_7);
var lyr_Crisis_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Crisis_7, 
                style: style_Crisis_7,
                interactive: true,
                title: '<img src="styles/legend/Crisis_7.png" /> Crisis'
            });

lyr_Wikimedialabelledlayer_0.setVisible(true);lyr_PoliceBeats_1.setVisible(true);lyr_Trespass_2.setVisible(true);lyr_WelfareCheck_3.setVisible(true);lyr_SuicideThreat_4.setVisible(true);lyr_PanhandelingorNuisance_5.setVisible(true);lyr_IntoxicatedPerson_6.setVisible(true);lyr_Crisis_7.setVisible(true);
var layersList = [lyr_Wikimedialabelledlayer_0,lyr_PoliceBeats_1,lyr_Trespass_2,lyr_WelfareCheck_3,lyr_SuicideThreat_4,lyr_PanhandelingorNuisance_5,lyr_IntoxicatedPerson_6,lyr_Crisis_7];
lyr_PoliceBeats_1.set('fieldAliases', {'LAWBEAT': 'LAWBEAT', 'OBJECTID': 'OBJECTID', 'PERIMETER': 'PERIMETER', 'STATUS': 'STATUS', 'CONTIGUOUS': 'CONTIGUOUS', 'LAWDIST': 'LAWDIST', 'CAD': 'CAD', 'GIS_DataA1': 'GIS_DataA1', 'ShapeSTAre': 'ShapeSTAre', 'ShapeSTLen': 'ShapeSTLen', 'LBeat': 'LBeat', 'id': 'id', });
lyr_Trespass_2.set('fieldAliases', {'Event Numb': 'Event Numb', 'Case Numbe': 'Case Numbe', 'Call Date': 'Call Date', 'Call Time': 'Call Time', 'Source': 'Source', 'Priority': 'Priority', 'Nature': 'Nature', 'Address': 'Address', 'X': 'X', 'Y': 'Y', 'District': 'District', 'Beat': 'Beat', 'Dispositio': 'Dispositio', 'Cancelled': 'Cancelled', 'CallsBeat': 'CallsBeat', });
lyr_WelfareCheck_3.set('fieldAliases', {'Event Numb': 'Event Numb', 'Case Numbe': 'Case Numbe', 'Call Date': 'Call Date', 'Call Time': 'Call Time', 'Source': 'Source', 'Priority': 'Priority', 'Nature': 'Nature', 'Address': 'Address', 'X': 'X', 'Y': 'Y', 'District': 'District', 'Beat': 'Beat', 'Dispositio': 'Dispositio', 'Cancelled': 'Cancelled', 'CallsBeat': 'CallsBeat', });
lyr_SuicideThreat_4.set('fieldAliases', {'Event Numb': 'Event Numb', 'Case Numbe': 'Case Numbe', 'Call Date': 'Call Date', 'Call Time': 'Call Time', 'Source': 'Source', 'Priority': 'Priority', 'Nature': 'Nature', 'Address': 'Address', 'X': 'X', 'Y': 'Y', 'District': 'District', 'Beat': 'Beat', 'Dispositio': 'Dispositio', 'Cancelled': 'Cancelled', 'CallsBeat': 'CallsBeat', });
lyr_PanhandelingorNuisance_5.set('fieldAliases', {'Event Numb': 'Event Numb', 'Case Numbe': 'Case Numbe', 'Call Date': 'Call Date', 'Call Time': 'Call Time', 'Source': 'Source', 'Priority': 'Priority', 'Nature': 'Nature', 'Address': 'Address', 'X': 'X', 'Y': 'Y', 'District': 'District', 'Beat': 'Beat', 'Dispositio': 'Dispositio', 'Cancelled': 'Cancelled', 'CallsBeat': 'CallsBeat', });
lyr_IntoxicatedPerson_6.set('fieldAliases', {'Event Numb': 'Event Numb', 'Case Numbe': 'Case Numbe', 'Call Date': 'Call Date', 'Call Time': 'Call Time', 'Source': 'Source', 'Priority': 'Priority', 'Nature': 'Nature', 'Address': 'Address', 'X': 'X', 'Y': 'Y', 'District': 'District', 'Beat': 'Beat', 'Dispositio': 'Dispositio', 'Cancelled': 'Cancelled', 'CallsBeat': 'CallsBeat', });
lyr_Crisis_7.set('fieldAliases', {'Event Numb': 'Event Numb', 'Case Numbe': 'Case Numbe', 'Call Date': 'Call Date', 'Call Time': 'Call Time', 'Source': 'Source', 'Priority': 'Priority', 'Nature': 'Nature', 'Address': 'Address', 'X': 'X', 'Y': 'Y', 'District': 'District', 'Beat': 'Beat', 'Dispositio': 'Dispositio', 'Cancelled': 'Cancelled', 'CallsBeat': 'CallsBeat', });
lyr_PoliceBeats_1.set('fieldImages', {'LAWBEAT': 'TextEdit', 'OBJECTID': 'Hidden', 'PERIMETER': 'Hidden', 'STATUS': 'Hidden', 'CONTIGUOUS': 'Hidden', 'LAWDIST': 'Hidden', 'CAD': 'Hidden', 'GIS_DataA1': 'Hidden', 'ShapeSTAre': 'Hidden', 'ShapeSTLen': 'Hidden', 'LBeat': 'Hidden', 'id': 'Hidden', });
lyr_Trespass_2.set('fieldImages', {'Event Numb': 'Hidden', 'Case Numbe': 'Hidden', 'Call Date': 'TextEdit', 'Call Time': 'TextEdit', 'Source': 'Hidden', 'Priority': 'TextEdit', 'Nature': 'TextEdit', 'Address': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'District': 'Hidden', 'Beat': 'TextEdit', 'Dispositio': 'Hidden', 'Cancelled': 'Hidden', 'CallsBeat': '', });
lyr_WelfareCheck_3.set('fieldImages', {'Event Numb': 'Hidden', 'Case Numbe': 'Hidden', 'Call Date': 'TextEdit', 'Call Time': 'TextEdit', 'Source': 'Hidden', 'Priority': 'TextEdit', 'Nature': 'TextEdit', 'Address': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'District': 'Hidden', 'Beat': 'TextEdit', 'Dispositio': 'Hidden', 'Cancelled': 'Hidden', 'CallsBeat': '', });
lyr_SuicideThreat_4.set('fieldImages', {'Event Numb': 'Hidden', 'Case Numbe': 'Hidden', 'Call Date': 'TextEdit', 'Call Time': 'TextEdit', 'Source': 'Hidden', 'Priority': 'TextEdit', 'Nature': 'TextEdit', 'Address': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'District': 'Hidden', 'Beat': 'TextEdit', 'Dispositio': 'Hidden', 'Cancelled': 'Hidden', 'CallsBeat': '', });
lyr_PanhandelingorNuisance_5.set('fieldImages', {'Event Numb': 'Hidden', 'Case Numbe': 'Hidden', 'Call Date': 'TextEdit', 'Call Time': 'TextEdit', 'Source': 'Hidden', 'Priority': 'TextEdit', 'Nature': 'TextEdit', 'Address': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'District': 'Hidden', 'Beat': 'TextEdit', 'Dispositio': 'Hidden', 'Cancelled': 'Hidden', 'CallsBeat': '', });
lyr_IntoxicatedPerson_6.set('fieldImages', {'Event Numb': 'Hidden', 'Case Numbe': 'Hidden', 'Call Date': 'TextEdit', 'Call Time': 'TextEdit', 'Source': 'Hidden', 'Priority': 'TextEdit', 'Nature': 'TextEdit', 'Address': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'District': 'Hidden', 'Beat': 'TextEdit', 'Dispositio': 'Hidden', 'Cancelled': 'Hidden', 'CallsBeat': '', });
lyr_Crisis_7.set('fieldImages', {'Event Numb': 'Hidden', 'Case Numbe': 'Hidden', 'Call Date': 'TextEdit', 'Call Time': 'TextEdit', 'Source': 'Hidden', 'Priority': 'TextEdit', 'Nature': 'TextEdit', 'Address': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'District': 'Hidden', 'Beat': 'TextEdit', 'Dispositio': 'Hidden', 'Cancelled': 'Hidden', 'CallsBeat': '', });
lyr_PoliceBeats_1.set('fieldLabels', {'LAWBEAT': 'no label', });
lyr_Trespass_2.set('fieldLabels', {'Call Date': 'no label', 'Call Time': 'no label', 'Priority': 'no label', 'Nature': 'no label', 'Beat': 'no label', 'CallsBeat': 'no label', });
lyr_WelfareCheck_3.set('fieldLabels', {'Call Date': 'inline label', 'Call Time': 'inline label', 'Priority': 'inline label', 'Nature': 'inline label', 'Beat': 'inline label', 'CallsBeat': 'no label', });
lyr_SuicideThreat_4.set('fieldLabels', {'Call Date': 'inline label', 'Call Time': 'inline label', 'Priority': 'inline label', 'Nature': 'inline label', 'Beat': 'inline label', 'CallsBeat': 'no label', });
lyr_PanhandelingorNuisance_5.set('fieldLabels', {'Call Date': 'inline label', 'Call Time': 'inline label', 'Priority': 'inline label', 'Nature': 'inline label', 'Beat': 'inline label', 'CallsBeat': 'no label', });
lyr_IntoxicatedPerson_6.set('fieldLabels', {'Call Date': 'inline label', 'Call Time': 'inline label', 'Priority': 'inline label', 'Nature': 'inline label', 'Beat': 'inline label', 'CallsBeat': 'no label', });
lyr_Crisis_7.set('fieldLabels', {'Call Date': 'inline label', 'Call Time': 'inline label', 'Priority': 'inline label', 'Nature': 'inline label', 'Beat': 'inline label', 'CallsBeat': 'no label', });
lyr_Crisis_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});