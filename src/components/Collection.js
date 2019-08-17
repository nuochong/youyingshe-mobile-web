import React, { Component } from 'react';
import '../assets/css/Collection.scss';
export class Collection extends Component {
  render() {
    return (
      <div>
        <section class="collection-container">
          <div class="collection-info">
            <img
              src="https://upload.jianshu.io/collections/images/256739/461792731394569594.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144"
              alt="avatar"
              class="avatar"
            />
            <div class="summary">
              <div class="name">婚姻育儿</div>
              <div class="desc">
                <a href="" class="">
                  简书
                </a>
                编，18.7万篇文章，95.3万人关注
              </div>
              <div class="intro">
                婚姻是细水长流，育儿是自我修行。婚姻育儿专题投稿须知：1、文章内容与婚姻育儿无关拒收。2、排版整齐，
                <i class="iconfont ic-show" />
              </div>
              <button class="follow-btn collection-follow-button follow">
                <i class="iconfont ic-follow" />
                关注
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Collection;
