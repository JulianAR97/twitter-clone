import React from 'react'

const Icon = (props) => {
  
  const renderPaths = () => {
    return props.data.paths.map(p => <path d={p} />)
  }

  return (
    <svg 
      height={props.data.height}
      viewBox="0 0 24 24"
      width={props.data.width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={props.data.fill}>
        {renderPaths()}
      </g>
    </svg>

  )

}

Icon.defaultProps = {
  data: {
    fill: 'black',
    name: 'Icon',
    xl: 'Lists',
    xs: 'l',
    paths: ["M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z", "M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z"], 
    circles: [],
    height: '26px',
    width: '26px'
  }
}


export default Icon