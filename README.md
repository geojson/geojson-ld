geojson-ld
==========

GeoJSON in JSON-LD contexts

## Making GeoJSON more self-descriptive

JSON-LD is JSON for linking data and it's a web standard: http://json-ld.org/.

A JSON-LD context defines terms and allows GeoJSON to be specific about its
data, e.g, what "type" and "id" mean in the context of the rest of the web.
JSON-LD's "@type" and "@id" provide a means of integrating GeoJSON with other
kinds of data.  Below is an example of using JSON-LD to declare that GeoJSON
Features and FeatureCollections are also schema.org Things.

```
    { "@context": {
        "FeatureCollection": "http://example.com/vocab#FeatureCollection",
        "Feature": "http://example.com/vocab#Feature",
        "Thing": "http://schema.org/Thing"
        },
      "type": "FeatureCollection",
      "@id": "http://example.com/collections/1",
      "@type": ["FeatureCollection", "Thing"],
      "features": [ 
        { "type": "Feature",
          "@type": ["Feature", "Thing"],
          "id": 1,
          "@id": "http://example.com/collections/1/features/1",
          ...
          } ]
      }
```

This is a work in progress. See https://github.com/geojson/geojson-ld/issues.

