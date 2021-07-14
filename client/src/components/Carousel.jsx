import React from "react";
import { Carousel } from "react-responsive-carousel";
import artist from './carouselImages/artist.jpeg'
import calendar from './carouselImages/calendar.jpeg'
import venue from './carouselImages/venue.jpeg'
import video from './carouselImages/video.jpeg'
import social from './carouselImages/social.jpeg'

export default () => (
  <Carousel autoPlay>
    <div>
      <img alt="" src={artist} />
      <p className="legend">Check for your favorite artists and discover new artists!</p>
    </div>
    <div>
      <img alt="" src={calendar} />
      <p className="legend">Check for current and upcoming events!</p>
    </div>
    <div>
      <img alt="" src={venue} />
      <p className="legend">Discover new venues you want to visit!</p>
    </div>
    <div>
      <img alt="" src={video} />
      <p className="legend">Save and share videos from shows you've attended!</p>
    </div>
    <div>
      <img alt="" src={social} />
      <p className="legend">Sign in and comment on other Venues and Artists</p>
    </div>
    
  </Carousel>
);