# Event-like GeoJSON Features Using JSON-LD

With the addition of temporal items, GeoJSON features can become event-like and
such features will be used in the following examples.

The concept of temporal extent is developed in parallel to the existing concept
of spatial extent. The temporal items can therefore be safely ignored by
GeoJSON processors.

## Proposal in a nutshell

- A "when" object analogous to GeoJSON's existing "geometry".
- Two "@types" of temporality: "Instant" and "Interval".
- The values of items in "when" are ISO-8601 or RFC 3339 date/time strings.
- The keys of those items are "datetime", "start", "stop".
- The keys "earliest" and "latest" are being considered as a way to communicate
  fuzziness or imprecision.

Please note that *example.com/vocab* is used as a placeholder for a namespace
yet to be published.

## JSON-LD Playground

Copy any of the JSON text below and paste at http://json-ld.org/playground/ to
see it processed.

## Instantaneous event-like feature

For a thing that exists at a certain time.

```
{
  "@context": {
    "geojson": "http://ld.geojson.org/vocab#",
    "Feature": "geojson:Feature",
    "FeatureCollection": "geojson:FeatureCollection",
    "GeometryCollection": "geojson:GeometryCollection",
    "Instant": "http://www.w3.org/2006/time#Instant",
    "Interval": "http://www.w3.org/2006/time#Interval",
    "LineString": "geojson:LineString",
    "MultiLineString": "geojson:MultiLineString",
    "MultiPoint": "geojson:MultiPoint",
    "MultiPolygon": "geojson:MultiPolygon",
    "Point": "geojson:Point",
    "Polygon": "geojson:Polygon",
    "bbox": {
      "@container": "@list",
      "@id": "geojson:bbox"
    },
    "circa": "geojson:circa",
    "coordinates": "geojson:coordinates",
    "datetime": {
      "@id": "geojson:datetime",
      "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    "description": "http://purl.org/dc/terms/description",
    "features": {
      "@container": "@set",
      "@id": "geojson:features"
    },
    "geometry": "geojson:geometry",
    "id": "@id",
    "properties": "geojson:properties",
    "start": {
      "@id": "geojson:start",
      "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    "stop": {
      "@id": "geojson:stop",
      "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    "title": "http://purl.org/dc/terms/title",
    "type": "@type",
    "when": "geojson:when"
  },
  "geometry": {
    "coordinates": [
      0.0,
      0.0
    ],
    "type": "Point"
  },
  "id": "1",
  "properties": {},
  "type": "Feature",
  "@type": "Feature",
  "when": {
    "datetime": "2014-04-24",
    "@type": "Instant"
  }
}
```

## Non-instaneous event-like feature

For a thing that exists during a certain interval.

```
{
  "@context": {
    "geojson": "http://ld.geojson.org/vocab#",
    "Feature": "geojson:Feature",
    "FeatureCollection": "geojson:FeatureCollection",
    "GeometryCollection": "geojson:GeometryCollection",
    "Instant": "http://www.w3.org/2006/time#Instant",
    "Interval": "http://www.w3.org/2006/time#Interval",
    "LineString": "geojson:LineString",
    "MultiLineString": "geojson:MultiLineString",
    "MultiPoint": "geojson:MultiPoint",
    "MultiPolygon": "geojson:MultiPolygon",
    "Point": "geojson:Point",
    "Polygon": "geojson:Polygon",
    "bbox": {
      "@container": "@list",
      "@id": "geojson:bbox"
    },
    "circa": "geojson:circa",
    "coordinates": "geojson:coordinates",
    "datetime": {
      "@id": "geojson:datetime",
      "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    "description": "http://purl.org/dc/terms/description",
    "features": {
      "@container": "@set",
      "@id": "geojson:features"
    },
    "geometry": "geojson:geometry",
    "id": "@id",
    "properties": "geojson:properties",
    "start": {
      "@id": "geojson:start",
      "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    "stop": {
      "@id": "geojson:stop",
      "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    "title": "http://purl.org/dc/terms/title",
    "type": "@type",
    "when": "geojson:when"
  },
  "geometry": {
    "coordinates": [
      0.0,
      0.0
    ],
    "type": "Point"
  },
  "id": "1",
  "properties": {},
  "type": "Feature",
  "@type": "Feature",
  "when": {
    "start": "2014-04-24",
    "stop": "2014-04-25",
    "@type": "Interval"
  }
}
```

## Open-ended event-like feature

For a thing that exists *since* a certain time.

