import React, { Component } from 'react';
import '../assets/css/components/Header.scss';
import { Link } from 'react-router-dom';
export class Footer extends Component {
  render() {
    return (
      <div>
        <header class="header-wrap">
          <div class="header-normal">
            <div class="logo-wrap">
              <img src={process.env.PUBLIC_URL + '/img/nav-logo.faf216af.png'} alt="logo" class="logo" />
              <span class="slogan">创作你的创作</span>
            </div>
            <Link to={`/login/`}>
            <div class="header-login">
              登录
              <i class="iconfont iconleft" />
            </div>
            </Link>
          </div>
          <div class="header-shim" />
        </header>
      </div>
    );
  }
}

export default Footer;
