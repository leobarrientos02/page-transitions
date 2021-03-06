import React,{ useRef,useLayoutEffect} from "react";
import blackCard from '../images/blackcard.png';
import yellowCard from '../images/yellowcard.png';
import tanCard from '../images/tancard.png';
import blueCard from '../images/bluecard.png';
import productCart from '../images/product-cart.svg';
import gsap from "gsap";

const ProductPage = () =>{

    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();
    
    useLayoutEffect(()=>{
        tl.current = gsap.timeline()
        .fromTo(q('.productPage'),
            {
                y: "100%"
            },
            {
                y: "0%",
                duration: 1,
                ease: "Power3.easeOut",
            },
        )
        .fromTo(q('.card'),
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                ease: "sine.out",
            },
        )
    });

    return(
        <div ref={el}>
        <div className="productPage">
            <div className="product-description">
                <h2>Shop our signatures.</h2>
                <p>
                    Your shortcut to sophistication. Our signatures never go out of style.
                </p>
            </div>

            <div className="product-gallery">
                <div className="card">
                    <img className="product-img" src={ blackCard } alt="product" />
                    <h2>Leisara</h2>
                    <p>black leather</p>
                    <div className="price">
                        <h4>$300</h4>
                        <img src={productCart} className="product-cart" alt="product-cart" />
                    </div>
                </div>
                <div className="card">
                    <img className="product-img" src={ tanCard } alt="product" />
                    <h2>Leisara</h2>
                    <p>black leather</p>
                    <div className="price">
                        <h4>$300</h4>
                        <img src={productCart} className="product-cart" alt="product-cart" />
                    </div>
                </div>
                <div className="card">
                    <img className="product-img" src={ yellowCard } alt="product" />
                    <h2>Leisara</h2>
                    <p>black leather</p>
                    <div className="price">
                        <h4>$300</h4>
                        <img src={productCart} className="product-cart" alt="product-cart" />
                    </div>
                </div>
                <div className="card">
                    <img className="product-img" src={ blueCard } alt="product" />
                    <h2>Leisara</h2>
                    <p>black leather</p>
                    <div className="price">
                        <h4>$300</h4>
                        <img src={productCart} className="product-cart" alt="product-cart" />
                    </div>
                </div>
                <div className="card">
                    <img className="product-img" src={ blackCard } alt="product" />
                    <h2>Leisara</h2>
                    <p>black leather</p>
                    <div className="price">
                        <h4>$300</h4>
                        <img src={productCart} className="product-cart" alt="product-cart" />
                    </div>
                </div>
                <div className="card">
                    <img className="product-img" src={ blackCard } alt="product" />
                    <h2>Leisara</h2>
                    <p>black leather</p>
                    <div className="price">
                        <h4>$300</h4>
                        <img src={productCart} className="product-cart" alt="product-cart" />
                    </div>
                </div>                
            </div>

        </div>            
        </div>

    );
};

export default ProductPage;