# Flatter Temporal JSON-LD in GeoJSON

As in the examples of [time.md](time.md) but flatter. Items of the "when"
object go up to the feature object and the "types" are eliminated: instead the
presence of a "instant" signals to non-LD JSON processors that we are talking
about an instant and presence of "start" and/or "stop" signals that we are
talking about an interval.  Duck-typing, if you will. For JSON-LD processors,
the type of thing can be made more explicit by specifying its "@type" (see
http://www.w3.org/TR/json-ld/#specifying-the-type).

The examples below are for the proposal made by @sgillies in
https://github.com/geojson/geojson-ld/issues/13.

## Instantaneous event-like feature

For a thing that exists at a certain time.

```
{
   "@context": {
    "Feature": "http://example.com/vocab#Feature",
    "Instant": "http://www.w3.org/2006/time#Instant",
    "Interval": "http://www.w3.org/2006/time#Interval",
    "Point": "http://example.com/vocab#Point",
    "coordinates": "http://example.com/vocab#coordinates",
    "geometry": "http://example.com/vocab#geometry",
    "id": "http://example.com/vocab#id",
    "instant": "http://www.w3.org/2006/time#inXSDDateTime",
    "properties": "http://example.com/vocab#properties",
    "start": "http://www.w3.org/2006/time#hasBeginning",
    "stop": "http://www.w3.org/2006/time#hasEnding",
    "type": "http://example.com/vocab#type",
  },
  "@type": ["Feature", "Instant"],
  "geometry": {
    "type": "Point",
    "coordinates": [
      0.0,
      0.0
    ]
  },
  "instant": "2014-04-24",
  "type": "Feature",
  "properties": {}
}
```

## Non-instaneous event-like feature

For a thing that exists during a certain interval.

```
{
  "@context": {
    "Feature": "http://example.com/vocab#Feature",
    "Instant": "http://www.w3.org/2006/time#Instant",
    "Interval": "http://www.w3.org/2006/time#Interval",
    "Point": "http://example.com/vocab#Point",
    "coordinates": "http://example.com/vocab#coordinates",
    "geometry": "http://example.com/vocab#geometry",
    "id": "http://example.com/vocab#id",
    "instant": "http://www.w3.org/2006/time#inXSDDateTime",
    "properties": "http://example.com/vocab#properties",
    "start": "http://www.w3.org/2006/time#hasBeginning",
    "stop": "http://www.w3.org/2006/time#hasEnding",
    "type": "http://example.com/vocab#type",
  },
  "@type": ["Feature", "Interval"],
  "geometry": {
    "type": "Point",
    "coordinates": [
      0.0,
      0.0
    ]
  },
  "stop": "2014-04-25",
  "start": "2014-04-24",
  "type": "Feature",
  "properties": {}
}
```

## Open-ended event-like feature

For a thing that exists *since* a certain time.

```
{
  "@context": {
    "Feature": "http://example.com/vocab#Feature",
    "Instant": "http://www.w3.org/2006/time#Instant",
    "Interval": "http://www.w3.org/2006/time#Interval",
    "Point": "http://example.com/vocab#Point",
    "coordinates": "http://example.com/vocab#coordinates",
    "geometry": "http://example.com/vocab#geometry",
    "id": "http://example.com/vocab#id",
    "instant": "http://www.w3.org/2006/time#inXSDDateTime",
    "properties": "http://example.com/vocab#properties",
    "start": "http://www.w3.org/2006/time#hasBeginning",
    "stop": "http://www.w3.org/2006/time#hasEnding",
    "type": "http://example.com/vocab#type",
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
  "type": "Feature",
  "properties": {}
}
```


