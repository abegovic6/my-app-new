import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CustomizedDialogs from './dialog';
import Typography from '@mui/material/Typography';



export default function OutlinedCard({ word, pronunciation, typeword, text }) {
    let myArray = pronunciation.split(".");

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    const card = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {word}
                </Typography>
                <Typography variant="h5" component="div">
                    {myArray.map((p, index) => (
                        <>
                            {p}{p != myArray.slice(-1) && (
                                <>
                                    {bull}
                                </>

                            )}
                        </>
                    ))}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {typeword}
                </Typography>
                <Typography variant="body2">
                    {text}
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <CardActions>
                    <CustomizedDialogs buttonText={"Learn more"} text={text} title={word}/>
                </CardActions>
            </CardActions>
        </React.Fragment>
    );

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}
