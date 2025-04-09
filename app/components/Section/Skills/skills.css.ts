import { style } from '@vanilla-extract/css'

export const container = style({
  boxShadow: '0px 4px 10px 0px #9E9E9E',
  padding: '60px 0px',
  borderRadius: '10px',
  marginBottom: '10px',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '40px 0px',
      margin: '0px 20px'
    }
  }
})

export const imageContainer = style({
  backgroundColor: 'white',
  display: 'grid',
  gap: '50px',
  alignItems: 'center',
  justifyContent: 'center',
  gridTemplateColumns: 'repeat(6,50px)',
  gridTemplateRows: 'repeat(2, 50px)',
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: 'repeat(3,40px)',
      gridTemplateRows: 'repeat(4, 40px)'
    }
  }
})