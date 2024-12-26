import React from 'react'
import NavBar from './components/NavBar/NavBar'

import Banner from "./components/Banner/Banner"
import RowPost from "./components/RowPost/RowPost"

import { action, originals, comedy, horror, romantic } from "./components/Urls/Urls"

function Movies() {
  return (
    <div>
        <NavBar/>
        <Banner />
       <RowPost title="Hi Movies" url={originals} />
       <RowPost title="Action" ismall url={action} />
       <RowPost title="Comedy" ismall url={comedy} />
       <RowPost title="Horror" ismall url={horror} />
       <RowPost title="Romantic" ismall url={romantic} />
      
    </div>
  )
}

export default Movies
