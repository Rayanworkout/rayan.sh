import React, { useState, useEffect } from 'react'

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
                            <div className={`transition-all w-3 h-3 bg-white rounded-full ${current === idx ? "p-2" : "bg-opacity-50"}`}></div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


export default function Projects() {
    const slides = [
        "https://i.ibb.co/ncrXc2V/1.png",
        "https://i.ibb.co/B3s7v4h/2.png",
        "https://i.ibb.co/XXR8kzF/3.png",
        "https://i.ibb.co/yg7BSdM/4.png"
    ]

    return (
        <div className="projects mx-auto max-w-lg">
            <h1 className="text-center text-4xl font-bold mt-20 mb-10">Projects</h1>
            <Carousel>
                {slides.map((slide) => (
                    <img key={slide} src={slide} alt={slide} />
                ))}
            </Carousel>
        </div>
    )
}