class Question1
{ 
  constructor() 
  {

  } 
  display()
  { 
    var question1 = createElement('h2'); 
    question1.html("QUESTION1");  
    question1.position(180,70);
    var input1 = createInput("Do we need to have free lunch in our school???"); 
    var input11 = createInput('YES/NO'); 
    input1.position(180,90); 
    input11.position(180,100);
  } 
}