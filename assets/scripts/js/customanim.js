window.onresize = function() { 
    test.delete();
    test = new p5(sketch5);
    

    if(!darkMode){
      test.changeBg(colorDarkMode);
    }else{
      test.changeBg(colorLightMode);
    }
    resizeBurgerMenu();
}

function rgbListToString(c){
  return "rgb("+c[0]+","+c[1]+","+c[2]+")";
}


function changeColorMode(){
    
    var body = document.body;
    let colorModeSquare = document.getElementById("colorMode");
    let thumb = document.getElementsByClassName("thumbnail");
    let topnav = document.getElementsByClassName("topnav")[0].getElementsByTagName("a");
    let textInfo = document.getElementsByClassName('text-info');
    let linkbttn = document.getElementById('linkBttn');
    let githbtn = document.getElementById('githubtn');
    
    
    let upcssnavlink = '.topnav a:hover{color: rgb(196, 51, 25);}';
    let scrollbarcolor = (darkMode) ? '::-webkit-scrollbar-thumb {background: rgb(255, 255, 255);border-radius: 1px; }':'::-webkit-scrollbar-thumb {background: rgb(0, 0, 0);border-radius: 1px; }';
    let hoverlinbuttn = (darkMode) ? '#linkBttn:hover{border: 1.7px rgb(43, 43, 43) solid; color: black!important; background-color: rgb(250, 250, 250);  transition: 0.3s ease;}' 
    : '#linkBttn:hover{border: 1.7px rgb(43, 43, 43) solid; color: white!important; background-color: rgb(0, 0, 0); transition: 0.3s ease;}';
    let hovergitbtn = (darkMode) ? '#githubtn:hover{border: 1.7px rgb(43, 43, 43) solid; color: black!important; background-color: rgb(250, 250, 250);  transition: 0.3s ease;}' 
    : '#githubtn:hover{border: 1.7px rgb(43, 43, 43) solid; color: white!important; background-color: rgb(0, 0, 0); transition: 0.3s ease;}';
    
    let style = document.createElement('style');

    let overimgprojgall = '.columnig img:hover{ transition: 0.3s ease;cursor: zoom-in;} ';

    if (style.styleSheet) {
        style.styleSheet.cssText = upcssnavlink;
    } else {
        style.appendChild(document.createTextNode(upcssnavlink));
        style.appendChild(document.createTextNode(scrollbarcolor));
        style.appendChild(document.createTextNode(hoverlinbuttn));
        style.appendChild(document.createTextNode(hovergitbtn));
        if(!window.mobileCheck()){
          style.appendChild(document.createTextNode(overimgprojgall));
        }

    }

    document.getElementsByTagName('head')[0].appendChild(style);

    if(darkMode){
      darkMode = false;
      for(i=0; i<thumb.length; i++) {
          thumb[i].style["border-color"] = rgbListToString(colorDarkMode);
      }

      if(linkbttn){
        linkbttn.style.border = "1.7px rgb(250, 250, 250) solid";
      linkbttn.style.color = "rgb(204,204,204)";
      }
      if(githbtn){
        githbtn.style.border = "1.7px rgb(250, 250, 250) solid";
        githbtn.style.color = "rgb(204,204,204)";
      }

      
      
      

      for (let index = 0; index < textInfo.length; index++) {
        const element = textInfo[index];
        element.style.color = rgbListToString([204,204,204]);
      }

      test.changeBg(colorDarkMode);
      body.style.backgroundColor="black";
      body.style.color = "rgb(204,204,204)";
       
      colorModeSquare.style["background-color"] = rgbListToString(colorLightMode);

      

    }else{
      if(linkbttn){
        linkbttn.style.border = "1.7px rgb(0, 0, 0) solid";
        linkbttn.style.color = "rgb(0,0,0)";
      }
      if(githbtn){
        githbtn.style.border = "1.7px rgb(0, 0, 0) solid";
        githbtn.style.color = "rgb(0,0,0)";
      
      }
     
      
      

        darkMode = true;
        test.changeBg(colorLightMode);
        body.style["background-color"]="white";
        body.style.color = "black";
        for(i=0; i<thumb.length; i++) {
          thumb[i].style["border-color"] = rgbListToString(colorDarkMode);
        }
        
        for (let index = 0; index < textInfo.length; index++) {
          const element = textInfo[index];
          element.style.color = rgbListToString(colorDarkMode);
        }

        colorModeSquare.style["background-color"] = rgbListToString(colorDarkMode);
    }
}

