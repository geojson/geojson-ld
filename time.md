# Event-like GeoJSON Features

With the addition of temporal items, GeoJSON features can become event-like and
such features will be used in the following examples.

The concept of temporal extent is developed in parallel to the existing concept
of spatial extent. The temporal items can therefore be safely ignored by
GeoJSON processors.

## Proposal in a nutshell

- A "when" object analogous to GeoJSON's existing "geometry".
- Two types of temporality: "Instant" and "Interval".
- The values of items in "when" are ISO-8601 or RFC 3339 date/time strings.
- The keys of those items are "datetime", "start", "stop".
- The keys "earliest" and "latest" are being considered as a way to communicate
  fuzziness or imprecision.

## Instantaneous event-like feature

For a thing that exists at a certain time.

```
{
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
  "when": {
    "datetime": "2014-04-24",
    "type": "Instant"
  }
}
```

## Non-instaneous event-like feature

For a thing that exists during a certain interval.

```
{
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
  "when": {
    "start": "2014-04-24",
    "stop": "2014-04-25",
    "type": "Interval"
  }
}
```

## Open-ended event-like feature

For a thing that exists *since* a certain time.

```
{
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
  "when": {
    "start": "2014-04-24",
    "type": "Interval"
  }
}
```

## Fuzzy instant

For a thing that exists at a certain time with fuzzy bounds. Displaying such
things is a feature of Simile's Timeline.

```
{
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
  "circa": {
    "start": "2014-04-23",
    "stop": "2014-04-25",
    "type": "Interval"
  },
  "when": {
    "datetime": "2014-04-24",
    "type": "Instant"
  }
}
```

## Open-ended interval with a fuzzy start

For a thing that exists since an approximately known time.

```
{
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
  "circa": {
    "start": "2014-04-23",
    "type": "Interval"
  },
  "when": {
    "start": "2014-04-24",
    "type": "Interval"
  }
}
```
