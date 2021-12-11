import { useState, useEffect } from "react";

/**
 * 
 * @param {number} mobileAmount number of posts visible per page on mobile.
 * @param {number} desktopAmount number of posts visible per page on desktop.
 * @param {object} setPagination setter function from React's {useState} to set your global useState page variable to 0, when window gets resized.
 * @returns max amount of posts per page. Needs to be assigned to variable (const preferably).
 */

let previousSize = 0;

export default function GetAmountOfPosts(mobileAmount, desktopAmount, setPagination){
    const [amountOfPosts, setAmountOfPosts] = useState(desktopAmount);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 1280) {
              if (desktopAmount !== previousSize) {
                previousSize = desktopAmount;
                setPagination(0);
              }
              setAmountOfPosts(desktopAmount);
            } 
            else {
              if (mobileAmount !== previousSize) {
                previousSize = mobileAmount;
                setPagination(0);
              }
              setAmountOfPosts(mobileAmount);
            }
        }
      
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return amountOfPosts;
}