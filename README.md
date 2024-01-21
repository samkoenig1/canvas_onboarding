
# Canvas Onboarding
**Context** - The purpose of this code is to streamline the self join process using URL parameters separated by a "?" delimiter in Instructure Canvas. This code will work for both users who already have an account and for users who do not have an account and are login on for the first time through the following URLs with custom parameters: 
 - https://{insertdomain}.instructure.com/enroll/{insert_join_code}?{insertemail}
 - https://{insertdomain}.instructure.com/register?{insertemail}?{insert_name}?{insert_join_code}

The following are the variables of importance to the above URL parameters: 
1) {insertdomain} - the unique domain of your instructure account
2) {insertjoincode} - the join code that can be found on the individual course in Canvas. Directions to find join code in your account can be found [here](https://community.canvaslms.com/t5/Instructor-Guide/How-do-I-enable-course-self-enrollment-with-a-join-code-or/ta-p/830)
3) {insertemail} - The email of the canvas user account
4) {insert name} - The name of the individual in the canvas account (separated by a "_" to pass through a URL)

**Requirements**:

 - Step 1 - Ensure you find and replace {insertdomain} in the domain in the code. 

 - Step 2 - Update the custom javascript in your theme editor with the code from the file ([directions here](https://community.canvaslms.com/t5/Admin-Guide/How-do-I-upload-custom-JavaScript-and-CSS-files-to-an-account/ta-p/253)) 
