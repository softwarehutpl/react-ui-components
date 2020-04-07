const theme: { [key: string]: { [key: string]: { [key: string]: string } } } = {
  colors: {
    primary: {
      base: '#000000',
      light: '#ffffff',
      dark: '#f6f6f6',
    },
    secondary: {
      base: '#2196f3',
      light: '#bbdefb',
      dark: '#0d47a1',
    },
    error: {
      base: '#f44336',
      light: '#ef9a9a',
      dark: '#b71c1c',
    },
    warning: {
      base: '#ffc107',
      light: '#ffe082',
      dark: '#ff8f00',
    },
    info: {
      base: '#ab47bc',
      light: '#e1bee7',
      dark: '#7b1fa2',
    },
    success: {
      base: '#66bb6a',
      light: '#c8e6c9',
      dark: '#388e3c',
    },
    disabled: {
      base: '#d9d9d9',
      light: '#f0eded',
      dark: '#8c8989',
    },
  },
  // TODO: change it in dedicated task for that (change ease-out for example and add more options)
  transitions: {
    all: {
      fast: 'all 0.5s ease-out',
      mid: 'all 2s ease-out',
      slow: 'all 4s ease-out',
    },
    background: {
      fast: 'background-color 0.5s ease-out',
      mid: 'background-color 2s ease-out',
      slow: 'background-color 4s ease-out',
    },
    fontColor: {
      fast: 'color 0.5s ease-out',
      mid: 'color 2s ease-out',
      slow: 'color 4s ease-out',
    }
  },
  // TODO: just suggestions, change it in dedicated task for that
  boxShadows: {
    leftShadow: {
      small: `&::before {
        position: absolute;
        content: "";
        z-index: -1;
        bottom: 15px;
        left: 8px;
        top: 80%;
        height: 3px;
        width: 25%;
        background: #777;
        -webkit-box-shadow: 0 18px 15px #486685;
        -moz-box-shadow: 0 18px 15px #486685;
        box-shadow: 0 18px 15px #486685;
        -webkit-transform: rotate(-4deg);
        -moz-transform: rotate(-4deg);
        -o-transform: rotate(-4deg);
        -ms-transform: rotate(-4deg);
        transform: rotate(-4deg);
      }`,
      medium: `&::before {
        position: absolute;
        content: "";
        z-index: -1;
        bottom: 15px;
        left: 8px;
        top: 80%;
        height: 3px;
        width: 50%;
        background: #777;
        -webkit-box-shadow: 0 18px 15px #486685;
        -moz-box-shadow: 0 18px 15px #486685;
        box-shadow: 0 18px 15px #486685;
        -webkit-transform: rotate(-4deg);
        -moz-transform: rotate(-4deg);
        -o-transform: rotate(-4deg);
        -ms-transform: rotate(-4deg);
        transform: rotate(-4deg);
      }`,
    },
    rightShadow: {
      small: `&::before {
        position: absolute;
        content: "";
        bottom: 15px;
        right: 8px;
        top: 80%;
        width: 25%;
        -webkit-box-shadow: 0 18px 15px #486685;
        -moz-box-shadow: 0 18px 15px #486685;
        box-shadow: 0 18px 15px #486685;
        -webkit-transform: rotate(4deg);
        -moz-transform: rotate(4deg);
        -o-transform: rotate(4deg);
        -ms-transform: rotate(4deg);
        transform: rotate(4deg);
      }`,
      medium: `&::before {
        position: absolute;
        content: "";
        bottom: 15px;
        right: 8px;
        top: 80%;
        width: 50%;
        height: 3px;
        -webkit-box-shadow: 0 18px 15px #486685;
        -moz-box-shadow: 0 18px 15px #486685;
        box-shadow: 0 18px 15px #486685;
        -webkit-transform: rotate(4deg);
        -moz-transform: rotate(4deg);
        -o-transform: rotate(4deg);
        -ms-transform: rotate(4deg);
        transform: rotate(4deg);
      }`,
    },
    roundedShadow: {
      small: `&::before {
        position: absolute;
        content: "";
        z-index: -1;
        bottom: 15px;
        left: 8px;
        top: 70%;
        height: 3px;
        width: 25%;
        -webkit-box-shadow: 0 18px 15px #cecece;
        -moz-box-shadow: 0 18px 15px #cecece;
        box-shadow: 0 18px 15px #cecece;
        -webkit-transform: rotate(-10deg);
        -moz-transform: rotate(-10deg);
        -o-transform: rotate(-10deg);
        -ms-transform: rotate(-10deg);
        transform: rotate(-10deg);
      };
      &::after {
        position: absolute;
        content: "";
        z-index: -1;
        bottom: 15px;
        right: 8px;
        top: 70%;
        height: 3px;
        width: 25%;
        -webkit-box-shadow: 0 18px 15px #cecece;
        -moz-box-shadow: 0 18px 15px #cecece;
        box-shadow: 0 18px 15px #cecece;
        -webkit-transform: rotate(10deg);
        -moz-transform: rotate(10deg);
        -o-transform: rotate(10deg);
        -ms-transform: rotate(10deg);
        transform: rotate(10deg);
      }`,
      medium: `&::before {
        position: absolute;
        content: "";
        z-index: -1;
        bottom: 15px;
        left: 8px;
        top: 70%;
        height: 3px;
        width: 25%;
        -webkit-box-shadow: 0 18px 15px #cecece;
        -moz-box-shadow: 0 18px 15px #cecece;
        box-shadow: 0 18px 15px #cecece;
        -webkit-transform: rotate(-10deg);
        -moz-transform: rotate(-10deg);
        -o-transform: rotate(-10deg);
        -ms-transform: rotate(-10deg);
        transform: rotate(-10deg);
      };
      &::after {
        position: absolute;
        content: "";
        z-index: -1;
        bottom: 15px;
        right: 8px;
        top: 70%;
        height: 3px;
        width: 25%;
        -webkit-box-shadow: 0 18px 15px #cecece;
        -moz-box-shadow: 0 18px 15px #cecece;
        box-shadow: 0 18px 15px #cecece;
        -webkit-transform: rotate(10deg);
        -moz-transform: rotate(10deg);
        -o-transform: rotate(10deg);
        -ms-transform: rotate(10deg);
        transform: rotate(10deg);
      }`,
    }
  }
};

export default theme;
