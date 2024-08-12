import React from 'react';
import './AmazonPage.css' // Make sure this path is correct for your project

const AmazonPage = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <nav className="navbar">
          <div className="nav-logo border">
            <div className="logo"></div>
          </div>
          <div className="nav-address border">
            <p className="add-first">Deliver to</p>
            <div className="add-icon">
              <i className="fa-solid fa-location-dot"></i>
              <p className="add-second">India</p>
            </div>
          </div>
          <div className="nav-search">
            <select className="search-select">
              <option>All</option>
            </select>
            <input placeholder="Search Amazon" className="search-input" />
            <div className="search-icon" aria-label="Search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="nav-signin border">
            <p><span>Hello, sign in</span></p>
            <p className="nav-second">Account & Lists</p>
          </div>
          <div className="nav-return border">
            <p><span>Returns</span></p>
            <p className="nav-second">& Orders</p>
          </div>
          <div className="nav-cart border">
            <i className="fa-solid fa-cart-plus"></i> Cart
          </div>
        </nav>
        <div className="panel">
          <div className="panel-all">
            <i className="fa-solid fa-bars"></i> All
          </div>
          <div className="panel-ops">
            <p>Today's Deals</p>
            <p>Customer Service</p>
            <p>Registry</p>    
            <p>Gift cards</p>
            <p>Sell</p>
          </div>
          <div className="panel-deals">
            Shop deals in Electronics
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="herosection">
        <div className="hero-msg">
          <p>
            New deals on thousands of items added daily. Shop our Deal of the Day, Lightning Deals, and more daily deals and limited-time sales. 
            <a href="#">Click here to go to amazon.in</a>
          </p>
        </div>
      </section>

      {/* Shop Section */}
      <section className="shop-section">
        <div className="box1 box">
          <div className="box-content">
            <h2>Health & Personal Care</h2>
            <div className="box-img" style={{ backgroundImage: "url('box1.jpg')" }}></div>
            <p>See more</p>
          </div>
        </div>

        <div className="box2 box">
          <div className="box-content">
            <h2>Food and many more</h2>
            <div className="box-img" style={{ backgroundImage: "url('box2.jpg')" }}></div>
            <p>See more</p>
          </div>
        </div>

        <div className="box3 box">
          <div className="box-content">
            <h2>Amazon web service</h2>
            <div className="box-img" style={{ backgroundImage: "url('box3.jpg')" }}></div>
            <p>See more</p>
          </div>
        </div>

        <div className="box4 box">
          <div className="box-content">
            <h2>Amazon brands & more</h2>
            <div className="box-img" style={{ backgroundImage: "url('box4.jpg')" }}></div>
            <p>See more</p>
          </div>
        </div>

        <div className="box1 box">
          <div className="box-content">
            <h2>Never before offers</h2>
            <div className="box-img" style={{ backgroundImage: "url('box5.jpg')" }}></div>
            <p>See more</p>
          </div>
        </div>

        <div className="box2 box">
          <div className="box-content">
            <h2>Season finale streaming now</h2>
            <div className="box-img" style={{ backgroundImage: "url('box6.jpg')" }}></div>
            <p>See more</p>
          </div>
        </div>

        <div className="box3 box">
          <div className="box-content">
            <h2>Curated kitchen products</h2>
            <div className="box-img" style={{ backgroundImage: "url('box7.jpg')" }}></div>
            <p>See more</p>
          </div>
        </div>

        <div className="box4 box">
          <div className="box-content">
            <h2>Carpets & more stores near you</h2>
            <div className="box-img" style={{ backgroundImage: "url('box8.jpg')" }}></div>
            <p>See more</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="foot-panel1">
          Back to top
        </div>
        <div className="foot-panel2">
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press Releases</a></li>
            <li><a href="#">Amazon Science</a></li>
          </ul>
          <ul>
            <li><p>Connect with Us</p></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
          <ul>
            <li><p>Make Money with Us</p></li>
            <li><a href="#">Sell on Amazon</a></li>
            <li><a href="#">Sell under Amazon Accelerator</a></li>
            <li><a href="#">Protect and Build Your Brand</a></li>
            <li><a href="#">Amazon Global Selling</a></li>
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Fulfillment by Amazon</a></li>
          </ul>
          <ul>
            <li><p>Let Us Help You</p></li>
            <li><a href="#">COVID-19 and Amazon</a></li>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Returns Centre</a></li>
            <li><a href="#">100% Purchase Protection</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
        <div className="foot-panel3">
          <div className="logo"></div>
          <i className="fa-solid fa-globe" style={{ border: '0.5px solid white' }}>
            <p> English</p>
          </i>
        </div>
        <div className="foot-panel4">
          <div className="pages">
            <a href="#">Conditions of Use</a>
            <a href="#">Privacy Notice</a>
            <a href="#">Your Ads Privacy Choices</a> 
          </div>
          <div className="copyright">
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </div>
        </div>  
      </footer>
    </div>
  );
}

export default AmazonPage;