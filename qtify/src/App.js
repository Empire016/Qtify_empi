import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import styles from './App.module.css'
import { useEffect, useState } from 'react'
import { fetchTopAlbums} from './api/api'
import Section from './components/Section/Section.jsx'


function App() {

  const [topAlbumSongs, setTopAlbumSongs] = useState([])
  const [value, ] = useState(0);

  const generateTopAlbumSongs = async () => {
    try {
      const topAlbumSongs = await fetchTopAlbums()
      setTopAlbumSongs(topAlbumSongs)
    }
    catch (error) {
      console.log(error)
      return null
    }

  }

  useEffect(() => {
    // eslint-disable-next-line
  }, [value])

  useEffect(() => {
    
    generateTopAlbumSongs();
    // generateNewAlbumSongs();
    // generateFilterSongs();
    // setFilteredDataValues(newAlbumSongs);

  }, [])
  return (
    <div>
       <Navbar />
       <Hero/>
       <div className={styles.sectionWrapper}>
        <Section type='album' title='Top Albums' data={topAlbumSongs} />
        {/* <Section type='album' title='New Albums' data={newAlbumSongs} /> */}
        {/* <FilterSection data={newAlbumSongs} type='songFilter' title='Songs' filteredData={filteredData} filteredDataValues={filteredDataValues} value={value} handleChange={handleChange} handleToggle={handleToggle}/> */}
      </div>
    </div>
  );
}

export default App;
