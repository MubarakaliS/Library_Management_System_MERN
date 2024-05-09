import React from 'react'
import './AccortionImage.css'

import defaultImage from '../../Assets/ImageFIve.jpg'

const AccortionImage = () => {
    const panels = document.querySelectorAll(".panel");

    panels.forEach((panel) => {
        panel.addEventListener("click", () => {
            removeActiveClasses();
            panel.classList.add("active");
        });
    });

    const removeActiveClasses = () => {
        panels.forEach((panel) => {
            panel.classList.remove("active");
        });
    };
    return (
        <>
            <div className="container-fluid">
                <div
                    className="panel active image-1" >
                        {/* <img src={defaultImage} alt='no image'/> */}
                <h3>Explore the world</h3>
            </div>
            <div
                className="panel image-2">
                <h3>Explore the world</h3>
            </div>
            <div
                className="panel image-3">
                <h3>Explore the world</h3>
            </div>
            <div
                className="panel image-4">
                <h3>Explore the world</h3>
            </div>
            <div

                className="panel image-5">
                <h1 className='text-dark'>Hello all how are you</h1>
                <h3>Explore the world</h3>
            </div>
        </div>
    </>
  )
}

export default AccortionImage