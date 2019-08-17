import React, { Component } from 'react';
import '../assets/css/Recommend.scss';
export class Recommend extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bg: {
        'background-image': 'url(' + process.env.PUBLIC_URL + '/img/18354189-e9e9a30bcfda6c4b.jpg'
      }
    };
  }
  render() {
    return (
      <div>
        <section class="article-recommend">
          <p class="top-title">
            推荐阅读
            <a href="" class="more">
              更多精彩内容
              <i class="iconfont ic-link" />
            </a>
          </p>
          <div class="recommend-note">
            <div class="recommend-wrap">
              <span class="stats-comp">
                <div class="recommend-img" style={this.state.bg}>
                  &nbsp;
                </div>
                <div class="author">
                  <div class="title">绘画艺术丨今日教程：彩铅画—兰花</div>
                  <div class="avatar">
                    <img src={process.env.PUBLIC_URL + '/img/f9075afb-775a-433d-9c32-835b8d9893e2.webp'} />
                  </div>
                  <div class="author-name">教画画的小然</div>
                  <div class="meta">
                    App中阅读
                    <i class="iconfont ic-list-read" />
                    <span>457</span>
                    <i class="iconfont ic-list-comments" />
                    <span>0</span>
                    <i class="iconfont ic-list-like" />
                    <span>15</span>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Recommend;
