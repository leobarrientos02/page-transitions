import React,{useRef,useLayoutEffect} from "react";
import FrontPageHandbag from '../images/frontpage-handbag.png';
import gsap from "gsap";
import {motion} from 'framer-motion';

const Home = () => {

    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useLayoutEffect(()=>{
        tl.current = gsap.timeline()
        .fromTo(q(".bagImage"),
            {
                opacity: 0,
                y:200,
            },
            {
                opacity: 1,
                y:0,
                duration: 2,
                ease: "Power3.easeOut",
            },
        )
        .fromTo(q('.showcase-text'),
            {
                opacity: 0,
                y:200,
            },
            {
                opacity: 1,
                y:0,
                duration: 2,
                ease: "Power3.easeOut",
            },
            "<"
        )
        .fromTo(q('.circle-2'),
        {
            opacity: 0,
            y:200,
        },
        {
            opacity: 1,
            y:0,
            duration: 2,
            ease: "elastic.out(1.5,1)",
        },
        "<"
        )
        .fromTo(q('.circle-1'),
        {
            opacity: 0,
            x:-200,
        },
        {
            opacity: 1,
            x:0,
            duration: 2,
            ease: "elastic.out(1.5,1)",
        },
        "<"
        )  
        .fromTo(q('.circle-3'),
        {
            opacity: 0,
            y:-200,
        },
        {
            opacity: 1,
            y:0,
            duration: 2,
            ease: "elastic.out(1.5,1)",
        },
        "<"
        )
        .fromTo(q('.showcase-arrow'),
        {
            opacity: 0,
            x:200,
        },
        {
            opacity: 1,
            x:0,
            duration: 2,
            ease: "Power3.easeOut",
        },
        "<"
        )                          
        .fromTo(q('.handbag-body'),
            {
                background: "linear-gradient(260deg, #b27a5c, #7f5450)",
            },
            {
                background: "linear-gradient(260deg, #d75d62, #754d4f)",
                duration: 2,
                ease: "sine.out",
            },
            "<",
        )
    });
    return(
        <div ref={el}>
        <div className="handbag-body">
            <section className="showcase">
                <div className="image-container">
                    <motion.img 
                        className="bagImage" 
                        src={FrontPageHandbag} 
                        alt="Handbag"
                    />
                </div>
                <div className="showcase-text">
                    <h2 className="showcase-title">Going Places. With bags of beauty</h2>
                    <h3 className="showcase-subtitle">On everyone's wishlist this season? Timeless presents they'll treasure forever, including our must have Leisara handbag.</h3>
                    <a href="ProductPage" className="showcase-button">
                        <button>Explore</button>
                    </a>
                </div>
                
                <a href="Boot">
                    <svg
                        className="showcase-arrow"
                        width="26"
                        height="46"
                        viewBox="0 0 26 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M25.1213 25.1213C26.2929 23.9497 26.2929 22.0503 25.1213 20.8787L6.02944 1.7868C4.85786 0.615224 2.95837 0.615224 1.7868 1.7868C0.615224 2.95837 0.615224 4.85786 1.7868 6.02944L18.7574 23L1.7868 39.9706C0.615224 41.1421 0.615224 43.0416 1.7868 44.2132C2.95837 45.3848 4.85786 45.3848 6.02944 44.2132L25.1213 25.1213ZM19 26H23V20H19V26Z"
                            fill="white"/>
                    </svg>
                </a>
                <svg
                    className="circle circle-1"
                    width="243"
                    height="243"
                    viewBox="0 0 243 243"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="121.5"
                        cy="121.5"
                        r="121.5"
                        fill="white"
                        fillOpacity="0.25"
                    />
                </svg>
                <svg
                    className="circle circle-2"
                    width="243"
                    height="243"
                    viewBox="0 0 243 243"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="121.5"
                        cy="121.5"
                        r="121.5"
                        fill="white"
                        fillOpacity="0.25"
                    />
                </svg>
                <svg
                    className="circle circle-3"
                    width="243"
                    height="243"
                    viewBox="0 0 243 243"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="121.5"
                        cy="121.5"
                        r="121.5"
                        fill="white"
                        fillOpacity="0.25"
                    />
                </svg>
            </section>
                         
        </div>            
        </div>

    );
};

export default Home;