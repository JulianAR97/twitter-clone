import navData from './data/navData'
import React, {useState, useEffect} from 'react'

const getWidth = () => window.innerWidth >= 1200 ? 'xl' : 'xs' 

const Nav = () => {
  let [width, setWidth] = useState(getWidth());

  useEffect(() => {
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(getWidth()), 150 )
      
    }

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  })
  console.log(width)
  return (
    <div id="nav">
      <ul id="nav-list">
        <li>{navData.home.xl}</li><br/>
        <li>{navData.explore.xl}</li><br/>
        <li>{navData.notifications.xl}</li><br/>
        <li>{navData.messages.xl}</li><br/>
        <li>{navData.bookmarks.xl}</li><br/>
        <li>{navData.lists.xl}</li><br/>
        <li>{navData.profile.xl}</li><br/>
        <li>{navData.more.xl}</li><br/>
        
      </ul>
      <div id="tweet-button">Tweet</div>
    </div>
  )
}

export default Nav