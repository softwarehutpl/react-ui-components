const theme: { [key: string]: { [key: string]: { [key: string]: string } } } = {
  colors: {
    primary: {
      base: '#000000',
      light: '#ffffff',
      dark: '#a8b3bd',
    },
    secondary: {
      base: '#3690e3',
      light: '#75b0e6',
      dark: '#034d91',
    },
    error: {
      base: '#f44336',
      light: '#f56c62',
      dark: '#a1140a',
    },
    warning: {
      base: '#faa72d',
      light: '#ffc36b',
      dark: '#995b00',
    },
    info: {
      base: '#7979d4',
      light: '#9797d1',
      dark: '#4c4cc7',
    },
    success: {
      base: '#4caf50',
      light: '#88c28a',
      dark: '#124f14',
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
