import './App.css';
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'

import Home from './components/Home'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Signup from './components/Signup';
import ArtContainer from './components/ArtContainer'
import BugsContainer from './components/BugsContainer'
import FishContainer from './components/FishContainer'
import FossilsContainer from './components/FossilsContainer'
import SongsContainer from './components/SongsContainer'
import SeaCreaturesContainer from './components/SeaCreaturesContainer'
import VillagersContainer from './components/VillagersContainer'

function App() {

  // // AUTOLOGIN
  // useEffect(() => {
  //   fetch('/me').then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => {
  //         setUser(user)
  //       });
  //     }
  //   });
  // }, [hasUpdate]);
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/art" element={<ArtContainer />} />
        <Route path="/bugs" element={<BugsContainer />} />
        <Route path="/fish" element={<FishContainer />} />
        <Route path="/fossils" element={<FossilsContainer />} />
        <Route path="/seacreatures" element={<SeaCreaturesContainer />} />
        <Route path="/songs" element={<SongsContainer />} />
        <Route path="/villagers" element={<VillagersContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
