function kep(){
    var kep = document.urlap.hatter.value
    if (kep=="ejszaka.jpg") document.body.style.color = "white"
    else document.body.style.color = "black"
    kep = "url(kepek/"+kep+")";
    document.body.style.backgroundImage = kep;
    return kep;
    }
function ido(){
    var most = new Date();
    var ora = most.getHours();
    var perc = most.getMinutes();
    var mp = most.getSeconds();
    var idostr = ora;
    idostr += ((perc < 10) ? ":0" : ":") + perc;   
    idostr += (((mp < 10 ) ? ":0" : ":") + mp);
    document.querySelector('.ora').innerText = idostr;
    setTimeout("ido()",1000);
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function viccek(viccdata, cim){
    document.getElementById('cim').innerHTML =cim
    fetch(viccdata)
        .then(response => response.json())
        .then(function (data) {
            var parent = document.getElementById("vicct");
            removeAllChildNodes(parent)
            for(var i in data){
                var div = document.createElement('div');
                parent.appendChild(div)
                div.className = "vicc";
                div.innerHTML = data[i].text; 
        };
        })
}