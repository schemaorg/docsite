---
layout: default
parent: Additional Resources
---

# TEST

Information about specifically focused areas of the vocabulary:
*   **[Health and medical types](/Extensions/meddocs.html):** notes on the health and medical types under [[MedicalEntity]].
*   **[Hotels](/Extensions/hotels.html):** Background information and examples on the types and properties for marking up hotels and other accommodations using e.g. [[Hotel]] and [[HotelRoom]].
*   **[Autos](/Extensions/automotive.html):** background information on marking up automobiles.
*   **[Banks and Financial Institutions](/Extensions/financial.html):** Background information and examples on the types and properties for marking up banks and their products e.g. [[MortgageLoan]] and [[ExchangeRateSpecification]].

* This is [[Book]] for replacing.
* This is [[Creativework]] and [[Person]] and [[about]] for replacing.
* This is [[Thing]] in a span in div.
* This is *[[Volcano]]* in italic and **[[Hotel]]** in bold 
* This is [[releases]]{docs/releases.html}.

<!--
<input id="button" type="button" value="Replace [[" />

<script>
    const rex = /\[\[([\w0-9_ -\/]+)\]\]/;
    targ = "https://schema.org";
    //button.addEventListener('click', e => 
    
function wikilinksparse(){
    const treeWalker = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null,false);

    var nodeList = [];
    var currentNode = treeWalker.nextNode();
    while(currentNode) {
        if (currentNode.nodeType==3){
            nodeList.push(currentNode);
        }
        currentNode = treeWalker.nextNode();
    }

    nodeList.forEach(node => wikilink(node));
}

function wikilink(node){
    textContent = node.textContent
    var insertpos = textContent.search(rex);
    if ( insertpos != -1){
        var text = node.textContent;
        insertwikilink(node,text,insertpos);
    }
}

function insertwikilink(node, text, insertpos){
    var pre = text.substring(0,insertpos);
    var stub = text.substring(insertpos);
    var endpos = stub.search(/\]\]/);
    var token = stub.substring(2,endpos);
    var remain = stub.substring(endpos+2);

    var preNode = document.createTextNode(pre);
    node.parentNode.replaceChild(preNode,node);
    node = preNode;

    var ref = null;
    if( remain.length > 0 ){
        var refpos = remain.search(/^\{.*\}/);
        if ( refpos == 0){
            var refend = remain.search(/\}/);
            ref = remain.substring(1,refend);
            remain = remain.substring(refend + 1);
        }
    }

    var aNode = appendHref(node,token,ref);
    if ( remain.length > 0 ){
        remainNode = document.createTextNode(remain);
        aNode.after(remainNode);
        var nextpos = remain.search(rex);
        if (nextpos != -1){
            insertwikilink(remainNode,remain,nextpos);
        }
    }
}

function appendHref(node,token,ref){
    var link = token;
    if (ref  != null){
        link = ref;
    }
    var href=targ + "/" + link;
    var a = document.createElement('a');
    a.href = href;
    a.title = token;
    a.appendChild(document.createTextNode(token));
    node.after(a);
    return a;
}

document.getElementsByTagName("body")[0].onload = function() {wikilinksparse()};

</script>


 <script src="/assets/js/sdowikilinks.js"></script>
 -->