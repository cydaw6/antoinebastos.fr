





let sketch5 = function(p){


    class Color{
        constructor(r, g, b, a = 255){
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a;
        }

        setAlpha(a = 255){
            this.a = a;
        }

        getValues(){
            return [this.r,this.g,this.b];
        }

    }



    let bands = [];
    let gbg = 255;
    let gspeed = 0.5;
    let frate = 50;

    let paletteDefault = [new Color(120,120,120)];

    let palette = [new Color(218, 247, 166),
        new Color(196, 51, 255),
        new Color(255, 51, 212),
        new Color(255, 51, 110),
        new Color(255, 94, 51),
        new Color(255, 196, 51),
        new Color(212, 255, 51),
    ]

    
    p.delete = function(){
        p.remove();
    }

    p.changeBg = function(color){
        gbg = color;
    }
    
    p.setup = function(){
        p.background(gbg);
        p.w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        p.h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        
        p.myCanvas = p.createCanvas(p.w, p.h);
        p.myCanvas.parent('canva');
        
        p.rectMode(p.CORNER);

        //        orientation, x,  y,   wdth,hght,speed,space, rounded, alpha, palette
        bands.push(new Band(false, 0.03*p.w, -200, 0.01*p.w, 200+p.h, 1, 50, 3, 85, palette));
        bands.push(new Band(true, -200, 100, 200+p.w, 20, 1, 50, 1, 20, palette));
        /*
        bands.push(new Band(true, -200, 300, 200+p.w, 20, 10, 50, 50, 50, palette));
        bands.push(new Band(true, -200, 600, 200+p.w, 300, 10, 50, 50, 50, palette));
        bands.push(new Band(false, 0.05*p.w, -200, 0.05*p.w, 200+p.h, 12, 50, 5, 85, palette));
        bands.push(new Band(false, 0.20*p.w, -300, 0.01*p.w, 300+p.h, 5, 20, 6, 85, palette));
        */

        //bands.push(new Band(false, 0.07*p.w, p.h+200, 0.01*p.w, 20, 1, 50, 1, 27, palette));
        //bands.push(new Band(true, -200, 150, 200+p.w, 20, 1, 50, 1, 50));
        p.frameRate(frate);
    }
    
    p.draw = function(){
        
        p.background(gbg);
        for(let i = 0; i < bands.length ; i++){
            bands[i].update();
            bands[i].draw();
        }
    }
    

    class Band{
        constructor(orientation, x, y, wdth, hght, speed, space, rounded, alpha = 255, palette = paletteDefault){
            this.orientation = orientation;
            this.x = x;
            this.y = y;
            this.speed = speed;
            this.space = space;
            this.rectStack = [];
            this.width = wdth;
            this.height = hght;
            this.rounded = rounded;
            this.alpha = alpha;
            this.palette = palette;
            this.createStack();
        }

        createStack(){

            let z;let nextX; let nextY;let w = 0;let h = 0;
            if(this.orientation){
                z = this.width;
                nextX = this.x - 200;
                nextY = this.y;
            }else{
                z = this.height;
                nextX = this.y - 200;
                nextY = this.x;
            }

            let c = this.palette[getRandomInt(0, this.palette.length-1)];
            while(z+200 > 0){

                if(this.orientation){
                    w = getRandomInt(5, Math.min(this.width, p.w)/5);
                    let nx = nextX;
                    
                    this.rectStack.push(new Rectangle(nx, nextY, w, this.height, this.rounded, this.alpha, c));
                    nextX +=  w  + this.space;
                     z = z - w; // on décrémente la taille max de la bande
                }else{
                    h = getRandomInt(5, Math.min(this.height, p.h)/5);
                    let ny = nextY;
                    this.rectStack.push(new Rectangle(nextX, ny, this.width, h, this.rounded, this.alpha, c));
                    nextY +=  h  + this.space;
                    z = z - h; // on décrémente la taille max de la bande
                }
                //console.log(nextX +","+ nextY +","+ w +","+h +","+ this.rounded);
            }
        }

        update(){
            if(this.rectStack.length == 0) return;
            let listLength = this.rectStack.length;
            let c = this.palette[getRandomInt(0, this.palette.length-1)]; // random color
            for(let i = listLength; i >= 0; i--){
                
                if(this.orientation && this.rectStack[i] != null){
                    
                    // x2 rectangle dépasse bande
                    let xRightRec = this.rectStack[i].x  + this.rectStack[i].w;
                    let xRightBand = (this.width + this.x);

                    if(xRightRec > (this.width + this.x)){
                        this.rectStack[i].w -= (xRightRec - xRightBand); // réduction égale au dépassement

                    }else if(this.rectStack[i].x + this.rectStack[i].w < this.x){
                        this.rectStack[i].oX++;
                    }

                    if(this.rectStack[i].w < 0 && this.rectStack[i].x >= this.x + this.width){
                        
                        this.rectStack.splice(i,1);
                        let rw = getRandomInt(5, Math.min(this.width, p.w)/5);
                        //- getRandomInt(0,100)
                        let calcX = this.rectStack[0].x - rw - this.space ;
                        this.rectStack.unshift(new Rectangle(calcX, this.y, rw, this.height, this.rounded, this.alpha, c));
                    } 
                    
                    this.rectStack[i].x += this.speed;
                    
                }else if(this.rectStack[i]!=null){

                     // x2 rectangle dépasse bande
                     let xRightRec = this.rectStack[i].y  + this.rectStack[i].h;
                     let xRightBand = (this.height + this.y);
 
                     if(xRightRec > (this.height + this.y)){
                         this.rectStack[i].h -= (xRightRec - xRightBand); // réduction égale au dépassement
 
                     }else if(this.rectStack[i].y + this.rectStack[i].h < this.y){
                         this.rectStack[i].oY++;
                     }
 
                     if(this.rectStack[i].h < 0 && this.rectStack[i].y >= this.y + this.height){
                         
                         this.rectStack.splice(i,1);
                         let rw = getRandomInt(5, Math.min(this.height, p.h)/5);
                         let calcX = this.rectStack[0].y - rw - this.space ;
                         this.rectStack.unshift(new Rectangle(this.x, calcX,this.width, rw, this.rounded, this.alpha, c));
                     } 
                     this.rectStack[i].y += this.speed;
                }
            }

        }

        draw(){
            this.rectStack.forEach((r, i) =>{
                if(r!=null) {
                    // if(!((r.x + r.w - this.space) < this.x)){
                        r.draw();
                }
            });
        }
    }

    class Rectangle{

        constructor(x, y, w, h, round = 0, alpha = 255, color = new Color(0,0,0)){

            this.oX = x; this.x = x;
            this.oY = y; this.y = y; 
            this.oW = w; this.w = w;
            this.oH; this.h = h;
            this.alpha = alpha;
            this.round = round;
            this.color = color.getValues();
            this.color.push(this.alpha);
        }

        draw(){
            p.fill( this.color );
            p.noStroke();
            p.rect(this.x, this.y, this.w, this.h, this.round);
        }
    }
}

//-------------------------------





