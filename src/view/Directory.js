import React, { Component } from 'react';
import '../assets/css/Directory.scss';
import Footer from '../components/Footer';
import Header from '../components/Header';

class Article extends Component {
  constructor() {
    super();
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
              <i class="iconfont ic-follow"></i>
              关注
            </button>
            <div class="title">简</div>
            <a href="/u/d8d3b9f0f704" class="author">
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

        <div class="intros">暂无简介</div>

        <hr />
        <a href="/p/d1a247347bfd" class="latest-novel-note">
          <i class="iconfont ic-latest"></i>
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
              <a href="/p/37f0c25b81e3" class="content">
                <div class="info">
                  <span class="name">我的第一幅水彩风景画-云深不知处###我的第一幅丙稀石头画</span>
                </div>
                <div class="meta">
                  <span>字数 21&nbsp;·&nbsp;</span>
                  <span>阅读 189&nbsp;·&nbsp;</span>
                  <span>08-07 16:06</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">2</div>
              <a href="/p/8033513e60fb" class="content">
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
              <a href="/p/512f4f36c2ae" class="content">
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
              <a href="/p/1675834ff3bf" class="content">
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
              <a href="/p/53959c04afb8" class="content">
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
              <a href="/p/a858f7d4cb1e" class="content">
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
              <a href="/p/5b163f2fb622" class="content">
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
              <a href="/p/f43f2d274ebb" class="content">
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
              <a href="/p/af51b0d1314f" class="content">
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
              <a href="/p/513517e90a17" class="content">
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
              <a href="/p/4c2e3eb8a28e" class="content">
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
              <a href="/p/ca005fc83b99" class="content">
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
              <a href="/p/e4ce55e77bbb" class="content">
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
              <a href="/p/d28cc416add9" class="content">
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
              <a href="/p/7d187e9cf9be" class="content">
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
                加载更多 <i data-v-24fdcdc8="" class="iconfont ic-show"></i>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="recommend-novels-list">
          <div class="top-title">
            <span>更多精彩连载</span>
          </div>
          <div class="novels-group">
            <a href="/nb/38189139" class="novel">
              <img
                src="https://upload.jianshu.io/book/image/29ff3d7e-7995-4719-a1ab-1f04d51deabb?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266"
                alt=""
                class="cover"
              />
              <div class="name">《佛说观无量寿佛经》逐句译</div>
              <div class="views-count">4362阅读</div>
            </a>
            <a href="/nb/33077639" class="novel">
              <img
                src="https://upload.jianshu.io/book/image/5604ce0a-50d6-4184-a3d4-01626ee92775.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266"
                alt=""
                class="cover"
              />
              <div class="name">草心集</div>
              <div class="views-count">826117阅读</div>
            </a>
            <a href="/nb/9251169" class="novel">
              <img src="//cdn2.jianshu.io/asimov/src/assets/image/book/serial_story_default_cover.070dd89f.png" alt="" class="cover" />
              <div class="name">复盘助成长</div>
              <div class="views-count">86349阅读</div>
            </a>
            <a href="/nb/36836057" class="novel">
              <img
                src="https://upload.jianshu.io/book/image/7f36477c-bf66-48ae-902c-f2e5557af513?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266"
                alt=""
                class="cover"
              />
              <div class="name">🎧有声简书精读•好评如潮</div>
              <div class="views-count">243656阅读</div>
            </a>
            <a href="/nb/39691635" class="novel">
              <img
                src="https://upload.jianshu.io/book/image/d50d0c5f-0566-434b-a504-8cece7a02845?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266"
                alt=""
                class="cover"
              />
              <div class="name">《逐字逐句学古文》</div>
              <div class="views-count">1107阅读</div>
            </a>
            <a href="/nb/36477319" class="novel">
              <img
                src="https://upload.jianshu.io/book/image/37bc3556-ff52-4d3c-b692-0f3baa6932a6?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266"
                alt=""
                class="cover"
              />
              <div class="name">《往事知多少三部曲》</div>
              <div class="views-count">60193阅读</div>
            </a>
            <a href="/nb/24360653" class="novel">
              <img
                src="https://upload.jianshu.io/book/image/600299f0-7041-495e-83cf-624c34281623?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266"
                alt=""
                class="cover"
              />
              <div class="name">简书笑谈</div>
              <div class="views-count">447246阅读</div>
            </a>
            <a href="/nb/32005632" class="novel">
              <img src="//cdn2.jianshu.io/asimov/src/assets/image/book/serial_story_default_cover.070dd89f.png" alt="" class="cover" />
              <div class="name">随笔</div>
              <div class="views-count">318898阅读</div>
            </a>
          </div>
          <a href="/mobile/books/category" class="recommend-novels-list-load-more">
            查看全部分类
            <i class="iconfont ic-link"></i>
          </a>
        </div>
        <hr />
        <div class="recommend-novels-trending">
          <div class="top-title">
            <span>热门排行</span>
          </div>
          <div class="banner-group">
            <a href="/mobile/books/weekly_trending" class="banner">
              <img src="//cdn2.jianshu.io/asimov/src/assets/image/mobile/serial_story/banner_weekly.218ab36e.png" alt="" />>
            </a>
            <a href="/mobile/bargain_books" class="banner">
              <img src="//cdn2.jianshu.io/asimov/src/assets/image/mobile/serial_story/banner_bargain_books.0b487e77.png" alt="" />
            </a>
          </div>
        </div>
        <hr/>
        <Footer />
      </div>
    );
  }
}

export default Article;