function resizeBurgerMenu(){
  let wd = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let ht = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

 
  var body = document.body,
  html = document.documentElement;

  var height = Math.max( body.scrollHeight, 
                     html.clientHeight, html.scrollHeight);


  let element = document.getElementById("menu");
  let rect = element.getBoundingClientRect();

  let burg = document.getElementById("burgerIcon");
  let rect2 = burg.getBoundingClientRect();
  
  element.style.width = wd+(rect2.right-rect2.left)-13+"px";
  element.style.left = (-1*rect2.left)+"px";
  element.style.height = height+"px";
}

/* Change le menu selon la taille de l'écran */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* Affiche et cache le burger menu alternativement quand on clique sur l'icone du burger menu */
function burgerbutton(){ 
  resizeBurgerMenu();
  let element = document.getElementById("//");
  if(element.style.display == "block"){
    element.style.display = "none";
  }else{
    element.style.display = "block";

  }
}

/* Animation github */
function gitLogoIn(){
    let element = document.querySelector('#gitlogo');
    element.classList.add('animate__animated', 'animate__rubberBand');
}
function gitLogoOut(){
    let element = document.querySelector('#gitlogo');
    element.classList.remove('animate__animated', 'animate__rubberBand');
}
/* -----------------------------------*/


/*       ANIMATIONS           */
// animation from anime js animation color mode
let colorModeSquare0 = document.getElementById("colorMode");
let animation = anime({
                targets: '.play',
                borderRadius: {
                  value: 8,
                  duration: 500,
                  easing: 'easeInOutSine',
                  
                },
                
                rotate: {
                  value: 360,
                  duration: 1200,
                  
                  easing: 'easeInOutSine',
                  
                },
                direction: 'alternate',              
  });

  
  let ev = function(){
    animation.play();
    changeColorMode();
  }

  document.querySelector('.play').onclick = ev;


/*  Effets basiques  */

  $(document).ready(function(){

    //tag des cards
    let allcards = document.getElementsByClassName('car');
    for (let index = 0; index < allcards.length; index++) {
        let card =  allcards[index];
        
        let tagElem = card.getElementsByClassName('tags')[0];
        tagElem.style.visibility = "hidden";
        card.addEventListener("mouseover", function(){
          tagElem.style.visibility = "visible";
          tagElem.classList.add('animate__animated', 'animate__fadeInDown', 'animate__faster');
        });
        card.addEventListener("mouseout", function(){
          //tagElem.classList.remove('animate__animated', 'animate__fadeInDown');
        });
    }
  });
  




/*  fonctions d'affichage dynamique  */



function returnDatafromId(id){
  // "donnees" déclaré dans reqdport.js
  for (let index = 0; index < donnees.length; index++) {
      const element = donnees[index];
      if(element._id == id){
        return element;
      } 
    } 
}

function hideAll(){
  
  projectCanvaElement.style.display = "none";
  gallery.style.display = "none";
}


