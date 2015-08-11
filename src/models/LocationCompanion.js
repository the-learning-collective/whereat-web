const Location = require('../models/Location');

const lc = {};

// (NavigatorPosition) -> Location
lc.convertPosition = (pos) =>
  Location({
    lat: pos.coords.latitude,
    lon: pos.coords.longitude,
    time: pos.timestamp || new Date().getTime()
  });

module.exports = lc;
