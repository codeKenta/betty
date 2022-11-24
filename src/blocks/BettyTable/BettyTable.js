/* eslint-disable react/prop-types */
import * as React from 'react'
import { Media, MediaReveal } from '@noaignite/oui'
import { styled } from '@mui/system'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





const ContentRoot = styled('section', {
  name: 'Content',
  slot: 'Root',
})({
  margin: 'var(--cia-section-spacing) 0',
})

const HeroMediaReveal = styled(MediaReveal, {
  name: 'Hero',
  slot: 'MediaReveal',
})(({ theme }) => ({
  ...theme.mixins.absolute(0),
  zIndex: -1,
  '& *:not(style)': {
    height: '100%',
  },
}))

const HeroHeading = styled('h1', {
  name: 'Hero',
  slot: 'Heading',
})(({ theme }) => ({
  ...theme.typography.h1,
  margin: 0,
  textAlign: 'center',
  color: 'white',
  marginBottom: theme.spacing(4)
}))

function BettyTable(props) {
  const { title, betters, mediaProps, renderIndex } = props


  return (
    <ContentRoot>

       {mediaProps && (
        <HeroMediaReveal>
          <Media
            {...(mediaProps?.component === 'video'
              ? {
                  autoPlay: true,
                  muted: true,
                  loop: true,
                  playsInline: true,
                }
              : { alt: '' })}
            {...mediaProps}
            priority={renderIndex === 0}
          />
        </HeroMediaReveal>
      )}

        <HeroHeading>{title}</HeroHeading>

        <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold'}} align="left">Bettare</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="left">1-poängare</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="left" >3-poängare</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="left">15-poäng</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="left">total</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {betters.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.correctWinner}</TableCell>
              <TableCell align="left">{row.correctWinnerAndResult}</TableCell>
              <TableCell align="left">{row.correctFinale}</TableCell>
              <TableCell align="left">{row.total}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </ContentRoot>
  )
}



export default BettyTable
