import React, { useState, useEffect } from 'react'
import ProjectCard from '../elements/ProjectCard'

const OldCarousel = ({ children, autoSlide = true, autoSlideInterval = 5000 }) => {

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
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>{children}</div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
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
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {
                        children.map((_, idx) => (
                            <div key={idx} className={`transition-all w-3 h-3 bg-white rounded-full ${current === idx ? "p-2" : "bg-opacity-50"}`}></div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

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
        <div className='overflow-hidden relative'>
            <div className='flex' style={{ width: '100%', transform: `translateX(-${current * 100}%)` }}>
                {children.map((slide, index) => (
                    <div key={index} className="flex-none w-full">
                        {slide}
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
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
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {
                        children.map((_, idx) => (
                            <div key={idx} className={`transition-all w-3 h-3 bg-white rounded-full ${current === idx ? "p-2" : "bg-opacity-50"}`}></div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};



export default function Projects() {
    const projects = [
        {
            title: 'Project One',
            description: 'This is a description for project one. It is a very interesting project that does amazing things.',
            image: 'https://via.placeholder.com/400x300',
            link: 'https://example.com/project-one'
        },
        {
            title: 'Project Two',
            description: 'This is a description for project two. It is another fascinating project with great potential.',
            image: 'https://via.placeholder.com/400x300',
            link: 'https://example.com/project-two'
        },
        {
            title: 'Project Three',
            description: 'This is a description for project three. A creative project that explores new ideas and technologies.',
            image: 'https://via.placeholder.com/400x300',
            link: 'https://example.com/project-three'
        },
        {
            title: 'Project Four',
            description: 'This is a description for project four. A robust project designed to solve real-world problems.',
            image: 'https://via.placeholder.com/400x300',
            link: 'https://example.com/project-four'
        },
        {
            title: 'Project Five',
            description: 'This is a description for project five. A collaborative project that emphasizes teamwork and innovation.',
            image: 'https://via.placeholder.com/400x300',
            link: 'https://example.com/project-five'
        },
        {
            title: 'Project Six',
            description: 'This is a description for project six. An advanced project that leverages the latest technology trends.',
            image: 'https://via.placeholder.com/400x300',
            link: 'https://example.com/project-six'
        },
        {
            title: 'Project Seven',
            description: 'This is a description for project seven. A user-centric project focused on improving user experience.',
            image: 'https://via.placeholder.com/400x300',
            link: 'https://example.com/project-seven'
        },
        {
            title: 'Project Eight',
            description: 'This is a description for project eight. A data-driven project aimed at providing insightful analytics.',
            image: 'https://via.placeholder.com/400x300',
            link: 'https://example.com/project-eight'
        }
    ];

    return (
        <div className="projects mx-auto max-w-lg">
            <h1 className="text-center text-4xl font-bold mt-20 mb-10">Projects</h1>
            <Carousel autoSlide={true}>
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                ))}
            </Carousel>

        </div>
    )
}