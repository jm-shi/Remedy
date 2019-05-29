# Team Name: Remedy

## Team Members: Eric Yang, Nikki Hardiman, Jamie Shi, Lawrence Ngo

### How a target user would use our app
Imagine a student named Bob who is on the soccer team. While playing, he sprained his ankle, an injury that can be remedied at home. 
He needs a way to be informed about his injury, track its recovery progress, and store the information for future reference. 
With the Remedy app, he searches through the injury list, navigating under soccer to find general information about ankle sprains, 
such as, the symptoms and treatment for it. Under treatment, it says he needs to apply an ice pack to the area. Through the use of 
the map function in the app, he locates a nearby pharmacy to buy medical supplies, in this case, some ice packs. To keep track of 
the injury, he adds his sprain to the injury log hoping to recovery within a week through the process of applying ice to the injury. 
Throughout the week, he adds progress logs where he inputs how the injury is doing and how he is feeling. Eventually, the injury 
heals up, but he ends up getting another sprain in the same area. The injury feel slightly different, so he wants to email his doctor
to get further diagnostics. Through the contact doctor page, he sends an email to his doctor including a subject and a message, 
which includes all of his injury log history. Now that the doctor has access to his injury history, the doctor can further help him
diagnose and treat his injuries. 

### UI screenshots
<img src="/images/milestone5/login.png" alt="Login">
<img src="/images/milestone5/signup.png" alt="Signup">
<img src="/images/milestone5/home.png" alt="Home">
<img src="/images/milestone5/help.png" alt="Help">
<img src="/images/milestone5/profile.png" alt="Profile">
<img src="/images/milestone5/editProfile.png" alt="Edit Profile">
<img src="/images/milestone5/list.png" alt="Injury List">
<img src="/images/milestone5/sport.png" alt="Sport">
<img src="/images/milestone5/injury.png" alt="Injury">
<img src="/images/milestone5/log.png" alt="Injury Log">
<img src="/images/milestone5/map.png" alt="Map">
<img src="/images/milestone5/doctor.png" alt="Doctor">
<img src="/images/milestone5/pharmacy.png" alt="Pharmacy">

### Improvements made since milestone 4
Since milestone 4, we made many slight improvements to the UI. For example, on the map page, we adjusted the layout of the markers 
so that they did not look cramped on any screen size. We implemented functional filter/sort buttons so that users could filter by 
pharmacy/doctor and sort the results by rating. The information page for each doctor and pharmacy also displays more details than 
before, such as phone number and address. On the injury list page, we reduced the size of the sport icons so that they were not 
overly large. We also created a logo to provide a more unique feel to our app. 

### How data was displayed and how data display was implemented
We used Sass, Handlebars and jQuery to help with displaying the actual content on the screen. To store the users’ injury log data, 
we used PostgreSQL as our database due to its high compatibility with Heroku, which we used to deploy our app. Our database would 
have injury tables, which would be modeled to have attributes like id, name, and expected recovery date. We would make AJAX requests
to call SQL queries to select, insert, delete, and update the relevant injury data from our database.

We also imported .csv files concerning common injuries associated with popular sports into our database. This involved implementing 
a many-to-many relationship between sports and injuries, as each sport could be associated with multiple injuries, and each injury 
could be associated with multiple sports. The result of the query would then be displayed on the user’s screen.

We used Postico to help visualize the information inside our database. The images below show a portion of the information regarding 
our injury list data. Each common injury in the c_injury table has an id, as does each sport in the sport table. The sport_c_injury 
table then helps with linking each injury to specific sport(s).

<img src="/images/milestone5/postico_c_injury.png" alt="Postico c_injury">
<img src="/images/milestone5/postico_sport.png" alt="Postico sport">
<img src="/images/milestone5/postico_sport_c_injury.png" alt="Postico sport_c_injury">

In addition, we used the Google Maps API, Yelp API, and BetterDoctor API to display nearby doctors/pharmacies. The default user 
location is currently set to La Jolla, so upon first visiting the map screen, one will see information about nearby doctors/pharmacies
in the San Diego area. However, users have the ability to search for new locations using the searchbar. The geocoding API will 
convert this input into geographic coordinates (latitude and longitude), which get passed into the API requests for Yelp and 
BetterDoctor to retrieve data about doctors and pharmacies.  

### Potential improvements
Some ambitious data displays or visualization ideas for our application could involve a visual progress bar for the injury history 
logs. By having a progress bar, we could allow the user to visually keep track of their own progress in addition to having their 
progress in date form. Another idea for our application could be having graphical representations of general statistics of the 
user on the profile page (e.g. total number of injuries, total number of injuries recovered, average time until recovery, etc.). 
More ideas could include a tutorials page that guides users and gives a rundown of the actions users can take when using our 
application. Lastly, we could add have users add their favorite doctors/pharmacies like bookmarks on the internet, so that the 
user doesn’t have to keep remembering their preferred/favorite doctors or pharmacies.

### Deployed app

Our deployed app can be accessed [here](https://remedies.herokuapp.com/).

