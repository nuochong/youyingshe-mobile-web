import React, { Component } from 'react';
import '../assets/css/Download.scss';
import styled from 'styled-components';
const DownloadGuide = styled.div`
position: relative;
background-color: transparent;
height: 230px;
&:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  background-image: -webkit-gradient(linear, left bottom, left top, from(hsla(0, 0%, 100%, 0)), to(#fff));
  background-image: -webkit-linear-gradient(bottom, hsla(0, 0%, 100%, 0), #fff);
  background-image: -o-linear-gradient(bottom, hsla(0, 0%, 100%, 0), #fff);
  background-image: linear-gradient(0deg, hsla(0, 0%, 100%, 0), #fff);
  top: 10px;
}
&:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  top: 0;
  background-repeat: no-repeat;
  background-position: bottom;
  -webkit-background-size: contain;
  background-size: contain;
  background-image: url(${process.env.PUBLIC_URL}/img/download-guide.1cef6fa3.png);
  z-index: -1;
`;
export class Download extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>
        <DownloadGuide>
          <div class="download-guide">
            <a href="" class="download">
              下载简书，创作你的创作
            </a>
          </div>
        </DownloadGuide>
      </div>
    );
  }
}

export default Download;
