Demo
Check out the live demo: https://form-level1-ebon.vercel.app/


Event Registration Form
This project implements a simple Event Registration Form using React. The form allows users to enter their name, email, age, 
and indicate whether they are attending with a guest. If attending with a guest, an additional field for guest name is displayed.
The form includes basic validation for required fields and email format.

Features
Form Fields:

Name (Text)
Email (Email)
Age (Number)
Are you attending with a guest? (Yes/No)
Guest Name (Text, visible only if attending with a guest)
Conditional Logic:

Shows the "Guest Name" field only if the "Are you attending with a guest?" field is answered with "Yes".
Validation:

Name: Required
Email: Required and must be a valid email format
Age: Required and must be a number greater than 0
Guest Name: Required if attending with a guest
Submission:

On form submission, displays a summary of the entered data below the form.
