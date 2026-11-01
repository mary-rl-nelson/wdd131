const form = document.querySelector(".eventForm");
const isStudent = document.querySelector("#studentContainer");
const isGuest = document.querySelector("#guestContainer");
const output = document.querySelector("#output");
const accessCode = document.querySelector("#accessCode");
const id = document.querySelector("#id");
const ifStudent = document.querySelector("#ifStudent");




//code below determines if the value is guest or student and which hidden box to display.
function updateStudentId() {
  const value = ifStudent.value;

  if (value === 'student'){
    isStudent.hidden = false;
    id.required = true;
  } else {
    isStudent.hidden = true;
    id.required = false;
  } 
}

function updateGuestCode(){
    const value = ifStudent.value;

    if (value === 'guest'){
        isGuest.hidden = false;
        accessCode.required = true;
    } else {
        isGuest.hidden = true;
        accessCode.required = false;
    }
}

//This calls the functions if the type changes
ifStudent.addEventListener("change", () => {
    updateStudentId();
    updateGuestCode();
})

// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

function verifyAccessCode() {

    if (code === "EVENT131"){
        return true;
    } else {
        return false;
    }

}

function verifyStudentId() {
    if (value.length >= 9){
        return true;
    } else {
        return false;
    }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";
  
  //the email pattern helps us valitdate if it has correct
  //format. I needed to look up how to do that. 
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.ifStudent.value;
  const eventDate = form.eventDate.value;
  const studentId = form.elements["id"].value.trim();
  const errors = [];
  const accessCode = form.accessCode.value.trim().toUpperCase();
  
  if (!firstName){
    errors.push("Please enter first name.");
  }

  if (!lastName){
    errors.push("Please enter last name.");
  }

  if (!emailPattern.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  if(!type){
    errors.push("Please choose a type.");
  }

  if (type === "guest" && !accessCode){
    errors.push("Please enter access code.");
  }

  if (type === "guest" && accessCode !== "EVENT131"){
    errors.push("Incorrect access code.");
  }

  if(type === "student" && studentId.length !== 9){
    errors.push("Student I# must be 9 characters.");
  }  

  if (type === "student" && !studentId){
    errors.push("Please enter student I#.");
  }

  if (isPastDate(eventDate)) {
    errors.push("Please choose a later date.");
  }

  if(!eventDate){
    errors.push("Please choose an event date.");
  }

  //This part of with the error list, I had chat
  //gpt help me learn how to display all the errors at 
  //once opposed to having it show errors one at a time.
  // At the very end I have my original code that shows erros one at a time.
  if (errors.length > 0) {
    output.innerHTML = "";

    const errorList = document.createElement("ul");

    errors.forEach(function(error) {
        const listItem = document.createElement("li");
        listItem.textContent = error;
        errorList.appendChild(listItem);
    });

    output.appendChild(errorList);
    return;

  }

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Event Date: ${eventDate}</p>
  <p>Type: ${type}</p>
  `;

  form.reset();
  updateStudentId();
  updateGuestCode();
});














          










//Original code before changing to make list of errors
/*
const form = document.querySelector(".eventForm");
const isStudent = document.querySelector("#studentContainer");
const isGuest = document.querySelector("#guestContainer");
const output = document.querySelector("#output");
const accessCode = document.querySelector("#accessCode");
const id = document.querySelector("#id");
const ifStudent = document.querySelector("#ifStudent");

//code below determines if the value is guest or student and which hidden box to display.
function updateStudentId() {

    const value = ifStudent.value;

    if (value === 'student'){
        isStudent.hidden = false;
        id.required = true;
    } else {
        isStudent.hidden = true;
        id.required = false;
    } 
}

function updateGuestCode(){
    const value = ifStudent.value;

    if (value === 'guest'){
        isGuest.hidden = false;
        accessCode.required = true;
    } else {
        isGuest.hidden = true;
        accessCode.required = false;
    }
}

//This calls the functions if the type changes
ifStudent.addEventListener("change", () => {
    updateStudentId();
    updateGuestCode();
});

// Ensure they choose a date later than the current date
function isPastDate(value) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const chosen = new Date(value + "T00:00:00");
    return chosen <= today;
}

function verifyAccessCode(code) {
    if (code === "EVENT131"){
        return true;
    } else {
        return false;
    }
}

function verifyStudentId(value) {
    if (/^\d{9}$/.test(value)){
        return true;
    } else {
        return false;
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = form.ifStudent.value;
    const eventDate = form.eventDate.value;
    const studentId = form.elements["id"].value.trim();
    const accessCode = form.accessCode.value.trim().toUpperCase();

    if (!firstName) {
        output.textContent = "Please enter your first name.";
        return;
    }

    if (!lastName) {
        output.textContent = "Please enter your last name.";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        output.textContent = "Please enter a valid email address.";
        return;
    }

    if (!type) {
        output.textContent = "Please choose Student or Guest.";
        return;
    }

    if (type === "guest" && !accessCode){
        output.textContent = "Please enter access code.";
        return;
    }

    if (type === "guest" && !verifyAccessCode(accessCode)){
        output.textContent = "Incorrect access code.";
        return;
    }

    if (type === "student" && !studentId){
        output.textContent = "Please enter student I#.";
        return;
    }

    if(type === "student" && !verifyStudentId(studentId)){
        output.textContent = "Student I# must be 9 digits.";
        return;
    }

    if(!eventDate){
        output.textContent = "Please choose an event date.";
        return;
    }

    if (isPastDate(eventDate)) {
        output.textContent = "Date entered is today or in the past, please choose a later date.";
        return;
    }

    output.innerHTML = `
        <h2>Ticket Created</h2>
        <p id="ticketName"></p>
        <p id="ticketEmail"></p>
        <p id="ticketDate"></p>
        <p id="ticketType"></p>
    `;

    document.querySelector("#ticketName").textContent =
        `${firstName} ${lastName}`;
    document.querySelector("#ticketEmail").textContent =
        `Email: ${email}`;
    document.querySelector("#ticketDate").textContent =
        `Event Date: ${eventDate}`;
    document.querySelector("#ticketType").textContent =
        `Student/Guest: ${type}`;

    form.reset();
    updateStudentId();
    updateGuestCode();
});

updateStudentId();
updateGuestCode();
*/