```
{
  "@context": {
    "geojson": "http://ld.geojson.org/vocab#",
    "Feature": "geojson:Feature",
    "FeatureCollection": "geojson:FeatureCollection",
    "GeometryCollection": "geojson:GeometryCollection",
    "Instant": "http://www.w3.org/2006/time#Instant",
    "Interval": "http://www.w3.org/2006/time#Interval",
    "LineString": "geojson:LineString",
    "MultiLineString": "geojson:MultiLineString",
    "MultiPoint": "geojson:MultiPoint",
    "MultiPolygon": "geojson:MultiPolygon",
    "Point": "geojson:Point",
    "Polygon": "geojson:Polygon",
    "bbox": {
      "@container": "@list",
      "@id": "geojson:bbox"
    },
    "circa": "geojson:circa",
    "coordinates": "geojson:coordinates",
    "datetime": {
      "@id": "geojson:datetime",
      "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    "description": "http://purl.org/dc/terms/description",
    "features": {
      "@container": "@set",
      "@id": "geojson:features"
    },
    "geometry": "geojson:geometry",
    "id": "@id",
    "properties": "geojson:properties",
    "start": {
      "@id": "geojson:start",
      "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    "stop": {
      "@id": "geojson:stop",
      "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    "title": "http://purl.org/dc/terms/title",
    "type": "@type",
    "when": "geojson:when"
  },
  "geometry": {
    "coordinates": [
      0.0,
      0.0
    ],
    "type": "Point"
  },
  "id": "1",
  "properties": {},
  "type": "Feature",
  "@type": "Feature",
  "when": {
    "start": "2014-04-24",
    "@type": "Interval"
  }
}
```

## Fuzzy instant

For a thing that exists at a certain time with fuzzy bounds. Displaying such
things is a feature of Simile's Timeline.

```
{
  "@context": {
    "geojson": "http://ld.geojson.org/vocab#",
    "Feature": "geojson:Feature",
    "FeatureCollection": "geojson:FeatureCollection",
    "GeometryCollection": "geojson:GeometryCollection",
    "Instant": "http://www.w3.org/2006/time#Instant",
    "Interval": "http://www.w3.org/2006/time#Interval",
    "LineString": "geojson:LineString",
    "MultiLineString": "geojson:MultiLineString",
    "MultiPoint": "geojson:MultiPoint",
    "MultiPolygon": "geojson:MultiPolygon",
    "Point": "geojson:Point",
    "Polygon": "geojson:Polygon",
    "bbox": {
      "@container": "@list",
      "@id": "geojson:bbox"
    },
    "circa": "geojson:circa",
    "coordinates": "geojson:coordinates",
    "datetime": {
      "@id": "geojson:datetime",
      "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    "description": "http://purl.org/dc/terms/description",
    "features": {
      "@container": "@set",
      "@id": "geojson:features"
    },
    "geometry": "geojson:geometry",
    "id": "@id",
    "properties": "geojson:properties",
    "start": {
      "@id": "geojson:start",
      "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    "stop": {
      "@id": "geojson:stop",
      "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    "title": "http://purl.org/dc/terms/title",
    "type": "@type",
    "when": "geojson:when"
  },
  "geometry": {
    "coordinates": [
      0.0,
      0.0
    ],
    "type": "Point"
  },
  "id": "1",
  "properties": {},
  "type": "Feature",
  "@type": "Feature",
  "circa": {
    "start": "2014-04-23",
    "stop": "2014-04-25",
    "@type": "Interval"
  },
  "when": {
    "datetime": "2014-04-24",
    "@type": "Instant"
  }
}
```

## Open-ended interval with a fuzzy start

For a thing that exists since an approximately known time.

```
{
  "@context": {
    "geojson": "http://ld.geojson.org/vocab#",
    "Feature": "geojson:Feature",
    "FeatureCollection": "geojson:FeatureCollection",
    "GeometryCollection": "geojson:GeometryCollection",
    "Instant": "http://www.w3.org/2006/time#Instant",
    "Interval": "http://www.w3.org/2006/time#Interval",
    "LineString": "geojson:LineString",
    "MultiLineString": "geojson:MultiLineString",
    "MultiPoint": "geojson:MultiPoint",
    "MultiPolygon": "geojson:MultiPolygon",
    "Point": "geojson:Point",
    "Polygon": "geojson:Polygon",
    "bbox": {
      "@container": "@list",
      "@id": "geojson:bbox"
    },
    "circa": "geojson:circa",
    "coordinates": "geojson:coordinates",
    "datetime": {
      "@id": "geojson:datetime",
      "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    "description": "http://purl.org/dc/terms/description",
    "features": {
      "@container": "@set",
      "@id": "geojson:features"
    },
    "geometry": "geojson:geometry",
    "id": "@id",
    "properties": "geojson:properties",
    "start": {
      "@id": "geojson:start",
      "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    "stop": {
      "@id": "geojson:stop",
      "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    "title": "http://purl.org/dc/terms/title",
    "type": "@type",
    "when": "geojson:when"
  },
  "geometry": {
    "coordinates": [
      0.0,
      0.0
    ],
    "type": "Point"
  },
  "id": "1",
  "properties": {},
  "type": "Feature",
  "@type": "Feature",
  "circa": {
    "start": "2014-04-23",
    "@type": "Interval"
  },
  "when": {
    "start": "2014-04-24",
    "@type": "Interval"
  }
}
```

