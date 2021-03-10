



// récupération des projets
let donnees = function db(){
    let projets = null;
    
    /* server ovh down 
    $.ajax({
        async: false,
        type: 'GET',
        global: false,
        url: 'https://antoinebastos.fr:707/hex7894555!klmno',
        dataType: 'json',
        success: function(d) {
            projets = d;
        },
        echec: function(d){
            console.log(d);
        }
    });
    */
   projets = {

   };
    return projets;
}();


let sortedP = [];
    for(let x = 1; x <= 3; x++){
        let col = [];
        donnees.forEach(elem => {
            if(elem.id_col == x){
                col.push(elem);
            }
        });
        sortedP.push(col);
    }

$(document).ready(function(){

    
    let str = '';
    let value = 0;
    sortedP.forEach(prjs => {
        str += '<div class="columnm">';
        
        
        prjs.forEach(p => {


            let tags = "";
            for(let j = 0; j < p.tags.length; j++){
                tags += p.tags[j] +"";
                if(j < p.tags.length-1){
                    tags += " | ";
                }
            }
           
            str += '<div class="car" onclick="callProjectCanva(this);" data-value="'+ p._id +'">'
            + '<a href="#"><img src="/assets/img/'+ p.thumbnail +'" style="width:100%"></a>'
            + '<div class="thumb-info">'
            + '<div class="thumbnail-title">'+p.title+'</div>'
            + '<div class="tags">'+ tags +' </div>'
            +' </div></div>';
            value +=1;
        });
        str += '</div>';
    });

    let gal = document.getElementById('gallery');
    gal.innerHTML = str;

   
});

