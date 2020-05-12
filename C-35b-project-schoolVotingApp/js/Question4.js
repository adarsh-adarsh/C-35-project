class Question4
{ 
  constructor() 
  {

  } 
  display()
  { 
    var question4 = createElement('h2'); 
    question4.html("QUESTION4"); 
    question4.position(180,340); 
    var input4 = createInput("Do we need to have half day school on all the days of the week???"); 
    var button4 = createButton('YES/NO'); 
    input4.position(180,360); 
    button4.position(180,370);
  } 
}