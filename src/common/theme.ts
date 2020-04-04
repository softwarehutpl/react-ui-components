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
  }
};

export default theme;
