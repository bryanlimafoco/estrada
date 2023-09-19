var ator,carro1,carro2,carro3,carro4,carro5,carro6,estrada,imagecarro1,imagecarro2,imagecarro3,imagecarro4,imagecarro5,imagecarro6

function preload(){
  imagemator = loadImage('imagens/ator-1.png')
  imagemcarro1 = loadImage('imagens/carro-1.png')
  imagemcarro2 = loadImage('imagens/carro-2.png')
  imagemcarro3 = loadImage('imagens/carro-3.png')
  imagemcarro4 = loadImage('imagens/carro-1.png')
 imagemcarro5 = loadImage('imagens/carro-2.png')
  imagemcarro6 = loadImage('imagens/carro-3.png')
  
  estrada = loadImage('imagens/estrada.png')  
}

function setup(){
  createCanvas(600,350)
  
  carro1 = createSprite(590,50,20,20)
  carro1.addImage(imagemcarro1)
  carro1.scale = 0.5
  
carro2 = createSprite(590,100,20,20)
   carro2.addImage(imagemcarro2)
  carro2.scale = 0.5
  
 carro3 = createSprite(590,150,20,20)
   carro3.addImage(imagemcarro3)
  carro3.scale = 0.5
  
  carro4 = createSprite(590,200,20,20)
   carro4.addImage(imagemcarro4)
  carro4.scale = 0.5
  
  carro5 = createSprite(590,250,20,20)
   carro5.addImage(imagemcarro5)
  carro5.scale = 0.5
  
  carro6 = createSprite(590,300,20,20)
   carro6.addImage(imagemcarro6)
  carro6.scale = 0.5
  
  ator =createSprite(300,335,20,20)
  ator.addImage(imagemator)
  ator.scale = 0.2
  
 
carro1.velocityX = -15
 carro2.velocityX = -9
 carro3.velocityX = -11
 carro4.velocityX = -12
 carro5.velocityX = -7
carro6.velocityX = -10 
}

function draw(){

  background(estrada)
                                                
 

  if(carro1.x < 0){
     carro1.x = 590
     }
  if(carro2.x < 0){
     carro2.x = 590
     }  
 
  if(carro3.x < 0){
     carro3.x = 590
     } 
  
  if(carro4.x < 0){
     carro4.x = 590
     }
  
  if(carro5.x < 0){
     carro5.x = 590
     }

  if(carro6.x < 0){
     carro6.x = 590
     }  
  
  
  if(keyDown('up')){
    ator.y = ator.y - 5
  }
  
  
  
  if(ator.y<5){
    ator.y = 335
  }
    if(ator.y>335){
    ator.y = 335
  }
  
  
  
    if(keyDown('down')){
    ator.y = ator.y + 5
    }
  if(
  ator.isTouching(carro1)||
  ator.isTouching(carro2)||
  ator.isTouching(carro3)||
ator.isTouching(carro4)||                                    ator.isTouching(carro5)||                                  ator.isTouching(carro6)
  ){
     ator.y = 335
     
     }
 
  
  drawSprites()
}