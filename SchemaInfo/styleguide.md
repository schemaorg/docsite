---
layout: default
title: Style Guide
parent: Schema Info
nav_order: 5
---


# Style Guide

## Overview

This document serves as a guide for using schema.org data, and for designing new or amended schemas. It contains information on principles of schema design, writing and naming conventions, as well as usability conventions for consuming schema. It does not currently address modeling design patterns. For further materials shared by Schema.org community members, see the [wiki](https://github.com/schemaorg/schemaorg/wiki) area of the project's [github repository](https://github.com/schemaorg/schemaorg/).

## Schema.org terms

There are three kinds of schema.org term in the schema.org [data model](datamodel.html): types, properties and enumerated values. All schema.org data is represented in a graph structure in which entities are related to each other by named properties.

## Type

*   TitleCase for case format (all words capitalized, all one string).
    *   E.g. [FoodEstablishment](/FoodEstablishment).
*   Types have associated properties.
    *   E.g. [FoodEstablishment](https://schema.org/FoodEstablishment) has the property [servesCuisine](https://schema.org/servesCuisine).
    *   There is a technical terminology, "_domain_" and "_range_" which is used during design discussions and in machine-readable files, but which is not intended for widespread use. For example, we say the _domain_ of "alumni" includes EducationalOrganization, and its _range_ includes "Person".
*   Types also take their associated properties from their parent types, i.e. their supertypes.
    *   E.g. FoodEstablishment has the property [openingHours](https://schema.org/openingHours) from its parent type(s), [LocalBusiness](https://schema.org/LocalBusiness), and has the property [address](https://schema.org/address) from its parent's parent, [Organization](https://schema.org/Organization).

## Property

*   Property names must use lowerCamelCase for format (first word lowercase, subsequent words capitalized, all one string).
    *   E.g. [servesCuisine](https://schema.org/servesCuisine).
*   Properties must have expected types.
    *   E.g. the property [servesCuisine](https://schema.org/servesCuisine) has the expected type [FoodEstablishment](https://schema.org/FoodEstablishment).
*   Properties may have more than one expected type.
    *   E.g. the property [acceptsReservations](https://schema.org/acceptsReservations) has the expected type [Boolean](https://schema.org/Boolean) or [Text](https://schema.org/Text) or [URL](https://schema.org/URL).
*   Properties may be used on more than one type.
    *   E.g. the property [starRating](https://schema.org/starRating) can be used on [FoodEstablishment](https://schema.org/FoodEstablishment) OR [LocalBusiness](https://schema.org/LocalBusiness).
*   Properties must not take properties.

## Enumerations

*   TODO: describe enumeration data model
*   TODO: add example

## Naming conventions

*   Do not give the same name to a type and a property.
    *   Note that schema.org has some legacy cases where this was done in the past. This practice should be avoided.
    *   E.g. Avoid creating both [ContactPoint](https://schema.org/ContactPoint) and [contactPoint](https://schema.org/contactPoint).
*   _Term names should use Singular naming only_, even if the semantics call for a plural.
    *   E.g. [parent](https://schema.org/parent) and not parents, even though for each type, there will always be multiple values for the property [parent](https://schema.org/parent).
*   _Prepositions_ should come after the type or property name.
    *   E.g. [reservationFor](https://schema.org/reservationFor).
*   _Abbreviations_: When creating new types, spell out abbreviations, unless the result is painfully verbose.
    *   Due to legacy entries, sometimes certain words may be abbreviated, or not, in schema.org. Due to lack of consistency, should search for both when looking for a schema term.
    *   E.g. [numTracks](https://schema.org/numTracks) exists in schema.org as a legacy property. If we were creating this property now, it would be _numberOfTracks_ (or better yet, name it _trackCount_ to be semantically aligned with other counting properties).
*   _Spelling_: US spellings must be used.
    *   E.g. [color](https://schema.org/color) and not colour.

## Additional notes

_Some additional notes on schema.org definitions._

*   Schema.org types have a specific semantic meaning above what the word itself _could_ mean; consuming applications can't just use a type because the name fits.
    *   E.g. [Physician](https://schema.org/Physician) as a type means a physician office, not a person who is a physician.
    *   Avoid using the word "type" unless refering to the technical notion of a type or class.
    *   Existing schema.org types and properties should be reused whenever the semantics needed already exist. The project will often adjust definitions (wording or type/property associations) to facilitate this; see the [releases](releases.html) page for examples.
    *   Schema.org uses open world philosophy: the omission of a claim should not be taken to imply negation: if a property isn't mentioned, this doesn't mean that it is false. Rather, it means that we don't know whether it's true or false.
    *   E.g. restaurant, [petsAllowed](https://schema.org/petsAllowed) is a boolean property (T/F) of [LodgingBusiness](https://schema.org/LodgingBusiness), but if [petsAllowed](https://schema.org/petsAllowed) is not set, then it is unknown whether pets are allowed.

