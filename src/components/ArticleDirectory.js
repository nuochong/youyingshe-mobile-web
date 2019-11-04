import React, { Component } from 'react';
import '../assets/css/ArticleDirectory.scss';
import { Link } from 'react-router-dom';
export class ArticleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [0, 2, 3, 4]
    };
  }

  render() {
    return (
      <div>
        <div class="book-nav">
          <button class="open-chapter">
            <i class="iconfont ic-catalog"></i>
            目录
          </button>
          <a href="/nb/23058721" class="book-info">
            <img
              src="https://upload.jianshu.io/book/image/741d215c-5eb3-4202-a7c0-2448c74aa494?imageMogr2/auto-orient/strip|imageView2/1/w/51/h/69/format/webp"
              class="cover"
            />
            <span class="number">4</span>
            <span class="name oneline">青春玄幻|我的左眼 第一季</span>
          </a>
        </div>

        <div id="book-chapters-drawer-wrap">
        <div id="backdrop-r2u" class="backdrop show"></div>
          <div class="change1 drawer book-chapters-drawer-header">
            <div class="book-chapters-header">
              <span class="title">目录(共61篇)</span>
              <button class="reset">
                <i class="iconfont ic-switch-order"></i>
                切换顺序
              </button>
            </div>
          </div>
          <div class="change1 drawer book-chapters-drawer-body">
            <div id="book-chapters">
              <ul>
                <li class="chapter">
                  <div class="part">61</div>
                  <a href="/p/53e9732a0120" class="content">
                    <div class="info">
                      <span class="name">青春玄幻|我的左眼61</span>
                    </div>
                    <div class="meta">
                      <span>字数 1991&nbsp;·&nbsp;</span>
                      <span>阅读 445&nbsp;·&nbsp;</span>
                      <span>04-16 23:19</span>
                    </div>
                  </a>
                </li>
                <li class="chapter">
                  <div class="part">60</div>
                  <a href="/p/a1692916ddbd" class="content">
                    <span class="try-read">试读</span>
                    <div class="info">
                      <span class="name">青春玄幻|我的左眼1</span>
                    </div>
                    <div class="meta">
                      <span>字数 1842&nbsp;·&nbsp;</span>
                      <span>阅读 775&nbsp;·&nbsp;</span>
                      <span>01-31 10:35</span>
                    </div>
                  </a>
                </li>
                <li class="chapter">
                  <div class="part">59</div>
                  <a href="/p/9ab38221eeb9" class="content">
                    <span class="try-read">试读</span>
                    <div class="info">
                      <span class="name">青春玄幻|我的左眼2</span>
                    </div>
                    <div class="meta">
                      <span>字数 1906&nbsp;·&nbsp;</span>
                      <span>阅读 358&nbsp;·&nbsp;</span>
                      <span>02-01 09:47</span>
                    </div>
                  </a>
                </li>
                <li class="chapter">
                  <div class="part">58</div>
                  <a href="/p/38458f3499ab" class="content router-link-exact-active router-link-active">
                    <span class="try-read">试读</span>
                    <div class="info">
                      <span class="current">当前</span>
                      <span class="name">青春玄幻|我的左眼3</span>
                    </div>
                    <div class="meta">
                      <span>字数 1901&nbsp;·&nbsp;</span>
                      <span>阅读 283&nbsp;·&nbsp;</span>
                      <span>02-02 07:24</span>
                    </div>
                  </a>
                </li>
                <li class="chapter">
                  <div class="part">57</div>
                  <a href="/p/0cca15708fad" class="content">
                    <span class="try-read">试读</span>
                    <div class="info">
                      <span class="name">青春玄幻|我的左眼4</span>
                    </div>
                    <div class="meta">
                      <span>字数 1710&nbsp;·&nbsp;</span>
                      <span>阅读 289&nbsp;·&nbsp;</span>
                      <span>02-03 09:09</span>
                    </div>
                  </a>
                </li>
                <li class="chapter">
                  <div class="part">56</div>
                  <a href="/p/d6ee92a8fbb8" class="content">
                    <span class="try-read">试读</span>
                    <div class="info">
                      <span class="name">青春玄幻|我的左眼5</span>
                    </div>
                    <div class="meta">
                      <span>字数 2053&nbsp;·&nbsp;</span>
                      <span>阅读 250&nbsp;·&nbsp;</span>
                      <span>02-04 10:31</span>
                    </div>
                  </a>
                </li>
                <li class="chapter">
                  <div class="part">55</div>
                  <a href="/p/d202d723c6d7" class="content">
                    <div class="info">
                      <span class="name">青春玄幻|我的左眼6</span>
                    </div>
                    <div class="meta">
                      <span>字数 1973&nbsp;·&nbsp;</span>
                      <span>阅读 324&nbsp;·&nbsp;</span>
                      <span>02-05 08:31</span>
                    </div>
                  </a>
                </li>
                <li class="chapter">
                  <div class="part">54</div>
                  <a href="/p/2f6bdae16a28" class="content">
                    <div class="info">
                      <span class="name">青春玄幻|我的左眼7</span>
                    </div>
                    <div class="meta">
                      <span>字数 2155&nbsp;·&nbsp;</span>
                      <span>阅读 262&nbsp;·&nbsp;</span>
                      <span>02-06 08:01</span>
                    </div>
                  </a>
                </li>
                <li class="chapter">
                  <div class="part">53</div>
                  <a href="/p/ee9b28c9af1a" class="content">
                    <div class="info">
                      <span class="name">青春玄幻|我的左眼8</span>
                    </div>
                    <div class="meta">
                      <span>字数 1934&nbsp;·&nbsp;</span>
                      <span>阅读 354&nbsp;·&nbsp;</span>
                      <span>02-07 09:13</span>
                    </div>
                  </a>
                </li>
                <li class="chapter">
                  <div class="part">52</div>
                  <a href="/p/f564d7473ad3" class="content">
                    <div class="info">
                      <span class="name">青春玄幻|我的左眼9</span>
                    </div>
                    <div class="meta">
                      <span>字数 1988&nbsp;·&nbsp;</span>
                      <span>阅读 247&nbsp;·&nbsp;</span>
                      <span>02-08 08:06</span>
                    </div>
                  </a>
                </li>
                <li class="chapter">
                  <div class="part">51</div>
                  <a href="/p/8914f94c8423" class="content">
                    <div class="info">
                      <span class="name">青春玄幻|我的左眼10</span>
                    </div>
                    <div class="meta">
                      <span>字数 2047&nbsp;·&nbsp;</span>
                      <span>阅读 472&nbsp;·&nbsp;</span>
                      <span>02-09 09:34</span>
                    </div>
                  </a>
                </li>
                <li class="chapter">
                  <div class="part">50</div>
                  <a href="/p/c25e547bd146" class="content">
                    <div class="info">
                      <span class="name">青春玄幻|我的左眼11</span>
                    </div>
                    <div class="meta">
                      <span>字数 1987&nbsp;·&nbsp;</span>
                      <span>阅读 256&nbsp;·&nbsp;</span>
                      <span>02-10 08:45</span>
                    </div>
                  </a>
                </li>
                <li class="chapter">
                  <div class="part">49</div>
                  <a href="/p/a6dcf0471b68" class="content">
                    <div class="info">
                      <span class="name">青春玄幻|我的左眼12</span>
                    </div>
                    <div class="meta">
                      <span>字数 1852&nbsp;·&nbsp;</span>
                      <span>阅读 300&nbsp;·&nbsp;</span>
                      <span>02-11 09:08</span>
                    </div>
                  </a>
                </li>
                <li class="chapter">
                  <div class="part">48</div>
                  <a href="/p/1015309ba87b" class="content">
                    <div class="info">
                      <span class="name">青春玄幻|我的左眼13</span>
                    </div>
                    <div class="meta">
                      <span>字数 1995&nbsp;·&nbsp;</span>
                      <span>阅读 233&nbsp;·&nbsp;</span>
                      <span>02-13 10:32</span>
                    </div>
                  </a>
                </li>
                <li class="chapter">
                  <div class="part">47</div>
                  <a href="/p/ad9b3d1da86d" class="content">
                    <div class="info">
                      <span class="name">青春玄幻|我的左眼14</span>
                    </div>
                    <div class="meta">
                      <span>字数 2117&nbsp;·&nbsp;</span>
                      <span>阅读 446&nbsp;·&nbsp;</span>
                      <span>02-13 17:19</span>
                    </div>
                  </a>
                </li>
              </ul>
              <div class="scroller-1aZec_0">
                <div data-v-24fdcdc8="">
                  <div data-v-24fdcdc8="" class="flow-list-placeholder-load-more">
                    加载更多 <i data-v-24fdcdc8="" class="iconfont ic-show"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="change1 drawer book-chapters-drawer-footer">
            <a href="/nb/23058721" class="back">
              <i class="iconfont ic-read"></i>
              前往作品主页
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleList;
