import navData from './data/navData'
import React, {useState, useEffect} from 'react'
import Icon from './Icon'

const getWidth = () => window.innerWidth


const Nav = () => {
  
  const renderIcons = (iconData) => {
    const renderSpan = (name) => {
      if (width >= 1275) {
        console.log('here')
        return <span>{name}</span>
      }
    }
    return iconData.map(d => {
      return (
        <>
          <div key={d.name} className="nav-icon">
            <Icon data={d} />   
            {renderSpan(d.name)}
          </div>
          <br/>
        </>
      )
    })
  }

  const renderTweetButton = () => {
    if (width < 1275) {
      return <Icon data={navData.tweet} />
    } else {
      return <>Tweet</>
    }
  }
  
  let [width, setWidth] = useState(getWidth());
  console.log(width)
  
  useEffect(() => {
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      // add timeout to avoid changing state in effect error
      timeoutId = setTimeout(() => setWidth(getWidth()), 150 )
      
    }
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  })


  return (
    <div id="nav">
      {renderIcons(navData.navIcons)}
        
      <div className="nav-icon" id="tweet-button">
        {renderTweetButton()}
      </div>
    </div>
  )
}

export default Nav