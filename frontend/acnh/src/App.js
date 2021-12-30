import './App.css';
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'

import Home from './components/Home'
import ArtContainer from './components/ArtContainer'
import BugsContainer from './components/BugsContainer'
import FishContainer from './components/FishContainer'
import FossilsContainer from './components/FossilsContainer'
import SeaCreaturesContainer from './components/SeaCreaturesContainer'
import SongsContainer from './components/SongsContainer'
import VillagersContainer from './components/VillagersContainer'

function App() {
  
  // useEffect(() => {
  //   fetch("http://acnhapi.com/v1/fish/")
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // })
  
  return (
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/art">
          <ArtContainer />
        </Route>
        <Route path="/bugs">
          <BugsContainer />
        </Route>
        <Route path="/fish">
          <FishContainer />
        </Route>
        <Route path="/fossils">
          <FossilsContainer />
        </Route>
        <Route path="/seacreatures">
          <SeaCreaturesContainer />
        </Route>
        <Route path="/songs">
          <SongsContainer />
        </Route>
        <Route path="/villagers">
          <VillagersContainer />
        </Route>
      </Routes>
  );
}

export default App;
