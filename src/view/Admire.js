import React, { Component } from 'react';
import '../assets/css/view/Admire.scss';
import { Link } from 'react-router-dom';
export class ArticleBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowInput: true
    };
  }
  showInput = () => {
    this.setState({
      isShowInput: !this.state.isShowInput
    });
  };
  render() {
    return (
      <div>
        <div id="reward-panel">
          <div class="user-panel">
            <div class="background">
              <Link to={`/article/`}>
                <button class="close-btn">
                  <i class="iconfont ic-close iconhebingxingzhuang"></i>
                </button>
              </Link>
            </div>
            <div class="author">
              <div class="avatar">
                <img src="https://upload.jianshu.io/users/upload_avatars/2259045/5d2e817c-f862-4c4f-b8c0-83ce96e8331b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180/format/webp" />
              </div>
              <h3>麦大人</h3>
              <p>世间所有的相遇，都是久别重逢！</p>
            </div>
          </div>
          {/* 固定 */}
          <div class="pay" className={['pay ', !this.state.isShowInput ? 'hide' : ''].join('')}>
            <div class="btn-group">
              <Link to={`/admire-pay/`}>
                <button class="btn btn-left">
                  2<span> 颗</span>
                  <div class="amount">¥2.00</div>
                </button>
              </Link>
              <button class="btn btn-middle">
                5<span> 颗</span>
                <div class="amount">¥5.00</div>
              </button>
              <button class="btn btn-right">
                10<span> 颗</span>
                <div class="amount">¥10.00</div>
              </button>
            </div>
            <div class="btn-group">
              <button class="btn btn-left">
                20<span> 颗</span>
                <div class="amount">¥20.00</div>
              </button>
              <button class="btn btn-middle">
                50<span> 颗</span>
                <div class="amount">¥50.00</div>
              </button>
              <button class="btn btn-right">
                100<span> 颗</span>
                <div class="amount">¥100.00</div>
              </button>
            </div>
            <button class="custom-amount" onClick={this.showInput}>
              其它数量
            </button>
          </div>
          {/* 自定义 */}
          <div class="custom hide" className={['custom ', this.state.isShowInput ? 'hide' : ''].join('')}>
            <div class="close-bar">
              <button class="close" onClick={this.showInput}>
                ×
              </button>
            </div>
            <label>
              数量: <input placeholder="可输入 1~200 颗" type="number" />
              <h6>颗</h6>
            </label>
            <Link to={`/admire-pay/`}>
              <button class="btn btn-enter">确认支付 ¥2</button>
            </Link>
          </div>
          <div class="reward-tips">安全提示：您正在对其他用户进行赞赏，一但支付，不可返还。请谨慎使用，谨防诈骗。</div>
        </div>
      </div>
    );
  }
}

export default ArticleBody;
