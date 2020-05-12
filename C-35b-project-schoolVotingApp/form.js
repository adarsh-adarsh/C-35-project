class Form 
{ 
  constructor() 
  {

  } 
  display()
  { 
    var title = createElement('h2'); 
    title.html("School Voting App"); 
    title.position(130, 0); 
    var input = createInput("Email id"); 
    var button = createButton('START'); 
    input.position(130, 160); 
    button.position(250, 200); 
    button.mousePressed(()=>
    { 
      input.hide(); 
      button.hide(); 
      var name = input.value(); 
      var greeting = createElement('h3'); 
      greeting.html("Hello" + name); 
      greeting.position(200,5);
      Question1.display();
      Question2.display();
      Question3.display();
      Question4.display();
      Question5.display();
      var button2 = createButton('SUBMIT');
      button2.position(240,495);
    }
    );
    if(button2.mousePressed)
    {
      greeting.hide();
      Question1.hide();
      Question2.hide();
      Question3.hide();
      Question4.hide();
      Question5.hide();
      text("YOUR ANSWERS"+input11+input22+input33+input44+input55,220,250);
    }
  } 
}