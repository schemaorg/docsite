---
layout: default
title: Vocabulary Definition Downloads
parent: Schema.org for Developers
nav_order: 2
---
# Vocabulary definition downloads

To assist developers, files containing the definition of the current version of the Schema.org vocabulary are available for download in common RDF formats.

Older release versions can be found (under `data/releases/`) in [GitHub](https://github.com/schemaorg/schemaorg).

Select the file and format required and click Download. The CSV format downloads are split across two files: _Types_ includes definitions of Types and Enumeration Values, including lists of associated properties; _Properties_ contains property definitions.  

File _schemaorg-current-https_ contains the definition of all terms in, all sections of, the vocabulary. The file _schemaorg-all-https_ contains the definition of all terms in, all sections of, the vocabulary, **plus** terms retired from the vocabulary (_See the [attic section](https://schema.org/docs/attic.home.html) for details_).

For those preferring to use http based definitions of Schema.org terms, these equivalent definitions are available in the _schemaorg-current-http_ and _schemaorg-all-http_ files. For more information on using https or http based terms see the [FAQ](/SchemaInfo/faq.html#19) for details.

<table style="padding: 2px; width:600px">
<tbody>
<tr>

    <td style="width: 40%;">File:  
        <select id="filename" onchange="updatetext()">
            <option value="/version/latest/schemaorg-current-https">schemaorg-current-https</option>
            <option value="/version/latest/schemaorg-all-https">schemaorg-all-https</option>
            <option value="/version/latest/schemaorg-current-http">schemaorg-current-http</option>
            <option value="/version/latest/schemaorg-all-http">schemaorg-all-http</option>
        </select>
    </td>

    <td style="width: 30%;">Format:  
        <select id="fileext" onchange="updatetext()">
            <option value=".jsonld">JSON-LD</option> 
            <option value=".ttl">Turtle</option> 
            <option value=".nt">Triples</option> 
            <option value=".nq">Quads</option> 
            <option value=".rdf">RDF/XML</option> 
            <option value=".csv">CSV</option>
        </select>
    </td>

    <td style="width: 30%;">
        <div id="csvsel">For:  
            <select id="csvfmt" onchange="updatetext()">
                <option value="-types">Types</option> 
                <option value="-properties">Properties</option>
            </select>
        </div>
    </td>
</tr>

<tr>
    <td colspan="3">
        <div id="label"  style="padding: 5px;"></div>
    </td>
</tr>

<tr>
    <td colspan="3" style="text-align: center;"><input type="button" onclick="dowloadfunc();" value="Download">
</td>

</tr>

</tbody>
</table>


<script>
function getHost(){
        port = window.location.port
    if (port == "" || port == 0) {
        port = "";
    } else {
        port = ":" + port;
    }
    host = window.location.protocol + "//" + window.location.hostname + port;
    host = "https://schema.org";
    return host;

}

function getschemafilename() {

    path = document.getElementById("filename").value;
    ext = document.getElementById("fileext").value;
    csvfmt = ""
    if (ext == ".csv") {
        csvfmt = document.getElementById("csvfmt").value;
    }
    return (getHost() + path + csvfmt + ext);
}

function updatetext() {
    if (document.getElementById("fileext").value == ".csv") {
        document.getElementById("csvsel").style.display = 'block';
    } else {
        document.getElementById("csvsel").style.display = 'none';
    }
    filepath = getschemafilename();
    document.getElementById("label").innerHTML = '<a href="' + filepath + '">' + filepath + '</a>';
}
function dowloadfunc() { 
    //alert(path + ext); 
    window.location.href = getschemafilename(); 
}

document.getElementsByTagName("body")[0].onload = function() {updatetext()};


</script>
