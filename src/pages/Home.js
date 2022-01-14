import React from "react";
import FrontPageHandbag from '../images/frontpage-handbag.png';
const Home = () => {

    return(
        <div className="handbag-body">
            <section className="showcase">
                <div className="image-container">
                    <img src={FrontPageHandbag} alt="Handbag" />
                </div>
                <div className="showcase-text">
                    <h2 className="showcase-title">Going Places. With bags of beauty</h2>
                    <h3 className="showcase-subtitle">On everyone's wishlist this season? Timeless presents they'll treasure forever, including our must have Leisara handbag.</h3>
                </div>
            </section>
        </div>
    )
};

export default Home;