import React, { Component } from 'react';
import '../assets/css/ArticleBody.scss';
import { Link } from 'react-router-dom';
export class ArticleBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowStyle: false
    };
  }
  showStyle = () => {
    this.setState({
      isShowStyle: !this.state.isShowStyle
    });
    console.log('this.state.isShowStyle :', this.state.isShowStyle);
  };
  render() {
    return (
      <div>
        <section class="article-body-container">
          <div class="article-body collapse-free-content">
            <h1 class="article-title">吐血整理写给新手的水彩颜料选购指南（干货）</h1>
            <div class="article-message">
              <Link to={`/author/`}>
                <a href="javascript:;" class="info">
                  <img src={process.env.PUBLIC_URL + '/img/7374b10ccc30.webp'} class="user-avatar" />
                  <div class="user-content">
                    <div class="user-content-wrap">
                      <div class="user-nickname">琢磨自留地</div>
                      <span class="label badge-item">简书作者</span>
                    </div>
                  </div>
                </a>
              </Link>
              <div class="article-meta">
                <i class="iconfont iconjewel" />
                <span>5.409</span>
                <span>2018-08-05 10:42</span>
              </div>
              {/* 连载文章meta */}
              <div class="meta">
                <span>2018-02-02 07:24</span>
                <button class="app-open">
                  <i class="iconfont ic-openinapp"></i>
                  <span>打开App</span>
                </button>
                <div class="reader-mode-public reader-mode-iFw96_0">
                  <div class="light-mode-1sdus_0" onClick={this.showStyle}>
                    <em class="day-a1Tt__0" className={['', this.state.isShowStyle ? 'day-a1Tt__0' : 'night-2BQDF_0'].join('')}></em>
                    <span>白天</span>
                  </div>
                  <div class="font-size-2KUVN_0">
                    <i class="iconfont ic-mode-fontsize iconziti1"></i>
                    <span>普通</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="article-content">
              <div class="image-package">
                <div class="image-container">
                  <div class="image-container-fill" />
                  <div class="image-view">
                    <img class="" src={process.env.PUBLIC_URL + '/img/12676667-c84a3febcb3b2c2a.webp'} />
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

          {/* 剩余内容 */}
          <div id="note-content-divide">
            <div class="line"></div>
            <p class="content">还有 79% 的精彩内容</p>
          </div>

          {/* 上/下一章 */}
          <div class="book-chapter">
            <a href="/p/53e9732a0120" class="chapter-item prev-chapter half chapter-with-next">
              <div class="text">
                <p>
                  <i class="iconfont ic-back"></i>
                  上一章
                </p>
                <span>青春玄幻|我的左眼61</span>
              </div>
            </a>
            <a href="/p/9ab38221eeb9" class="chapter-item next-chapter half">
              <div class="text">
                <p>
                  下一章
                  <i class="iconfont ic-link"></i>
                </p>
                <span>青春玄幻|我的左眼2</span>
              </div>
            </a>
          </div>

          {/* 购买 */}
          <div id="buy-book-panel">
            <div class="support-author">
              <button class="btn btn-paid reward-button buy-book">
                拿下整部￥12.90
                <div class="el-dialog__wrapper">
                  <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog buy-confirm-modal-1biVE_0 buy-confirm-modal-extra">
                    <div class="el-dialog__header">
                      <span class="el-dialog__title"></span>
                    </div>
                  </div>
                </div>
              </button>

              <button class="btn btn-paid reward-button buy-note">
                仅购买本篇￥0.90
                <div class="el-dialog__wrapper">
                  <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog buy-confirm-modal-1biVE_0 buy-confirm-modal-extra">
                    <div class="el-dialog__header">
                      <span class="el-dialog__title"></span>
                    </div>
                  </div>
                </div>
              </button>
              <div class="supporter">
                <div></div>
                <ul class="support-list"></ul>
              </div>
            </div>
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
              <a href="javascript:;" class="author-avatar">
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
