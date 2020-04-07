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
  }
};

export default theme;
