---
layout: home
title: GeoJSON-LD
---

# GeoJSON-LD

**Author**: Sean Gillies (Mapbox)

**Revision**: 1.0

**Date**: 2017-01-03

**Abstract**: A vocabulary and JSON-LD context for GeoJSON.

**Copyright**: This work is licensed under a [Creative Commons Attribution 4.0
International License](http://creativecommons.org/licenses/by/4.0/).

GeoJSON-LD 1.0 defines a base context for processing GeoJSON according to the
[JSON-LD](https://www.w3.org/TR/json-ld/) processing model. When a JSON-LD
processor encounters a GeoJSON document with the `application/geo+json` media
type that does not contain a `@context` member, it may use the context defined
here. JSON-LD implementations may add to the context defined here but must not
override or change the meaning of its terms.

## Vocabulary

The GeoJSON-LD 1.0 vocabulary is published as RDF/XML at
[http://geojson.org/geojson-ld/vocab.rdf](http://geojson.org/geojson-ld/vocab.rdf).
An HTML version is published at
[http://geojson.org/geojson-ld/vocab.html](http://geojson.org/geojson-ld/vocab.html).

## Namespace

The GeoJSON-LD namespace is `https://purl.org/geojson/vocab#`.

## Context

The GeoJSON-LD 1.0 context is published at
[http://geojson.org/geojson-ld/geojson-context.jsonld](http://geojson.org/geojson-ld/geojson-context.jsonld).

## GitHub repository

[https://github.com/geojson/geojson-ld](https://github.com/geojson/geojson-ld)

## Example

Pasting the following GeoJSON-LD document

```json
{
  "@context": {
    "geojson": "https://purl.org/geojson/vocab#",
    "Feature": "geojson:Feature",
    "FeatureCollection": "geojson:FeatureCollection",
    "GeometryCollection": "geojson:GeometryCollection",
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
    "coordinates": {
      "@container": "@list",
      "@id": "geojson:coordinates"
    },
    "features": {
      "@container": "@set",
      "@id": "geojson:features"
    },
    "geometry": "geojson:geometry",
    "id": "@id",
    "properties": "geojson:properties",
    "type": "@type",
    "description": "http://purl.org/dc/terms/description",
    "title": "http://purl.org/dc/terms/title"
  },
  "type": "Feature",
  "id": "http://example.com/features/1",
  "geometry": {"type": "Point", "coordinates": [0.0, 0.0]},
  "properties": {
    "title": "Null Island",
    "description": "A fictional island in the Gulf of Guinea"
  }
}
```

into the [JSON-LD Playground](http://json-ld.org/playground/) form yields
the following JSON-LD in expanded form.

```json
[
  {
    "https://purl.org/geojson/vocab#geometry": [
      {
        "https://purl.org/geojson/vocab#coordinates": [
          {
            "@list": [
              {
                "@value": 0
              },
              {
                "@value": 0
              }
            ]
          }
        ],
        "@type": [
          "https://purl.org/geojson/vocab#Point"
        ]
      }
    ],
    "@id": "http://example.com/features/1",
    "https://purl.org/geojson/vocab#properties": [
      {
        "http://purl.org/dc/terms/description": [
          {
            "@value": "A fictional island in the Gulf of Guinea"
          }
        ],
        "http://purl.org/dc/terms/title": [
          {
            "@value": "Null Island"
          }
        ]
      }
    ],
    "@type": [
      "https://purl.org/geojson/vocab#Feature"
    ]
  }
]
```

## Outstanding issues

Nested GeoJSON coordinate arrays are incompatible with the processing model
of JSON-LD 1.0. There are no current best practices for addressing this issue.
Applications that process GeoJSON as JSON-LD using the GeoJSON-LD 1.0 context
must take extra steps not defined here to ensure that geometric coordinates
are processed appropriately.

## See Also

* [Activity Streams 2.0](https://www.w3.org/TR/activitystreams-core/), from
  which GeoJSON-LD gets the idea of a normative, default context.
