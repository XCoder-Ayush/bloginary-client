import { Routes, Route } from 'react-router-dom';
import { HashRouter as Router } from "react-router-dom";
// import viteLogo from '/vite.svg';
import './index.css';
import Blogs from './pages/Blogs';
import Services from './pages/Services';
import Support from './pages/Support';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Membership from './pages/Membership';
import Write from './pages/Write';
import Auth from './pages/Auth';
import Blog from './pages/Blog';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Landing />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="services" element={<Services />} />
          <Route path="support" element={<Support />} />
          <Route path="profile" element={<Profile />} />
          <Route path='write-blog' element={<Write/>} />
          <Route path='membership' element={<Membership/>} />
          <Route path='auth' element={<Auth/>} />
          <Route path='blog/:userId/:slug' element={<Blog/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;