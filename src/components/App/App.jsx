import {useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import './App.css';
import GalleryList from "../GalleryList.jsx"

function App() {

  useEffect(() => {
    fetchImages();
  }, [])

const [galleryList, setGalleryList] = useState([]);

  const fetchImages = () => {
  axios({
    method: 'GET',
    url: '/gallery'
  }).then ( (response) => {
    setGalleryList(response.data);
    console.log('in App.jsx GET request', response.data);
  }).catch ( (err) => {
    console.log('something went wrong with App.jsx request', err);
  })
}

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList galleryList={galleryList}/>
        {/* <img src="images/goat_small.jpg"/>
        <img src="images/bello.jpg"/>
        <img src="images/douglas.jpg"/>
        <img src="images/myron-heart.jpg"/>
        <img src="images/myron-smile.jpg"/>
        <img src="images/small-cat-meow.jpg"/>
        <img src="images/steve.jpg"/>
        <img src="images/white-cat.jpg"/> */}
      </div>
    );
}

export default App;
