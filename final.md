Remedy
======

Table of Contents  
=================
   * [Team Members](#members)
   * [Contributions](#contributions)
   * [Source Code](#source-code)
      * [root](#root)
      * [controllers](#controllers)
      * [models](#models)
      * [public/css](#public-css)
      * [public/sass](#public-sass)
         * [public/sass-abstracts](#public-sass-abstracts)
         * [public/sass-base](#public-sass-base)
         * [public/sass-components](#public-sass-components)
         * [public/sass-layout](#public-sass-layout)
         * [public/sass-pages](#public-sass-pages)
      * [routes](#routes)
      * [views](#views)
         * [views/layouts](#views-layouts)
         * [views/partials](#views-partials)
   * [To be determined...](#tbd)
   
<a name="members"/>

## Team Members
Eric Yang, Nikki Hardiman, Jamie Shi, Lawrence Ngo

<a name="contributions"/>

## Contributions


<a name="source-code"/>

## Source Code

<a name="root"/> 

### Root
| File name        | Description                                                                                                      | 
| :--------------- |:-----------------------------------------------------------------------------------------------------------------| 
| index.js         | Handles app startup and defines routes                                                                           | 
| gulpfile.js      | Used to compile SCSS to CSS                                                                                      |  
| nodemon.json     | Configures Nodemon to automatically restart app when JavaScript, Handlebars or CSS files are changed             | 

<a name="controllers"/>

### Controllers
| File name        | Description                                                                                                      | 
| :--------------- |:-----------------------------------------------------------------------------------------------------------------| 
| doctor.js        | Fetches doctor data from the BetterDoctor API                                                                    | 
| injuryList.js    | Finds specified sports in the Postgres database and returns the result                                           |  
| injuryLog.js     | Responsible for the CRUD functionality of injury logs; connected to Postgres                                     | 
| map.js           | Converts user-entered addresses into geodata; used to help display the specified location on the map             | 
| pharmacy.js      | Fetches pharmacy data from the Yelp API                                                                          | 

<a name="models"/>

### Models
| File name              | Description                                                                                                | 
| :--------------------- |:-----------------------------------------------------------------------------------------------------------| 
| injuryLogSchema.sql    | Database schema for injury log item                                                                        | 
| sportInjurySchema.sql  | Database schema for the sport/injury items displayed in the injury list

<a name="public-css"/>

### CSS
| File name        | Description                                                                                                    | 
| :--------------- |:---------------------------------------------------------------------------------------------------------------| 
| style.css        | Whenever you save a .scss file, Gulp will automatically compile all Sass files into this single CSS file       |
| style.min.css    | Minified version of style.css                                                                                  |  

<a name="public-sass"/>

### Sass
| File name        | Description                                                 | 
| :--------------- |:------------------------------------------------------------| 
| main.scss        | Primary Sass file (imports all other Sass files)            |

<a name="public-sass-abstracts"/>

Abstracts

| File name        | Description                                                 | 
| :--------------- |:------------------------------------------------------------| 
| _variables.scss  | Defines Sass variables                                      |

<a name="public-sass-base"/>

Base

| File name        | Description                                                    | 
| :--------------- |:---------------------------------------------------------------| 
| _base.scss       | Sets default default margin, padding, and font size in browser 

<a name="public-sass-components"/>

Components

| File name           | Description                                                                           | 
| :------------------ |:--------------------------------------------------------------------------------------| 
| _back-button.scss   | Stylizes the back button that is present on most screens                              |
| _card.scss          | Stylizes the card component that is primarily used on the injury log and map page     |
| _form.scss          | Stylizes the form used for logging in                                                 |
| _gallery.scss       | Shows relevant content (e.g. items in injury list) in gallery format                  |
| _log-item.scss      | Stylizes the log items used in the injury log                                         |
| _navbar.scss        | Stylizes the navbar                                                                   |
| _search-bar.scss    | Stylizes the searchbar                                                                |

<a name="public-sass-layout"/>

Layout

| File name                 | Description                                                    | 
| :------------------------ |:---------------------------------------------------------------| 
| _iframeContainer.scss     | Handles how the map on the map screen should be contained      |

<a name="public-sass-pages"/>

Pages

| File name                 | Description                                                    | 
| :------------------------ |:---------------------------------------------------------------| 
| _contact.scss             |  Stylizes content exclusively on contact doctor page           |
| _help.scss                |  Stylizes content exclusively on help page                     |
| _injury-details.scss      |  Stylizes content exclusively on injury details page           |
| _map.scss                 |  Stylizes content exclusively on map page                      |
| _profile.scss             |  Stylizes content exclusively on profile page                  |

<a name="routes"/>

### Routes

| File name           | Description                             | 
| :------------------ |:----------------------------------------| 
| doctor.js           |  Renders the doctor details page        |
| help.js             |  Renders the help page                  |
| home.js             |  Renders the home page                  |
| injury-list.js      |  Renders the injury list page           |
| injury-log.js       |  Renders the injury log page            |
| login.js            |  Renders the login page                 |
| map.js              |  Renders the map page                   |
| pharmacy.js         |  Renders the pharmacy page              |
| profile.js          |  Renders the profile page               |

<a name="views"/>

### Views

| File name                      | Description                                                                                           | 
| :----------------------------- |:------------------------------------------------------------------------------------------------------| 
| common-injuries.handlebars     | This file displays the common injuries for a specific sport. A description of the sport, along with the name will be shown at the top of the page. This page also is able to filter the injuries based on what the user types into the search bar.                                                     |
| contact-doctor.handlebars      | The contact page is what users will use to send emails to their doctors for use. The user can enter which doctor to send to, the subject of the message, and the message itself. Within the message, the user's entire injury log is attached. As of the deadline for the final, the email function does not work as it did originally. We originally used a service called PostMail, but it has recently stopped working. So we have wizard of oz'd the function. For us, making it functional in the beginning was of somewhat low priority.   |
| current-log.handlebars         | The current injury logs page is what the users will use to see their injuries that have newly occurred or are still in process of recovery. The user can add an injury to the page by clicking on the "Add new injury" button, and filling the name of the injury, description, expected recovery date, and treatment plan. On the page, the users will see their current injuries in order of most recently created. Each injury lists the name, description, creation date, expected recovery date, and treatement plan. In addition, each injury has a log history, where you can see and add progress logs of the recovery. Also, the user has the ability to edit, delete, and archive the injury to the past injuries log page.                                                     |
| doctor.handlebars              | The doctor page is used as the information page for the specific doctors found and clicked on in the map function of our app. The page provides the information of the specified doctors, such as, their picture, name, rating, address, phone number, biography, specialties, and the accepted insurance at their hospital. You also have the ability to view their website if they have one.                                                    |
| help.handlebars                | Contains a list of potential questions user may ask and provided answers to help users navigate the app if they are lost or confused.                                                            |
| home.handlebars                | The home page is the main page users see. They can navigate to the inury list page, injury log page, map page, and the contact doctor page.                                                            |
| injury-details.handlebars      | This file displays the specific information for an injury (description about the injury, image of the injury, possible symptoms, treatments, and a link to the source page with more information about the injury).  |
| injury-list.handlebars         | This file displays different sports in which the user can then go into to find the common injuries for that specific sport. This page also is able to filter the sports based on what the user types into the search bar.    |
| login.handlebars               | Serves as the login/signup page for users opening the app.          |
| map.handlebars                 | Utilizes the Yelp and BetterDoctor API alongside the Google Maps API to display nearby doctors/pharmacies in a user-specified location. Users can filter out either the doctors or pharmacies, and can sort the results by either best matched or highest rated.  |
| pharmacy.handlebars            | The pharmacy page is used as the information page for the specific pharmacies found and clicked on in the map function of our app. The page provides the information of the specified pharmacies, such as, an image of the pharmacy, name, rating, address, phone number, pricing, and the hours. You also have the ability to view their Yelp website if they have one. |
| previous-log.handlebars        | The previous injury logs page is what the users will use to see their injuries that have recovered. The user can add an recovered injury to the page by clicking on the injury's "I have recovered" button in the current injuries log page.  On the page, the users will see their past injuries in order of most recently resolved. Each injury lists the name, description, creation date, expected recovery date, resolved date, and treatement plan. In addition, each injury has a log history, where you can see progress logs of the recovery. Also, the user has the ability to delete and put the injury back into to the current injuries log page. |
| profile.handlebars             | The profile page contains personal user information (email, phone, name, location, sports, doctor). Allows user to edit their profile and change their information.  |

<a name="views-layouts"/>

Layouts

| File name           | Description                                                 | 
| :------------------ |:------------------------------------------------------------| 
| main.handlebars     | HTML page wrapper that is reused for all views in the app   |

<a name="views-partials"/>

Partials

| File name                  | Description                                                                       | 
| :------------------------- |:----------------------------------------------------------------------------------| 
| back-button.handlebars     | Displays a back button that is present on most screens                            |
| card.handlebars            | Displays a card item that is primarily used on the injury log and map screen      |
| modal.handlebars           | Displays a modal that is used on the current log screen                           |
| navbar.handlebars          | Displays a navbar that is present on most screens                                 |
| search-bar.handlebars      | Displays a search bar                                                             |
| sport-box.handlebars       | Displays a box containing the user’s sports played on their profile page          |

<a name="tbd"/>

## To be determined...
