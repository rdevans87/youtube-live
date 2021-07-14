import React from 'react';
import 'bulma/css/bulma.min.css';
import './style.css';



function Profile(){
    return(
        <div className="profile">
            <h1>Welcome! </h1>
            <div className="row">
            <figure class="image is-128x128">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="profile pic"/>
            </figure>
            <h2>Name Here</h2>
            <p>Bio Here</p>
            </div>
        </div>
        
    )

}
export default Profile;
