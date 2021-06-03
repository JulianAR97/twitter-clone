import navData from './data/navData'
import React, {useState, useEffect} from 'react'
// import HashtagLogo from './logos/HashtagLogo'
// import HomeLogo from './logos/HomeLogo'
// import NotificationLogo from './logos/NotificationLogo'
// import MailLogo from './logos/MailLogo'
// import BookmarksLogo from './logos/BookmarksLogo'
// import ListLogo from './logos/ListLogo'
// import ProfileLogo from './logos/ProfileLogo'
// import MoreLogo from './logos/MoreLogo'
// import TweetLogo from './logos/TweetLogo'
// import TwitterLogo from './logos/TwitterLogo'
import Icon from './Icon'

const getWidth = () => window.innerWidth >= 1200 ? 'xl' : 'xs' 


const Nav = () => {
  const renderIcons = (iconData) => {
    return iconData.map(d => {
      return (
        <>
          <div className="nav-icon">
            <Icon data={d} />
          </div>
          <br/>
        </>
      )
    })
  }
  
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
      {renderIcons(navData.navIcons)}
        
      <div className="nav-icon" id="tweet-button"><Icon data={navData.tweet} /></div>
    </div>
  )
}

export default Nav