//import logo from './logo.svg';
//import './App.css';
//import all the components at the top
import Navigation from './components/Navigation'
import Home from './components/Home'
import ProductDescription from './components/ProductDescription'
import ColdEmail from './components/ColdEmail'
import Tweets from './components/Tweets'
import AdsforSocialMedia from './components/AdsforSocialMedia'
import AdsforGoogleSearch from './components/AdsforGoogleSearch'
import ProfileBio from './components/ProfileBio'
import NotificationSMS from './components/NotificationSMS'
import VideoIdea from './components/VideoIdea'
import VideoDescription from './components/VideoDescription'
import StoryPlot from './components/StoryPlot'
import SongLyrics from './components/SongLyrics'
import Reviews from './components/Reviews'
import BrandName from './components/BrandName'
import JobDescription from './components/JobDescription'
import BusinessIdea from './components/BusinessIdea'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
        <div className="App">
          <Navigation/>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/ProductDescription" exact element={<ProductDescription/>} />
            <Route path="/coldemails" exact element={<ColdEmail/>} />
            <Route path="/Tweets" exact element={<Tweets/>} />
            <Route path="/AdsforSocialMedia" exact element={<AdsforSocialMedia/>} />
            <Route path="/AdsforGoogleSearch" exact element={<AdsforGoogleSearch/>} />
            <Route path="/ProfileBio" exact element={<ProfileBio/>} />
            <Route path="/NotificationSMS" exact element={<NotificationSMS/>} />
            <Route path="/VideoIdea" exact element={<VideoIdea/>} />
            <Route path="/VideoDescription" exact element={<VideoDescription/>} />
            <Route path="/StoryPlot" exact element={<StoryPlot/>} />
            <Route path="/SongLyrics" exact element={<SongLyrics/>} />
            <Route path="/Reviews" exact element={<Reviews/>} />
            <Route path="/BrandName" exact element={<BrandName/>} />
            <Route path="/JobDescription" exact element={<JobDescription/>} />
            <Route path="/BusinessIdea" exact element={<BusinessIdea/>} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;
