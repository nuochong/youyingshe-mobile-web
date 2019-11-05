import React, { Component } from 'react';
import '../assets/css/components/SerialBuy.scss';
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
export class ArticleBody extends Component {
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

  render() {
    return (
      <div>
        {/* 底部购买 */}
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

export default ArticleBody;
