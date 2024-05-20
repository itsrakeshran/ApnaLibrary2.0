import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';



export default function BookCard({data}) {

  return (
    <Card sx={{ maxWidth: 200, maxHeight:400, display:'flex',alignItems:'center', flexDirection:'column', justifyContent:'center' }}>
        <CardMedia sx={{ maxWidth: 200, maxHeight:150 }}
            component="img"
            height="194"
            image="https://source.unsplash.com/300x300?book"
            alt="Paella dish"
        />

        <CardHeader
            title={data.title}
           
            subheader={data.author}
        />

        <Stack direction="row" spacing={1} sx={{marginBottom:1}}>
           
            <Chip label={data.Branch}/>
            {/* <Chip label={data.year} /> */}
        </Stack>

        <Button variant="contained" color="success" sx={{width:200}}>
            {data.quantity>10?"Available":"Only for Reading"}
        </Button>  

    </Card>
  );
}
