import React,{useLayoutEffect,useRef} from "react";
import FrontPagehat from '../images/frontpage-hat.png';
import gsap from "gsap";

const Hat = () =>{

    const BagPage = () =>{
        var image1 = document.querySelector('.hatImage');
        //console.log("WORK");
        var t2 = gsap.timeline();
        t2.fromTo( image1, 
            { 
                y: "0%",
                opacity: 1,
            },
            {
                y: "200%",
                opacity: 0,
                duration: 2,
                ease: "Power3.easeOut",
            }
        );

        var text = document.querySelector('.showcase-text');
        //console.log("WORK");
        var t3 = gsap.timeline();
        t3.fromTo( text, 
            { 
                y: "0%",
                opacity: 1,
            },
            {
                y: "200%",
                opacity: 0,
                duration: 2,
                ease: "Power3.easeOut",
            }
        );
        
        var circle1 = document.querySelector('.circle-1');
        //console.log("WORK");
        var t4 = gsap.timeline();
        t4.fromTo( circle1, 
            { 
                x: "0%",
                opacity: 1,
            },
            {
                x: "-200%",
                opacity: 0,
                duration: 2,
                ease: "Power3.easeOut",
            }
        );

        var circle2 = document.querySelector('.circle-2');
        //console.log("WORK");
        var t5 = gsap.timeline();
        t5.fromTo( circle2, 
            { 
                y: "0%",
                opacity: 1,
            },
            {
                y: "200%",
                opacity: 0,
                duration: 2,
                ease: "Power3.easeOut",
            }
        );

        var circle3 = document.querySelector('.circle-3');
        //console.log("WORK");
        var t6 = gsap.timeline();
        t6.fromTo( circle3, 
            { 
                y: "0%",
                opacity: 1,
            },
            {
                y: "-200%",
                opacity: 0,
                duration: 2,
                ease: "Power3.easeOut",
            }
        ).add( function(){
            window.location = "/";
        },
        "<80%"
        );
        
    };

    const ProductPage = () =>{
        var image1 = document.querySelector('.hatImage');
        //console.log("WORK");
        var t2 = gsap.timeline();
        t2.fromTo( image1, 
            { 
                y: "0%",
                opacity: 1,
            },
            {
                y: "200%",
                opacity: 0,
                duration: 2,
                ease: "Power3.easeOut",
            }
        );

        var text = document.querySelector('.showcase-text');
        //console.log("WORK");
        var t3 = gsap.timeline();
        t3.fromTo( text, 
            { 
                y: "0%",
                opacity: 1,
            },
            {
                y: "200%",
                opacity: 0,
                duration: 2,
                ease: "Power3.easeOut",
            }
        );
        
        var circle1 = document.querySelector('.circle-1');
        //console.log("WORK");
        var t4 = gsap.timeline();
        t4.fromTo( circle1, 
            { 
                x: "0%",
                opacity: 1,
            },
            {
                x: "-200%",
                opacity: 0,
                duration: 2,
                ease: "Power3.easeOut",
            }
        );

        var circle2 = document.querySelector('.circle-2');
        //console.log("WORK");
        var t5 = gsap.timeline();
        t5.fromTo( circle2, 
            { 
                y: "0%",
                opacity: 1,
            },
            {
                y: "200%",
                opacity: 0,
                duration: 2,
                ease: "Power3.easeOut",
            }
        );

        var circle3 = document.querySelector('.circle-3');
        //console.log("WORK");
        var t6 = gsap.timeline();
        t6.fromTo( circle3, 
            { 
                y: "0%",
                opacity: 1,
            },
            {
                y: "-200%",
                opacity: 0,
                duration: 2,
                ease: "Power3.easeOut",
            }
        ).add( function(){
            window.location = "ProductPage";
        },
        "<80%"
        );
        
    };

    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useLayoutEffect(()=>{
        tl.current = gsap.timeline()
        .fromTo(q(".hatImage"),
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
        .fromTo(q('.hat-body'),
            {
                background: "linear-gradient(260deg, #5d8cb7, #4c4f70)",
            },
            {
                background: "linear-gradient(260deg, #b27a5c, #7f5450)",
                duration: 2,
                ease: "sine.out",
            },
            "<",
        )
    });    

    return(
        <div ref={el}>
            <div className="hat-body">
            <section className="showcase">
                <div className="image-container">
                    <img className="hatImage" src={FrontPagehat} alt="hat" />
                </div>

                <div className="showcase-text">
                    <h2 className="showcase-title">The perfect finishing touch.</h2>
                    <h3 className="showcase-subtitle">Missing that finishing touch? Top off your outfit with our range of hats, from fedoras to flat caps. Cosy never looked so good.</h3>
                    <div onClick={ProductPage} className="showcase-button">
                        <button>Explore</button>
                    </div>
                </div>

                <div onClick={BagPage}>
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
                </div>
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

export default Hat;