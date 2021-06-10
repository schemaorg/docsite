const rex = /\[\[([\w0-9_ -\/]+)\]\]/;
const targ = "https://schema.org";

function sdolinksparse(){
    const treeWalker = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null,false);

    var nodeList = [];
    var currentNode = treeWalker.nextNode();
    while(currentNode) {
        if (currentNode.nodeType==3){
            nodeList.push(currentNode);
        }
        currentNode = treeWalker.nextNode();
    }

    nodeList.forEach(node => sdolink(node));
}

function sdolink(node){
    textContent = node.textContent
    var insertpos = textContent.search(rex);
    if ( insertpos != -1){
        var text = node.textContent;
        insertsdolink(node,text,insertpos);
    }
}

function insertsdolink(node, text, insertpos){
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
            insertsdolink(remainNode,remain,nextpos);
        }
    }
}

function appendHref(node,token,ref){
    var link = token;
    if (ref  != null){
        if ( ref.startsWith('/') ){
            ref = ref.substring(1);
        }
        link = ref;
    }
    var href= targ + "/" + link;
    var a = document.createElement('a');
    a.href = href;
    a.title = token;
    a.appendChild(document.createTextNode(token));
    node.after(a);
    return a;
}

document.getElementsByTagName("body")[0].onload = function() {sdolinksparse()};
