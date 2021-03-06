/* You have been asked to create an exercise app to keep track of your daily exercise goals.
The app has to give an indication of whether the all the goals for a specific day has been met, for example,
if all the goals for a specific day is met then the box in the web page that contains that day will turn green,
but if any one of goals is not the box that contains that day will turn red.
*/

/********************** Part 1**********************/
//Activity 1 - Create 7 Arrays, 1 for each day of the week
//Name each Array as follows:
//Array 1 - mondayGoals; Array 2: tuesdayGoals; Array 3: wednesdayGoals...etc
//Each Array should contain only 3 elements that will represent the goals for that day.
//You have the freedom to choose any goals you wish.
//Start coding here
var mondayGoals = ["10 situps", "20 squats", "15 pushups"];
var tuesdayGoals = ["30s plank", "16 lunges", "15 situps"];
var wednesdayGoals = ["10 situps", "20 squats", "15 pushups"];
var thursdayGoals = ["30s plank", "16 lunges", "15 situps"];
var fridayGoals = ["10 situps", "20 squats", "15 pushups"];
var saturdayGoals = ["30s plank", "16 lunges", "15 situps"];
var sundayGoals = ["10 situps", "20 squats", "15 pushups"];

//Activity 2 - Create an Array called checkboxId
//It must contain the following 3 elements:
//'box_one'
//'box_two'
//'box_three'
//Create the Array below.
var checkboxId = ["box_one", "box_two", "box_three"];

//Activity 3 - Create a function that will get the value of the drop value and returns it.
//Start by creating a function called getDropdownValue.
//Inside create a variable called days and set it equal to document.getElementById('days').value;
//Finally return the value by using the return method.
//Start writing the function here
function getDropdownValue(){
  var days = document.getElementById("days").value;
  return days;
}
//Activity 4 - Testing is an important part of coding and we want to test and confirm that if the user
//selects a day in the dropdown that the right value is returned or that a value is returned at all.
//Write a function called testDays.  Inside the function, call getDropdownValue
//and save its return value to a variable.  Then print "You chose " and the value
//of your variable to the console.
//Start writing the function here
function testDays(){
  var selectedDay = getDropdownValue();
  console.log("You chose "+selectedDay);
}

//Activity 5 - At the bottom of this page is a function called display.
//Inside the display function call the testDays function you've created.
//The display() function is already called in the exercise.html file
//The element looks like this <input type="submit" value="GO" id="button" onclick="display();">
//When you've completed this activity, you should be able to see the day you select in the console.

/********************** Part 2 **********************/
//This function creates a checkbox, a label, and a line break
//This function will work as a template for creating these DOM elements,
//which means it can be called multiple times.
//Activity 6 - Add dayGoal as a parameter for createCheckBox
//The dayGoal parameter will take the Arrays that you've created in Activity 1
function createCheckBox(dayGoal){
//Activity 7.1 - Create a variable called newCheckBox and create an INPUT element using the createElement() method.
  var newCheckBox = document.createElement("INPUT");

//Activity 7.2 - Create a variable called newLabel and create a LABEL element.
  var newLabel = document.createElement("label");

//Activity 7.3 - Create a variable called newBreak and create a br(break) element.
  var newBreak = document.createElement('br');

//Activity 8 - Create a variable called addTextToBox and create a text node using the createTextNode() method.
//Pass dayGoal as the parameter to createTextNode.
  var addTextToBox = document.createTextNode(dayGoal);

//Activity 9 - Use the setAttribute() to create a checkbox. Use your resources to learn how setAttribute works.
//Copy and paste createCheckBox.setAttribute(); and add the appropriate parameters to create the checkbox.
  //var createCheckBox;
  newCheckBox.setAttribute("type", "checkbox");

//Activity 10 - Uncomment the code below to 'activate' it.
  newCheckBox.id = checkboxId[i];

//Activity 11.1 - Use appendChild to append newCheckBox to newLabel.
  newLabel.appendChild(newCheckBox);

//Activity 11.2 - Append addTextToBox to newLabel.
  newLabel.appendChild(addTextToBox);

//Activity 11.3 - Append newBreak to newLabel.
  newLabel.appendChild(newBreak);

//Activity 12.1 - Create a variable called element and set it equal to document.getElementById("goals");
  var element = document.getElementById("goals");

//Activity 12.2 - Append newLabel to element
  element.appendChild(newLabel);
}

