var c = document.getElementById("canvas")
var ctx = c.getContext('2d')



      //  c.style.position = "absolute";
function checkCollision(rect1,rect2){
  if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.y + rect1.height > rect2.y) {
    return true
}

  return false
  
}

document.onmousemove = function(mouse){
        var mouseX = mouse.clientX 
        var mouseY = mouse.clientY 
     
           mouseX -= (160+48)+(lWidth/2)-384/2 
           mouseY -= (176)+(lHeight/2)-384/2 
       
       
      aimAngle = Math.atan2(mouseY,mouseX) / Math.PI * 180;
      
      
}




Entity = function(x,y,width,height,image,xSpd,ySpd,Color,ColorTrue,Type,id) {
var self = {
  x:x,
  y:y,
  width:width,
  height:height,
  image:image,
  xSpd:xSpd,
  ySpd:ySpd,
  Color:Color,
  ColorTrue:ColorTrue,
  Type:Type,
  id:Math.random(),
}
self.Update = function() {
   self.x = self.x + self.xSpd
   self.y = self.y + self.ySpd   
  }
   self.Draw = function() {
    
     if (self.ColorTrue == false) {
      
 ctx.drawImage(self.image,self.x,self.y,self.width,self.height)
     }
     else
     {
       ctx.fillStyle = self.Color
       ctx.fillRect(self.x,self.y,self.width,self.height)
     }
 
}
return self;
}



Slot = function(x,y,width,height,image,xSpd,ySpd,Color,ColorTrue,Type,id){
      var self = Entity(x,y,width,height,image,xSpd,ySpd,Color,ColorTrue,Type,id)
       self.use = function(picked){
        if (self.Type == 'Item'){
        for (var k in inventory){
           if (inventory[picked] == 15) {
               for (var k in Entities){
                 if (Entities[k].Type == 'player'){
                   Entities[k].Health = Entities[k].Health + 100
                   Entities[k].Mana = Entities[k].Mana + 100
                     inventory[picked] = 0
                     break;
                 }
               }
             }

          if (inventory[picked] == 3 || inventory[picked] == 4){
             console.log(inventory[picked])
             if (inventory[picked] == 3) {
               for (var k in Entities){
                 if (Entities[k].Type == 'player'){
                   Entities[k].Health = Entities[k].Health + 25
                 }
               }
             }

            if (inventory[picked] == 4) {
               for (var k in Entities){
                 if (Entities[k].Type == 'player'){
                   Entities[k].Mana = Entities[k].Mana + 25
                 }
               }
             }
            inventory[picked] = 0
           
            break;
          }



             if (inventory[picked] == 2) {
                deflect = 1
                


             }
          if (inventory[picked] == 1 ){
            for (var k in Entities){
              
              if (Entities[k].Type == 'player'){
              
              
                projectile(Entities[k].x+Entities[k].width,Entities[k].y,6,6,images[9],Math.cos(aimAngle/180*Math.PI)*4,Math.sin(aimAngle/180*Math.PI)*4,'gray',true,'playerproj',Math.random())
   
             //  projectile(25,35,500,500,images[10],'white','false','playerproj',Math.random())
                  
              }
             
            }
              
break
          }
        }
        }
      } 
       self.id = id
    Slots[id] = self;
  }





createSlot = function(x,y,width,height,image,xSpd,ySpd,Color,ColorTrue,Type,id){
      var self = Entity(x,y,width,height,image,xSpd,ySpd,Color,ColorTrue,Type,id)
    self.Update = function() {
      
   self.x = self.x + self.xSpd
   self.y = self.y + self.ySpd   
  }
  
     
      
    
       self.id = id
    Entities[id] = self;
  }
 

projectile = function(x,y,width,height,image,xSpd,ySpd,Color,ColorTrue,Type,id){
      var self = Entity(x,y,width,height,image,xSpd,ySpd,Color,ColorTrue,Type,id)
      if (self.Type == 'playerproj'){
          var deleteself = 30
      }
      if (self.Type == 'enemyproj'){
        var deleteself = 15
      }
    self.Update = function() {
        deleteself = deleteself - 1
       
            if (deleteself < 1) {
              self.x = 55000
            }

    if (pressingRight == true) {
    self.x = self.x - 2
    }
  else if (pressingRight == false) {
    //self.xSpd = 0
  }
  if (pressingLeft == true) {
    self.x = self.x + 2
  }
  else if (pressingLeft == false && pressingRight == false) {
   // self.xSpd = 0
  }


if (pressingUp == true){
  self.y = self.y + pspeed
}
else if (pressingUp == false && pressingDown == false){
 // self.ySpd = 0
}

if (pressingDown == true){
  self.y = self.y - pspeed
}

else if (pressingDown == false && pressingUp == false){
 // self.ySpd = 0
}
   self.x = self.x + self.xSpd
   self.y = self.y + self.ySpd   
 
  }
  
     
       self.id = id
    Entities[id] = self;
  }
 



