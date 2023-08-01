import React,{useEffect,useState} from 'react'
import './About.css'
import Loadercomponent from './Loadercomponent';
function About() {
   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
    {isLoading ? (
        <Loadercomponent />
      ) : (
      <main className='main-about-container'>

      </main>
      )}
    </>
  )
}

export default About
