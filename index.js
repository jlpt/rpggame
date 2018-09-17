
//I LOVE COCONUT GUNS THEY CAN FIRE IN SPURTS
items = ["Empty","Sword","Shield","Health Potion","Mana Potion","Super Potion"]
Entities = {}
Items = {}
Slots = {}
potTimer = 0
globalTimer = 0
invButton = 49
var deflect = 0
var hbar = 0
var pressingUp = false
var pressingRight = false
var pressingLeft = false
var pressingDown = false
var pspeed = 2
 aimAngle = 0
 
     document.onkeydown = function(event) {
       if (event.keyCode > 48 && event.keyCode < 56) {
        invButton = event.keyCode
       }
      if (event.keyCode == 32){
        for (var k in Entities){
          if (Entities[k].Type == 'player'){
          Entities[k].special()
          }
        }
      }
  if (event.keyCode == 87){ //UP
       
         pressingUp = true
        
  }
  if (event.keyCode == 68){ //RIGHT
   pressingRight = true

  }
  if (event.keyCode == 65){ //LEFT
      pressingLeft = true

  }
if (event.keyCode == 83){ //DOWN
   pressingDown = true

  }
 }
 

 document.onkeyup = function(event) {
  if (event.keyCode == 87){ //UP
  
       pressingUp = false
  }
  if (event.keyCode == 68){ //RIGHT
    pressingRight = false

  }
  if (event.keyCode == 65){ //LEFT
     pressingLeft = false
  }
if (event.keyCode == 83){ //DOWN
     pressingDown = false

  }
 }
//images = ["none","sword_img"]

Background(-2500,-2500,5000,5000,images[0],0,0,'cyan',true,'back',Math.random())
Background(0,0,768,768,images[6],0,0,'cyan',false,'background',Math.random()) 

//id #0 = Empty
//id #1 = Sword
//id #2 = Shield
//id #3 = Health Potion
//id #4 = Mana Potion
var inventory = [1,2,0,0,0,0]
  

 for (var k in Entities) {
   if(Entities[k].Type == 'background'){
     spawn = Entities[k]
   }
 }

 displayInventory()



createPlayer((384/2)-32,(384/2)-16,48,48,images[5],0,0,'cyan',false,'player',Math.random())


createSlot(0,0,64,64,images[5],0,0,'white',true,'slot',Math.random())
2
useTime = 0
GUI(0,62,128,20,images[0],0,0,'black',true,'healthbar1',Math.random())
GUI(4,66,120,12,images[0],0,0,'red',true,'healthbar2',Math.random())
GUI(4,66,120,12,images[0],0,0,'green',true,'healthbar3',Math.random())

GUI(384-128,62,128,20,images[0],0,0,'black',true,'manabar1',Math.random())
GUI(380-120,66,120,12,images[0],0,0,'gray',true,'manabar2',Math.random())
GUI(380-120,66,120,12,images[0],0,0,'blue',true,'manabar3',Math.random())
//MAIN GAME LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOP
function run() {
  //ctx.canvas.width  = window.innerHeight;
  for (var k in Entities){
   if (Entities[k].x > 50000 || Entities[k].x < spawn.x-5000){
     delete Entities[k]
     console.log('wat')
   }
 }
  globalTimer = globalTimer - 1
  if (globalTimer < 1){
    globalTimer = 60
  }
  lWidth = window.innerWidth
lHeight = window.innerHeight



  for (var k in Entities){
    
      if (Entities[k].x > 50000) {
        delete Entities[k]
      
    }
  }
 for (var k in Entities){
  if (Entities[k].Type == 'player'){

    hbar = (Entities[k].Health / Entities[k].maxHealth)*120
    mbar = (Entities[k].Mana / Entities[k].maxMana)*120
  }
  
 if (Entities[k].Type == 'healthbar3') {
    Entities[k].width = hbar
    
  }
  if (Entities[k].Type == 'manabar3') {
    Entities[k].width = mbar
    
  }
}
  if (useTime > 0){
  useTime = useTime - 1
  }
  if (useTime == 0){
      for (var k in Entities){
       
       if (Entities[k].Type == 'player'){
       clicking = false
         Entities[k].image = images[5]
         deflect = 0
       }
     }
  }
for (var k in inventory) {
  img2 = inventory[invButton-49]
}
if (invButton > 48 && invButton < 55) {
  if (img2 == 0) {
    img2 = 7
  }
     holdingItem(0,0,32,32,images[img2],0,0,'white',false,'holdable')
}
  for (var k in Entities){
    if (Entities[k].Type == 'slot' && invButton > 48 && invButton < 55) {
      
      Entities[k].x = (invButton-49) * 64
     
    }
  }
  
  for (var k in inventory){2
    
   var value = inventory[k]
   if (value == 0) {
     invFull = false
     break;
   }
   if (k > 4) {
invFull = true
   }
 }
  potTimer = potTimer + 1
  
   
  if (potTimer > (Math.random()*50)+30) {
 
         
        
    //item = Math.floor((Math.random()*2)+3)
    Enemy((spawn.x+Math.random()*spawn.width),(spawn.y+Math.random()*spawn.height),28,20,images[10],0,0,'white',false,'Slime',Math.random())
  //  Item((spawn.x+Math.random()*spawn.width),(spawn.y+Math.random()*spawn.width),32,32,images[item],0,0,'cyan',false,item,Math.random())
potTimer = 0
  }
  RefreshInventory()
displayInventory()

  for (var k in Entities) {
  //console.log(Entites[k])
  Entities[k].Update()
    Entities[k].Draw()
   
  }
  for (var k in Items) {
  Items[k].Update()
   Items[k].Draw()
  }

   for (var k in Slots) {
  Slots[k].Update()
   Slots[k].Draw()
  }
  
   document.getElementById("canvas").onmousedown = function() {
     clicking = true
     if (useTime < 1) {
     for (var k in Entities){
       
       if (Entities[k].Type == 'player'){
         
         useTime = 15
         Entities[k].image = images[8]
         deflect = 1
       }
     }
   useItem()
     }
 }

}
setInterval(run,1000/60);
