---
layout: default
parent: Additional Resources
---

## ("Slash-based") Extension Mechanism (2011-2015)

**Status Note:**

This page is archived. See also [2014-2018 documentation](old_extension_2015.html). Our [approach](/docs/extension.html) was refined again in April 2019.

This page introduces our original 2011-2014 approach to extensibility. In addition to this technique and our [new mechanisms](extension.html), other general extensibility mechanisms available for publishers include the use of RDFa and JSON-LD (as they are designed to work with multiple schemas), the [Role](/Role) type and [additionalType](/additionalType) property can now also be used for different extension scenarios.

It is also perfectly fine (and often useful) to combine schema.org with other "Web schemas" such as those listed in the [LOV](http://lov.okfn.org/dataset/lov/) catalogue.

Finally, we invite collaboration via [GitHub](https://github.com/schemaorg/schemaorg) and [W3C](http://www.w3.org/community/schemaorg) on improving schema.org's own schemas to make them more useful. See the [release history page](/docs/releases.html) to learn more about previous extensions that have been integrated.

* * *

### Original Text follows:

Many applications, including search, can make use of structured data only when it’s expressed using vocabularies that they understand. However, the variety and richness of structured data covering everything on the web is much too rich for a single organization (like [schema.org](https://schema.org/)) to completely cover.

Therefore, schema.org has created an extension mechanism that lets webmasters and developers extend our existing schemas. When you extend our schemas and use these extensions to mark up your data, search applications can at least partially understand your markup and use the data appropriately.

(Of course, you can always create new schemas that are not at all tied to those on schema.org, and you should do this if the content of your domain is not covered by any of the schema.org types. If the schema gains adoption and proves useful to search applications, search engines may start using this data.)

Extensions that gain significant adoption on the web may be moved into the core schema.org vocabulary, so that search engines can provide more functionality based on better understanding of the structured data.

## Note on naming conventions

Schema.org uses the following naming convention. We request that you follow this naming convention for your extensions as well.

*   Types and Enumerations start with a capital letter and are [CamelCase](http://en.wikipedia.org/wiki/CamelCase).
*   Properties start with a lower case letter and are also camelCase.

## How to extend schema.org vocabulary

schema.org uses the '/' character to create extensions that are specializations of existing schema.org vocabulary.

### Extending an existing property

Extend a property with a / character, followed by the name of the extension, like this:

<pre>musicGroupMember/leadVocalist
musicGroupMember/leadGuitar1
musicGroupMember/leadGuitar2
</pre>

### Extending an existing class

Extend a class name with the character '/' followed by the name of the extension, like this:

<pre>Person/Engineer
</pre>

To introduce a new class that is a specialization of an existing specialized class, continue in the same way, like this:

<pre>Person/Engineer/ElectricalEngineer
</pre>

### Extending an enum item

Extend an existing enumeration name with the character '/' followed by the name of the extension. For example, to extend the existing item `EBook` with the more specialized `KindleBook`:

<pre>EBook/KindleBook
</pre>

You can introduce new properties for any class defined on [schema.org](https://schema.org), even if the property is not a specialization of an existing property. We encourage webmasters to do this, rather than defining a new class independently, so that at least some of the information about the entity being described can be understood by search engines.

Of course, you can always create new schemas that are not at all tied to those on schema.org, and you should do this if the content of your domain is not covered by any of the schema.org types. As soon as your schemas gain sufficient adoption, search engines will start using their data.

</div>

<div id="footer">

<div id="versioninfo">V12.0  
2021-03-08</div>

[Terms and conditions](/docs/terms.html)</div>

<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','//www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-52672119-1', 'auto'); ga('send', 'pageview');</script>