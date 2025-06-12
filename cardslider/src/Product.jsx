import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Product() {
  const swiperRef = useRef(null);
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);
  const [data1, setData1] = useState(true);

  const data = [
    {
      title: "iQOO Z7s 5G by vivo (Norway Blue, 6GB RAM, 128GB Storage) | Ultra Bright AMOLED Display | Snapdragon 695 5G 6nm Processor | 64 MP OIS Ultra Stable Camera | 44WFlashCharge",
      price: "14999",
      description: "The exclusive Dolce & Gabbana edition, Moka Express becomes a tribute to the artistic crafts, landscapes and unique colours of Sicily, recreating the decorative motifs of the Sicilian Cart: an element of folklore of the island which, with its traditions, has always been at the heart of Dolce&Gabbana’s aesthetic. Enjoy a luxurious cup of coffee with this aesthetically pleasing coffee accessory! The exclusive Dolce & Gabbana edition, Moka Express becomes a tribute to the artistic crafts, landscapes and unique colours of Sicily, recreating the decorative motifs of the Sicilian Cart: an element of folklore of the island which, with its traditions, has always been at the heart of Dolce&Gabbana’s aesthetic. Enjoy a luxurious cup of coffee with this aesthetically pleasing coffee accessory!",
      quantity: "10",
      img: "https://m.media-amazon.com/images/I/71k3gOik46L._SX679_.jpg",
      id: 1,
    },
    {
      title: "Wonderchef Power Non-Stick Cookware 4 pc Set | Kadhai with Glass Lid 2.6L, Dosa Tawa 25cm, Fry Pan 24cm | Induction Bottom | Soft Touch Handles | Pure Grade Aluminium | PFOA Free | 2 Year Warranty | Orange",
      price: "1799",
      description: "Its 18/10 stainless steel and glass cylinder construction ensures your coffee is of the highest quality. Show off your inner risk-taker with the iconic domino cutout symbolizing Bialetti’s authenticity. Dare to take your coffee-making to the next level! Its 18/10 stainless steel and glass cylinder construction ensures your coffee is of the highest quality. Show off your inner risk-taker with the iconic domino cutout symbolizing Bialetti’s authenticity. Dare to take your coffee-making to the next level!",
      quantity: "9",
      img: "https://m.media-amazon.com/images/I/51gekkDYtxL._SX679_.jpg",
      id: 2,
    },
    {
      title: "INSPIRE SOFA'S Jute Cloth 2+2+1+1 L Shaped Elephant Sectional Sofa Set for Living Room (Brown&Gold) 6 Seater, 5- to 6-Person Sofa",
      price: "33999",
      description: "These double walled coffee mugs are perfect for cappuccino, latte, espresso, macchiato, tea, juice, iced beverages, or smoothies. Each cup holds 250 ml. Available in set of 2. These double walled coffee mugs are perfect for cappuccino, latte, espresso, macchiato, tea, juice, iced beverages, or smoothies. Each cup holds 250 ml. Available in set of 2.",
      quantity: "7",
      img: "https://m.media-amazon.com/images/I/61C5ej6rD7L._SX679_.jpg",
      id: 3,
    },
    {
      title: "Amazon Brand - Solimo Slim Stainless Steel Water Bottle, Set of 3, 1 liter Each",
      price: "999",
      description: "Stainless Steel water bottle set for home and office use Made using high quality stainless steel for added durability and long life Made from 100% food grade materials to be safe for everyday usage Features a spill-proof design; has a snug fitting lid for easy usage and prevention of leaks Ergonomic design for comfortable grip and rust free body Ideal for storing water, iced tea, juices, shakes and more Dimensions: L x W x H: 7.3 x 7.3 x 26 cm",
      quantity: "9",
      Offer: "",
      hsn: "Water Bottle",
      img: "https://m.media-amazon.com/images/I/81mrMggUQnS._SX679_.jpg",
      cat: "Water Bottle",
      id: 4
    }

  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="w-[600px] mx-auto m-10 h-[800px] rounded-lg border-2 overflow-hidden">
      <Swiper
        fadeEffect={{ crossFade: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={{
          prevEl: navPrevRef.current,
          nextEl: navNextRef.current,
        }}
        modules={[Navigation, EffectFade]}
        className="h-full"
        effect="fade"
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navPrevRef.current;
          swiper.params.navigation.nextEl = navNextRef.current;
        }}
        onSlideChange={() => {
          setData1(prev => !prev); // Force re-render
          setTimeout(() => AOS.refreshHard(), 100); // Reinitialize AOS after slide change
        }}
      >
        {data.map((item, idx) => {
          return (
            <SwiperSlide key={`${item.id}-${data1}`} className="flex items-center justify-center">
              <div className="w-[560px]">
                <div
                  data-aos='fade-up' data-aos-duration="1000"
                  className="w-full h-[450px] mx-auto mb-5 flex justify-center items-center"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full object-contain rounded-lg p-5"
                  />
                </div>

                <h1 data-aos='fade-up' data-aos-duration="2000" className="px-5 text-2xl font-semibold mb-3 text-left">
                  {item.title.slice(0, 85)+"..."}
                </h1>

                <p
                  data-aos='fade-up' data-aos-duration="2000"
                  className="px-5 text-gray-600 mb-6 line-clamp-4 text-left"
                >
                  {item.description.slice(0, 300) + "..."}
                </p>

                <div data-aos='fade-up' data-aos-duration="2000" className="px-5 flex gap-4">
                  <span className="text-xl font-bold text-green-600 pb-4 pl-4">
                    ₹{item.price}
                  </span>
                </div>
                <div data-aos='fade-up' data-aos-duration="2000" className="px-5 flex gap-4">
                  <span className="text-sm font-bold text-gray-500 pb-2 pl-4">
                    {item.quantity}  Quantity
                  </span>
                </div>
                <div data-aos='fade-up' data-aos-duration="2000" className="px-5 flex gap-4">
                  <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800">
                    Add To Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div ref={navPrevRef} className="swiper-button-prev text-3xl" />
        <div ref={navNextRef} className="swiper-button-next text-3xl" />
      </Swiper>
    </div>
  );
}

export default Product;
