import React, { Component } from 'react';
import '../assets/css/Hot.scss';
export class Hot extends Component {
  render() {
    return (
      <div>
        <section class="article-hot">
          <div class="top-title">
            <span>热门专题</span>
            <span class="collection-change">
              <i class="iconfont iconshuaxin" />
              换一批
            </span>
          </div>
          <div class="recommend-collection">
            <a href="javascript:;" class="tag">
              摄影
            </a>
            <a href="javascript:;" class="tag">
              旅行·在路上
            </a>
            <a href="javascript:;" class="tag">
              手绘
            </a>
            <a href="javascript:;" class="tag">
              @IT·互联网
            </a>
            <a href="javascript:;" class="tag">
              自然科普
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Hot;
