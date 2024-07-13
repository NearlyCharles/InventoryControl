import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ICardProps {
    header: string;
    mainFocus: number;
    percentage: number;
    descriptionOfPercentage: string;
}

export default function OutlinedCard(props: ICardProps) {
  return (
    <Box sx={{ minWidth: 200, margin: 0 }}>
      <Card sx={{position: 'relative'}} variant="outlined">
            <CardContent style={{marginTop: '2px', minHeight:'200px', marginBottom: '2px'}}>
            <Typography sx={{ fontSize: 14, marginBottom: '20px' }} color="text.secondary" gutterBottom>
                {props.header}
            </Typography>
            <Typography sx={{margin: 0, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} variant='h3'>{props.mainFocus}</Typography>
            <Typography sx={{margin: 0, position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)'}} variant='h5'>{props.percentage}</Typography>
            <Typography sx={{ fontSize: 14, marginBottom: '20px', margin: 0, position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)' }} color="text.secondary" gutterBottom>
                {props.descriptionOfPercentage}
            </Typography>
            </CardContent>
      </Card>
    </Box>
  );
}