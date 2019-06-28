# Remedy

Remediate your injuries.

# Table of Contents

- [Team Members](#members)
- [Contributions](#contributions)
- [Source Code](#source-code)
  - [root](#root)
  - [controllers](#controllers)
  - [models](#models)
  - [public/css](#public-css)
  - [public/sass](#public-sass)
    - [public/sass-abstracts](#public-sass-abstracts)
    - [public/sass-base](#public-sass-base)
    - [public/sass-components](#public-sass-components)
    - [public/sass-layout](#public-sass-layout)
    - [public/sass-pages](#public-sass-pages)
  - [routes](#routes)
  - [views](#views)
    - [views/layouts](#views-layouts)
    - [views/partials](#views-partials)
- [Slide](#slide)
- [Demo Video](#demo)

<a name="members"/>

## Team Members

Eric Yang, Nikki Hardiman, Jamie Shi, Lawrence Ngo

<a name="contributions"/>

## Contributions

<strong>Eric Yang</strong>

<ul>
  <li>Created common injuries page</li>
  <li>Created injury list/details page</li>
  <li>Added markers to the map displaying pharmacy and doctor locations</li>
  <li>Added information (address, phone number, price, rating) to pharmacy and doctor pages</li>
  <li>Connected Yelp API with app</li>
  <li>Collected data about popular sports and their commonly associated injuries</li>
</ul>

<strong>Nikki Hardiman</strong>

<ul>
  <li>Created profile page</li>
  <li>Created home page</li>
  <li>Created sign up page</li>
  <li>Collected a dataset of images for sports and common injuries</li>
  <li>Wrote pitch</li>
</ul>

<strong>Jamie Shi</strong>

<ul>
  <li>Set up project, organized codebase and connected app to Postgres</li>
  <li>Implemented CRUD functionality for injury logs</li>
  <li>Implemented search functionality for injuries, doctors, and pharmacies</li>
  <li>Implemented filter/sort functionality for doctors and pharmacies</li>
  <li>Connected app to Google Maps and BetterDoctor API</li>
  <li>Helped design screens and improve user interface</li>
</ul>

<strong>Lawrence Ngo</strong>

<ul>
  <li>Created current/past injuries log</li>
  <li>Created help page</li>
  <li>Created contact doctor page</li>
  <li>Created video demo</li>
  <li>Created presentation slide</li>
  <li>Designed logo</li>
</ul>

<a name="source-code"/>

## Source Code

<a name="root"/>

### Root

| File name    | Description                                                                                          |
| :----------- | :--------------------------------------------------------------------------------------------------- |
| index.js     | Handles app startup and defines routes                                                               |
| gulpfile.js  | Used to compile SCSS to CSS                                                                          |
| nodemon.json | Configures Nodemon to automatically restart app when JavaScript, Handlebars or CSS files are changed |

<a name="controllers"/>

### Controllers

| File name     | Description                                                                                          |
| :------------ | :--------------------------------------------------------------------------------------------------- |
| doctor.js     | Fetches doctor data from the BetterDoctor API                                                        |
| injuryList.js | Finds specified sports in the Postgres database and returns the result                               |
| injuryLog.js  | Responsible for the CRUD functionality of injury logs; connected to Postgres                         |
| map.js        | Converts user-entered addresses into geodata; used to help display the specified location on the map |
| pharmacy.js   | Fetches pharmacy data from the Yelp API                                                              |

<a name="models"/>

### Models

| File name             | Description                                                             |
| :-------------------- | :---------------------------------------------------------------------- |
| injuryLogSchema.sql   | Database schema for injury log item                                     |
| sportInjurySchema.sql | Database schema for the sport/injury items displayed in the injury list |

<a name="public-css"/>

### CSS

| File name     | Description                                                                                              |
| :------------ | :------------------------------------------------------------------------------------------------------- |
| style.css     | Whenever you save a .scss file, Gulp will automatically compile all Sass files into this single CSS file |
| style.min.css | Minified version of style.css                                                                            |

<a name="public-sass"/>

### Sass

| File name | Description                                      |
| :-------- | :----------------------------------------------- |
| main.scss | Primary Sass file (imports all other Sass files) |

<a name="public-sass-abstracts"/>

Abstracts

| File name        | Description            |
| :--------------- | :--------------------- |
| \_variables.scss | Defines Sass variables |

<a name="public-sass-base"/>

Base

| File name   | Description                                                    |
| :---------- | :------------------------------------------------------------- |
| \_base.scss | Sets default default margin, padding, and font size in browser |

<a name="public-sass-components"/>

Components

| File name          | Description                                                                       |
| :----------------- | :-------------------------------------------------------------------------------- |
| \_back-button.scss | Stylizes the back button that is present on most screens                          |
| \_card.scss        | Stylizes the card component that is primarily used on the injury log and map page |
| \_form.scss        | Stylizes the form used for logging in                                             |
| \_gallery.scss     | Shows relevant content (e.g. items in injury list) in gallery format              |
| \_log-item.scss    | Stylizes the log items used in the injury log                                     |
| \_navbar.scss      | Stylizes the navbar                                                               |
| \_search-bar.scss  | Stylizes the searchbar                                                            |

<a name="public-sass-layout"/>

Layout

| File name              | Description                                               |
| :--------------------- | :-------------------------------------------------------- |
| \_iframeContainer.scss | Handles how the map on the map screen should be contained |

<a name="public-sass-pages"/>

Pages

| File name             | Description                                         |
| :-------------------- | :-------------------------------------------------- |
| \_contact.scss        | Stylizes content exclusively on contact doctor page |
| \_help.scss           | Stylizes content exclusively on help page           |
| \_injury-details.scss | Stylizes content exclusively on injury details page |
| \_map.scss            | Stylizes content exclusively on map page            |
| \_profile.scss        | Stylizes content exclusively on profile page        |

<a name="routes"/>

### Routes

| File name      | Description                     |
| :------------- | :------------------------------ |
| doctor.js      | Renders the doctor details page |
| help.js        | Renders the help page           |
| home.js        | Renders the home page           |
| injury-list.js | Renders the injury list page    |
| injury-log.js  | Renders the injury log page     |
| login.js       | Renders the login page          |
| map.js         | Renders the map page            |
| pharmacy.js    | Renders the pharmacy page       |
| profile.js     | Renders the profile page        |

<a name="views"/>

### Views

| File name                  | Description                                                                                                                                                                                                                                                                                                 |
| :------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| common-injuries.handlebars | Displays the common injuries for a particular sport, and includes a search bar for users to find specific injuries                                                                                                                                                                                          |
| contact-doctor.handlebars  | Allows users to send emails to their doctor about medical-related information                                                                                                                                                                                                                               |
| current-log.handlebars     | Displays injuries that the user is currently in the process of recovering from. Allows users to add new injuries, as well as to edit/delete them or mark them as recovered. Each injury is also has its own history log, where users can provide frequent updates about their progress with the said injury |
| doctor.handlebars          | An information page for specific doctors, including details such as the doctor's name, picture, rating, address, phone number, biography, specialties, and accepted insurance                                                                                                                               |
| help.handlebars            | Contains a list of potential questions user may ask and provided answers to help users navigate the app if they are lost or confused                                                                                                                                                                        |
| home.handlebars            | The main page, where users can navigate to the injury list, injury log, map, or contact doctor screen                                                                                                                                                                                                       |
| injury-details.handlebars  | Displays specific information about an injury (description, image, possible symptoms, treatments, and a link to the source page with more information about the injury)                                                                                                                                     |
| injury-list.handlebars     | Displays a collection of sports, which the users can click to view common injuries for that particular sport. Also includes a search bar that allows users to find a specific sport                                                                                                                         |
| login.handlebars           | Serves as the login/signup page for users opening the app                                                                                                                                                                                                                                                   |
| map.handlebars             | Dynamically fetches doctor/pharmacy/location data and displays the results both in the form of a list and as pins on a map. Includes a search bar for users to view different areas throughout the world, and a sort button to sort the data by either best matched or highest rated                        |
| pharmacy.handlebars        | An information page for specific pharmacies, including details such as an image of the pharmacy, its name, rating, address, phone number, relative pricing, and hours.                                                                                                                                      |
| previous-log.handlebars    | Displays injuries that the user has already been recovered from. Allows the user to delete these injuries or move them back to the list of current injuries, should that injury not yet been fully recovered                                                                                                |
| profile.handlebars         | Contains personal user data (e.g. name, email, sports played, doctor) and allows the user to edit their information                                                                                                                                                                                         |

<a name="views-layouts"/>

Layouts

| File name       | Description                                               |
| :-------------- | :-------------------------------------------------------- |
| main.handlebars | HTML page wrapper that is reused for all views in the app |

<a name="views-partials"/>

Partials

| File name              | Description                                                                  |
| :--------------------- | :--------------------------------------------------------------------------- |
| back-button.handlebars | Displays a back button that is present on most screens                       |
| card.handlebars        | Displays a card item that is primarily used on the injury log and map screen |
| modal.handlebars       | Displays a modal that is used on the current log screen                      |
| navbar.handlebars      | Displays a navbar that is present on most screens                            |
| search-bar.handlebars  | Displays a search bar                                                        |
| sport-box.handlebars   | Displays a box containing the user’s sports played on their profile page     |

<a name="slide"/>

## Slide
[Click here to view Google Slide.](https://docs.google.com/presentation/d/1Jx8RNLGhN-I7lizR2yX8RJP7WP79_LsDiCePFTf8Uiw/edit?usp=sharing)


<img src="/images/slide.png">

<a name="demo"/>

## Demo Video
[Click here to view demo video.](https://youtu.be/fOVXIwlzwn0)
