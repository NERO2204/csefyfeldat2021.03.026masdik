
function kiir() {
    var HTMLtartalom = "<select>";
    for (var ered in eredmnyek) {
        HTMLtartalom+= "<option>"+eredmnyek[ered].nev+"</option>";
//        console.log(eredmnyek[ered].nev);
    }
    HTMLtartalom += "</select>";
    $("#terulet").html(HTMLtartalom);
//    $("#terulet").innerHTML = HTMLtartalom;
}
function tablazatkiir()
{
    var HTMLtablazatTartalom="<table><tr><th id='nev' >Varosnév</th><th id='jaras'>Járás</th><th id='megye'>Megye</th></tr>";
    for (var ered in eredmnyek)
    {
        HTMLtablazatTartalom+="<tr><td>"+eredmnyek[ered].nev+"</td><td>"+eredmnyek[ered].jaras+"</td><td>"+eredmnyek.megye+"</td></tr>";
        
    }
    
    HTMLtablazatTartalom+="</table>";
    $('#teruket').append(HTMLtablazatTartalom);
    
    
    
}


$(document).ready(function () 
{
    $('#terulet').delegate('table th','click',rendez);
    $('#mezo').keyup(beolvas);
    
});

var eredmnyek = [];
var sorrend=false;
function rendez()
{
    console.log("rendezes");
    if (sorrend)
    {
        eredmnyek.sort(function(a,b)
        {
          return Number(a[id]>b[id])-0.5;
          
        });
        sorrend=!sorrend;
        
    }
    console.log("rendezés");
    
}
tablazatkiir();

function beolvas() {
    $.ajax(
            {
                type: "GET",
                url: "lekerdez.php?mezo=" + $("#mezo").val(),
                success: function (result) {
                    eredmnyek = JSON.parse(result);
//                    console.log(eredmnyek);
                    kiir();
                },
                error: function () {
                    alert("Hiba az adatok betöltésekor");
                }
            });
}