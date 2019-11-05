import React, { Component } from 'react';
import '../assets/css/components/Serial.scss';
import { Link } from 'react-router-dom';
export class ArticleBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //isShowStyle: false
    };
  }
  showStyle = () => {
    // this.setState({
    //   isShowStyle: !this.state.isShowStyle
    // });
    // console.log('this.state.isShowStyle :', this.state.isShowStyle);
  };
  render() {
    return (
      <div>
                {/* 连载作品 */}
                <div class="note-novel-info">
          <div class="top-title">连载作品</div>
          <a href="javascript:;">
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

      </div>
    );
  }
}

export default ArticleBody;
