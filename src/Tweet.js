const Tweet = (props) => {
  return (
    <div className="tweet">
      
    </div>
  )
}

Tweet.defaultProps = {
  userName: 'Julian',
  userHandle: '@Julian',
  userAvatar: 'https://avatars.githubusercontent.com/u/67240781?v=4',
  comments: 0,
  retweets: 0,
  favorites: 0,
  content: 'This is a tweet'
}

export default Tweet