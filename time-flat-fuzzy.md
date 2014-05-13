# Flatter, Fuzzier Temporal JSON-LD in GeoJSON

A measure of uncertainty useful to historical applications can be provided
by two extra items: "earliest" and "latest". These items are not intended
to describe numerical precision.

Copy any of the JSON text blocks to http://json-ld.org/playground/ to see how
it parses.
:w
## Fuzzy instant

For a thing that exists at a certain time with fuzzy bounds. Displaying such
things is a feature of Simile's Timeline.

```
{
  "@context": {
    "Feature": "http://example.com/vocab#Feature",
    "Instant": "http://www.w3.org/2006/time#Instant",
    "Interval": "http://www.w3.org/2006/time#Interval",
    "Point": "http://example.com/vocab#Point",
    "coordinates": "http://example.com/vocab#coordinates",
    "earliest": "http://example.com/vocab#earliest",
    "geometry": "http://example.com/vocab#geometry",
    "id": "http://example.com/vocab#id",
    "instant": "http://www.w3.org/2006/time#inXSDDateTime",
    "latest": "http://example.com/vocab#latest",
    "properties": "http://example.com/vocab#properties",
    "start": "http://www.w3.org/2006/time#hasBeginning",
    "stop": "http://www.w3.org/2006/time#hasEnding",
    "type": "http://example.com/vocab#type"
  },
  "@type": ["Feature", "Instant"],
  "geometry": {
    "type": "Point",
    "coordinates": [
      0.0,
      0.0
    ]
  },
  "earliest": "2014-04-23",
  "latest": "2014-04-25",
  "instant": "2014-04-24",
  "type": "Feature",
  "properties": {}
}
```

## Open-ended interval with a fuzzy start

For a thing that exists since an approximately known time.

```
{
  "@context": {
    "Feature": "http://example.com/vocab#Feature",
    "Instant": "http://www.w3.org/2006/time#Instant",
    "Interval": "http://www.w3.org/2006/time#Interval",
    "Point": "http://example.com/vocab#Point",
    "coordinates": "http://example.com/vocab#coordinates",
    "earliest": "http://example.com/vocab#earliest",
    "geometry": "http://example.com/vocab#geometry",
    "id": "http://example.com/vocab#id",
    "instant": "http://www.w3.org/2006/time#inXSDDateTime",
    "latest": "http://example.com/vocab#latest",
    "properties": "http://example.com/vocab#properties",
    "start": "http://www.w3.org/2006/time#hasBeginning",
    "stop": "http://www.w3.org/2006/time#hasEnding",
    "type": "http://example.com/vocab#type"
  },
  "@type": ["Feature", "Interval"],
  "geometry": {
    "type": "Point",
    "coordinates": [
      0.0,
      0.0
    ]
  },
  "start": "2014-04-24",
  "earliest": "2014-04-23",
  "type": "Feature",
  "properties": {}
}
```

