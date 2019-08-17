import React, { Component } from 'react';
import '../assets/css/ArticleBody.scss';
export class ArticleBody extends Component {
  render() {
    return (
      <div>
        <section class="article-body-container">
          <div class="article-body collapse-free-content">
            <h1 class="article-title">吐血整理写给新手的水彩颜料选购指南（干货）</h1>
            <div class="article-message">
              <a href="" class="info">
                <img src={process.env.PUBLIC_URL + '/img/7374b10ccc30.webp'} class="user-avatar" />
                <div class="user-content">
                  <div class="user-content-wrap">
                    <div class="user-nickname">琢磨自留地</div>
                    <span class="label badge-item">简书作者</span>
                  </div>
                </div>
              </a>
              <div class="article-meta">
                <i class="iconfont iconjewel" />
                <span>5.409</span>
                <span>2018-08-05 10:42</span>
              </div>
            </div>
            <div class="article-content">
              <div class="image-package">
                <div class="image-container">
                  <div class="image-container-fill" />
                  <div class="image-view">
                    <img
                      class=""
                      src={process.env.PUBLIC_URL + '/img/12676667-c84a3febcb3b2c2a.webp'}
                    />
                  </div>
                </div>
                <div class="image-caption">第一组花瓣，完全在试色当中</div>
              </div>
            </div>
            <div class="article-copyright">© 著作权归作者所有,转载或内容合作请联系作者</div>
          </div>

          <div class="collapse-tips">
            <button class="close-collapse-btn">
              <i class="iconfont iconmore" />
            </button>
            <button class="open-app-btn">打开App，阅读文章</button>
          </div>

          <div class="article-praise-container">
            <div class="article-line-hint">
              <div class="line" />
              <p class="content">
                <span>点赞赚钻</span>
                <span class="special">最高日赚数百元</span>
              </p>
            </div>
            <div class="article-praise">
              <i class="iconfont iconlike" />
              <span class="graceful-words">
                赞 <span class="numbers">(0)</span>
              </span>
            </div>
          </div>

          <div class="article-reward">
            <div class="reward-description">
              <a href="" class="author-avatar">
                <img src={process.env.PUBLIC_URL + '/img/7374b10ccc30.webp'} />
              </a>
              <div class="author-info">
                <div class="author-nickname">琢磨自留地</div>
                <div class="author-desc">小礼物走一走，来简书关注我</div>
              </div>
              <button class="new-reward-button">赞赏</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ArticleBody;
