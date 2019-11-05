import React, { Component } from 'react';
import '../assets/css/components/SerialHot.scss';
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
    // console.log('this.state.isShowStyle :', this.state.isShowStyle);
  };
  render() {
    return (
      <div>
        {/* 热门排行 */}
        <div class="recommend-novels-trending">
          <div class="top-title">
            <span>热门排行</span>
          </div>
          <div class="banner-group">
            {/* <a href="javascript:;" class="banner"> */}
            <Link to={`/week-hot/`} class="banner">
              <img src="//cdn2.jianshu.io/asimov/src/assets/image/mobile/serial_story/banner_weekly.218ab36e.png" alt="" />
            </Link>
            {/* </a> */}

            {/* <a href="javascript:;" class="banner"> */}
            <Link to={`/special-offer/`} class="banner">
              <img src="//cdn2.jianshu.io/asimov/src/assets/image/mobile/serial_story/banner_bargain_books.0b487e77.png" alt="" />
            </Link>
            {/* </a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleBody;
