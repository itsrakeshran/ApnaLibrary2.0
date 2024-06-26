import * as React from 'react';
import { styled } from '@mui/material/styles';
import {IconButton, Typography} from '@mui/material'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import Avatar from '@mui/material/Avatar';


import { red } from '@mui/material/colors';


export default function ProfileCard({name,role}) {

  return (
    <Card  sx={{ maxWidth: 345, maxHeight:125}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          </Avatar>
        }
        title={ <Typography variant='h6'>Hii {name}</Typography>}
        subheader={role}
      />
    </Card>
  );
}
