import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR3oxlaAS0TvOVqs2HOMDdUkau6Ma16Wl4MLqduruqsIWEd4jNT3m2x_Srw"
                alt=""
                className="home__image"
            />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id="09090"
                    title="Blender"
                    price={9.99}
                    rating={5}
                    image="https://www.morphyrichards.co.uk/Images/Products/Default/xlarge/HR403053.jpg"
                />
                <Product
                    id="09091"
                    title={`2019 Apple iPad Air 10.5", A12 Bionic, iOS, Wi-Fi, 64GB, Space Grey`}
                    price={239.95}
                    rating={3}
                    image="https://johnlewis.scene7.com/is/image/JohnLewis/238066371?$rsp-pdp-port-1080$"
                />
            </div>
            <div className="home__row">
                <Product
                    id="09092"
                    title={`Morphy Richards Turbosteam Pro Steam Ceramic Iron, Pink`}
                    price={49.99}
                    rating={5}
                    image="https://johnlewis.scene7.com/is/image/JohnLewis/237107155?$rsp-pdp-port-1080$"
                />
                <Product
                    id="09094"
                    title={`Echo Dot (3rd Gen) Smart Speaker with Alexa`}
                    price={29.99}
                    rating={2}
                    image="https://scx2.b-cdn.net/gfx/news/hires/2020/1-alexa.jpg"
                />
                <Product
                    id="09095"
                    title={`Canadian Goose Down Soft Pillow`}
                    price={69.99}
                    rating={5}
                    image="https://secure.img1-fg.wfcdn.com/im/41686647/resize-h600-w600%5Ecompr-r85/5388/53887386/Pillows.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="09096"
                    title={`Tunturi Funhop Trampoline`}
                    price={9.99}
                    rating={5}
                    image="https://www.tunturi.org/website/Accessoires/14TUSGA005.jpg"
                />
            </div>
        </div>
    );
}

export default Home;
