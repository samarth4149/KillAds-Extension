x=document.getElementsByTagName("div");
for (var i = 0; x[i]; i++) {
    if ((x[i].id.search("promo") != -1) || (x[i].id.search("Promo") != -1) || (x[i].id.search("Ad") != -1) || ((x[i].id.search("ad")!=-1)&&((x[i].id.search("ead")==-1)&&(x[i].id.search("oad")==-1)&&(x[i].id.search("ade")==-1))) || (x[i].id.search("google_flash") != -1)) {
        if (!x[i].parentNode.removeChild(x[i])) {
            x[i].style.display = "none";
        }
    }
}
for (var i = 0; x[i]; i++) {
    if ((x[i].className.search("promo") != -1) || (x[i].className.search("Promo") != -1) || (x[i].className.search("Ad") != -1) || ((x[i].className.search("ad")!=-1)&&((x[i].className.search("ead")==-1)&&(x[i].className.search("oad")==-1)&&(x[i].className.search("ade")==-1))) || (x[i].className.search("google_flash") != -1)) {
        if (!x[i].parentNode.removeChild(x[i])) {
            x[i].style.display = "none";
        }
    }
}
x=document.getElementsByTagName("section");
for (var i = 0; x[i]; i++) {
    if ((x[i].id.search("promo") != -1) || (x[i].id.search("Promo") != -1) || (x[i].id.search("Ad") != -1) || ((x[i].id.search("ad")!=-1)&&((x[i].id.search("ead")==-1)&&(x[i].id.search("oad")==-1)&&(x[i].id.search("ade")==-1))) || (x[i].id.search("google_flash") != -1)) {
        if (!x[i].parentNode.removeChild(x[i])) {
            x[i].style.display = "none";
        }
    }
}
for (var i = 0; x[i]; i++) {
    if ((x[i].className.search("promo") != -1) || (x[i].className.search("Promo") != -1) || (x[i].className.search("Ad") != -1) || ((x[i].className.search("ad")!=-1)&&((x[i].className.search("ead")==-1)&&(x[i].className.search("oad")==-1)&&(x[i].className.search("ade")==-1))) || (x[i].className.search("google_flash") != -1)) {
        if (!x[i].parentNode.removeChild(x[i])) {
            x[i].style.display = "none";
        }
    }
}
/*x=document.getElementsByTagName("a");
for (var i = 0; x[i]; i++) {
    var b = x[i].href;
    if ((b.search("promo") != -1) || (b.search("Ad") != -1) || ((b.search("ad")!=-1)&&(b.search("click")!=-1))) {
        if (!x[i].parentNode.removeChild(x[i])) {
            x[i].innerHTML = "";
        }
    }
}*/
