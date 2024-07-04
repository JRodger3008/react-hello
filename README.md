# react-hello App using ReactJS
<strong>Code written by Jordan Rodger</strong>
<br>
<br>

<strong>Task 17 - Introducing React Elements and Components - Part 2</strong>

This project was completed as a part of the DfE Full-Stack Web Development bootcamp at HyperionDev. My final grade for this was 94% along with my tesla.com website clone, which will be within the tesla-clone repository.
<br>
Node modules have been deleted.

Further, you will find the comments recieved from a code reviewer at HyperionDev below, along with the grading.
<br>
I utilised the Prettier VSCode extention, and a changed couple of variable definitions from var to let (as outlined in the code reviewers comments below), which was a silly mistake I made in this webpage when I submitted it for review. Hopefully, these issues are rectified, and no longer apply.

<h3>Below is the task specifications for Part 2 as given by HyperionDev:</h3>

	● Modify App.js file (within the src directory):

	○ Delete all the code inside the return( ) statement in the App
	function (lines 6–21) and replace it with a new JSX component
	that will be exported to the index.js file to be rendered.
 
	○ Create a JavaScript object called user, that stores all the details
	for a particular user of your app, above the App function but
	below the import statements within the App.js file.
 
		■ This object should have at least the following properties:
		name, surname, date_of_birth, address, country, email,
		telephone, company, profile_picture (source of where
		the image can be found), and shopping_cart. The
		shopping_cart property should be used to store an array
		of items in the user’s shopping cart.
	
	○ Edit the App component to use JSX to display all the
	information about the user object that you created earlier in an
	attractive way. This element should also make use of a custom
	stylesheet that you have created.
 
	○ The App component will be exported to the index.js file, which
	will render the component automatically when you run the app
	using npm run start.

 # Scores:

Completeness: 4 / 4
<br>
Efficiency: 4 / 4
<br>
Style: 3 / 4
<br>
Documentation: 4 / 4

# Positive
Great work, Jordan! 👏👏👏

✅ You have successfully implemented all of the requirements for this task.

⚡️ The reduce function for calculating the sub total and the use of props to make your components reusable are great examples of how you have displayed your skill in efficient coding.

💯 Your use of meaningful variable names and excellent separation of concerns (separating assets and components) makes your codebase easy to navigate. The styling applied in both your apps is well thought out and does well to enhance the user experience.

📝 Your documentation is clear and helpful. Comments explaining the purpose of various sections and specific lines of code provide valuable context to the reader of your codebases.

<h4> SIDE NOTE </h4>
With regard to your comment about having the price as a number or a string, it is without a doubt better to store it as a number due to the exact reason that you mentioned: It makes it easier and simpler to modify if needed. You nailed it.


# Improve
STYLING
➡️ Unfortunately, you have used 'var' to declare some of your variables. For example. in line 86 of your Apps.js file of your react-hello app. Please make consistent use of 'let' (for variables that contain a value that changes throughout the code) and 'const' (for variables that don't change) when declaring your variables. Doing this will help ensure that you follow consistent and up-to-date recommended JavaScript practices.

➡️ Some of your code has not been formatted consistently for this task. For example, in lines 125 and 165 of the Apps.js file of your react-hello app, these lines should be indented to be in line with the start of the above line. Please remember that you can always install the extension 'Prettier' to format your code for you. This will save you a lot of time and increase your productivity by not having to worry about the indentation of your code. I'd highly recommend setting it to format on save. 

# Overall
Overall, great job, Jordan! Keep up the good work and consider the aspect of improvements in your future tasks or maintenance. I am confident that you will continue to excel as a developer. Happy coding! 🚀
