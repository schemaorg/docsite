---
layout: default
title: US CDC COVID-19 Data Fields
parent: Schema Info
nav_order: 8
---

## Schema.org COVID-19: US CDC Data Table fields

<dl>

<dt>**Editor**:</dt>

<dd>Dan Brickley <[danbri@google.com](mailto:danbri@google.com)></dd>

<dt>**Last Updated**:</dt>

<dd>2020-04-02</dd>

</dl>

This document specifies a Schema.org representation of the following US [CDC](https://www.cdc.gov/) (Centers for Disease Control and Prevention) data format definition:

*   **Title**: Importing COVID-19 Patient Module Denominator data for Patient Safety Component (PSC)
*   **URL**: [https://www.cdc.gov/nhsn/pdfs/covid19/import-covid19-data-508.pdf](https://www.cdc.gov/nhsn/pdfs/covid19/import-covid19-data-508.pdf)

The representation defined here is intended to be 1:1 with the original representation and [round-trippable](https://en.wikipedia.org/wiki/Round-trip_format_conversion). The [CDC](https://www.cdc.gov/) document defines several data fields in a tabular format. These are represented in Schema.org as properties of an object of type CDCPMDRecord.

For all formal matters of interpretation for the properties listed in the table below, please refer to the source CDC documentation for authoritative definitions and official updates. This document (and accompanying schemas) may be updated in the future to track changes from CDC, but we cannot guarantee to do this immediately. Implementors are cautioned to check the CDC site for updates and clarifications. We expect that some aspects of the CDC definitions may change.

The purpose of this schema definition is to provide a standards-based representation that can be used to encode and exchange records that correspond to the CDC format. Depending on context, any of the formats and standards that work with Schema.org may be applicable, including the Microdata, RDFa and JSON-LD data formats, as well as related technologies such as W3C SPARQL for data query. JSON-LD is in most cases likely to be the most appropriate format. There is no assumption that data encoded using this schema should necessarily be published on the public Web, nor that it would be used by search engines.

*   [https://www.cdc.gov/nhsn/acute-care-hospital/covid19/index.html](https://www.cdc.gov/nhsn/acute-care-hospital/covid19/index.html)
    *   The above [source PDF](https://www.cdc.gov/nhsn/pdfs/covid19/import-covid19-data-508.pdf) is linked under Resources section,
    *   "[How to import COVID-19 Summary Data [PDF â€“ 200 KB]](https://www.cdc.gov/nhsn/pdfs/covid19/import-covid19-data-508.pdf), Alongside [CSV File Template [CSV â€“ 250 B]](https://www.cdc.gov/nhsn/pdfs/covid19/covid19-test-csv-import.csv)
*   [https://www.cms.gov/files/document/32920-hospital-letter-vice-president-pence.pdf](https://www.cms.gov/files/document/32920-hospital-letter-vice-president-pence.pdf)

## Schema.org vocabulary:

The following additions were made to Schema.org (in the Pending area, pending review and implementation feedback):

*   1 new type: Thing > Intangible > StructuredValue > [CDCPMDRecord](/CDCPMDRecord)
*   14 new properties: [cvdCollectionDate](/cvdCollectionDate), [cvdNumBeds](/cvdNumBeds), [cvdNumTotBeds](/cvdNumTotBeds), [cvdNumBedsOcc](/cvdNumBedsOcc), [cvdNumICUBeds](/cvdNumICUBeds), [cvdNumICUBedsOcc](/cvdNumICUBedsOcc), [cvdNumVent](/cvdNumVent), [cvdNumVentUse](/cvdNumVentUse), [cvdNumC19HospPats](/cvdNumC19HospPats), [cvdNumC19MechVentPats](/cvdNumC19MechVentPats), [cvdNumC19HOPats](/cvdNumC19HOPats), [cvdNumC19OverflowPats](/cvdNumC19OverflowPats), [cvdNumC19OFMechVentPats](/cvdNumC19OFMechVentPats), [cvdNumC19Died](/cvdNumC19Died).
*   In addition, a new [healthcareReportingData](/healthcareReportingData) property can be used to relate a [Hospital](/Hospital) to a [CDCPMDRecord](/CDCPMDRecord).
*   The [datePosted](/datePosted) property can also be used on a [CDCPMDRecord](/CDCPMDRecord).
*   **Use [cvdFacilityId](/cvdFacilityId) to identify the NHSN facility, and (optionally)[cvdFacilityCounty](/cvdFacilityCounty) for its county name.**

New properties: this adds several new properties (see "Schema.org name" column). Most are Number (with additional application-level constraints summarized in "Notes" column).

The reason for prefixing each name with cvd is to avoid clashing with similar or identical names already in use at Schema.org. For example, [https://schema.org/numberOfBeds](https://schema.org/numberOfBeds) already exists for describing hotel rooms, apartments etc.; for the COVID-19 case it is simplest to keep things relatively self-contained.

<table class="style0">

<thead>

<tr>

<td class="style1">**CDC name**</td>

<td class="style1">**Schema.org name**</td>

<td class="style1">**Expected Value**</td>

<td class="style1">**Notes**  

**(see CDC for authoritative guidance)**</td>

<td class="style1">**Definition**</td>

</tr>

</thead>

<tbody>

<tr>

<td>collectiondate</td>

<td>cvdCollectionDate</td>

<td>Text, mm/dd/yyyy  

[or ISO 8601 DateTime]</td>

<td>CDC required.  

Original date format for collectiondate was mm/dd/yyyy, which can be ambiguous outside of a US context, so we provide the option of using ISO-8601 dates instead</td>

<td>Date for which patient counts are reported.</td>

</tr>

<tr>

<td>numbeds</td>

<td>cvdNumBeds</td>

<td>Number</td>

<td>CDC required.  

0 to 10000  

Must be a whole number  

Must be <= numTotBeds</td>

<td>HOSPITAL INPATIENT BEDS: Inpatient beds, including all staffed, licensed, and overflow (surge) beds used for inpatients.</td>

</tr>

<tr>

<td>numtotbeds</td>

<td>cvdNumTotBeds</td>

<td>Number</td>

<td>Must be a whole number  

0 to 10000</td>

<td>ALL HOSPITAL BEDS: Total number of all Inpatient and outpatient beds, including all staffed,ICU, licensed, and overflow (surge) beds used for inpatients or outpatients.</td>

</tr>

<tr>

<td>numbedsocc</td>

<td>cvdNumBedsOcc</td>

<td>Number</td>

<td>0 to 10000  

Must be a whole number  

Must be <= numBeds</td>

<td>HOSPITAL INPATIENT BED OCCUPANCY: Total number of staffed inpatient beds that are occupied.</td>

</tr>

<tr>

<td>numicubeds</td>

<td>cvdNumICUBeds</td>

<td>Number</td>

<td>0 to 10000  

Must be a whole number  

Must be <= numBeds</td>

<td>ICU BEDS: Total number of staffed inpatient intensive care unit (ICU) beds.</td>

</tr>

<tr>

<td>numicubedsocc</td>

<td>cvdNumICUBedsOcc</td>

<td>Number</td>

<td>0 to 10000  

Must be a whole number  

Must be <= numICUBeds</td>

<td>ICU BED OCCUPANCY: Total number of staffed inpatient ICU beds that are occupied.</td>

</tr>

<tr>

<td>numvent</td>

<td>cvdNumVent</td>

<td>Number</td>

<td>0 to 10000  

Must be a whole number  

Must be <= numTotBeds or <= 10,000</td>

<td>MECHANICAL VENTILATORS: Total number of ventilators available.</td>

</tr>

<tr>

<td>numventuse</td>

<td>cvdNumVentUse</td>

<td>Number</td>

<td>0 to 10000  

Must be a whole number  

Must be <= numVent or <= 10,000</td>

<td>MECHANICAL VENTILATORS IN USE: Total number of ventilators in use.</td>

</tr>

<tr>

<td>numc19hosppats</td>

<td>cvdNumC19HospPats</td>

<td>Number</td>

<td>0 to 10000  

Must be a whole number  

Must be <= numBedsOcc</td>

<td>HOSPITALIZED: Patients currently hospitalized in an inpatient care location who have suspected or confirmed COVID-19.</td>

</tr>

<tr>

<td>numc19mechventpats</td>

<td>cvdNumC19MechVentPats</td>

<td>Number</td>

<td>0 to 10000  

Must be a whole number  

Must be <= numVentUse</td>

<td>HOSPITALIZED and VENTILATED: Patients hospitalized in an NHSN inpatient care location who have suspected or confirmed COVID-19 and are on a mechanical ventilator.</td>

</tr>

<tr>

<td>numc19hopats</td>

<td>cvdNumC19HOPats</td>

<td>Number</td>

<td>0 to 10000  

Must be a whole number  

Must be <= numBedsOcc</td>

<td>HOSPITAL ONSET: Patients hospitalized in an NHSN inpatient care location with onset of suspected or confirmed COVID-19 14 or more days after hospitalization.</td>

</tr>

<tr>

<td>numc19overflowpats</td>

<td>cvdNumC19OverflowPats</td>

<td>Number</td>

<td>0 to 2000  

Must be a whole number  

Must be <=2000</td>

<td>ED/OVERFLOW: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed.</td>

</tr>

<tr>

<td>numc19ofmechventpats</td>

<td>cvdNumC19OFMechVentPats</td>

<td>Number</td>

<td>0 to 10000  

Must be a whole number  

Must be <= numVentUse</td>

<td>ED/OVERFLOW and VENTILATED: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed and on a mechanical ventilator.</td>

</tr>

<tr>

<td>numc19died</td>

<td>cvdNumC19Died</td>

<td>Number</td>

<td>0 to 1500  

Must be a whole number  

Must be <= 1500</td>

<td>DEATHS: Patients with suspected or confirmed COVID-19 who died in the hospital, ED, or any overflow location.</td>

</tr>

</tbody>

</table>

## Change Log

*   2020-04-02: Initial version.


