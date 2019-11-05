import React, { Component } from 'react';
import '../assets/css/view/Directory.scss';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Serial from '../components/Serial';
import SerialMore from '../components/SerialMore';
import SerialHot from '../components/SerialHot';
import SerialBuy from '../components/SerialBuy';
import { Link } from 'react-router-dom';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}
  render() {
    return (
      <div>
        <Header />
        <hr />
        <div class="novel-info">
          <img
            src={'https://upload.jianshu.io/book/image/33a8fd38-6df7-4a9f-be82-8fcb81e60296.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/100/h/133'}
            class="cover"
          />
          <img
            src={'https://upload.jianshu.io/book/image/33a8fd38-6df7-4a9f-be82-8fcb81e60296.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/400'}
            alt=""
            class="background"
          />
          <div class="info">
            <button class="follow-btn notebook-follow-button follow">
              <i class="iconfont ic-follow iconadd"></i>
              关注
            </button>
            <div class="title">简</div>
            <a href="javascript:;" class="author">
              <img
                src={'https://upload.jianshu.io/users/upload_avatars/3473159/97bb30c7-e105-45c1-8267-020efe4b1a38.jpg?imageMogr2/auto-orient/strip'}
                alt=""
                class="avatar"
              />
              <span class="name">锦绘0017</span>
            </a>
            <div class="meta">3837字 · 4102阅读 · 51人关注</div>
          </div>
        </div>

        {/* <div class="intros">暂无简介</div> */}
        <div class="intros">
          主要人物:黎小奕，左眼先天性眼球发育不完全。(性格倔强，外表冰冷，内心既多愁善感又善良热心。)有非常
          <i class="iconfont ic-show iconbottom"></i>
        </div>

        <div class="categories-group">
          <i class="iconfont ic-tag icontag"></i>
          <a href="javascript:;" class="category">
            青春
          </a>
          <a href="javascript:;" class="category">
            玄幻
          </a>
          <a href="javascript:;" class="category">
            付费连载
          </a>
        </div>

        <hr />
        <a href="javascript:;" class="latest-novel-note">
          <i class="iconfont ic-latest iconnew"></i>
          <span class="publish-time">2019-11-04 07:14</span>
          <p class="name oneline">我要画丙烯荷花</p>
        </a>
        <hr />
        <div order="desc" class="book-chapters-header">
          <span class="title">目录(共26篇)</span>
          <button class="reset">
            <i class="iconfont ic-switch-order"></i>
            切换顺序
          </button>
        </div>
        <div id="book-chapters">
          <ul>
            <li class="chapter">
              <div class="part">1</div>
              <a href="javascript:;" class="content padding-right">
                <div class="info">
                  <span class="name">我的第一幅水彩风景画-云深不知处###我的第一幅丙稀石头画</span>
                </div>
                <div class="meta">
                  <span>字数 21&nbsp;·&nbsp;</span>
                  <span>阅读 189&nbsp;·&nbsp;</span>
                  <span>08-07 16:06</span>
                </div>
              </a>
              <button class="btn btn-paid reward-button buy-note">购买</button>
            </li>
            <li class="chapter">
              <div class="part">2</div>
              <a href="javascript:;" class="content">
                <span class="try-read">试读</span>
                <div class="info">
                  <span class="name">我画的彩铅版赵丽颖</span>
                </div>
                <div class="meta">
                  <span>字数 18&nbsp;·&nbsp;</span>
                  <span>阅读 675&nbsp;·&nbsp;</span>
                  <span>10-06 20:55</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">3</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">玻璃瓶装青蛙</span>
                </div>
                <div class="meta">
                  <span>字数 52&nbsp;·&nbsp;</span>
                  <span>阅读 582&nbsp;·&nbsp;</span>
                  <span>10-10 07:30</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">4</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">小鲜肉速写1号</span>
                </div>
                <div class="meta">
                  <span>字数 12&nbsp;·&nbsp;</span>
                  <span>阅读 333&nbsp;·&nbsp;</span>
                  <span>10-12 21:48</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">5</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">我画的第二幅风景画</span>
                </div>
                <div class="meta">
                  <span>字数 32&nbsp;·&nbsp;</span>
                  <span>阅读 175&nbsp;·&nbsp;</span>
                  <span>10-15 17:25</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">6</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">玩具</span>
                </div>
                <div class="meta">
                  <span>字数 0&nbsp;·&nbsp;</span>
                  <span>阅读 52&nbsp;·&nbsp;</span>
                  <span>10-18 19:23</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">7</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">想法～网络生活</span>
                </div>
                <div class="meta">
                  <span>字数 158&nbsp;·&nbsp;</span>
                  <span>阅读 345&nbsp;·&nbsp;</span>
                  <span>10-19 20:42</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">8</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">简书厉害人物</span>
                </div>
                <div class="meta">
                  <span>字数 106&nbsp;·&nbsp;</span>
                  <span>阅读 155&nbsp;·&nbsp;</span>
                  <span>10-23 08:02</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">9</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">包容很重要</span>
                </div>
                <div class="meta">
                  <span>字数 156&nbsp;·&nbsp;</span>
                  <span>阅读 254&nbsp;·&nbsp;</span>
                  <span>10-23 09:47</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">10</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">缘</span>
                </div>
                <div class="meta">
                  <span>字数 95&nbsp;·&nbsp;</span>
                  <span>阅读 99&nbsp;·&nbsp;</span>
                  <span>10-23 21:36</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">11</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">歌</span>
                </div>
                <div class="meta">
                  <span>字数 104&nbsp;·&nbsp;</span>
                  <span>阅读 200&nbsp;·&nbsp;</span>
                  <span>10-25 09:47</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">12</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">旅游，危险</span>
                </div>
                <div class="meta">
                  <span>字数 246&nbsp;·&nbsp;</span>
                  <span>阅读 162&nbsp;·&nbsp;</span>
                  <span>10-27 16:50</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">13</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">美丽</span>
                </div>
                <div class="meta">
                  <span>字数 61&nbsp;·&nbsp;</span>
                  <span>阅读 89&nbsp;·&nbsp;</span>
                  <span>10-28 20:20</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">14</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">悲</span>
                </div>
                <div class="meta">
                  <span>字数 258&nbsp;·&nbsp;</span>
                  <span>阅读 96&nbsp;·&nbsp;</span>
                  <span>10-28 22:31</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">15</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">幽默系列2</span>
                </div>
                <div class="meta">
                  <span>字数 157&nbsp;·&nbsp;</span>
                  <span>阅读 102&nbsp;·&nbsp;</span>
                  <span>10-29 15:10</span>
                </div>
              </a>
            </li>
          </ul>
          <div class="scroller-1aZec_0">
            <div data-v-24fdcdc8="">
              <div data-v-24fdcdc8="" class="flow-list-placeholder-load-more">
                加载更多 <i data-v-24fdcdc8="" class="iconfont ic-show iconbottom"></i>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <Serial></Serial>
        <hr />
        <SerialMore></SerialMore>
        <hr />
        <SerialHot></SerialHot>
        <hr />
        <Footer />
        <SerialBuy></SerialBuy>
      </div>
    );
  }
}

export default Article;
