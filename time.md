# Temporal JSON-LD in GeoJSON

The concept of temporal extent is developed in parallel to the existing concept
of spatial extent. The temporal items can therefore be safely ignored by
GeoJSON processors.

With the addition of temporal items, GeoJSON features can become event-like and
such features will be used in the following examples.

The examples below are for the proposal made by @sgillies in
https://github.com/geojson/geojson-ld/issues/9.

## Proposal in a nutshell

- A "when" object analogous to GeoJSON's existing "geometry".
- Two "types" of temporality: "Instant" and "Interval".
- The values of items in "when" are ISO-8601 or RFC 3339 date/time strings.
- The keys of those items are "datetime", "start", "stop", "earliest",
  and "latest".

## Instantaneous event-like feature

For a thing that exists at a certain time.

```
{
  "@context": "http://geojson.org/contexts/geojson-time.jsonld",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0.0,
      0.0
    ]
  },
  "when": {
    "type": "Instant",
    "datetime": "2014-04-24"
  },
  "properties": {},
  "type": "Feature"
}
```

## Non-instaneous event-like feature

For a thing that exists during a certain interval.

```
{
  "@context": "http://geojson.org/contexts/geojson-time.jsonld",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0.0,
      0.0
    ]
  },
  "when": {
    "stop": "2014-04-25",
    "start": "2014-04-24",
    "type": "Interval"
  },
  "properties": {},
  "type": "Feature"
}
```

## Open-ended event-like feature

For a thing that exists *since* a certain time.

```
{
  "@context": "http://geojson.org/contexts/geojson-time.jsonld",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0.0,
      0.0
    ]
  },
  "when": {
    "start": "2014-04-24",
    "type": "Interval"
  },
  "properties": {},
  "type": "Feature"
}
```

## Fuzzy instant

For a thing that exists at a certain time with fuzzy bounds. Displaying such
things is a feature of Simile's Timeline.

```
{
  "@context": "http://geojson.org/contexts/geojson-time.jsonld",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0.0,
      0.0
    ]
  },
  "when": {
    "earliest": "2014-04-23",
    "type": "Instant",
    "latest": "2014-04-25",
    "datetime": "2014-04-24"
  },
  "properties": {},
  "type": "Feature"
}
```

## Open-ended interval with a fuzzy start

For a thing that exists since an approximately known time.

```
{
  "@context": "http://geojson.org/contexts/geojson-time.jsonld",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0.0,
      0.0
    ]
  },
  "when": {
    "start": "2014-04-24",
    "earliest": "2014-04-23",
    "type": "Interval"
  },
  "properties": {},
  "type": "Feature"
}
```

