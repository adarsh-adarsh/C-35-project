class Question2
{ 
  constructor() 
  {

  } 
  display()
  { 
    var question2 = createElement('h2'); 
    question2.html("QUESTION2"); 
    question2.position(180,160); 
    var input2 = createInput("Do we need to contribute to a local orphanage???"); 
    var button2 = createButton('YES/NO'); 
    input2.position(180,180); 
    button2.position(180,190);
  } 
}