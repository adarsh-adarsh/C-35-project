class Question3
{ 
  constructor() 
  {

  } 
  display()
  { 
    var question3 = createElement('h2'); 
    question3.html("QUESTION3"); 
    question3.position(180,250); 
    var input3 = createInput("Do we need to grow more trees within the school on 'EARTH DAY'???"); 
    var button3 = createButton('YES/NO'); 
    input3.position(180,270); 
    button3.position(180,280);
  } 
}