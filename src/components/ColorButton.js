import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';


const ColorButton1 = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

function ColorButton(props) {
    return (
            <ColorButton1 variant="contained">{props.children}</ColorButton1>
    )
}

export default ColorButton
