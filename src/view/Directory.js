import React, { Component } from 'react';
import '../assets/css/Directory.scss';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Modal } from 'antd-mobile';
import { Link } from 'react-router-dom';

function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false
    };
  }
  showModal = key => e => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true
    });
    let app = document.getElementById('root');
    app.classList.add('v-dialog-mask');
  };
  showModal2 = key => e => {
    console.log('xxxxxxxx');
    this.state.modal1 = false;
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true
    });
    let app = document.getElementById('root');
    app.classList.add('v-dialog-mask');
  };
  onClose = key => () => {
    this.setState({
      [key]: false
    });
    let app = document.getElementById('root');
    app.classList.remove('v-dialog-mask');
  };
  onClose2 = key => () => {
    this.setState({
      [key]: false
    });
    let app = document.getElementById('root');
    app.classList.remove('v-dialog-mask');
  };
  onChange = key => () => {
    this.state.modal1 = true;
    this.setState({
      [key]: false
    });
  };

  onWrapTouchStart = e => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault();
    }
  };

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
        {/* 连载作品 */}
        <div class="note-novel-info">
          <div class="top-title">连载作品</div>
          <a href="javascript:;" class="">
            <img
              src="https://upload.jianshu.io/book/image/741d215c-5eb3-4202-a7c0-2448c74aa494?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/240/format/webp"
              alt=""
              class="cover"
            />
          </a>
          <a href="javascript:;" class="name">
            青春玄幻|我的左眼 第一季
          </a>
          <button class="follow-btn notebook-follow-button follow">
            <i class="iconfont ic-follow iconadd"></i>
            关注
          </button>
          <div class="intro">
            主要人物:黎小奕，左眼先天性眼球发育不完全。(性格倔强，外表冰冷，内心既多愁善感又善良热心。)有非常强烈而准确的第六感。 黎孝天，帅气的邻家小哥哥
            ，黎小奕的跟屁虫和保护神。为人热情，对小奕死心塌地。 小奕的姆妈，一个六十多岁，几乎可以当她奶奶的驼背寡妇。
            故事梗概:十六年前，四十多岁的寡妇黎嫂在除夕夜捡到一个弃婴。这个弃婴先天残疾，但是从此被孤独一人的黎嫂当做心肝宝贝，含辛茹苦将她养大。本来就贫困又残疾的两个可怜人，幸亏有邻居黎孝天以及他父母的接应，还有政府的照顾
            。残疾的女孩有没有资格得到健全人的爱?她能不能带着她的姆妈过上幸福的生活?
          </div>
          <div class="meta">122868字 · 14269阅读</div>
        </div>

        <hr />
        <div class="recommend-novels-list">
          <div class="top-title">
            <span>更多精彩连载</span>
          </div>
          <div class="novels-group">
            <a href="javascript:;" class="novel">
              <img
                src="https://upload.jianshu.io/book/image/29ff3d7e-7995-4719-a1ab-1f04d51deabb?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266"
                alt=""
                class="cover"
              />
              <div class="name">《佛说观无量寿佛经》逐句译</div>
              <div class="views-count">4362阅读</div>
            </a>
            <a href="javascript:;" class="novel">
              <img
                src="https://upload.jianshu.io/book/image/5604ce0a-50d6-4184-a3d4-01626ee92775.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266"
                alt=""
                class="cover"
              />
              <div class="name">草心集</div>
              <div class="views-count">826117阅读</div>
            </a>
            <a href="javascript:;" class="novel">
              <img src="//cdn2.jianshu.io/asimov/src/assets/image/book/serial_story_default_cover.070dd89f.png" alt="" class="cover" />
              <div class="name">复盘助成长</div>
              <div class="views-count">86349阅读</div>
            </a>
            <a href="javascript:;" class="novel">
              <img
                src="https://upload.jianshu.io/book/image/7f36477c-bf66-48ae-902c-f2e5557af513?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266"
                alt=""
                class="cover"
              />
              <div class="name">🎧有声简书精读•好评如潮</div>
              <div class="views-count">243656阅读</div>
            </a>
            <a href="javascript:;" class="novel">
              <img
                src="https://upload.jianshu.io/book/image/d50d0c5f-0566-434b-a504-8cece7a02845?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266"
                alt=""
                class="cover"
              />
              <div class="name">《逐字逐句学古文》</div>
              <div class="views-count">1107阅读</div>
            </a>
            <a href="javascript:;" class="novel">
              <img
                src="https://upload.jianshu.io/book/image/37bc3556-ff52-4d3c-b692-0f3baa6932a6?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266"
                alt=""
                class="cover"
              />
              <div class="name">《往事知多少三部曲》</div>
              <div class="views-count">60193阅读</div>
            </a>
            <a href="javascript:;" class="novel">
              <img
                src="https://upload.jianshu.io/book/image/600299f0-7041-495e-83cf-624c34281623?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266"
                alt=""
                class="cover"
              />
              <div class="name">简书笑谈</div>
              <div class="views-count">447246阅读</div>
            </a>
            <a href="javascript:;" class="novel">
              <img src="//cdn2.jianshu.io/asimov/src/assets/image/book/serial_story_default_cover.070dd89f.png" alt="" class="cover" />
              <div class="name">随笔</div>
              <div class="views-count">318898阅读</div>
            </a>
          </div>
          <Link to={`/classify/`} class="recommend-novels-list-load-more">
            {/* <a href="javascript:;" class="recommend-novels-list-load-more"> */}
              查看全部分类
              <i class="iconfont ic-link"></i>
            {/* </a> */}
          </Link>
        </div>
        <hr />
        <div class="recommend-novels-trending">
          <div class="top-title">
            <span>热门排行</span>
          </div>
          <div class="banner-group">
            {/* <a href="javascript:;" class="banner"> */}
              <Link to={`/week-hot/`} class="banner">
                <img src="//cdn2.jianshu.io/asimov/src/assets/image/mobile/serial_story/banner_weekly.218ab36e.png" alt="" />
              </Link>
            {/* </a> */}

            {/* <a href="javascript:;" class="banner"> */}
              <Link to={`/special-offer/`} class="banner">
                <img src="//cdn2.jianshu.io/asimov/src/assets/image/mobile/serial_story/banner_bargain_books.0b487e77.png" alt="" />
              </Link>
            {/* </a> */}
          </div>
        </div>
        <hr />
        <Footer />
        <div class="paid-fixed-bar">
          <a href="javascript:;" class="try-read">
            免费阅读
          </a>
          <button class="btn btn-paid reward-button buy-book" onClick={this.showModal('modal1')}>
            立即拿下￥12.90
            <div class="el-dialog__wrapper">
              <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog buy-confirm-modal-1biVE_0 buy-confirm-modal-extra">
                <div class="el-dialog__header">
                  <span class="el-dialog__title"></span>
                </div>
              </div>
            </div>
          </button>
          <div class="tip">
            购买后
            <br />
            成功邀请有赏金
          </div>
        </div>

        {/* 付款弹框 */}

        <Modal
          visible={this.state.modal1}
          transparent
          maskClosable={false}
          onClose={this.onClose('modal1')}
          closable={true}
          title="购买连载"
          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        >
          {/* <div style={{ height: 100, overflow: 'scroll' }}> */}
          {/* <button class="v-dialog-close-btn">×</button> */}
          <main class="v-dialog-content">
            {/* <div class="title-3w2_d_0">购买连载</div> */}
            <div class="item-12-os_0">
              <span class="label-1643J_0">优惠券</span>
              <div class="value-2cezD_0">
                <span class="loading-promotion-TAy6Y_0">暂无可用优惠券</span>
              </div>
            </div>
            <div class="item-12-os_0">
              <span class="label-1643J_0">支付总额</span>
              <div class="value-2cezD_0">
                <span class="amount-22YN-_0">￥12.90</span>
              </div>
            </div>
            <div class="item-12-os_0">
              <span class="label-1643J_0">支付方式</span>
              <div class="value-2cezD_0">
                <button class="payment-3CRwJ_0" onClick={this.showModal2('modal2')}>
                  <i class="iconfont ic-wechat-pay iconiconzhi02"></i>
                  微信支付
                  <i class="iconfont ic-link ic-link-33FYA_0 iconleft"></i>
                </button>
              </div>
            </div>
            <button class="buy-btn-3ZTca_0">立即购买</button>
          </main>
          {/* </div> */}
        </Modal>

        <Modal
          visible={this.state.modal2}
          transparent
          maskClosable={false}
          onClose={this.onClose2('modal2')}
          closable={false}
          title="选择支付方式"
          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        >
          <main class="v-dialog-content">
            <button class="back-btn-2SnAQ_0" onClick={this.onChange('modal2')}>
              <i class="iconfont ic-back iconleft4"></i>
            </button>
            {/* <div class="title-3w2_d_0">选择支付方式</div> */}
            <div class="item-12-os_0 choice-W7ak__0">
              <i class="iconfont ic-wechat-pay iconiconzhi02"></i>
              &nbsp; 微信支付
              <span class="selected-radio-LZm2c_0"></span>
            </div>
            <div class="item-12-os_0 choice-W7ak__0">
              <i class="iconfont ic-alipay iconumidd17"></i>
              &nbsp; 支付宝支付
              <span class="radio-VwGUP_0"></span>
            </div>
          </main>
        </Modal>
      </div>
    );
  }
}

export default Article;
