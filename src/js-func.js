function getColor(percentage) {
  if (percentage > 0 && percentage <= 10) {
    return "#ffffcc";
  } else if (percentage > 10 && percentage <= 20) {
    return "#c2e699";
  } else if (percentage > 20 && percentage <= 30) {
    return "#78c679";
  } else if (percentage > 30) {
    return "#238443";
  } else {
    return "#ffffff";
  }
}
// Defne the style of the polygons
function style(feature) {
  return {
    fllColor: getColor(feature.properties.PERC_RENEW),
    color: "#ffffff",
    weight: 1,
    opacity: 1,
    fllOpacity: 0.8
  };
}
