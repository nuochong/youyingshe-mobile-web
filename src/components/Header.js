import React, { Component } from 'react';
import '../assets/css/Header.scss';
export class Footer extends Component {
  render() {
    return (
      <div>
        <header class="header-wrap">
          <div class="header-normal">
            <div class="logo-wrap">
              <img src="https://cdn2.jianshu.io/asimov/src/assets/image/nav-logo.faf216af.png" alt="logo" class="logo" />
              <span class="slogan">创作你的创作</span>
            </div>
            <div class="header-login">
              登录
              <i class="iconfont iconleft" />
            </div>
          </div>
          <div class="header-shim" />
        </header>
      </div>
    );
  }
}

export default Footer;
