declare module 'utm' {
    type ZONE_LETTERS = 'C'
        | 'D'
        | 'E'
        | 'F'
        | 'G'
        | 'H'
        | 'J'
        | 'K'
        | 'L'
        | 'M'
        | 'N'
        | 'P'
        | 'Q'
        | 'R'
        | 'S'
        | 'T'
        | 'U'
        | 'V'
        | 'W'
        | 'X'

    export function toLatLong(
        easting: number,
        northing: number,
        zoneNumber: number,
        zoneLetter?: string,
        northern?: boolean,
        strict?: boolean,
    ): { latitude: number; longitude: number }

    export function fromLatLong(
        latitude: number,
        longitude: number,
        zoneNumber?: ZONE_LETTERS,
    ): {
        easting: number
        northing: number
        zoneNumber: number
        zoneLetter: ZONE_LETTERS
    }
}