function callProjectCanva(card, onlyobj = false){
  
  projectCanva = true;
  hideAll();
  dynamicContainer.classList.remove('col-lg');
  dynamicContainer.classList.add('col-lg-9');
  projectCanvaElement.style.display = "block";
  projectCanvaElement.classList.add('animate__animated', 'animate__fadeIn', 'animate__faster');
  let proj;
  if(!onlyobj){
    proj = returnDatafromId(card.getAttribute("data-value"));
    
  
  }else{
    proj = card;
  }

 
  if(proj.title){
    $("#project-title").html(proj.title);
  }
  
  $("#date-p").html("");
  if(proj.date){
    $("#date-p").html('<span class="title-info"> Date  : </span><span class="text-info" style="color:'+rgbListToString(getColorForCurrentMode())+'";>'+ proj.date+'</span>');
  }
  
  $("#apropos").html("");
  if(proj.description){
    $("#apropos").html('<span class="title-info"> A propos  : </span><span class="text-info" style="color:'+rgbListToString(getColorForCurrentMode())+'";>'+ proj.description+'</span>')
  }
  $("#team").html('');
  if(proj.team){
    $("#team").html('<span class="title-info"> Equipe  : </span><span class="text-info" style="color:'+rgbListToString(getColorForCurrentMode())+'";>'+ proj.team.join(", ")+'</span>');
  }

  let containerContentText = document.getElementById("contentText");
  containerContentText.innerHTML = "";
  if(proj.contentText){
    $("#contentText").html('<span class="text-info" style="color:'+rgbListToString(getColorForCurrentMode())+'";>'+ proj.contentText+'</span>')
  
  }

  //bouton voir projet
  let containerlinkbttn = document.getElementById("containerlinkbttn");
  containerlinkbttn.innerHTML = "";
  if(proj.link){
    
    containerlinkbttn.innerHTML += '<a href="'+ proj.link +'" target="_blank" id="linkBttn">Voir le projet</a>';
  }

  let githubbttn = document.getElementById("githubbttn");
  githubbttn.innerHTML = "";
  if(proj.github){
    githubbttn.innerHTML += '<a href="'+ proj.github +'" target="_blank" id="githubtn">Voir le github</a>';
  }


  changeColorMode();changeColorMode();

  //projet img gallery
  $("#projimggallery").html('');
  if(proj.img){
    if(proj.img.length){
      let nbcolumn = proj.img.length;
      let projimggallery = document.getElementById('projimggallery');
      projimggallery.innerHTML = "";
      for (let index = 0; index < nbcolumn; index++) {
        projimggallery.innerHTML += ' <div class="columnig" id="projimgc'+index+'"> </div>';
      }
      for (let index = 0; index < proj.img.length; index++) {
        let calc = index%nbcolumn;
        let currcol = document.getElementById('projimgc'+calc);
        currcol.innerHTML += '<img src="https://cydaw6.github.io/antoinebastos.fr/assets/img/'+proj.img[index]+'" id="pimggal'+(index)+'" style="width:100%">';
        let currimg = document.getElementById('pimggal'+(index)+"");
        currimg.onclick = function(){
          modal.style.display = "block";
          modalImg.src = currimg.src;
          captionText.innerHTML = currimg.alt;
        }
      }
    }
  }
  

  
}


function callGallery(){
  projectsGallery = true;
  hideAll();
  dynamicContainer.classList.remove('col-lg-9');
  dynamicContainer.classList.add('col-lg');
  gallery.style.display = "flex";
  gallery.classList.add('animate__animated', 'animate__fadeIn', 'animate__faster');
  let elem = document.getElementById("abouta");
  elem.classList.remove("active");
  elem = document.getElementById("homea");
  elem.classList.add("active");
}

function callAbout(){
  let elem = document.getElementById("homea");
  elem.classList.remove("active");
  elem = document.getElementById("abouta");
  elem.classList.add("active");
}


modal.onclick = function() { 
  modal.style.display = "none";
}



// About









/*
  let an1 = anime({
          targets: '',
          translateY: 20,
          direction: 'alternate',
          loop: true,
          easing: 'cubicBezier(.5, .05, .1, .3)'
        });

  // Animation from p5 js over on card
  let cars = document.querySelectorAll('.car')
  for(let i = 0; i < cars.length; i++){
   
    cars[i].addEventListener('click', function (){
        let elcar = document.querySelectorAll('.car');
        for(let j = 0; j < elcar.length; j++){
         an1.remove(elcar[j]);
          
        }
        an1.target = cars[i];
        an1.play();

        
      //(cars[i]).style.border = "";
      
    });
  }
  */