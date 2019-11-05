import React, { Component } from 'react';
import '../assets/css/view/AdmirePay.scss';
import { Checkbox, Radio } from 'antd-mobile';
import { Link } from 'react-router-dom';

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

export class ArticleBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //isShowStyle: false
    };
  }
  onChange = val => {
    console.log(val);
  };

  showStyle = () => {
    // this.setState({
    //   isShowStyle: !this.state.isShowStyle
    // });
  };
  render() {
    const data = [{ value: 0, label: 'Ph.D.' }, { value: 1, label: 'Bachelor' }, { value: 2, label: 'College diploma' }];
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
            <div class="checkbox alipay">
              <i class="iconfont ic-alipay pay-icon iconzhifubao2"></i>
              <span>支付宝支付</span>
              {/* <CheckboxItem onChange={() => this.onChange('支付宝')}></CheckboxItem> */}
              {/* <i class="iconfont ic-selected on"></i> */}
              <div class="design-radio">
                <input id="item1" type="radio" name="item" value="选项一" />
                <label for="item1"></label>
              </div>
            </div>
            <div class="checkbox wechat">
              <i class="iconfont ic-wechat-pay pay-icon iconweixinzhifu2"></i>
              <span>微信支付</span>
              {/* <i class="iconfont ic-selected off"></i> */}
              <div class="design-radio">
                <input id="item2" type="radio" name="item" value="选项一" />
                <label for="item2"></label>
              </div>
            </div>
          </div>
          <button class="submit">确认支付</button>
        </div>
      </div>
    );
  }
}

export default ArticleBody;
