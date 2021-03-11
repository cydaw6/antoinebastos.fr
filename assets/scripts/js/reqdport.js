



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
   projets = [
    {
        "_id": 1321888,
        "tags": [
          "Site internet",
          "Histoire"
        ],
        "techs": [
          "html",
          "css",
          "php"
        ],
        "id_col": 3,
        "description": "Le projet «Immersailles» vise à rendre accessible en ligne l' identification historico-spatialisée des personnages d'Ancien Régime sur les plans d'époque du Château de Versailles . Chaque personnage recevra également une fiche descriptive afin de permettre aux utilisateurs d'en savoir plus sur ces anciens locataires.",
        "title": "Immersailles",
        "date": "Septembre 2020 à Janvier 2021",
        "github": "https://github.com/cydaw6/immersailles",
        "link": "https://chateauversailles-recherche.fr/francais/recherche/projets-scientifiques-et-recherche-appliquee/projet-fressin-2019-2022",
        "thumbnail": "imm.png",
        "team": ["Antoine Bastos", "<a href='http://timotheelefebvre.works/'> Timothée Lefebvre </a>"],
        "img": ["Immersailles/imm1.png","Immersailles/imm2.png","Immersailles/imm1.png","Immersailles/imm3.png","Immersailles/imm4.png"]
      },
    {
        "_id": 87945224,
        "tags": [
            "Site internet", "Art génératif"
        ],
        "techs": [
            "html",
            "css",
            "php"
        ],
        "id_col": 1,
        "description": "Petit site web interacif d'esquisses d'art génératif avec p5.js",
        "title": "Radius",
        "date": "Novembre 2020 à Aujourd'hui ",
        "link": "https://cydaw6.github.io/radius/",
        "github": "https://github.com/cydaw6/radius",
        "thumbnail": "radd.PNG",
        "img": ["radius/rad1.png","radius/rad2.png","radius/radius1.png","radius/radius2.png"]
},
       {
        "_id": 168854,
                "tags": [
                    "Site internet"
                ],
                "techs": [
                    "html",
                    "css",
                    "php"
                ],
                "id_col": 1,
                "description": "Site web interfaçant une base de données répondant à des besoins types d'un ostéopathe vétérinaire.",
                "title": "OSTEO",
                "date": "Mars à Mai 2020 ",
                "link": "https://github.com/cydaw6/Osteo",
                "thumbnail": "hover/ostehover.jpg",
                "img": ["osteo/osteoa2.png","osteo/osteoaccueil.png","osteo/osteoani.png"]
        }
        ,
        {
            "_id": 7894545,
                "tags": [
                    "Jeu vidéo"
                ],
                "techs": [
                    "python"
                ],
                "id_col": 1,
                "description": "Petit jeu de plateforme dans lequels le joueur évolue à travers des niveaux et ayant pour but d'attendre un portail à la fin du niveau sain et sauf.",
                "title": "Dead Kernel",
                "date": "Mars à Juin 2019 ",
                "link": "https://kernelts2.wixsite.com/deadkernel",
                "github": "https://github.com/cydaw6/Dead-Kernel",
                "thumbnail": "dead.png",
                "img": ["dead/1.jpg","dead/2.jpg", "dead/3.jpg"]
        }
        ,
        {
            "_id": 5245578,
                "tags": [
                    "Jeu vidéo"
                ],
                "techs": [
                    "java"
                ],
                "id_col": 2,
                "description": "Petit jeu de simulation de gestion. Vous êtes le dictateur d'une île et votre rôle est de la faire prospérer malgré les événements qui se produiront.",
                "title": "Little Tropico",
                "date": "Octobre 2020 à  Janvier 2021",
                "github": "https://github.com/cydaw6/Little-Tropico",
                "thumbnail": "trop1.png",
                "team": ["Antoine Bastos", "<a href='http://timotheelefebvre.works/'> Timothée Lefebvre </a>"],
                "img": ["littletropico/trp1.png","littletropico/trp2.png"]
        }
        ,
        {
            "_id": 878785654,
                "tags": [
                    "Site internet", "histoire", "culture"
                ],
                "techs": [
                    "html", "css", "js", "php","mysql"
                ],
                "id_col": 2,
                "description": "Ce projet de Médiation culturelle et numérique avait pour but de mettre en valeur et promouvoir un des patrimoine mondiaux inscrit à l’UNESCO.",
                "title": "MCN Canal du Midi",
                "date": "Octobre 2020 à  Janvier 2021",
                "link": "http://cdm.timotheelefebvre.works/",
                "thumbnail": "hover/fondmcn2.png",
                "img": ["canal/canal1.png", "canal/canal2.png", "canal/canal3.png", "canal/canal4.png"]
        }
        ,
        {
            "_id": 7876544554,
                "tags": [
                    "Jeu vidéo"
                ],
                "techs": [
                    "python"
                ],
                "id_col": 3,
                "description": "Développement d'un mini-jeu 2D reprenant le concept du Boulder Dash, grâce à une bibliothèque graphique fournie par les enseignants.",
                "title": "Boulder Dash",
                "date": "Octobre 2019 à Janvier 2020",
                "github": "https://github.com/cydaw6/Boulder-Dash",
                "thumbnail": "bould1.png",
                "team": ["Antoine Bastos", "<a href='http://timotheelefebvre.works/'> Timothée Lefebvre </a>"],
                "img": ["boulder/1h.png","boulder/1l.png", "boulder/boulderdash.png"]
                
        }

            ];

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
            + '<a href="#"><img src="https://cydaw6.github.io/antoinebastos.fr/assets/img/'+ p.thumbnail +'" style="width:100%;border-radius: 4px;"></a>'
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

