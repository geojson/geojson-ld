geojson-ld
==========

GeoJSON in JSON-LD contexts

## Making GeoJSON more self-descriptive

JSON-LD is JSON for linking data and it's a web standard: http://json-ld.org/.

A JSON-LD context defines terms and allows GeoJSON to be specific about its
data, e.g, what "type" and "id" and the keys of "properties" mean to the rest
of the web.  Additionally, JSON-LD's "@type" and "@id" provide a means of
integrating GeoJSON with other schemas.

Below is an example of using JSON-LD to declare that the features of
a collection are also schema.org Places and that their "description" property
is the same thing as a schema.org decription. Bringing optional namespaces to
the "properties" grab bag is perhaps the best thing that JSON-LD can do for
GeoJSON data.

```
    { "@context": {
        "FeatureCollection": "http://example.com/vocab#FeatureCollection",
        "Feature": "http://example.com/vocab#Feature",
        "Place": "http://schema.org/Place",
        "description": "http://schema.org/description"
        },
      "type": "FeatureCollection",
      "@id": "http://example.com/collections/1",
      "features": [ 
        { "type": "Feature",
          "@type": ["Feature", "Place"],
          "id": 1,
          "@id": "http://example.com/collections/1/features/1",
          "properties":
            { "description": "The first place" },
          ...
          } ]
      }
```

This is a work in progress. See https://github.com/geojson/geojson-ld/issues.

