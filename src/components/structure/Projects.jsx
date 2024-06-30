import React, { useState, useEffect } from 'react'
import ProjectCard from '../elements/ProjectCard'
import Resume from '../../resume.json'

const Carousel = ({ children, autoSlide = true, autoSlideInterval = 5000 }) => {

    const [current, setCurrent] = useState(0)

    const prevSlide = () => {
        setCurrent(current === 0 ? children.length - 1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === children.length - 1 ? 0 : current + 1)
    }


    // Auto slide
    useEffect(() => {
        if (autoSlide) {
            const interval = setInterval(() => {
                nextSlide()
            }, autoSlideInterval)
            return () => clearInterval(interval)
        }
    })


    return (
        <div className='overflow-hidden relative rounded border'>
            <div className='flex transition-transform ease-out duration-1000' style={{ width: '100%', transform: `translateX(-${current * 100}%)` }}>
                {children.map((slide, index) => (
                    <div key={index} className="flex-none w-full">
                        {slide}
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 max-h-[35%] flex items-end justify-between p-4">
                <button onClick={prevSlide} className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button onClick={nextSlide} className="p-1 rounded-full shadow text-gray-800 hover:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};



export default function Projects() {

    return (
        <div className="projects mx-auto max-w-lg">
            <h1 className="text-center text-4xl font-bold mt-20 mb-10">Projects</h1>
            <Carousel autoSlide={false}>
                {Resume.projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                ))}
            </Carousel>

        </div>
    )
}