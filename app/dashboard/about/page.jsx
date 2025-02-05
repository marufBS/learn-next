// app>dashboard>about>page.jsx
'use client'
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("../../components/CoffeeMug"), {
  ssr: false, // Disable SSR for Three.js
});

const About = () => {
    return (
        <>
            <div className="p-4">
                <h1 className="text-4xl">
                    About Page
                </h1>
                <p className="mt-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto odit amet veniam dolores numquam distinctio quis assumenda provident ex fugiat eius aliquid neque sint, reprehenderit necessitatibus porro quos voluptates corporis.</p>
            </div>
            <div>
                <HeroSection/>
            </div>
        </>
    )
}

export default About