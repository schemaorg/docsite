---
layout: default
title: How We Work
parent: About
nav_order: 1
---

# How We Work

This document provides a brief overview of schema.org's process for developing and changing schemas. It accompanies the [about schema.org](about.html) page which describes the organizational structure of the project.

**Note**: the [schema.org](https://schema.org/) site contains the officially released version of schema.org, while [webschemas.org](http://webschemas.org/) is the very latest work-in-progress development branch of schema.org containing more recent fixes and improvements but which may contain changes that do not represent the consensus of the wider community or of the project [steering group](about.html#cgsg). See ["pending"](#pending) below for more details.

This document contains a minimal amount of technical detail sufficient to explain our approach to schema evolution. Operational details for project collaborators can be found via the [how we work](https://www.w3.org/community/schemaorg/how-we-work/) section of the [Schema.org W3C Community Group](https://www.w3.org/community/schemaorg/).

## Overview

A quick summary.

*   Most materials on schema.org are updated via [official named releases](https://schema.org/docs/releases.html) (every few weeks).
*   Simple improvements around supporting documentation, examples, sofware bugs etc. can be fast-tracked by the project [steering group](about.html#cgsg) as "Early Access Fixes"; these are also recorded in the [releases](https://schema.org/docs/releases.html) page, which may also be updated in between formal releases.
*   Improvements are discussed in our [community group](http://www.w3.org/community/schemaorg) at W3C, typically in the project's [github issue tracker](http://github.com/schemaorg/schemaorg/issues).
*   A work-in-progress development version of the site named "[webschemas.org](http://webschemas.org/)" is maintained by the [project webmaster](#webmaster) based on github and W3C community group discussions, proposals and change requests. It forms the basis for periodic "release candidates" and reflects the current state of the project's public Github repository.
*   A "live" hosted extension dedicated to "pending" new vocabulary proposals is maintained as part of this process at [pending.webschemas.org](https://webschemas.org/docs/pending.home.html), and can be updated (including to [pending.schema.org](http://schema.org/docs/pending.home.html)) by the [project webmaster](#webmaster) immediately, rather than waiting for a full official release. This serves to highlight possible new vocabulary improvements but may not always reflect wider consensus in the community and steering groups.
*   Periodically, snapshots of the community's _rough consensus_ are published as release candidates by the project webmaster, for review by the [steering group](/about.html#cgsg).
*   After steering group [review](#w3rel) and approval, if no concerns are raised within 10 business days, the schema.org site is updated with the new release by the project webmaster.

## Versioning and change control

Schema.org is developed incrementally. Since 2011 we have published several substantial updates a year. These are known as _releases_ and are documented on the [releases](http://schema.org/docs/releases.html) page. Each release has a name that is assigned upon publication (e.g. "2.1"). Recent releases have also been given project-internal code names prior to launch, e.g. "sdo-phobos", which makes it easier to decide upon the final name (e.g. "2.9" versus "3.0") as the work develops.

The content of each release is based on public discussions hosted on W3C's community group platform and on the Github site. All [changes](http://schema.org/docs/releases.html) to the project have been through unanimous agreement of the Steering Group membership, strongly informed by the opinions, contributions and discussions in the wider community.

Recently we have been expanding on this model with two types of [extension](extension.html) vocabulary: hosted and external extensions. Hosted extensions are effectively part of schema.org but "tagged" within a subdomain (e.g. [bib.schema.org](http://schema.org/docs/bib.home.html), [auto.schema.org](http://schema.org/docs/auto.home.html)). External extensions (e.g. see [GS1's Web Vocabulary](http://blog.schema.org/2016/02/gs1-milestone-first-schemaorg-external.html)) are published elsewhere on the Web, and are typically managed by other organizations with their own processes, versioning systems and collaboration mechanisms. Hosted extensions are managed and published as part of the schema.org project, with their design often led by one or more dedicated community groups.

For general use, publishers and consumers are encouraged to use the latest release and to use simple non-versioned schema.org URLs such as 'https://schema.org/Place' in structured data applications. However there are settings in which more precise versioning is important. Schema.org also provides dated snapshots of each release, including both human and machine readable definitions of the schema.org core vocabulary. These are linked from the [releases page](http://schema.org/docs/releases.html). In addition, the [schemaVersion](https://schema.org/schemaVersion) property has been defined to provide a way for documents to indicate the specific intended version of schema.org's definitions. Finally, all changes to the site and its underlying software are now [published via Github](https://github.com/schemaorg/schemaorg/).

## Schema structure

The schema.org site contains:

*   A homepage and a few [overview documents](/) such as this.
*   Term definitions - one page for each term. Every schema.org term is either a type (e.g. [Event](https://schema.org/Event)), a property (e.g. [workPerformed](https://schema.org/workPerformed)), or an enumerated value (e.g. [ReservationCancelled](https://schema.org/ReservationCancelled)). Definitions consist of an identifier such as "`Event`", a short textual (HTML) definition, including cross-references and links, as well some factual metadata about the terms. The approach we use is based on [W3C RDFS](https://www.w3.org/TR/rdf-schema/) with some [customizations](#schemalang) summarized below.
*   Machine-readable files (not intended for humans):
    *   [schema_org_rdfa.html](https://schema.org/docs/schema_org_rdfa.html) - the underlying technical definition of the (core) schemas. Hosted extensions are represented in similar files, see data/ext/* in the github repository.
    *   A [JSON-LD context file](https://schema.org/docs/jsonldcontext.json) (also available to software [via](https://en.wikipedia.org/wiki/Content_negotiation) the homepage, in application/ld+json format). This is generated by software automatically, and is needed for schema.org's use with the W3C JSON-LD format. The main purpose is to record for each property in schema.org whether the default interpretation of a string value in JSON-LD should be URL or text. This allows publishers to use relative links (e.g. "../news/") more reliably. Schema.org properties that expect [URL](/URL) amongst their values are listed in this way in the JSON-LD definitions. Currently the history of the context document is not archived, but [discussion](https://github.com/schemaorg/schemaorg/issues/1101) on this point is welcome.
    *   Other machine-oriented files are available via [github](https://github.com/schemaorg/schemaorg/tree/main/data/releases).

## Schema definitions

Schema.org essentially defines a dictionary of terms (types, properties and enumerated values). To understand its evolution, a brief summary of the definition structure is needed (see also [datamodel overview](/SchemaInfo/datamodel.html)). In schema.org, each type can have one or more supertypes, although it is rare to have more than one supertype. This provides the main [hierarchical](https://schema.org/docs/full.html) navigational structure of schema.org: a tree of types with [Thing](https://schema.org/Thing) at the root. Each property may have a more general super-property (e.g. [partOfSeason](https://schema.org/partOfSeason) is a specialization of [isPartOf](/isPartOf)), but there is no unified hierarchy of properties. Pairs of properties can also be marked as being inverses of each other: i.e. they say effectively the thing, expressed in opposite direction, e.g. [alumni](https://schema.org/alumni)/[alumniOf](https://schema.org/alumniOf), [isPartOf](https://schema.org/isPartOf)/[hasPart](https://schema.org/hasPart).

It is also important to understand what schema.org does _not_ define or dictate. In particular schema.org does not define any notion of 'mandatory' property. Different sites and pages naturally have different amounts of information available; these details cannot be anticipated by schema designers. Similarly, the information needs of consuming services may also vary. We do not attempt to reach consensus at schema.org on what an ideal description of some type (Person, Place, TVSeries etc.) ought to contain - this makes consensus significantly easier to achieve. The schema.org site does contain many practical markup examples, which give rough hints about common and useful patterns for combining schema.org terms.

Each release can include several kinds of change:

*   Bug fixes and minor improvements (e.g. typos, markup errors in examples).
*   New examples.
*   Adjustments to the textual descriptions of terms (i.e. types, properties and enumerated values).
*   Adjustments to the examples that accompany each term, and to the indexing of which terms an example should show up against. Although examples are not formally part of the schema definitions, they play a central role in schema.org's widescale adoption and are versioned as part of the release.
*   Adjustments to the machine-readable claims we make about each term: supertype(s), superproperties, inverses, and the associations that link types and properties together. For each property we maintain a list of one or more types that it is expected to be applied to (technically, "[domainIncludes](https://schema.org/domainIncludes)"), alongside one or more types that are expected as its values (expressed using "[rangeIncludes](https://schema.org/rangeIncludes)"). We may also mark some properties as "[supersededBy](https://schema.org/supersededBy)" others. It is exceptionally rare for a property, type or enumerated value to be deleted/removed without leaving it in the system as "supersededBy" another. Additional machine-readable metadata in RDFS/OWL is also used to express mappings internally and to external vocabularies. These mappings also evolve.
*   Term descriptions and definitions can be moved between schema.org's core and its hosted extensions. Each schema.org term is marked as being "[partOf](https://schema.org/isPartOf)" either the core or exactly one extension, and terms can move in either direction. Terms can be generalized for wider use and moved into the core, or migrated from the core into a hosted extension. In both cases, textual definitions and machine-readable definitions may be adjusted.

Schema.org property names are considered "global" across the entire project (including the core and all hosted vocabularies such as "[auto](https://schema.org/docs/auto.home.html)", "[bib](https://schema.org/docs/bib.home.html)" etc.). For example, there is only one property such as "[startDate](https://schema.org/startDate)", and both its human-readable and machine-readable definitions need to be appropriate to all the situations in which it might be used. In the case of "startDate" (defined currently as "The start date and time of the item"), the text has to be appropriate to all of the different combinations of types it can be used with.

This situation drives many of the evolutionary changes to schema.org. Often properties are added for some specific use case, and their potential relationship to other areas of schema.org only becomes clear later. This gives rise to changes in textual definition and property-to-type associations that gradually make schema.org more coherent, without introducing radical changes in meaning. Consumers of schema.org data can generally rely on schema.org term meanings not changing dramatically; however term definitions often evolve gradually over time, to accomodate new usage scenarios or to improve usability.

A common change is for a property to be marked as applicable to some previously unrelated type, or to expect to take values of a new type. When this happens the textual definitions are often adjusted slightly too. This is either by listing the new types explicitly, or through the use of a more general term like "item", "entity" or "thing". The issue summaries in the project [releases](https://schema.org/docs/releases.html) page are a good guide to the kind of changes to expect in future.

## Extensibility Mechanisms

In addition to the two dedicated [extension](SchemaInfo/extension.html) mechanisms (hosted and external) there are several other ways in which schema.org structured data can be extended with complete independence from the evolving definitions and discussions at schema.org.

*   Schema.org data can be published within the same page or document as other kinds of structured data e.g. microformats, RDFa, JSON-LD and Microdata that use independent vocabularies.
*   Schema.org provides the [PropertyValue](https://schema.org/PropertyValue) which can be used to expose arbitrary property/value data pairs within a larger schema.org description. This is used e.g. on e-commerce sites to expose key/value information that does not map easily into schema.org terminology.
*   Schema.org provides the [Role](https://schema.org/Role) mechanism which allows any piece of schema.org to be arbitrarily annotated with extra information.
*   Schema.org's supported syntaxes (in particular JSON-LD and RDFa but to some extent Microdata) support the mixing of other independent schemas into a schema.org-based description. Schema.org in JSON-LD (via our [context definition](https://schema.org/docs/jsonldcontext.json)) and in RDFa 1.1 (via W3C's [initial context](https://www.w3.org/2011/rdfa-context/rdfa-1.1) definition) has pre-supported declarations for many additional schemas identified by short prefix, e.g. 'dc' for Dublin Core.

These mechanisms provide for greater expressivity within schema.org-based structured data. They are independent of schema.org vocabulary definitions and release planning, versioning etc. and no community approval, agreement or steering group consensus is needed to make use of these mechanisms.

## Early Access Fixes and Pending Releases

**Early Access Fixes**: We have recently introduced mechanisms for more rapid updates to the schema.org site, in between official named releases. Prior to 2015, the schema.org site was only ever updated during official releases (or for occasional emergency repairs such as software bug fixes). In 2015 we introduced both the hosted [extensions](/SchemaInfo/extension.html) mechanism and the notion of "Early Access Fixes" which could be published to schema.org immediately with the agreement of the steering committee. An "Early Access Fixes" section at the top of the [releases](https://schema.org/docs/releases.html) page lists any recently implemented fixes that have occurred since the most recent release.

For versioning purposes the changes are considered part of the subsequent full release.

Version 3.0 of schema.org introduces the "pending schemas" extension. The pending extension is a staging area for work-in-progress terms which have yet to be accepted into the core vocabulary. Pending terms are subject to change and should be used with caution. Implementors and publishers are cautioned that terms in the pending extension may lack consensus and that terminology and definitions could still change significantly after community and steering group review. Consumers of schema.org data who encourage use of such terms are strongly encouraged to update implementations and documentation to track any evolving changes, and to share early implementation feedback with the wider community. See also [FAQ entry below](#devpending).

## Workflow FAQ

This page has a relatively limited audience. Here are some questions and answers that go into greater depth than the more mainstream, webmaster-focussed [schema.org FAQ](/SchemaInfo/faq.html).

<dl>

<dt id="publicvocabs">What are [public-vocabs](http://lists.w3.org/Archives/Public/public-vocabs/) and the [W3C WebSchemas](https://www.w3.org/wiki/WebSchemas) group?</dt>

<dd>When the project launched in 2011 we created a temporary collaborative home for discussions about the project at W3C. This was the "[Web Schemas](https://www.w3.org/wiki/WebSchemas)" taskforce (see [charter](https://www.w3.org/2001/sw/interest/webschema.html)) of the W3C Semantic Web Interest Group. The general names were chosen to reflect the importance of a wide-ranging discussion group that looked into how schema.org related to other structured data vocabularies. As W3C's Community Group platform matured and we found schema.org discussions had become the primary focus of the public-vocabs list, schema.org moved to use instead a dedicated Community Group at W3C. Several other groups working on schema.org extensions have subsequently set up their own Community Groups. The public-vocabs mailing list and Web Schemas Wiki remain available, but active collaboration on schema.org now uses the [new Community Group mailing list](http://lists.w3.org/Archives/Public/public-schemaorg) alongside [Github](http://github.com/schemaorg/schemaorg/).</dd>

<dt id="plans">Where's the plan?</dt>

<dd>The day-to-day running of the project is driven by the [github issue list](http://github.com/schemaorg/schemaorg/issues). This covers new vocabulary proposals, modest improvements and fixes for integration, as well as internal software tooling issues. As there are many open issues, some high level entry points are available: issues [#1](https://github.com/schemaorg/schemaorg/issues/1 "Meta: schema.org planning") (planning), [#2](https://github.com/schemaorg/schemaorg/issues/2 "Proposed vocabulary additions/changes - general rolling overview") (vocab changes) and [#3](https://github.com/schemaorg/schemaorg/issues/3 "Meta bug to provide overview of all python/site tool issues") (tooling/infrastructure) provide some views into to the various fine-grained issues, as do the labels we attach e.g. [cleanup](https://github.com/schemaorg/schemaorg/issues?q=is%3Aopen+is%3Aissue+label%3A%22type%3Acleanup+%2B+clarity%22). Generally the project steering group and community prioritize modest (small sized) proposals that maps easily onto structured content that is already widely published in the Web, and vocabulary that is likely to be used in large scale projects of all kinds. The project's core emphasis remains public Web content but schema.org vocabulary has been used in other settings e.g. structured data in email, and discussions are welcome on new areas where it may prove useful.</dd>

<dt id="opinfo">Where are operational details (e.g. github issue tagging policies, related community groups, events etc.) described?</dt>

<dd>

Accompanying this document, we also have a ["how we work" section](https://www.w3.org/community/schemaorg/how-we-work/) of the Schema.org [community group](https://www.w3.org/community/schemaorg/). Practical day-to-day details are organized around those pages.

</dd>

<dt id="devpending">What is the difference between the "pending" schemas mechanism and the development version of the site?</dt>

<dd>

The "[pending schemas extension](#pending)" and the development version of the site are two mechanisms we use for making works-in-progress available.

*   The "pending" extension contains one or more self-contained proposals that add new terms (types, properties and enumerated values) to schema.org.
*   The development version of schema.org is [webschemas.org](http://webschemas.org/). It is a 1:1 representation of the current contents of the main development branch of the project's [Github](https://github.com/schemaorg/schemaorg) repository.

All hosted extensions, i.e. "bib", "auto", "meta" etc., including the "pending" extension and the schema.org "core" itself, are developed within the main project file repository, and consequently have "work in progress" development representations on webschemas.org as well as official named releases.

### Background

For several years we have used "testing" versions of the site to publish proposed designs. These were sometimes named after particular schemas (e.g. sdo-actions) or after upcoming releases (e.g. sdo-phobos). To simplify this process and to emphasise integration of changes, we began also posting a unified "next version of the site" draft. This is now available consistently at [webschemas.org](http://webschemas.org). Other more exploratory test sites illustrating potential major changes can also still be used. The "in development" webschemas.org site may also contain software bugs, be occasionally offline, or be in an inconsistent state due to ongoing editorial work.

The "pending" extension is a related idea. Effectively it exploits our relatively new "hosted extensions" machinery to address a workflow problem that has affected the project from the beginning. Many interesting and sensible schema.org vocabulary ideas have been proposed which, while self-consistent and useful, have not received focussed attention from the community, or been approved for inclusion into the schema.org core by the project steering group. By publishing these proposals directly through a "pending" extension, we encourage more detailed implementation proposals and make wider review much easier.

This means that there is a "live, development version" set of pending schemas at pending.webschemas.org, as well as a released version at pending.schema.org. The [project webmaster](#webmaster) can update pending.schema.org with new proposals drafted at pending.webschemas.org in order to share a complete design more widely.

</dd>

<dt id="whenpending">When should a change proposal go into pending, rather than be drafted as a direct edit to the schema.org core?</dt>

<dd>

The "pending" area of the site is an optional collaborative mechanism, best suited to relatively self-contained changes that _add_ new vocabulary. It remains perfectly reasonable to propose core changes directly (via Github issues and pull requests, and [commmunity discussion](http://www.w3.org/community/schemaorg)). The pending mechanism can only handle changes to the core that are _additive_. For example, if you want to propose a new type, and also amend the definition of an existing property to reference it (without changing its existing relationship to existing types), this is possible to do as a pending proposal. If instead you want to change the textual definition of an existing type, or alter its supertype, then the pending extension mechanism is not appropriate.

The pending extension can be considered an integration-oriented "melting pot" where proposed additions can be seen alongside each other. While these proposals generally originate in community discussions, the project webmaster is responsible for coordinating and synthesising related proposals, as well as encouraging discussion amongst their contributors.

</dd>

<dt id="extfreq">Hosted Extensions: how are they versioned, published etc.?</dt>

<dd>

Since the initial implementation of hosted extensions (i.e. bib.schema.org, auto.schema.org), they have effectively been managed as an extended part of schema.org's core: updated on the same release cycle, and reviewed in the same steering and community group discussions. As more communities begin contributing via hosted extensions we expect to revise this document to provide more details on publication and versioning workflow for these extensions. At the current time hosted extensions are updated in the same release schedule as the schema.org core vocabulary. However we expect this process to remain relatively centralized due to the many ways in which schemas can overlap in topical scope, as well as the need for careful assignment of term names to avoid clashes or overly domain-specific definitions.

In addition, each hosted extension has a customizable homepage, which can also provide a natural language explanation of the status of that work, including links to supporting information and related community groups.

</dd>

<dt id="webmaster">What is the role of the Schema.org webmaster?</dt>

<dd>The Schema.org webmaster's role, assisting the [steering group](about.html#cgsg), is to:

*   Take operational responsibility for the day-to-day running of the schema.org site and other online presence such as W3C community groups, Github, development sites.
*   Prepare and implement release candidates and site updates as described in [this document](/SchemaInfo/howwework.html), drawing upon the rough consensus of the wider community, and implemented with the approval of the steering committee.
*   Faciliate wide-ranging community and industry involvement during schema design discussions, e.g. via W3C, Github.

The current schema.org webmaster is Dan Brickley, who serves in this capacity on behalf of the schema.org project rather than on behalf of his employer, Google.</dd>

<dt id="w3rel">How is this work related to W3C? How does the steering group mechanism work in practice?</dt>

<dd>

Schema.org is an independent project whose discussions occur within W3C Community Groups. Schema.org data is expressed within underlying infrastructural standards produced by W3C (JSON-LD, RDFa, CSVW) as well as by WHATWG (Microdata). Schema.org is focussed on using these aspects of the Web platform for descriptive purposes within structured data, rather than on developing the underlying infrastructure, protocols and technical formats of the Web itself. The project is not governed by W3C, the W3C advisory group or the [W3C Process](http://www.w3.org/Consortium/Process/); rather, it is part of a wider network of informal collaboration in the Web standards community. Participants in community group and Github discussions are expected to respect the [W3C code of ethics and professional conduct](https://www.w3.org/Consortium/cepc/), as well as each other. Attention is also drawn to the [terms of service](/terms.html) document which includes copyright (CC BY-SA 3.0) and W3C RF commitments from schema.org's founders (i.e. the founding search engines).

In terms of workflow, the primary difference between schema.org and W3C's recommendation track process is an emphasis on incremental publication of releases (several releases per year) approved by a small [steering group](/about.html#cgsg) whose role is to evaluate and approve release candidates prepared by the project [webmaster](#webmaster) on the basis of wider discussion. Releases are [published](https://schema.org/docs/releases.html) to the official site by the [project webmaster](#webmaster) following the review and approval of the [steering group](/about.html#cgsg). Steering Group review occurs in public email threads (e.g. [v2.0](https://lists.w3.org/Archives/Public/public-schemaorg/2015May/0000.html), [v2.1](https://lists.w3.org/Archives/Public/public-schemaorg/2015Jul/0003.html), [v2.2](https://lists.w3.org/Archives/Public/public-schemaorg/2015Sep/0007.html), [v3.0](https://lists.w3.org/Archives/Public/public-schemaorg/2016Apr/0053.html)) and the conversation is open to all schema.org project contributors via the W3C Schema.org Community Group. These public email discussions of the steering group are effectively the publication of steering group minutes. Release review discussions are on the main [public-schemaorg@w3.org](https://lists.w3.org/Archives/Public/public-schemaorg/) Community Group list. There is also a [rarely used](https://groups.google.com/forum/#!forum/schema-org-sg) email list for the steering group (also public), but the Community Group and Github are the main hub for all project activities and internal communication. The project has never published a release without the unanimous agreement of the steering group. Steering group members who share an employer have adopted the convention that one "agree to publish this release" message serves for their colleagues also.

Schema.org's various [extensibility mechanisms](#extensibility) serve to ease the reliance on steering group and wider community consensus. For example, [GS1](http://gs1.org/) have published their own schema.org-oriented [Web Vocabulary](http://gs1.org/voc/) as an [external extension](http://blog.schema.org/2016/02/gs1-milestone-first-schemaorg-external.html) to schema.org. No permission or consensus was required for this, and liaison was conducted through community group mechanisms rather than the steering group.

</dd>

<dt id="metaext">What is the 'meta' extension?</dt>

<dd>Schema.org contains a small number of terms that are used by schema.org itself for [defining schemas](#schemalang). Unlike the schema.org core vocabulary, they are not designed or intended for general use in the Web. These terms are now defined as a 'meta' extension.</dd>

<dt id="getinvolved">How can I get involved? How can I propose new schemas or other improvements?</dt>

<dd>

The main forum for schema.org discussions is the [W3C Schema.org Community Group](http://www.w3.org/community/schemaorg/). There are also a number of more topical [related community groups](#grouplist), as mentioned below. Anyone can participate in these or [other](http://www.w3.org/community/) W3C community groups, regardless of whether their employer has [joined W3C](https://www.w3.org/Consortium/join). These groups each host public email-based discussions. For schema.org, due to the broad scope of the project, the majority of our detailed discussions tend to occur in Github, organized as "[issues](https://github.com/schemaorg/schemaorg/issues)". Substantial textual contributors (of schemas and examples) are expected to join the community group and review the project [terms of service](/terms.html), but everyone is welcome to discuss issues (in Github or elsewhere), suggest small changes or otherwise collaborate.

The best way to propose changes to schema.org is to raise an [issue](https://github.com/schemaorg/schemaorg/issues) at Github, perhaps accompanied by a thread on the [public-schemaorg@w3.org mailing list](https://lists.w3.org/Archives/Public/public-schemaorg/). Simple and modestly sized change proposals, and changes that are likely to be used tend to reach a rough consensus most easily. More complex topics (e.g. our designs around [Action](https://schema.org/Action) and [Role](https://schema.org/Role)) can take substantively longer.

</dd>

<dt id="sponsorgetinvolved">I work for one of the Schema.org-founding search engines (originally known as "sponsors"). How can I get involved? How can I propose new schemas or other improvements?</dt>

<dd>See [previous question](#getinvolved).</dd>

<dt id="grouplist">Where are all the schema.org-related W3C community groups listed?</dt>

<dd>See the [how we work](https://www.w3.org/community/schemaorg/how-we-work/) materials over in our W3C group for a list.</dd>

<dt>Further reading...?</dt>

<dd>

For more background on the project, the following may be of interest:

*   [ACM Queue article](http://queue.acm.org/detail.cfm?id=2857276)
*   Richard Wallis's "schema.org in practice" articles: [part 1](http://dataliberate.com/2016/02/10/evolving-schema-org-in-practice-pt1-the-bits-and-pieces/), [2](http://dataliberate.com/2016/02/25/evolving-schema-org-in-practice-pt2-working-within-the-vocabulary/), and [3](http://dataliberate.com/2016/03/01/evolving-schema-org-in-practice-pt3-choosing-where-to-extend/).
*   R.V.Guha [Light at the end of the Tunnel](http://videolectures.net/iswc2013_guha_tunnel/) talk (video + [pdf slides](http://videolectures.net/site/normal_dl/tag=817824/iswc2013_guha_tunnel_01.pdf)), ISWC 2013.
*   Charles Nevile [Schema.org - What, How, Why?](http://tlks.io/talk/schemaorg-what-how-why) talk (video).
*   Peter Mika [Making the Web searchable](https://www.youtube.com/watch?v=Dw2OhqvB0cE) talk (video).
*   [SemTech's Schema.org Panelists Talk Openness, Adoption, Interoperability](http://www.dataversity.net/semtechs-schema-org-panelists-talk-openness-adoption-interoperability/), 2012 article.
*   [Schema.org Update 2014](https://docs.google.com/presentation/d/1f-2asymXOCCYHa75OkOnlqc0SExvD44V5D6buyKHfII/edit), Dan Brickley. SemTech Biz presentation.

</dd>

</dl>
