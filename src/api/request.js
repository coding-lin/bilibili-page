import axios from 'axios'

export const getVideos = () => 
  axios.get('https://www.fastmock.site/mock/3f112f6cb2f621fc9c2dd6a14be19f38/beers/videolist')