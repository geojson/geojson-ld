---
layout: home
title: Proposed GeoJSON-LD Vocabulary
---

# Proposed GeoJSON-LD Vocabulary

See [https://github.com/geojson/geojson-ld](https://github.com/geojson/geojson-ld)
for vocabulary developments.

This document refers often to the [JSON-LD 1.0](http://www.w3.org/TR/json-ld/) W3C
Recommendation.

The *example.com* domain and *example.com/vocab#* URIs are used deliberately to 
dissuade you from using the vocabulary terms before the work is finished.


## Core Types

Below are linked data identifiers for the core GeoJSON types found in the [GeoJSON
1.0 Specification](geojson-spec.md).

### <a name="FeatureCollection">FeatureCollection</a>

*http://example.com/vocab#FeatureCollection*

Description: See [RFC 7946 Section 3.3](https://tools.ietf.org/html/rfc7946#section-3.3).

### <a name="Feature">Feature</a>

*http://example.com/vocab#Feature*

Description: See [RFC 7946 Section 3.2](https://tools.ietf.org/html/rfc7946#section-3.2).

### <a name="Point">Point</a>

*http://example.com/vocab#Point*

Description: See [RFC 7946 Section 3.1.2](https://tools.ietf.org/html/rfc7946#section-3.1.2).

### <a name="LineString">LineString</a>

*http://example.com/vocab#LineString*

Description: See [RFC 7946 Section 3.1.4](https://tools.ietf.org/html/rfc7946#section-3.1.4).

### <a name="Polygon">Polygon</a>

*http://example.com/vocab#Polygon*

Description: See [RFC 7946 Section 3.1.6](https://tools.ietf.org/html/rfc7946#section-3.1.6).

### <a name="MultiPoint">MultiPoint</a>

*http://example.com/vocab#MultiPoint*

Description: See [RFC 7946 Section 3.1.3](https://tools.ietf.org/html/rfc7946#section-3.1.3).

### <a name="MultiLineString">MultiLineString</a>

*http://example.com/vocab#MultiLineString*

Description: See [RFC 7946 Section 3.1.5](https://tools.ietf.org/html/rfc7946#section-3.1.5).

### <a name="MultiPolygon">MultiPolygon</a>

*http://example.com/vocab#MultiPolygon*

Description: See [RFC 7946 Section 3.1.7](https://tools.ietf.org/html/rfc7946#section-3.1.7).

### <a name="GeometryCollection">GeometryCollection</a>

*http://example.com/vocab#GeometryCollection*

Description: See [RFC 7946 Section 3.1.8](https://tools.ietf.org/html/rfc7946#section-3.1.8).


## Core Properties

Below are linked data identifiers for the core GeoJSON properties found in the
[GeoJSON 1.0 Specification](geojson-spec.html).

### <a name="bbox">bbox</a>

*http://example.com/vocab#bbox*

Description: See [RFC 7946 Section 5](https://tools.ietf.org/html/rfc7946#section-5).

### <a name="coordinates">coordinates</a>

*http://example.com/vocab#coordinates*

Description: See [RFC 7946 Section 3.1.1](https://tools.ietf.org/html/rfc7946#section-3.1.1).

### <a name="features">features</a>

*http://example.com/vocab#features*

Description: See [RFC 7946 Section 3.3](https://tools.ietf.org/html/rfc7946#section-3.3).

### <a name="geometry">geometry</a>

*http://example.com/vocab#geometry*

Description: See [RFC 7946 Section 3.2](https://tools.ietf.org/html/rfc7946#section-3.2).

### <a name="id">id</a>

*http://example.com/vocab#id*

Description: See [RFC 7946 Section 3.2](https://tools.ietf.org/html/rfc7946#section-3.2).

In the base GeoJSON-LD context, [http://geojson.org/geojson-context.jsonld](http://geojson.org/geojson-context.jsonld), **id** is declared to be an alias for the JSON-LD [**@id** keyword](http://www.w3.org/TR/json-ld/#node-identifiers).

### <a name="properties">properties</a>

*http://example.com/vocab#properties*

Description: See [RFC 7946 Section 3.2](https://tools.ietf.org/html/rfc7946#section-3.2).
These are properties of a **Feature** that are bounded by its spatial and temporal extents.

### <a name="type">type</a>

*http://example.com/vocab#type*

Description: See [RFC 7946 Section 3]https://tools.ietf.org/html/rfc7946#section-3).

In the base GeoJSON-LD context,
[http://geojson.org/geojson-context.jsonld](http://geojson.org/geojson-context.jsonld),
**type** is declared to be an alias for `rdf:type`.