holdingItem = function(x,y,width,height,image,xSpd,ySpd,Color,ColorTrue,Type,id){
      var self = Entity(x,y,width,height,image,xSpd,ySpd,Color,ColorTrue,Type,id)
     
    self.Update = function() {
      
   self.x = self.x + self.xSpd
   self.y = self.y + self.ySpd   
  }
  
     
      
    
       self.id = id
    Entities[id] = self;
  }


GUI = function(x,y,width,height,image,xSpd,ySpd,Color,ColorTrue,Type,id){
      var self = Entity(x,y,width,height,image,xSpd,ySpd,Color,ColorTrue,Type,id)
    self.Update = function() {
      
     
  
   self.x = self.x + self.xSpd
   self.y = self.y + self.ySpd   
  }
  
     
      
    
       self.id = id
    Entities[id] = self;
  }
 

Background = function(x,y,width,height,image,xSpd,ySpd,Color,ColorTrue,Type,id){
      var self = Entity(x,y,width,height,image,xSpd,ySpd,Color,ColorTrue,Type,id)
    self.Update = function() {
      
     
    if (pressingRight == true) {
    self.xSpd = -pspeed
  }
  else if (pressingRight == false) {
    self.xSpd = 0
  }
  if (pressingLeft == true) {
    self.xSpd = pspeed
  }
  else if (pressingLeft == false && pressingRight == false) {
    self.xSpd = 0
  }


if (pressingUp == true){
  self.ySpd = pspeed
}
else if (pressingUp == false && pressingDown == false){
  self.ySpd = 0
}

if (pressingDown == true){
  self.ySpd = -pspeed
}

else if (pressingDown == false && pressingUp == false){
  self.ySpd = 0
}
   self.x = self.x + self.xSpd
   self.y = self.y + self.ySpd   
  }
  
     
      
    
       self.id = id
    Entities[id] = self;
  }
 



Enemy = function(x,y,width,height,image,xSpd,ySpd,Color,ColorTrue,Type,id){
      var self = Entity(x,y,width,height,image,xSpd,ySpd,Color,ColorTrue,Type)
      var moveTimer = 60
      var shootTimer = 120
      var aim = 0
    
    self.Update = function() {
      for (var k in Entities){
        if (Entities[k].Type == 'playerproj'){
     
    if (checkCollision(self,Entities[k])) {
      
  item = Math.floor(Math.random()*2)+3 // (Math.floor((Math.random()*1))+3)
  //item = (Math.floor(Math.random()*12))
   self.x = 500000
   
  if (Math.random() < .5){

           Item(Entities[k].x,Entities[k].y,32,32,images[item],0,0,'cyan',false,item,Math.random())
          
  }
else if(Math.random() < .1){
   Item(Entities[k].x,Entities[k].y,32,32,images[15],0,0,'cyan',false,15,Math.random())
}
    }
    
    }
      }
      moveTimer = moveTimer - 1
      shootTimer = shootTimer - 1
      
         for (var k in Entities){
           if (Entities[k].Type == 'Slime'){
             if (moveTimer == Math.floor(Math.random()*30)+30){
            moveTimer = 60
             Entities[k].xSpd = (Math.random()*2)-1
             Entities[k].ySpd = (Math.random()*2)-1
             }
            if (shootTimer == 0) {
              shootTimer = 120
                 for (var i in Entities){
                   if (Entities[i].Type == 'player'){
                    
                     aimX = Entities[i].x - self.x
                     aimY = Entities[i].y - self.y
                     
                     enemyAim = Math.atan2(aimY, aimX) / Math.PI * 180
                     
                     //
                     //(lWidth/2)-384/2 ) / Math.PI * 180
                     projectile(self.x,self.y,12,12,images[1],Math.cos(enemyAim/180*Math.PI)*5,Math.sin(enemyAim/180*Math.PI)*5,'red',true,'enemyproj',Math.random())
                   }
                   
                 }
           }
           }
            /*   for (var i in Entities){
                 var mouseX = mouse.clientX 
        var mouseY = mouse.clientY 
     
           mouseX -= (160+48)+(lWidth/2)-384/2 
           mouseY -= (176)+(lHeight/2)-384/2 
       
       
      aimAngle = Math.atan2(mouseY,mouseX) / Math.PI * 180;
                 if (Entities[i].Type == 'player'){
                 projectile(Entities[i].x+(Entities[i].width/2),Entities[i].y+(Entities[i],height/2),16,16,images[1],Math.cos(angle/180*Math.PI,Math.sin(angle.180*Math.PI),'red',true,'enemyproj',Math.random())             }
                 // projectile(Entities[k].x+Entities[k].width,Entities[k].y,12,12,images[9],Math.cos(aimAngle/180*Math.PI)*5,Math.sin(aimAngle/180*Math.PI)*5,'gray',true,'enemyproj',Math.random())
                 */
               
              
             }
           
    
  
    if (pressingRight == true) {
    self.x = self.x - pspeed
    }
  else if (pressingRight == false) {
    //self.xSpd = 0
  }
  if (pressingLeft == true) {
    self.x = self.x + pspeed
  }
  else if (pressingLeft == false && pressingRight == false) {
   // self.xSpd = 0
  }


if (pressingUp == true){
  self.y = self.y + pspeed
}
else if (pressingUp == false && pressingDown == false){
 // self.ySpd = 0
}

if (pressingDown == true){
  self.y = self.y - pspeed
}

else if (pressingDown == false && pressingUp == false){
 // self.ySpd = 0
}
   self.x = self.x + self.xSpd
   self.y = self.y + self.ySpd   
  }
    
  
     
       self.id = id
    Entities[id] = self;
  }
  
 

