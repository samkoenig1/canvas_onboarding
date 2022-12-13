//// New Student onboarding ///
if (window.location.href.includes("register?") === true) {
  window.onload  = function() {
    var already_have_account = 'https://onegoal.instructure.com/enroll/' +  window.location.href.split('?')[3] + '?' + window.location.href.split('?')[1].replace("%40","@"); //create a link based on url parameters to send students who already have an account to a different page
    document.getElementById('signup_student').click(); // Click on the "I'm a student button" on load
    document.getElementById('student_username').type='email'; // validate username field based on type - email
    document.getElementById('student_join_code').value= window.location.href.split('?')[3]; //autopopulate join code from URL parameters
    document.getElementById('ui-id-2').style.height= "350px"; // change text size of header
    document.querySelector("#ui-id-2 > div > form > div:nth-child(3) > label.control-label").textContent="School Email" ;// Change text from username--> "School Email" on form
    document.querySelector("#ui-id-2 > div > form > div:nth-child(2) > label.control-label").textContent="First and Last Name"; // Change text from full name --> "First and Last Name" on form
    document.getElementById('ui-id-1').innerHTML=   "<div style = 'font-size:14px'> <img src= 'https://instructure-uploads.s3.amazonaws.com/account_158170000000000001/attachments/3326/onegoal_logo_tangerine_ff4f35.png' width='200px' margin-left='auto' margin-right='auto'><br> <strong> <p> Thank you for completing your Welcome Survey! As a next step, let's create your account for OneGoal Canvas. Canvas will be where you will engage in all your OneGoal content, so make sure to choose a password that you will remember! If you already have a canvas account, you can login to your new course <u> <a  href = '"+ already_have_account  + "' target='_blank'> here.</a> </u> </strong> </p> <div>";  // quick message to welcome student to OneGoal, and instructions for filling out the form
    document.getElementById('student_username').value= window.location.href.split('?')[1].replace("%40","@");  //autopopulate username field from URL Parameters and replace ""%40" with @
    document.getElementById('student_name').value= window.location.href.split('?')[2].replaceAll("_", " ");  //autopopulate student name field from URL Parameters and replace "_" with space

      }
  };


////FUNCTION FOR Returning Student Onboarding (returning users) ///
if (window.location.href.includes("enroll/") === true) {
  window.onload  = function() {
    var register_page = 'https://onegoal.instructure.com/register?' +  window.location.href.split('?')[1].replace("%40","@") + '??' + window.location.href.split('?')[0].replace("https://onegoal.instructure.com/enroll/","") // establish url to register users if they don't have account;
    var forgot =  'https://onegoal.instructure.com/login/canvas?forgot_password?' + window.location.href.split('?')[1].replace("%40","@") // grab email from URL parameter and autopopulate field ;
    document.getElementById('selfEnrollmentAuthRegLogin').click(); // Click on the "I already have a OneGoal Inc. Login field
    document.getElementById('initial_action').style.display  ="none" // hide initial action distracting button; //
    document.getElementById('student_email').value= window.location.href.split('?')[1].replace("%40","@");  //autopopulate username field
    document.getElementById('submit_button').type = "submit" // change type of button to submit;
    document.querySelector("#enroll_form > div").innerHTML="<p> Thank you for completing your Welcome Survey! As a next step, let's enroll in your OneGoal course. You can use the same email and password you used for OneGoal Canvas last year!</p>"; // Change text to directions for Y2 Onboarding
    document.querySelector("#enroll_form > p").innerHTML=  "<i> <p> Don't have a Canvas account? Create one <u> <a  href = '"+ register_page + "' target='_blank'> here.</a></u> </p> <p> Forgot your password? Click <u> <a  href = '"+ forgot + "' target='_blank'> here</a></u> to reset it. Then come back to this page to enroll in your course. </p> </i>"; // instructions + links to forgot password page or register page
    document.querySelector("#modal-box > header").innerHTML=  "<img src= 'https://instructure-uploads.s3.amazonaws.com/account_158170000000000001/attachments/3322/onegoal_logo_white.png' width='200px' class='center'>";
  };
};

//function for DPP register page to send users who forgot their password so that email autopopulates on forgot password page
if (window.location.href.includes("?forgot_password") === true) {
    window.onload  = function() {
      document.getElementById('login_forgot_password').click(); // Click the forgot_password link
      document.getElementById('pseudonym_session_unique_id_forgot').value= window.location.href.split('?')[2].replace("%40","@");  //autopopulate email field
      document.getElementById('pseudonym_session_unique_id_forgot').type='email'; // validate username field based on email

  };
};
