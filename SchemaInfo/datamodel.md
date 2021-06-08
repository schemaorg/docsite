---
layout: default
title: Data Model
parent: Schema Info
nav_order: 4
---

# Data Model

The following is a discussion about the data model used by schema.org.

The data model used is very generic and derived from [RDF Schema](https://en.wikipedia.org/wiki/RDF_Schema) (which in turn was derived from [CycL](https://en.wikipedia.org/wiki/CycL), see [History](#history) section for details ...).

1.  We have a set of **types**, arranged in a **multiple inheritance hierarchy** where each type may be a sub-class of multiple types.
2.  We have a set of **properties**:
    1.  each property may have one or more types as its domains. The property may be used for instances of any of these types.
    2.  each property may have one or more types as its ranges. The value(s) of the property should be instances of at least one of these types.

The decision to allow multiple domains and ranges was purely pragmatic. While the computational properties of systems with a single domain and range are easier to understand, in practice, this forces the creation of a lot of artifical types, which are there purely to act as the domain/range of some properties.

Like many other systems, the schema presented here can be extended (with a few types like [Class](http://meta.schema.org/Class) and [Property](http://meta.schema.org/Property) and a few properties like [domainIncludes](http://meta.schema.org/domainIncludes) and [rangeIncludes](http://meta.schema.org/rangeIncludes)) to allow for reflection, i.e., for the schema to be represented in terms of itself.

The canonical machine representation of schema.org is in RDFa:

*   [schema_org_rdfa.html](schema_org_rdfa.html)

Now-obsolete snapshots of [Microdata](https://web.archive.org/web/20150414142113/https://schema.org/docs/full_md.html) and [OWL](schemaorg.owl) experimental data dumps were previously published. See also [TopQuadrant's version](http://datashapes.org/schema).

See the "[developers](https://schema.org/docs/developers.html)" page for more information on machine-readable views of schema.org.

The type hierarchy presented on this site is not intended to be a 'global ontology' of the world. When founded in 2011 it was strictly focussed around the types of entities for which the project's founders (Microsoft, Yahoo!, Google and Yandex), could reasonably expect to provide some special treatment for via search engines. As the project has [evolved](http://queue.acm.org/detail.cfm?id=2857276), introducing more community collaboration and extension mechanisms, its scope has expanded gradually. However it is still the case that schema.org is not intended as a universal ontology. We expect it to be used alongside other vocabulary that shares our basic datamodel and our use of underlying standards like JSON-LD, Microdata and RDFa.

## Conformance

Although it might be helpful for search applications if structured data markup always followed schema.org very strictly, in practice this is unrealistic. Our schemas also continue to evolve in response to feedback, discussion and new applications of the data. Where possible we [amend](https://schema.org/docs/howwework.html) existing definitions incrementally rather than introducing lots of new properties for similar use cases. We have consequently based schema.org on a very flexible datamodel, and take a pragmatic view of conformance.

We expect schema.org properties to be used with new types, both from schema.org and from external extensions. We also expect that often, where we expect a property value of type Person, Place, Organization or some other subClassOf Thing, we will get a text string, even if our schemas don't formally document that expectation. In the spirit of "some data is better than none", search engines will often accept this markup and do the best we can. Similarly, some types such as [Role](https://schema.org/Role) and [URL](https://schema.org/URL) can be used with all properties, and we encourage this kind of experimentation amongst data consumers.

### Notes for toolmakers and schema authors

_This section is oriented towards extension authors and tool makers, i.e. creators of applications that consume, check or transform schema.org-based data. Most publishers and webmasters needn't worry about these details_.

Applications of schema.org can address conformance in several ways. Tools such as validators can check for application-specific patterns, such as the data structures required for some specific functionality. They may also check compliance with underlying formats (JSON-LD, Microdata, RDFa etc.), or offer additional hints that go beyond formal conformance (e.g. checking for readability issues or implausible data).

While it is appropriate and useful for such checkers to warn about published data that may be difficult or ambiguous for consumers, they are not obliged to treat unexpected structures as errors. Schema.org's underlying datamodel is naturally flexible, and provides an [extensible](extension.html) basis for rich structured data. We encourage both publishers and consumers to continue to explore and [share](https://www.w3.org/community/schemaorg/) new vocabulary ideas for [evolving](https://schema.org/docs/releases.html) schema.org.

It is not an error for a schema.org entity description to include properties from several independent types, e.g. something might simultaneously be both a [Book](https://schema.org/Book) and a [Product](https://schema.org/Product) and be usefully described with properties from both types. It is useful but not required for the relevant types to be included in such a description. This flexibility allows schema.org types to be developed with some decentralization, and for vocabulary to be re-used and combined in useful ways. When we list the expected types associated with a property (or vice-versa) we aim to indicate the main ways in which these terms will be combined in practice. This aspect of schema.org is naturally imperfect. For example the schemas for [Volcano](https://schema.org/Volcano) suggest that since volcanoes are places, they may have fax numbers. Similarly, we list the unlikely (but not infeasible) possibility of a [Country](https://schema.org/Country) having "opening hours". We do not attempt to perfect this aspect of schema.org's structure, and instead rely heavily on an extensive collection of illustrative examples that capture common and useful combinations of schema.org terms. The type/properties associations of schema.org are closer to "guidelines" than to formal rules, and improvements to the guidelines are always [welcome](https://www.w3.org/community/schemaorg/).

See also: [Postel's Law](https://en.wikipedia.org/wiki/Robustness_principle)

## Mapping to RDFa Lite

Our use of Microdata maps easily into [RDFa Lite](http://www.w3.org/TR/rdfa-lite/), and many of our examples now show both variations (alongside the newer [JSON-LD](https://en.wikipedia.org/wiki/JSON-LD) syntax). All of Schema.org can be used with the RDFa Lite syntax. The RDFa Lite version of the markup looks almost isomorphic to the Microdata version. The following sample demonstrates the use of RDFa Lite to mark up a [Product](https://schema.org/Product) type example:

```
<div vocab="https://schema.org/" typeof="Product">
  <img property="image" src="dell-30in-lcd.jpg" />
  <span property="name">Dell UltraSharp 30" LCD Monitor</span>

  <div property="aggregateRating"
    typeof="AggregateRating">
    <span property="ratingValue">87</span>
    out of <span property="bestRating">100</span>
    based on <span property="ratingCount">24</span> user ratings
  </div>

  <div property="offers" typeof="AggregateOffer">
    <span property="lowPrice">$1250</span>
    to <span property="highPrice">$1495</span>
    from <span property="offerCount">8</span> sellers
  </div>

  Sellers:
  <div property="offers" typeof="Offer">
    <a property="url" href="save-a-lot-monitors.com/dell-30.html">
      Save A Lot Monitors - $1250</a>
  </div>
  <div property="offers" typeof="Offer">
    <a property="url" href="jondoe-gadgets.com/dell-30.html">
      Jon Doe's Gadgets - $1350</a>
  </div>
  ...
</div>
```

More specifically:

1.  `itemprop` is replaced with `property`.
2.  `itemscope` is dropped.
3.  `itemtype` is replaced with `typeof`.

In addition, the attribute value pair `vocab="https://schema.org/"` is added to the body or some other enclosing tag.

## Background notes

The following sections provide additional information for some of schema.org's more general/abstract terms.

### mainEntity(OfPage) property

Background information on [mainEntityOfPage](https://schema.org/mainEntityOfPage) / [mainEntity](https://schema.org/mainEntity) properties.

[mainEntityOfPage](https://schema.org/mainEntityOfPage) "Indicates a page (or other CreativeWork) for which this thing is the main entity being described."

Many (but not all) pages have a fairly clear primary topic, some entity or thing that the page describes. For example a restaurant's home page might be primarily about that Restaurant, or an event listing page might represent a single event. The mainEntity and mainEntityOfPage properties allow you to explicitly express the relationship between the page and the primary entity.

Related properties include [sameAs](https://schema.org/sameAs), [about](https://schema.org/about), and [url](https://schema.org/url).

The [sameAs](https://schema.org/sameAs) and [url](https://schema.org/url) properties are both similar to [mainEntityOfPage](https://schema.org/mainEntityOfPage). The url property should be reserved to refer to more official or authoritative web pages, such as the item’s official website. The sameAs property also relates a thing to a page that indirectly identifies it. Whereas sameAs emphasises well known pages, the mainEntityOfPage property serves more to clarify which of several entities is the main one for that page.

mainEntityOfPage can be used for any page, including those not recognized as authoritative for that entity. For example, for a product, sameAs might refer to a page on the manufacturer’s official site with specs for the product, while mainEntityOfPage might be used on pages within various retailers’ sites giving details for the same product.

[about](https://schema.org/about) is similar to mainEntity, with two key differences. First, about can refer to multiple entities/topics, while mainEntity should be used for only the primary one. Second, some pages have a primary entity that itself describes some other entity. For example, one web page may display a news article about a particular person. Another page may display a product review for a particular product. In these cases, mainEntity for the pages should refer to the news article or review, respectively, while about would more properly refer to the person or product.

### "identifier" property

Background information on the 'identifier' property and its sub-properties.

The [identifier](https://schema.org/identifier) property and its sub-properties are primarily useful in cases where the content is expressed as a textual string. Increasingly there are canonical URL/URI representations for each of these. All schema.org syntaxes already have built-in representation for URIs and URLs, e.g. in Microdata 'itemid', in RDFa 1.1, 'resource', in JSON-LD, '@id'. Generally it is preferable to use these unless there is a specific requirement to explicitly state the kind of identifier, or to provide additional / alternative identifiers (e.g., DOIs). Such requirements are common e.g. for scientific dataset description.

In some cases the values of the [identifier](https://schema.org/identifier) property indicate a set of (somewhat) interchangeable entities rather than a single distinct real world entity. Such sets could be viewed as corresponding to classes, but we do not explore that possibility here. For example [sku](https://schema.org/sku) and the various product-related GTIN codes. However [identifier](https://schema.org/identifier) is not intended to cover broader categorization and classification mechanisms. For example, although the [isicV4](https://schema.org/isicV4) property has values that are in some sense identifiers, we do not treat [isicV4](https://schema.org/isicV4) as a subproperty of [identifier](https://schema.org/identifier) since it serves to identify a category not an individual Thing (specifically, [Person](https://schema.org/Person)). Similarly, very many schema.org properties can have values that are written as URLs, but we do not treat those properties as specializations of [identifier](https://schema.org/identifier).

In the most complex case, there is sometimes a need to represent the type of an identifier. In this case, a [PropertyValue](https://schema.org/PropertyValue) pair ('name', 'identifier') pair can be used when a standard URI form of the identifier is unavailable. We do not currently have a recommended identifier scheme for identifier schemes, but in most cases there is a conventional short name for most identifier schemes (which should be used in lowercase form).

### History

Previous related work:

*   [RDF Schema](https://www.w3.org/TR/rdf-schema/)
*   [Meta Content Framework (MCF) Using XML](https://www.w3.org/TR/NOTE-MCF-XML-970606) (and [Tutorial](https://www.w3.org/TR/NOTE-MCF-XML/MCF-tutorial.html)).
*   [MCF whitepaper](http://www.guha.com/mcf/wp.html), [spec](http://www.guha.com/mcf/mcf_spec.html) and [basic vocabulary](http://www.guha.com/mcf/vocab.html).
*   See also [Semantic network](https://en.wikipedia.org/wiki/Semantic_network) article on Wikipedia.

