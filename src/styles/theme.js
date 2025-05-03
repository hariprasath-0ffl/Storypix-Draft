const theme = {
  colors: {
    primary: {
      100: '#EDE5FE',
      200: '#D4C0FD',
      300: '#B89AFC',
      400: '#A17AFB',
      500: '#8252F2', // Main primary color
      600: '#6839D3',
      700: '#5025B5',
      800: '#391997',
      900: '#28107F'
    },
    secondary: {
      100: '#D7F5FF',
      200: '#A6E7FC',
      300: '#75D6F8',
      400: '#4DC3F3',
      500: '#22AEEF', // Main secondary color
      600: '#1095D8',
      700: '#077BC1',
      800: '#0463AB',
      900: '#014F8F'
    },
    accent: {
      100: '#FFF3E0',
      200: '#FFE0B2',
      300: '#FFCC80',
      400: '#FFB74D',
      500: '#FFA21A', // Main accent color
      600: '#FF8F00',
      700: '#FF6F00',
      800: '#E65100',
      900: '#BF360C'
    },
    success: {
      100: '#E6F7EC',
      200: '#CCEED9',
      300: '#9ADBB0',
      400: '#6DC888',
      500: '#3AB55F', // Main success color
      600: '#2E9D4F',
      700: '#23853F',
      800: '#196C2F',
      900: '#0E5420'
    },
    warning: {
      100: '#FFF8E6',
      200: '#FFEFCC',
      300: '#FFDF99',
      400: '#FFD066',
      500: '#FFC033', // Main warning color
      600: '#FFB000',
      700: '#E59D00',
      800: '#CC8A00',
      900: '#A67100'
    },
    error: {
      100: '#FFEAEA',
      200: '#FFCFCF',
      300: '#FFA8A8',
      400: '#FF8080',
      500: '#FF5252', // Main error color
      600: '#FF0000',
      700: '#DF0000',
      800: '#C60000',
      900: '#A60000'
    },
    neutral: {
      100: '#F8F9FA',
      200: '#E9ECEF',
      300: '#DEE2E6',
      400: '#CED4DA',
      500: '#ADB5BD',
      600: '#6C757D',
      700: '#495057',
      800: '#343A40',
      900: '#212529'
    },
    white: '#FFFFFF',
    black: '#000000'
  },
  
  fonts: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace"
  },
  
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  
  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    md: '1rem',       // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem',  // 72px
  },
  
  space: {
    0: '0',
    1: '0.25rem',     // 4px
    2: '0.5rem',      // 8px
    3: '0.75rem',     // 12px
    4: '1rem',        // 16px
    5: '1.5rem',      // 24px
    6: '2rem',        // 32px
    7: '2.5rem',      // 40px
    8: '3rem',        // 48px
    9: '4rem',        // 64px
    10: '5rem',       // 80px
    11: '6rem',       // 96px
    12: '8rem'        // 128px
  },
  
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px'
  },
  
  radii: {
    none: '0',
    sm: '0.25rem',     // 4px
    md: '0.5rem',      // 8px
    lg: '0.75rem',     // 12px
    xl: '1rem',        // 16px
    '2xl': '1.5rem',   // 24px
    full: '9999px'
  },
  
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.14)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none'
  },
  
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800
  },
  
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    },
    duration: {
      fastest: '50ms',
      faster: '100ms',
      fast: '150ms',
      normal: '200ms',
      slow: '300ms',
      slower: '400ms',
      slowest: '500ms'
    }
  }
};

export default theme;