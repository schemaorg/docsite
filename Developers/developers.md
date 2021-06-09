---
layout: default
title: Developer Documentation
parent: Schema.org for Developers
nav_order: 1
---

## Schema.org for Developers

This is a placeholder page for developer-oriented information about schema.org. In particular it gives access to machine-readable representations of our schemas.

## Machine Readable Term Definitions

Machine-readable definitions of individual terms are available as JSON-LD, embedded into the term page html.

## Vocabulary Definition Files

To assist developers, files containing the definition of the current version of the Schema.org vocabulary are [available for download](/Developers/download.html) in common RDF formats.


## Experimental/Unsupported

The following representations are _experimental_ and may change or be removed in future releases.

### D3 RDFS in JSON-LD

A simplification of the Schema.org type hierarchy, in which each type has at most one super-type, represented in a hybrid format that combines JSON-LD, [RDFS](https://en.wikipedia.org/wiki/RDF_Schema) and [D3](https://d3js.org/): [tree.jsonld](https://schema.org/docs/tree.jsonld).

This file is made available to support developers using the [D3](https://d3js.org/) JavaScript library for manipulating documents based on data. It uses JSON-LD to declare that D3's default "children" JSON field represents "subClassOf" relationships, but expressed in the reverse direction ([example usage](https://bl.ocks.org/danbri/1c121ea8bd2189cf411c)).

### OWL

As an experimental feature, an [OWL](https://en.wikipedia.org/wiki/Web_Ontology_Language) definition file [schemaorg.owl](https://schema.org/docs/schemaorg.owl) is available. It includes the core and all current extensions to the vocabulary.

The structure of the file differs from the above vocabulary definition files, in that `schema:domainIncludes` and `schema:rangeIncludes` values are converted into `rdfs:domain` and `rdfs:range` values using `owl:unionOf` to capture the multiplicity of values. Included in the range values are the, implicit within the vocabulary, default values of [Text](https://schema.org/Text), [URL](https://schema.org/URL), and [Role](https://schema.org/Role).

This file has been made available to enable the representation of the vocabulary in some OWL-based modeling tools. The mapping into OWL is an approximation, and should not be considered an authoritative definition for Schema.org's terms; see [datamodel page](/SchemaInfo/datamodel.html) for details. As an experimental feature, there are no expectations as to its interpretation by any third party tools.



