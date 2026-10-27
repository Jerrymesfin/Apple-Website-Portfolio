import React from 'react'
//import logo from'../../../public/images/icons/logo.png'


 function Header() {
  return (
    <div>
      <header className="head">
        <div className="container">
          <div className="header-links">
            <ul>
              <li className="logo">
                <a href="#">
                  <img src="/images/icons/logo.png" alt="Apple logo" />
                </a>
              </li>

              <li><a href="#">Mac</a></li>
              <li><a href="#">iPhone</a></li>
              <li><a href="#">iPad</a></li>
              <li><a href="#">Watch</a></li>
              <li><a href="#">TV</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#">Support</a></li>

              <li className="search">
                <a href="#">
                  <img src="/images/icons/search-icon.png" alt="Search" />
                </a>
              </li>

              <li className="cart">
                <a href="#">
                  <img src="/images/icons/cart.png" alt="Shopping bag" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;