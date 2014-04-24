# Flatter Temporal JSON-LD in GeoJSON

As in the examples of [time.md](time.md) but flatter. Items of the "when" object
go up to the feature object and the "types" are eliminated: instead the presence
of a "datetime" signals that we're talking about an instant and presence of
"start" and/or "stop" signals that we're talking about an interval. Duck-typing,
if you will.

The examples below are for the proposal made by @sgillies in
https://github.com/geojson/geojson-ld/issues/10.

## Instantaneous event-like feature

For a thing that exists at a certain time.

```
{
  "geometry": {
    "type": "Point", 
    "coordinates": [
      0.0, 
      0.0
    ]
  }, 
  "datetime": "2014-04-24",
  "type": "Feature"
}
```

## Non-instaneous event-like feature

For a thing that exists during a certain interval.

```
{
  "geometry": {
    "type": "Point", 
    "coordinates": [
      0.0, 
      0.0
    ]
  }, 
  "stop": "2014-04-25", 
  "start": "2014-04-24", 
  "type": "Feature"
}
```

## Open-ended event-like feature

For a thing that exists *since* a certain time.

```
{
  "geometry": {
    "type": "Point", 
    "coordinates": [
      0.0, 
      0.0
    ]
  }, 
  "start": "2014-04-24", 
  "type": "Feature"
}
```

## Fuzzy instant

For a thing that exists at a certain time with fuzzy bounds. Displaying such
things is a feature of Simile's Timeline.

```
{
  "geometry": {
    "type": "Point", 
    "coordinates": [
      0.0, 
      0.0
    ]
  }, 
  "earliest": "2014-04-23", 
  "latest": "2014-04-25", 
  "datetime": "2014-04-24",
  "type": "Feature"
}
```

## Open-ended interval with a fuzzy start

For a thing that exists since an approximately known time.

```
{
  "geometry": {
    "type": "Point", 
    "coordinates": [
      0.0, 
      0.0
    ]
  }, 
  "start": "2014-04-24", 
  "earliest": "2014-04-23", 
  "type": "Feature"
}
```


