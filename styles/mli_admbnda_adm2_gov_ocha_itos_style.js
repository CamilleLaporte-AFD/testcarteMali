var size = 0;

var styleCache_mli_admbnda_adm2_gov_ocha_itos={}
var style_mli_admbnda_adm2_gov_ocha_itos = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(175,179,138,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(241,244,199,1.0)'})
    })];
    if (feature.get("admin2Name") !== null) {
        var labelText = String(feature.get("admin2Name"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_mli_admbnda_adm2_gov_ocha_itos[key]){
        var text = new ol.style.Text({
              font: '10.725px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_mli_admbnda_adm2_gov_ocha_itos[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_mli_admbnda_adm2_gov_ocha_itos[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};