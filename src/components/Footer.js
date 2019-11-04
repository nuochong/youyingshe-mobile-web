import React, { Component } from 'react';
import '../assets/css/Footer.scss';
export class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div class="footer-wrap">
            <div class="footer-panel">
              <div class="panel">
                <a href="javascript:;" class="avatar">
                    <img src={process.env.PUBLIC_URL + '/img/25d33e39-ff2c-4859-8df9-10059f07bd22.webp'} />
                </a>
                <a class="item">登录</a>
                <span class="line">|</span>
                <a class="item">退出</a>
                <span class="line">|</span>
                <a class="item border">打开App</a>
                <span class="line">|</span>
                <a href="javascript:;" class="item router-link-active">
                  热门文章
                </a>
              </div>
            </div>
            <a href="javascript:;" class="footer-download">
              <i class="iconfont icondownloadfile" />
              下载简书，创作你的创作
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
