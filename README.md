geojson-ld
==========

A vocabulary and JSON-LD context for GeoJSON

The GeoJSON-LD project defines a base context for processing GeoJSON according
to the [JSON-LD](https://www.w3.org/TR/json-ld/) processing model. When
a JSON-LD processor encounters a GeoJSON document with the
`application/geo+json` media type that does not contain a `@context` member, it
may use the context defined here. JSON-LD implementations may add to the
context defined here but MUST NOT override or change the meaning of its terms.

The vocabulary is published at http://geojson.org/vocab# and the context is
published at http://geojson.org/geojson-context.jsonld.

## See Also

Activity Streams 2.0: https://www.w3.org/TR/activitystreams-core/, from which
GeoJSON-LD gets the idea of a normative, default context.
