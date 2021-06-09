---
layout: default
parent: Additional Resources
---

## Schema.org Extensions (2014-2018)

**Status Note:**

This page is archived. See also [2011-2014 documentation](/Extensions/old_extension.html). Our [approach](/Extensions) was refined again in April 2019.

We have two kinds of named extension to schema.org: 'hosted' and 'external'. This is in addition to the ongoing practice of extending schema.org via the changes and improvements included in every [release](https://schema.org/docs/releases.html).

Hosted extensions are managed and reviewed as part of the schema.org project itself. External extensions are managed and reviewed by other groups. See the [schemas page](/SchemaInfo/schemas.html) for a listing.

* * *

### Motivation

Schema.org provides a core, basic vocabulary for describing the kind of entities the most common web applications need. There is often a need for more specialized and/or deeper vocabularies, that build upon the core. The extension mechanisms facilitate the creation of such additional vocabularies.

With most extensions, we expect that some small frequently used set of terms will be in core schema.org, with a long tail of more specialized terms in the extension.

### Types of Extensions

There are two kinds of extensions: reviewed/hosted extensions and external extensions. Both kinds of extensions typically add subclasses and properties to the core. Properties may be added to existing and/or new classes. More generally, they are an overlay on top of the core, and so they may add domains/ranges, superclasses, etc. as well. Extensions have to be consistent with the core schema.org. Every item in the core (i.e., https://schema.org/) is also in every extension. Extensions might overlap with each other in concepts (e.g., two extensions defining terms for financial institutions, one calling it FinancialBank and other calling it FinancialInstitution), but we should not have the same term being reused to mean something completely different (e.g., we should not have two extensions, one using Bank to mean river bank and the other using Bank to mean financial institution).

### Reviewed/hosted Extensions

Each reviewed extension (say, e1), gets its own chunk of schema.org namespace: e1.schema.org in the schema.org website. The items in that extension are created and maintained by the creators of that extension. Reviewed extensions are very different from proposals. A proposal, if accepted, with modifications could either go into the core or become a reviewed extension.

A reviewed extension is something that has been looked at and discussed by the community, albeit not as much as something in the core. We also expect a reviewed extension to have strong community support, preferably in the form of a few deployments.

### External Extensions

Sometimes there might be a need for a third party (such as an app developer) to create extensions specific to their application. For example, Pinterest might want to extend the schema.org concept of ‘Sharing’ with ‘Pinning’. In such a case, they can create schema.pinterest.com and put up their extensions, specifying how it links with core schema.org. We will refer to these as external extensions.

There are also cases where a third party might want to host a broadly applicable extension themselves. In such cases, the extension may go through the kind of feedback process that reviewed extensions go through, but can be hosted on the third party's site.

### How it works for webmasters

All of Schema.org core and all of the reviewed extensions are available from the schema.org website. Each extension is linked to from each of the touch points it has with the core. So, if an extension (say, having to do with Legal stuff) creates _LegalPerson_ which is a subclass of _Person_, the Person will link to LegalPerson.

Reviewed extensions are identified in the website with an appropriate URL prefix. For example _bib.schema.org_ for bibliographic terms, _auto.schema.org_ for automotive terms. These URL prefixes are only applicable to the documentation of terms within an extention. The Schema.org vocabulary and its reviewed extensions are defined in a flat namespace. ie. All terms, in the core vocabulary and extensions, within the vocabulary have a _https://schema.org_ based cannonical URI. For example the [MotorizedBicycle](https://schema.org/MotorizedBicycle) type defined in the [auto.schema.org](https://schema.org/docs/auto.home.html) extension and documented on the _https://schema.org/MotorizedBicycle_ page, has a cannonical URI of _https://schema.org/MotorizedBicycle_. The cannonical URI is the value that is used when applying Schema.org markup.

<pre><div itemscope itemtype="https://schema.org/MotorizedBicycle"></pre>

### What does someone creating an extension need to do

Extension creators to not have to worry about running a website for their extension. Once the extension is approved, they simply upload a file defining their extension and associated examples into an agreed directory for that extension on github. Changes are made through the same mechanism.

More information about proposing and implementing extensions can be found in [How We Work](/howwework.html).

**Historical Note:**  
This page introduces the new extension mechanism adopted in May 2015\. Documentation on the previous 'slash-based' extension mechanism [has been archived](/Extenstions/old_extension.html).</div>

