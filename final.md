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
| File name        | Description                                                 | 
| :--------------- |:------------------------------------------------------------| 
| style.css        | All Sass files are compiled into this single CSS file       |
| style.min.css    | Minified version of style.css                               |  

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
| _base.scss       | Sets default default margin, padding, and font size in browser |

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
| common-injuries.handlebars     | Describes the structure of the common injuries page                                                   |
| contact-doctor.handlebars      | Describes the structure of the contact doctor page                                                    |
| current-log.handlebars         | Describes the structure of the current log page                                                       |
| doctor.handlebars              | Describes the structure of the doctor details page                                                    |
| help.handlebars                | Describes the structure of the help page                                                              |
| home.handlebars                | Describes the structure of the home page                                                              |
| injury-details.handlebars      | Describes the structure of the injury details page                                                    |
| injury-list.handlebars         | Describes the structure of the injury list page                                                       |
| login.handlebars               | Describes the structure of the login/signup page                                                      |
| map.handlebars                 | Describes the structure of the map page (also dynamically fetches doctor/pharmacy and location data)  |
| pharmacy.handlebars            | Describes the structure of the pharmacy details page                                                  |
| previous-log.handlebars        | Describes the structure of the previous log page                                                      |
| profile.handlebars             | Describes the structure of the profile page                                                           |

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
