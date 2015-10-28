.. GeoJSON-LD documentation master file, created by
   sphinx-quickstart on Thu Jun  5 21:50:55 2014.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

GeoJSON-LD
==========

*Describing and extending GeoJSON with JSON-LD*

Contents:

.. toctree::
   :maxdepth: 2

JSON-LD is JSON for linking data and it's a web standard: http://json-ld.org/.
It offers a smooth path for upgrading existing GeoJSON data.

A JSON-LD context defines terms and other things and allows GeoJSON documents
to be more specific about data, e.g, what ``type`` and ``id`` and the items of
``properties`` mean to the rest of the web.  Additionally, JSON-LD's ``@type`` and
``@id`` keywords provide a means of integrating GeoJSON with other schemas.

This GeoJSON-LD project is focussed on publishing a vocabulary of GeoJSON terms
and a base JSON-LD context for GeoJSON data, but also aims to help
organizations develop good practices for upgrading GeoJSON data.

Example
-------

Below is an example of using JSON-LD to declare that the features of
a collection are also schema.org Places and that their ``description`` property
is the same thing as a schema.org decription. Bringing optional namespaces to
the ``properties`` grab bag is perhaps the best thing that JSON-LD can do for
GeoJSON data.

.. code-block:: json

    { "@context": {
        "geojson": "http://ld.geojson.org/vocab#",
        "FeatureCollection": "geojson:FeatureCollection",
        "Feature": "geojson:Feature",
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


Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`

