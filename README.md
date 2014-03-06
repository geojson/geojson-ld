geojson-ld
==========

GeoJSON in JSON-LD contexts

# Making GeoJSON more self-descriptive

JSON-LD is JSON for linking data and it's a web standard: http://json-ld.org/.

A JSON-LD context defines terms and allows GeoJSON to be specific about its data,
e.g, what "type" and "id" mean in the context of the rest of the web.

```
    { "@context": {
        "id": "@id",
        "type": "@type",
        "FeatureCollection": "http://example.com/vocab#FeatureCollection",
        "Feature": "http://example.com/vocab#Feature",
        },
      "type": "FeatureCollection",
      "features": [ 
        { "type": "Feature",
          "id": "http://example.com/features/1",
          ...
          } ]
      }
```

This is a work in progress. See https://github.com/geojson/geojson-ld/issues.

