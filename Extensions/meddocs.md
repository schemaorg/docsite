---
layout: default
title: Health and medical types
parent: Extensions
nav_order: 1
---

# Documentation for health/medical types

This page describes the health and medical types in the schema.org schema ([MedicalEntity](https://schema.org/MedicalEntity) and subtypes), useful for content publishers that wish to mark up health and medical content on the web. Like all schema.org schemas, the health and medical schema is intended to make it easier for people to find the right web pages by exposing structured information contained in web pages to search engines, and may also enable other applications that make use of the structure.  

The scope of entities in this section of the schema is broad, and is intended to cover both consumer- and professionally-targeted health and medical web content; as a result, any particular piece of content is likely to use only a subset of the schema. The schema is targeted at web use cases and is not designed for clinical markup or clinical data exchange.  

Note as well that this schema is not intended to define or codify a new controlled medical vocabulary, but instead to complement existing vocabularies and onotologies. As a schema, its focus is on surfacing the existence of and relationships between entities described in content; the specific convention(s) used to name and/or code entities are outside of the scope of this schema. The schema does provide a way to annotate entities with codes that refer to existing controlled medical vocabularies (such as MeSH, SNOMED, ICD, RxNorm, UMLS, etc) when they are available. For example, see the [sample markup for MedicalScholarlyArticle](https://schema.org/MedicalScholarlyArticle).  

For more details about the schema, and background on how it came to be, read on below. You can find some examples of use of the schema on the following types:

*   [MedicalCondition](https://schema.org/MedicalCondition) (information about a specific medical condition)
*   [Drug](https://schema.org/Drug) (information about a medical drug)
*   [MedicalGuideline](https://schema.org/MedicalGuideline) (a medical guideline)
*   [MedicalWebPage](https://schema.org/MedicalWebPage) (a single-topic web page about a health or medical topic)
*   [MedicalScholarlyArticle](https://schema.org/MedicalScholarlyArticle) (a page with a record, abstract, or full text of a medical scholarly publication).

**Background and history:**  
There is a great deal of high-quality health and medical information on the web. Today it is often difficult for people to find and navigate this information, as search engines and other applications access medical content mostly by keywords and ignore the underlying structure of the medical knowledge contained in that content. Moreover, high-quality content can be hard to find using a search engine if the content isn't optimized to map the content's concepts to the keywords that users tend to use in search. And while the medical community has invested significant effort in building rich structured ontologies to describe medical knowledge, such structure is today typically available only 'behind the scenes' rather than shared in the Web using standard markup.  

To address these issues, we've added a set of types to the schema.org schema that will offer a simple way for content providers to mark up the implicit structure in the medical information they publish. Our design goals differed from many previous initiatives, in that we focused on markup for use by Webmasters and publishers, with the main goal of helping patients, physicians, and generally health-interested consumers find relevant health information via search.  

Our approach is intended to be a framework for tagging known or novel medical concepts/entities, and optionally their relationships, as they appear in freeform text on the web. To manage scope, we have focused on markup that will help in use cases such as patients, physicians, and generally health-interested consumers searching for relevant health information. It is explicitly not our goal to replace existing ontology systems or to enumerate instances of medical entities, though our schema can link to and take advantage of existing ontologies and enumerations. It is also explicitly not a goal to support automated reasoning, medical records coding, or genomic tagging, all of which would require substantially more detailed (and hence high barrier-to-entry) modeling and markup.  

This initiative grew from a [collaborative project](http://lists.w3.org/Archives/Public/public-vocabs/2012May/0057.html) that drew upon search expertise from the schema.org partners but also gained immeasurably through feedback from expert reviewers including the US [NCBI](http://www.ncbi.nlm.nih.gov/); physicians at Harvard, Duke, and other institutions, as well as from several health Web sites. Contributions from the [W3C Healthcare and Lifesciences](http://www.w3.org/blog/hcls/) group and [Web Schemas](http://www.w3.org/wiki/WebSchemas) community also helped bridge the complex worlds of Web standards, search and medicine/healthcare.  

**Modeling approach:**  
The health and medical types model a core set of medical entities, including:

*   Conditions
*   Signs and symptoms
*   Causes
*   Risk factors
*   Therapies (including drugs and procedures)
*   Tests
*   Devices
*   Studies and trials
*   Guidelines
*   Diets
*   Supplements
*   Exercise plans
*   Anatomy

Properties of these core entities define the relationships between them, for example, linking medical therapies to medical conditions.  

This approach allows content authors to mark up pages in one of two ways. The preferred approach is to use the schema to mark up both entities and relationships, allowing for better retrieval when the user intent is known. For example, the following markup exposes the fact that this piece of content discusses ibuprofen in its role as a treatment for headache, thus allowing this content to be surfaced in response to queries about headache treatments:
```
<div itemscope itemtype="https://schema.org/Drug">
  <span itemprop="name">Ibuprofen</span> is a non-steroidal
  anti-inflammatory medication, indicated for temporary relief
  of minor aches and pains due to
  <span itemprop="indication" itemscope itemtype="https://schema.org/TreatmentIndication">
    <span itemprop="name">headache</span>
  </span>,
  <span itemprop="indication" itemscope itemtype="https://schema.org/TreatmentIndication">
    <span itemprop="name">toothache</span>
  </span>, ...
</div>
```

Alternatively, authors wishing to keep things simple can just tag each medical concept with the appropriate entity, ignoring relationships between them. This is less powerful, but still exposes the medical concepts in a piece of content to search engines and applications, making the content easier to find.  

Note that we've included an extensive set of properties on each of the modeled entities to allow for rich modeling when the structure is available. However not every property will be relevant or useful for every site or piece of content; like all schema.org schema, these properties and their use are optional.  

**Other considerations:**  
One challenge in effective retrieval of online medical information is that there are at least three distinct groups looking for medical content -- patients, practicing clinicians, and researchers -- and few cues to determine to which audience a piece of content is targeted. To address this, authors can use the audience and/or specialty properties of the [WebPage](https://schema.org/WebPage) type to mark up medical web pages with their target audience, including detailed targeting by specialty for clinician-targeted content. Similarly, the aspect property of [MedicalWebPage](https://schema.org/MedicalWebPage) allows content to be tagged with the aspects of medical practice being described on the page (diagnosis, treatment, etc).
