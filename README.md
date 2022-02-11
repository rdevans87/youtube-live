# YouTube.Live

<img src="client/public/assets/logoscreenshot.png" width="1000px">

## Description 

Attend live concerts right from the comfort of your own home.  Watch your favorite musical artists and legendary rock bands perform in concert venues from around the globe. Discover rare intimate performances and historic sold out shows all in one place. Search for upcoming live in events in your area and find information about your favorite artists, venues, and concert locations.  

The is application is deployed on Heroku: [YouTube.Live](https://osu-project3.herokuapp.com/)

URL to GitHub Repository: [YouTube.Live Repo](https://github.com/moagermo/youtube-live)


## Table of Contents
* [User Story](#user-story)
* [Business Context](#business-context)
* [Market Research](#market-research)
* [Current Features](#current-features)
* [Future Development](#future-development)
* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#Tests)
* [Collaborators](#collaborators)
* [Contributing](#contributing)
* [Acceptance Criteria](#acceptance_criteria)
* [License](#license)


## User Story

```
As a user, I want a channel to stream live music and find information about my favorite artists. When I visit the site, I can search for upcoming concert events and locations, and watch recommended videos based on different categories.

```

## Business Context

Musical Artists and Venue Owners would benefit greatly from making Live Concert Events more accessible to a wider audience. Creating a channel to stream live music would provide a safer and more affordable concert experience for audiences and generate more revenue for both parties. Audiences would benefit from the convenience and flexibiliy of streaming live music from the comfort of their own home with out having to worry about the health risks of an overcrowded ampitheater making it easier for venue owners to maintain covid safety regulations.  


## Market Research

* About 47% of those surveyed agreed that the idea of going to a major public  event “will scare me for a long time,” per a study last month by Performance Research.- [Variety](https://variety.com/2020/digital/news/post-pandemic-streaming-tv-increase-1234589195/)
    
* The concert and events industry has been among the hardest hit by Covid-19. Losses in the United States amounted to more than $26.1 billion in 2020. - [Los Angeles Business Journal](https://labusinessjournal.com/news/2021/mar/01/are-virtual-concerts-future-live-entertainment/)
    
* 60% of fans surveyed said they planned to continue watching live streams, even once venues reopen.- [BroadWay World](https://www.broadwayworld.com/bwwmusic/article/Bandsintown-Finds-Unique-Insights-into-Music-Live-Streaming-with-Fan-and-Artist-Surveys-20200824)

* 67% of live video viewers are more likely to buy a ticket to a concert or event after watching a live video of that event or a similar one. - [Amp Live](https://www.amplivemusic.com/)
 
## Features

[YouTube.Live](#) is an application that provides access to resources pertaining to `live concert events` such as artist, venue, and location information, and video content of previously recorded live performances. 

Users can:

* Watch videos of musical performances and concert events.
* Get information on favorites artists and venues
* Search for upcoming live events throughout United States.
* Save favorite artists and venues to dashboard for multiple sessions.  

## Future Development

* Stream live concert events in real-time. 
* Purchase concert tickets to live shows through our site.
* Info on pandemic related restrictions for concerts and festivals.
* Give users the ability to upload and comment on video content.


## Technologies 


* [Trello](https://trello.com/) Agile Project Management with Scrum/Kanban Boards
* [Adobe Spark](https://spark.adobe.com/page/tRIlDi39DdX6h/) WireFrame/Mockup of UI/UX design.
* [ReactJS](https://github.com/facebook/react) A declarative, efficient, and flexible JavaScript library for building user interfaces.
* [NodeJS](https://github.com/nodejs/node) open-source, cross-platform, JavaScript runtime environment.
* [ExpressJS](https://github.com/expressjs) Fast, unopinionated, minimalist web framework for node.
* [React Bulma components](https://react-bulma.dev/en) front end css framework.
* [React Bootstrap](https://github.com/facebookincubator/create-react-app).
* [YouTube Data API v3](https://console.cloud.google.com/apis/library/youtube.googleapis.com?project=vaulted-channel-306702) HTTP requests for Live Music Videos.
* [SeatGeek API Platform](https://seatgeek.com/build) HTTP requests for information on live concert events, artists, and locations

## Installation

When you run `npx create-react-app`, it always creates the project with the latest version of `react-scripts` so you’ll get all the new features and improvements in newly created apps automatically.

`Fork` or `Clone` this application to your local directoy. In the project directory, you can run:

`npm start` to run the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

Please see the following guide for more information on using [create-react-app](client/README.md)

## Usage 

This application requires the use of third-party API keys. Please request your own personal API keys to use with this application.

[SeatGeek API](https://www.songkick.com/api_key_requests/new).

[YouTube Data API v3](https://developers.google.com/youtube?hl=en)


## Test

To test this application, visit the deployed application on Heroku: 

[YouTube.Live](https://osu-project3.herokuapp.com/)

There are two options for testing:

`Sign up` to create a new user account for testing.

-OR-

`Log in` to enter a user test credentials provided below.

```
User Name: testuser@fakemail.com
Password: testlive123
```

## Collaborators

|           |            |            |            |
|-----------|------------|------------|------------|
|![Anthony](/client/src/images/anthony.jpeg?raw=true "Anthony DeCapite")|[Anthony's Work](https://github.com/adecapite)|![Kyle](/client/src/images/kyle.jpeg?raw=true "Kyle Young")|[Kyle's Work](https://github.com/Youngin9210)
|![Mo](/client/src/images/mo.png?raw=true "Mo Ager")|[Mo's Work](https://github.com/moagermo)|![Morgan](/client/src/images/morgan.png?raw=true "Morgan Schall")|[Morgan's Work](https://github.com/mschall217)|
|![Ryan](/client/src/images/ryan.jpeg?raw=true "Ryan Evans")|[Ryan's Work](https://github.com/rdevans87)|

## Contributing

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)

We as [Collaborators](#collaborators) pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community. For contributing guidelines, please see: [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/) 


## Badges

![badtmath](https://img.shields.io/badge/React-YouTube.live-blue)
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
 
 Badges hosted by [shields.io](https://shields.io/). 

## Acceptance Criteria

* Must use ReactJS in some way (even if minimal).
* Must use a Node and Express Web Server.
* Must be backed by a MySQL or MongoDB Database with a Sequelize or Mongoose ORM.
* Must have both GET and POST routes for retrieving and adding new data.
* Must be deployed using Heroku (with Data).
* Must utilize at least two libraries, packages, or technologies that we haven’t discussed.
* Must allow for or involve the authentication of users in some way.    
* Must have a polished frontend/UI.
* Must have folder structure that meets MVC Paradigm.
* Must meet good quality coding standards (indentation, scoping, naming).
* Must not expose sensitive API key information on the server.


## Copyright & Licenses

This application uses third-party data in compliance with the `API Terms of Use Agreement` set forth by [YouTube API Services Terms of Service](https://developers.google.com/terms?hl=en) and [SeatGeek API Terms of Use](https://seatgeek.com/api-terms)

The content of this application is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For further details, see the Google [Developers Site Policies](https://developers.google.com/terms/site-policies). 

