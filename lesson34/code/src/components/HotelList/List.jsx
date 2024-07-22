import { Grid } from '@mui/material';
import { Card } from './Card.jsx';
import { useSelector } from 'react-redux';
import { selectHotels } from '../../store';

export function List() {
  const hotels = useSelector(selectHotels);

  return (
    <Grid container spacing={2} justifyContent="center">
      {hotels.map((hotel) => (
        <Grid item xs={12} sm={6} md={4} key={hotel.id}>
          <Card hotel={hotel} />
        </Grid>
      ))}
    </Grid>
  );
}
