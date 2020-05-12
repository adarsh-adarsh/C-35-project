class Question5
{ 
  constructor() 
  {

  } 
  display()
  { 
    var question5 = createElement('h2'); 
    question5.html("QUESTION5"); 
    question5.position(180,430); 
    var input5 = createInput("Do we need to half a holiday on all Saturdays too???"); 
    var button5 = createButton('YES/NO'); 
    input5.position(180,450); 
    button5.position(180,460);
  } 
}