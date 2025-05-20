import React from 'react'
import './UserProfileCard.css'
import beach_pic from '../Assets/beach.jpg'

const UserProfileCard = () => {
  return (
    <div className='upc'>
        <div className='gradiant'></div>
        <div className='profile-down'>
            <img src={beach_pic} alt="" />
            <div className="profile-title">Beach</div>
            <div className="profile-description">
            A beach is a coastal area where loose particles like sand, gravel, or pebbles accumulate, forming a natural boundary between land and water. They are often characterized by their soft sand, crashing waves, and the smell of sea air, offering a serene and relaxing atmosphere.

            </div>
            <div className='profile-button'><a href="mailto:beachluv@blue.com">Contact Me</a></div>


        </div>

    </div>
  )
}

export default UserProfileCard