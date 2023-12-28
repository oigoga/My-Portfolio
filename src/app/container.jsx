"use client"
import { useState, useEffect } from 'react';
import Loading from './loading';
import Home from './page';
const Container = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);

  }, []);

    return (
      <div className='bg-black '>
         {isLoading ? (
        <Loading />
      ) : (
        <Home/>
      )}
      </div>
    );
  };
  
  export default Container;
  