Item = function(x,y,width,height,image,xSpd,ySpd,Color,ColorTrue,Type,id){
      var self = Entity(x,y,width,height,image,xSpd,ySpd,Color,ColorTrue,Type,id)
    self.Update = function() {
      
       
    
      
     
    if (pressingRight == true) {
    self.xSpd = -pspeed
  }
  else if (pressingRight == false) {
    self.xSpd = 0
  }
  if (pressingLeft == true) {
    self.xSpd = pspeed
  }
  else if (pressingLeft == false && pressingRight == false) {
    self.xSpd = 0
  }


if (pressingUp == true){
  self.ySpd = pspeed
}
else if (pressingUp == false && pressingDown == false){
  self.ySpd = 0
}

if (pressingDown == true){
  self.ySpd = -pspeed
}

else if (pressingDown == false && pressingUp == false){
  self.ySpd = 0
}
   self.x = self.x + self.xSpd
   self.y = self.y + self.ySpd   
  }
  
     
      
    
       self.id = id
    Items[id] = self;
  }



 



createPlayer = function(x,y,width,height,image,xSpd,ySpd,Color,ColorTrue,Type,id){
      var self = Entity(x,y,width,height,image,xSpd,ySpd,Color,ColorTrue,Type,id)
       self.Health = 100
       self.maxHealth = 100
       self.Mana = 100
       self.maxMana = 100
       self.aim = 0
       self.special = function(){
        
         if (self.Mana >= 25){
            console.log(Entities.length)
           
           for (i = 0; i < 20; i++){
             console.log('test')
             self.aim = self.aim + 18
         projectile(self.x+self.width,self.y,6,6,images[9],Math.cos(self.aim/180*Math.PI)*7,Math.sin(self.aim/180*Math.PI)*7,'gray',true,'playerproj',Math.random())
        
               
             
           }
             self.Mana = self.Mana - 25
         }
       }
self.Update = function() {
  for (var k in Entities){
    if (Entities[k].Type == 'enemyproj'){
if (checkCollision(self,Entities[k])){
  self.Health = self.Health - 15
  delete Entities[k]
}
    }
  }
  
  if (self.Health > 100){
    self.Health = 100
  }
  if (self.Mana > 100){
 self.Mana = 100
      
  }
   
  for (var k in Entities){
    

    if (Entities[k].Type == 'holdable') {
      
      Entities[k].x = self.x+37
      if (clicking == true) {
        Entities[k].y = self.y+2
      }
      if (clicking == false){
      Entities[k].y = self.y-5
      }
    }
    
  }
  for (var k in Items) {
  if (checkCollision(self,Items[k]) == true) {
   if (invFull == false) {
    itemAdded = Items[k].Type
    addItem(itemAdded)
      displayInventory()
    delete Items[k]
    
      }
  }
  }
 
   self.x = self.x + self.xSpd
   self.y = self.y + self.ySpd   
  }
 
       self.id = id
    Entities[id] = self;
    
  }
 
 createHitbox = function(x,y,width,height,damage,friendly,Type,id){
   var self = Entity(x,y,width,height,image,xSpd,ySpd,Color,ColorTrue,Type,id)
      self.id = id
    Entities[id] = self;
   
 }


 











function RefreshInventory() {
  for (var k in Slots){
   
      delete Slots[k]
    
  }
}

function displayInventory() {
 // console.log("Your inventory")
  img = 0
 
  for (k = 0; k < inventory.length; k++) {
   
    img = inventory[k]
     if (k < 6) {
       Slot(k*64,0,64,64,images[img],0,0,'red',false,'itemSlot',Math.random())
 
  }
   Slot(k*64,0,64,64,images[0],0,0,'red',false,'Item',Math.random())
   //   if (k >= 5){
    
  //   Slot((k-5)*64,64,64,64,images[img],0,0,'red',false,'itemSlot',Math.random()) 
  //  }
    

  }
}
 
function removeItem(location){
inventory[location] = 0
}
function useItem(){
   picked = 0
  for (var k in Entities) {
   
 if (Entities[k].Type == 'slot'){
    picked = Entities[k].x/64
    
  }
  }
    
     
for (var i in Slots) {
  //console.log(Slots[i].x)
  if (Slots[i].x/64 == picked) {
  Slots[i].use(picked)
 
}
}

}
 

  
    
  

function addItem(item, location){
 RefreshInventory()
for (var k in inventory){
   var value = inventory[k]
   if (value == 0) {
     location = k
     break;
   }

 }

  inventory[location] = item
}


