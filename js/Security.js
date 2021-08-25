class Security {

    constructor(){

  this.access1=createInput("FOR FIRST WORD");
  this.access1.position(100,90);
  this.access1.style("background","white");
  this.button1=createButton();
  this.button1.position(100,120);
  this.button1.style("background","grey");

   this.access2=createInput("FOR SECOND WORD");
   this.access2.position(700,80);
   this.access2.style("background","white");
   this.button2=createButton();
   this.button2.position(700,110);
   this.button2.style("background","grey");

    this.access3=createInput("FOR THIRD WORD");
    this.access3.position(100,180);
    this.access3.style("background","white");
    this.button3=createButton();
    this.button3.position(100,210);
    this.button3.style("background","grey");

     this.access4=createInput("WHOLE CODE FOR GOLD");
     this.access4.position(400,200);
     this.access4.style("background","gold");
     this.button4=createButton();
     this.button4.position(400,230);
     this.button4.style("background","grey");
     
    }

    display(){

        // Add code to make the buttons function as expected
     this.button1.mousePressed(()=>{
      
        if(system.authenticate(accessCode1,this.access1.value())){
          this.button1.hide();
          this.access1.hide();
          score=score+1;
        }
      

       

     })
   this.button2.mousePressed(()=>{
      
    if(system.authenticate(accessCode2,this.access2.value())){
      this.button2.hide();
      this.access2.hide();
      score=score+1;
    }

   

 })
 this.button3.mousePressed(()=>{
      
  if(system.authenticate(accessCode3,this.access3.value())){
    this.button3.hide();
    this.access3.hide();
    score=score+1;
  }

 

})
this.button4.mousePressed(()=>{
      
  if(system.authenticate(accessCode4,this.access4.value())){
    this.button4.hide();
    this.access4.hide();
    score=score+1;
  }

 

})
    }
}