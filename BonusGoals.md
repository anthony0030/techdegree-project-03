# Project 3 - Bonus Round

## Going the Extra Mile!

The following tasks below will stretch you a bit to use some Javascript plugins to enhance your contact form. I’m not going to provide you with any other information about how to achieve these goals, except for clarifications of the instructions. This challenge will require you to read up on plugin documentation and various API features of different libraries.

For this bonus round, I would like you to add the following 3 features.

1. Client-Side Validation - Without any extra intervention, if you’ve made required fields, pressing the submit button on a form will trigger field validations. The form will not submit if the fields are incomplete or have the wrong values. The bad thing is that a user will not have immediate feedback regarding their entered data. They will have to wait until submission to get feedback. Let’s change that!  What I would like you to do is provide the user immediate feedback about their required form field entries BEFORE having to submit the form. There’s no sense in reinventing the wheel, so use an existing plugin. Take a look at Parsley.js on Github to complete this bonus task (https://github.com/guillaumepotier/Parsley.js/) 
2. Input Masking - Sometimes people are stoooopid and don’t know numbers from letters. For instance, you have a form field which asks the user to enter a predefined string composed of various arrangements of numbers and letters. The provided data ALWAYS follows a standard format, so a user really shouldn’t be able to provide you data that breaks the format.  For this example, we have a field that asks for an ID code. The following ID code follows the pattern and length, “AB1-CDEFG-23-45HI-J”. What matters is that at that specific spot in the string, it must be what you see, either a letter or number.   Create a required ID field that uses an input mask. Take a look at Inputmask on Github to complete this bonus task (https://github.com/RobinHerbots/Inputmask) 
3. DatePicker Field - The built in calendar date selector is boooooring. Let’s jazz it up a bit with a modern and larger date picker widget with a lot more controls.  Create a form field asking the user to select the date which they will submit project 3. The calendar widget should meet the following criteria,  
    1. The user cannot select weekends, 
    2. The date cannot be more than 1 week from now, and 
    3. The date cannot be earlier than today.
    4. To complete this task, use the pickadate.js library on Github (https://github.com/amsul/pickadate.js/)

If you can get these working, I will be very impressed.
