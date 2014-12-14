geojson-ld
==========

*Describing and extending GeoJSON with JSON-LD*

JSON-LD is JSON for linking data and it's a web standard:
http://www.w3.org/TR/json-ld/.
It offers a smooth path for upgrading existing GeoJSON data.

A JSON-LD context defines terms and other things and allows GeoJSON documents
to be more specific about data, e.g, what "type" and "id" and the keys of
"properties" mean to the rest of the web.  Additionally, JSON-LD's "@type" and
"@id" provide a means of integrating GeoJSON with other schemas.

This GeoJSON-LD project is focussed on publishing a vocabulary of GeoJSON terms
and a base JSON-LD context for GeoJSON data, but also aims to help
organizations develop good practices for upgrading GeoJSON data.

## Example

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

## Development

This is a work in progress. See https://github.com/geojson/geojson-ld/issues.

A demo vocabulary including the GeoJSON terms above is online at
http://geojson.org/vocab.

