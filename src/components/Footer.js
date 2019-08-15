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
                <a class="item">登录</a>
                <span class="line">|</span>
                <a class="item border">打开App</a>
                <span class="line">|</span>
                <a href="/" class="item router-link-active">
                  热门文章
                </a>
              </div>
            </div>
            <a href="/app?utm_medium=app-download-bottom&amp;utm_source=mobile" class="footer-download">
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
