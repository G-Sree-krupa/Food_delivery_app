import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>
      <b><h1 align="center">Welcome to our zomato app</h1></b>
      <div class="image-container"></div>
      <img src="./zomato pic.jpg" alt="" style={{ width: "1020px", height:" 400px"}}/>
      <b><div class="text-overlay">Order food from favourite restaurants near you</div></b>
      </div>
    <div className="container my-5">
        <h2 className="text-center mb-4">Popular Dishes</h2>
        <div className="row">
          {/* Card 1 - Burger */}
          <div className="col-md-4">
            <div className="card">
              <img src="/burger.webp" className="card-img-top" alt="Burger" />
              <div className="card-body">
                <h5 className="card-title">Delicious Burger</h5>
                <p className="card-text">A juicy, cheesy burger with fresh veggies and sauces.</p>
                <button className="btn btn-danger">Order Now</button>
              </div>
            </div>
          </div>

          {/* Card 2 - Pizza */}
          <div className="col-md-4">
            <div className="card">
              <img src="/pizza.jpg" className="card-img-top" alt="Pizza" />
              <div className="card-body">
                <h5 className="card-title">Cheesy Pizza</h5>
                <p className="card-text">A hot and crispy pizza loaded with cheese and toppings.</p>
                <button className="btn btn-danger">Order Now</button>
              </div>
            </div>
          </div>
         {/* Card 3 - Biryani */}
         <div className="col-md-4">
            <div className="card">
              <img src="/biryani.png" className="card-img-top" alt="Biryani" />
              <div className="card-body">
                <h5 className="card-title">Spicy Biryani</h5>
                <p className="card-text">Aromatic and flavorful spicy biryani served with raita .</p>
                <button className="btn btn-danger">Order Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="/Shawarma.jpg" className="card-img-top" alt="Shawarma" />
              <div className="card-body">
                <h5 className="card-title">Veg Shawarma</h5>
                <p className="card-text">similar to Greek gyros,though the former is seasoned with more spices and the latter with more herbs</p>
                <button className="btn btn-danger">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
