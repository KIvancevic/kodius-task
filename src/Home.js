import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img 
          className="home__image"
          src={require("./tamanna-rumee-hGLc8L-EcCM-unsplash.jpg")}
          alt="banner"
        />

      <div className="home__row">
        <Product 
          id='12321432523402'
          title={'Smart Hub'} 
          price={49.99}
          image={require("./smartHub.jpg")}
          rating={4}
        />
        <Product 
          id="23543645712"
          title={'Motion Sensor'} 
          price={24.99}
          image={require("./motionSensor.jpg")}
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product 
          id="3495648032"
          title={'Wireless Camera'} 
          price={99.99}
          image={require("./wirelessCamera.jpeg")}
          rating={3}
        />
        <Product 
          id="3495648045"
          title={'Smoke Sensor'} 
          price={19.99}
          image={require("./smokingSensor.jpg")}
          rating={4}
        />
        <Product 
          id="3495648065"
          title={'Water Leak Sensor'} 
          price={14.99}
          image={require("./waterLeakSensor.jpg")}
          rating={5}
        />

      </div>

      <div className="home__row">
        <Product 
          id="3495648098"
          title={'Buy 3 x Smart Hub for 65.00'} 
          price={65.00}
          image={require("./smartHub.jpg")}
          rating={4}
        />
        <Product 
          id="3495648078"
          title={'Buy 2 x Smoke sensors for 35.00'} 
          price={35.00}
          image={require("./smokingSensor.jpg")}
          rating={4}
        />
      </div>

      </div>
    </div>
  )
}

export default Home