'use client';
import { useEffect } from 'react';
import BookFlip from '../componant/bookFlip';
import Footer from '../componant/footer';
// import styles from '@/app/componant/style/spiderWeb.module.css';


const Projects = () => {
    useEffect(() => {
        // Function to set zoom level based on screen size
        const setZoomLevel = () => {
            if (typeof window !== 'undefined') {
                if (window.innerWidth < 468) {
                    // Set zoom to 70% for mobile devices
                    document.body.style.zoom = '70%';
                } else {
                    // Reset to default zoom for larger screens
                    document.body.style.zoom = '100%';
                }
            }
        };

        // Set zoom when component mounts
        setZoomLevel();

        // Add resize event listener to adjust zoom on screen size changes
        window.addEventListener('resize', setZoomLevel);

        // Cleanup function to reset zoom and remove event listener
        return () => {
            document.body.style.zoom = '100%';
            window.removeEventListener('resize', setZoomLevel);
        };
    }, []);

    return (


        <>

            <BookFlip />


            <div className='w-full'>

                <Footer />
            </div>

        </>
    );


}


export default Projects;