---
layout: default
title: Schemas
parent: Schema Info
nav_order: 1
---

# Organization of Schemas

The schemas are a set of 'types', each associated with a set of properties. The types are arranged in a hierarchy.  
Version 13.0 of the Schema.org vocabulary currently consists of 2782 terms: 792 Types, 1447 Properties 15 Datatypes, 83 Enumerations and 445 Enumeration members.  

Browse the full hierarchy in HTML:

*   [[One page per type]]{Thing}
*   [[Full list of types, shown on one page]]{docs/full.html}

Or you can jump directly to a commonly used type:

*   Creative works: [[CreativeWork]], [[Book]], [[Movie]], [[MusicRecording]], [[Recipe]], [[TVSeries]] ...
*   Embedded non-text objects: [[AudioObject]], [[ImageObject]], [[VideoObject]]
*   [[Event]]
*   [Health and medical types](/Extensions/meddocs.html): notes on the health and medical types under [[MedicalEntity]].
*   [[Organization]]
*   [[Person]]
*   [[Place]], [[LocalBusiness]], [[Restaurant]] ...
*   [[Product]], [[Offer]], [[AggregateOffer]]
*   [[Review]], [[AggregateRating]]
*   [[Action]]

See also the [[releases]]{docs/releases.html} page for recent updates and project history.  

We also have a small set of [[primitive data types]]{DataType} for numbers, text, etc. More details about the data model, etc. are available [here](/SchemaInfo/datamodel.html).  

Developer information / Download Machine Readable files (RDF, JSON-LD, etc):

*   [Schema.org for Developers](/Developers/developers.html)

## Extensions

As schema.org has grown, we have explored various mechanisms for [community extension](/Extensions) as a way of adding more detailed descriptive vocabulary that builds on the schema.org core. Some areas of Schema.org were developed as "named extensions", and have dedicated entry pages. We previously called these "hosted" extensions, but they are best considered simply as views into a single collection of schema definitions.

### Hosted Sections

For example, via the [[auto]]{/docs/auto.home.html} section there is a property for [[emissionsCO2]], and via the [[bib]]{/docs/bib.home.html} section we have a property [[publisherImprint]]. However, from the perspective of a publisher, these are simply schema.org properties.

We have a few of these sections:

*   [[auto]]{/docs/auto.home.html}
*   [[bib]]{/docs/bib.home.html}
*   [[health-lifesci]]{/docs/health-lifesci.home.html}
*   [[meta]]{/docs/meta.home.html}
*   [[pending]]{/docs/pending.home.html}

**Note**: the 'pending' and 'meta' hosted sections are part of schema.org's schema development process.

We use the '[[pending]]{/docs/pending.home.html}' section as a staging area for new schema.org terms that are under discussion and review. Implementors and publishers are cautioned that terms in the [[pending]]{/docs/pending.home.html} section may lack consensus and that terminology and definitions could still change significantly after community and [[steering group]]{/docs/about.html#cgsg} review. Consumers of schema.org data who encourage use of such terms are _strongly encouraged_ to update implementations and documentation to track any evolving changes, and to share early implementation feedback with the [wider community](http://www.w3.org/community/schemaorg).

The '[[meta]]{/docs/meta.home.html}' section is primarily for vocabulary used internally within schema.org to support technical definitions and schema.org site functionality. These terms are not intended for general usage in the public Web.

**[[Attic]]{/docs/attic.home.html}** is a special area where terms are archived when deprecated from the core and other sections, or removed from [[pending]]{/docs/pending.home.html} as not accepted into the full vocabulary. References to terms in the attic area are not normally displayed unless accessed via the term identifier or via the home page. Implementors and data publishers are cautioned not to use terms in the attic area.

Unlike other core and section terms, these areas may be updated at any time without the need for a full [[release]]{docs/releases.html}.

### External Extensions

The schema.org [steering group](/about.html#cgsg) does not officially approve external extensions - they are fully independent. We list here some notable extensions that extend schema.org in interesting and useful ways.

*   [GS1 Web Vocabulary](http://gs1.org/voc/) ([blog post](http://blog.schema.org/2016/02/gs1-milestone-first-schemaorg-external.html))

