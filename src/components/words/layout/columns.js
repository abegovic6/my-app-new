import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import OutlinedCard from '../outlinedcard/outlinedcard'

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        p: 1,
        m: 1,
        borderRadius: 1,
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function GridTemplateColumns({ cardsArray }) {
  return (
    <div style={{ width: '100%' }}>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)'
      }}>
        {cardsArray.map((card, index) => { 
         return <OutlinedCard
            key={index}
            pronunciation={card.pronunciation}
            word={card.word}
            text={card.text}
            typeword={card.typeword}>
          </OutlinedCard>
        })}
      </Box>
    </div>
  );
}
