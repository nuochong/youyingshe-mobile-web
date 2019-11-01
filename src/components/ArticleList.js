import React, { Component } from 'react';
import '../assets/css/ArticleList.scss';
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
        <ul class="flow-list-sort">
          <li class="active">最新发布</li>
          <li class="">最新评论</li>
          <li class="">热门</li>
        </ul>
        <ul class="flow-list-ul">
          {this.state.list.map((value, key) => {
            return (
              <li class="flow-list-li" key="key">
                <Link to={`/article/`}>
                <div class="article">
                  <img class="wrap-img" src={process.env.PUBLIC_URL + '/img/4646413-d7ce3a81f2ad1631.webp'} />
                  <div class="title">吐血整理写给新手的水彩颜料选购指南（干货）</div>
                  <div class="abstract">
                    写完给新手的水彩画笔选购指南后，我一直想再写一篇关于水彩颜料的选购指南，但迟迟不能下笔，因为水彩颜料实在复杂的多，...
                  </div>
                </div>
                </Link>
                <div class="oneline">
                  <span>
                    <i class="iconfont iconjewel" />
                    5409
                  </span>
                  <span>
                    <i class="iconfont icon8" />
                    5409
                  </span>
                  <span>
                    <i class="iconfont iconhome_ico_like-" />
                    5409
                  </span>
                  <span>
                    <i class="iconfont iconmoneynew" />
                    5409
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
        <div class="load-more">
          加载更多
          <i class="iconfont icondown" />
        </div>
      </div>
    );
  }
}

export default ArticleList;
