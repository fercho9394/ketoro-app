module.exports = {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        '10p': "10px",
        '9p': "9px"
      },
      borderWidth: {
        05: '0.4px',
        1: '1px',
      },
      width: {
        17: '4.5rem',
        18: '4.8rem',
        57: '14.5rem',
        58: '14.8rem',
        30: '7.5rem',
        37: '9.5rem',
        38: '9.6rem',
        39: '9.7rem',
        41: '10.1rem',
        42: '10.2rem',
        43: '10.3rem',
        45: '11.9rem',
        49: '12.5',
        86: '22.5rem',
        87: '22.8rem',
        97: '24.5rem',
        335: '335px'
      },
      height: {
        30: '7.5rem',
        31: '7.9rem',
        50: '500px'
      },
      spacing: {
        23:  '5.5rem',
        25:  '6.5rem',
        81:  '20.5rem',
        82:  '21rem', 
        83:  '21.5rem', 
        50: '50px',
        230: '230px !important',
      },
      fontSize: {
        8: '8px',
        9: '9px',
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        16: '16px',
        17: '17px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        28: '28px',
        29: '29px',
        30: '30px',
        32: '32px',
        45: '45px',
        48: '48px',
        
      },
      colors: {
        colorPrimaryKetoro: 'var(--primary-ketoro)',
        colorWhiteFF: 'var(--colorWFF)',
      },
    },
    screens: {
      sm: { min: '280px', max: '768px' },
      md: { min: '769px', max: '1024px' },
      xl: { min: '1025px', max: '1280px' },
      xl2: { min: '1281px', max: '1536px' },
      xl3: { min: '1537px', max: '2561px' },
    },
    boxShadow: {
      login:      '0px 16px 20px   #1B1D343D   !important',
      cardmenu:   '0px 0px 7px 2px #421DD829   !important',
      filersh:    '0px 0px 7px 2px #0F101E14   !important',
      filterdk:   '0px 0px 7px 2px #00000029   !important',
      buttonse:   '0px 0px 7px 2px #00000080   !important',
      filterord:  '0px 0px 7px 2px #0F101E14   !important',
      buttonZoom: '0px 3px 6px rgba(0, 0, 0, 0.160784) !important'
    },
    borderRadius: {
      borderBtn: '3px  !important',
      border4p: '4px  !important',
      boxer:     '8px  !important',
      documents: '6px  !important',
      rbutton:   '4px  !important',
      windowm:   '12px !important',
      filles:    '10px !important',
      buttof:    '20px !important',
      radius30:  '30px !important',
      fulled:    '50px !important',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}