# utm

Bidirectional UTM-WGS84 converter for JavaScript.

Translated directly from [Tobias Bieniek's implementation in Python](https://github.com/Turbo87/utm).

## Usage

```js
var utm = require('utm')
```

### `utm.toLatLong(easting, northing, zoneNumber, zoneLetter, northern, strict = true)`

Convert from UTM-WGS84 to latitude/longitude coordinates. One and only one of
`zoneLetter` and `northern` must be specified. `strict` option specifies
whether easting and northing are checked against their respective ranges.

Returns `{ latitude, longitude }`.

### `utm.fromLatLong(latitude, longitude[, zoneNumber])`

Convert from latitude/longitude coordinates to UTM-WGS84. `zoneNumber` can be set
to force a specific zone number.

Returns `{ easting, northing, zoneNumber, zoneLetter }`.
