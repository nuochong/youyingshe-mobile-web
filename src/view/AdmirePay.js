import React, { Component } from 'react';
import '../assets/css/view/AdmirePay.scss';
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
  };
  render() {
    return (
      <div>
        <div id="web-pay">
          <div class="info">
            <div class="amount">
              2.00<span>元</span>
            </div>
            <div class="desc">张一山喊话杨紫，为什么不让我演韩商言？杨紫的回答暗藏玄机</div>
          </div>
          <div class="payment">
            <div class="checkbox alipay iconzhifubao1">
              <i class="iconfont ic-alipay pay-icon"></i>
              <span>支付宝支付</span>
              <i class="iconfont ic-selected on"></i>
            </div>
            <div class="checkbox wechat iconweixinzhifu">
              <i class="iconfont ic-wechat-pay pay-icon"></i>
              <span>微信支付</span>
              <i class="iconfont ic-selected off"></i>
            </div>
          </div>
          <button class="submit">确认支付</button>
        </div>
      </div>
    );
  }
}

export default ArticleBody;