/********************** Part 3 **********************/

//This function creates a checkbox for each day based on the user's selection
//It uses the createCheckBox function to create the checkbox
//The function contains a parameter called selectedDay which takes in the user selection
//based on that day the specific goals for that day will appear in the HTML DOM
function goalsForTheDay(selectedDay){

  //Activity 13.1 - Inside the for loop of the goalsForTheDay function create an if statement
  //that checks which day the user had selected in the dropdown and then based on that day
  //use the createCheckBox function to create a checkbox that contains the goals for that.
  //Example: if(selectedDay === 'monday') then create a box for that day {createCheckBox(mondayGoals[i]);}
  for(i = 0; i < mondayGoals.length; i++){
    if(selectedDay === 'monday'){
      createCheckBox(mondayGoals[i]);
    }
  }
  for(i = 0; i < tuesdayGoals.length; i++){
    if(selectedDay === 'tuesday'){
      createCheckBox(tuesdayGoals[i]);
    }
  }
  for(i = 0; i < wednesdayGoals.length; i++){
    if(selectedDay === 'wednesday'){
      createCheckBox(wednesdayGoals[i]);
    }
  }
  for(i = 0; i < thursdayGoals.length; i++){
    if(selectedDay === 'thursday'){
      createCheckBox(thursdayGoals[i]);
    }
  }
  for(i = 0; i < fridayGoals.length; i++){
    if(selectedDay === 'friday'){
      createCheckBox(fridayGoals[i]);
    }
  }
  for(i = 0; i < saturdayGoals.length; i++){
    if(selectedDay === 'saturday'){
      createCheckBox(saturdayGoals[i]);
    }
  }
  for(i = 0; i < sundayGoals.length; i++){
    if(selectedDay === 'sunday'){
      createCheckBox(sundayGoals[i]);
    }
  }
}

//Activity 13.2 - In the display function at the bottom of this file, call the goalsForTheDay function,
//passing the variable "selected as the parameter.  After you've finished this step,
//you should see the check boxes appear on the left panel when you select a day and click "Go"


