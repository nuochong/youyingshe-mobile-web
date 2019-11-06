import React, { Component } from 'react';
import '../assets/css/components/UserInfo.scss';
export class UserInfo extends Component {
  render() {
    return (
      <div>
        <div class="user-info">
          <div class="background">
            <img src={process.env.PUBLIC_URL + '/img/img-user-background-image-default.a89eb3a3.jpg'} />
          </div>
          <div class="user-content">
            <div class="avatar">
              <img src={process.env.PUBLIC_URL + '/img/7374b10ccc30.webp'} />
            </div>
            <div class="author-info">
              <div class="name">琢磨自留地</div>
              <div class="follow-meta">
                <span>33</span>
                关注
                <span class="last">609</span>
                粉丝
                <span class="last">123.943</span>
                总资产
              </div>
            </div>
            <div class="intro">
              写写画画，精神世界的种子需要一块地来耕种~我已委托“维权骑士”（rightnights.com）为我
              <i class="iconfont ic-show" />
            </div>
            <div class="author-meta">写了9.5万字，获得了1204个喜欢</div>
            <div class="btn-group">
              <button class="follow-btn user-follow-button follow">
                <i class="iconfont iconadd" />
                关注
              </button>
              <button class="btn-money reward-btn">
                赞赏作者
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
