Create form and present it to the user

Add a label for each selector (year / month / day) for user to select their chosen date

    Year selection
        Iterate over 10 years, each time adding an element to the year selection
        Years from 2020 to 2030 will appear in drop down for user to select their chosen year 
    
    Month selection
        Iterate over 12 months, each time adding an element to the month selection
        Months from 1 to 12 will appear in drop down for user to select their chosen month 

    Day selection
        When the month is selected (JS event), add the correct number of days to the day selection

Once the user enters their target date, a countdown will begin 

Luxon library is used to retrieve the users time zone in order to have an accurate countdown

The countdown date is retrieved by subracting the current date with the target date

    Converting to days
        Once the amount of time until the target date is acquired. We must then convert the time so that it is easier to read.

        (ms / 1000 / 60 / 60 / 24)

    Converting to hours
        Convert the amount of milliseconds into hours (ms / 1000 / 60 / 60) and subtract the hours by the days (remaining hours = hours - (days * 24)) to retrieve the remaining hours.

    Converting to minutes
        Repeat the same steps as above for the minutes. (minutes = ms / 1000 / 60). Subtract the minutes by the hours to retrieve the correct amount of remaining minutes. 
        
        (remaining minutes = minutes - (hours * 60))

    Converting to seconds
        Repeat the same steps one last time in order to get the amount of seconds for the countdown. Divide the amount of milliseconfs by 1000 (ms / 1000) to get the amount of seconds in the timer. Subtract the seconds by the remaining minutes to get the accurate countdown time in days, hours, minutes, and seconds. 

        (remaining seconds = seconds - (minutes * 60))

Respond to the form submit event - countdown will commence

Every second the timer is being reloaded in order to present an accurate countdown to the user

LocalStorage will allow users to be able to close the application and return to the same countdown previously selected