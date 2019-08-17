import React, { Component } from 'react';
import '../assets/css/Logo.scss';
export class Logo extends Component {
  render() {
    return (
      <div>
        <section class="article-body-footer">
          <div class="footer-wrap">
            <div class="slogan">
              
              <img src={process.env.PUBLIC_URL + '/img/misc-logo.805143dd.png'} class="logo" />
              <div class="content">
                <span>创作你的创作，</span>
                <span>接受世界的赞赏</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Logo;
