import React from 'react'
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        React is a popular JavaScript library used for building user interfaces, particularly single-page applications where fast, responsive user experiences are paramount. Developed and maintained by Facebook, React has gained widespread adoption due to its efficient rendering, component-based architecture, and strong community support.
                        </p>
                        <h3 className='text-1xl text-gray-900 font-bold md:text-4xl'>Component-Based Architecture</h3>
                        <p className="mt-4 text-gray-600">
                        One of the core concepts of React is its component-based architecture. Components are the building blocks of a React application. Each component is a self-contained module that includes the structure (HTML), style (CSS), and logic (JavaScript) needed to render a piece of the user interface. By breaking down the UI into smaller, reusable components, developers can build complex applications more efficiently and maintainably.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}