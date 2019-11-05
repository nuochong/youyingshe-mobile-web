import React, { Component } from 'react';
import '../assets/css/view/Login.scss';
import { Link } from 'react-router-dom';
export class Login extends Component {
  render() {
    return (
      <div>
        <section>
          <div class="drawer sign-in-drawer">
            <div class="header">
              <h3>登录简书</h3>
              <Link to={`/home/`}>
                <button class="close">
                  <i class="iconfont iconhebingxingzhuang" />
                </button>
              </Link>
            </div>
            <form>
              <div class="input-wrap">
                <i class="iconfont iconuser" />
                <input placeholder="手机或邮箱" type="text" />
              </div>
              <div class="input-wrap">
                <i class="iconfont iconmima" />
                <input placeholder="密码" type="password" />
              </div>
              <button type="button">登录</button>
            </form>
            <div class="more-sign">
              <h6>社交帐号直接登录</h6>
              <ul>
                <li>
                  <a href="javascript:;" class="qq">
                    <i class="iconfont iconqq" />
                  </a>
                </li>
                <li>
                  <a class="weibo">
                    <i class="iconfont iconweibo" />
                  </a>
                </li>
                <li>
                  <a href="javascript:;" class="douban">
                    <i class="iconfont icondouban" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
