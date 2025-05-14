import Slider from "react-slick";
import { Link } from "react-router";
import classes from './Carousel.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ products }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(3, products.length),
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, products.length),
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };

  return (
    <>
    <h2>Featured now:</h2>
    <Slider {...settings}>
      {products.map(product => (
        <div key={product.id} className={classes.slide}>
          <div
            className={classes.overlay}
            style={{
              backgroundImage: `url(${product.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Link to={`/products/${product.id}`} className={classes.content} style={{ textDecoration: 'none' }}>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </Link>
          </div>
        </div>
      ))}
    </Slider>
    </>
  );
}