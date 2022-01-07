import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Paper from '../Components/img/paper.png';
import Rock from '../Components/img/rock.jpg';
import Scissors from '../Components/img/scissors.png'
export default function Game() {
    return (
    <div className='section'>     
      <div className='img'>
       <img src={Rock}/>
       <img src={Paper}/>
       <img src={Scissors}/>
      </div>
      <div className='btns'>
       <ButtonGroup variant="contained" aria-label="outlined primary button group">
         <Button>One</Button>
         <Button>Two</Button>
         <Button>Three</Button>
       </ButtonGroup>
       </div>
    </div>
    )
}