/********************** Part 4 **********************/
//The function below checks if all the checkboxes are checked for a particular day.
//If all of the checkboxes are checked then the box for that specific day will turn green.
//If any of the checkboxes are not checked then the box for that specific day will turn red.
function checkboxTrue(selectedDay){
//These variables gets the element with the specified ID in this case it will get the checkboxes.

//  var checkbox1 = document.getElementById(checkboxId[0]);
//  var checkbox2 = document.getElementById(checkboxId[1]);
//  var checkbox3 = document.getElementById(checkboxId[2]);

//Activity 15.1 - Create a variable called monday and get the element with the ID 'monIcon'
  var monday = document.getElementById("monIcon");

//Activity 15.2 - Create a variable called tuesday and get the element with the ID 'tuesIcon'
  var tuesday = document.getElementById("tuesIcon");

//Activity 15.3 - Create a variable called wednesday and get the element with the ID 'wedIcon'
  var wednesday = document.getElementById("wedIcon");

//Activity 15.4 - Create a variable called thursday and get the element with the ID 'thursIcon'
  var thursday = document.getElementById("thursIcon");

//Activity 15.5 - Create a variable called friday and get the element with the ID 'friIcon'
  var friday = document.getElementById("friIcon");

//Activity 15.6 - Create a variable called saturday and get the element with the ID 'satIcon'
  var saturday = document.getElementById("satIcon");

//Activity 15.7 - Create a variable called sunday and get the element with the ID 'sunIcon'
  var sunday = document.getElementById("sunIcon");

//This if statements checks if all of the checkboxes are checked
for(i = 0; i<checkboxId.length; i++){
  var chckbx = document.getElementById(checkboxId[i]);


    if(chckbx.checked ===true){
      //If all the checkboxes are ticked then the background color of the box
      //for that day in the HTML DOM should change to green.
      if(selectedDay === 'monday'){
      //Activity 16.1 - Use setAttribute() to change the background colour of the monday variable to green.
      //Additionally change the text color to white and eliminate the border.
        monday.style.backgroundColor = "green";
        monday.style.color = "white";
      }
      //Activity 16.2 - The if statement above changes the background of the monday box to green.
      //Below, use if statements to do the same for every day of the week (there should be 7 total).
      else if (selectedDay === 'tuesday') {
        tuesday.style.backgroundColor = "green";
        tuesday.style.color = "white";
      }
      else if (selectedDay === 'wednesday') {
        wednesday.style.backgroundColor = "green";
        wednesday.style.color = "white";
      }
      else if (selectedDay === 'thursday') {
        thursday.style.backgroundColor = "green";
        thursday.style.color = "white";
      }
      else if (selectedDay === 'friday') {
        friday.style.backgroundColor = "green";
        friday.style.color = "white";
      }
      else if (selectedDay === 'saturday') {
        saturday.style.backgroundColor = "green";
        saturday.style.color = "white";
      }
      else if (selectedDay === 'sunday') {
        sunday.style.backgroundColor = "green";
        sunday.style.color = "white";
      }

    } else {
      //Activity 16.3 - If even one checkbox is not ticked, then the background color of the box
      //for that day in the HTML DOM should change to red.
      //Use conditionals for each day of the week to change the background
      //colour of the appropriate box to red (as above).
      //Additionally, change the text color to white and eliminate the border.
      if(selectedDay === 'monday'){
        monday.style.backgroundColor = "red";
        monday.style.color = "white";
      }
      else if (selectedDay === 'tuesday') {
        tuesday.style.backgroundColor = "red";
        tuesday.style.color = "white";
      }
      else if (selectedDay === 'wednesday') {
        wednesday.style.backgroundColor = "red";
        wednesday.style.color = "white";
      }
      else if (selectedDay === 'thursday') {
        thursday.style.backgroundColor = "red";
        thursday.style.color = "white";
      }
      else if (selectedDay === 'friday') {
        friday.style.backgroundColor = "red";
        friday.style.color = "white";
      }
      else if (selectedDay === 'saturday') {
        saturday.style.backgroundColor = "red";
        saturday.style.color = "white";
      }
      else if (selectedDay === 'sunday') {
        sunday.style.backgroundColor = "red";
        sunday.style.color = "white";
      }
    }

}
}
//Activity 17.1 (OPTIONAL) - Create a function called disableButton that disables the 'GO' button in the HTML DOM after the user clicks it
//Call the function in the onclick attribute in the exercise.html file.
//Start your code here.
function disableButton(){
  document.getElementById("button").disabled = true;
}

//Activity 17.2 - Call the disableButton function in the onclick attribute of the GO button in the exercise.html

function display(){
  //complete Activity 5 here
 testDays();
  var selected = getDropdownValue();
  //Activity 13.2 - Call the goalsForTheDay function with selected as a parameter.
  goalsForTheDay(selected);
}


function enableButton(){
  document.getElementById("button").disabled = false;

}

function hide(){
  var l = document.getElementsByTagName('label');
  for (var i = 0; i < l.length; i++) {
    document.getElementsByTagName('label')[i].style.display = 'none';
  }
}
/********************** Part 5 **********************/
//Activity 18 - If you've made it to this activity that means your JavaScript is working perfectly.
//For this activity you are going to use your creativity to style the webpage using CSS.
//You have full creative freedom to style it however you fancy.
//Start by creating a new css file and title it "your name".css and link it to the exercise.html file.
//Remember to use your resources.
//Have fun! :)
