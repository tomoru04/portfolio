import { vars } from '@/styles/vars.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  padding: '0px 60px',
  height: '100%',
})

export const profile = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '120px 0px 0px 0px',
})

export const name = style({
  fontSize: vars.fontSize['2xl'],
  color: vars.color.primary,
  fontWeight: 'bold',
  textDecoration: 'none'
})

export const job = style({
  fontSize: vars.fontSize.l,
  color: vars.color.primary,
  marginBottom: '40px'
})

export const navigation = style({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  rowGap: '24px'
})

export const copyrights = style({
  marginTop: 'auto',
  marginBottom: '30px'
})