import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './photos/card.css';

import mlImage from './photos/a.jpg';
import aiImage from './photos/a.jpg'; 
import csImage from './photos/a.jpg'; 
import ccImage from './photos/a.jpg';
import bdImage from './photos/a.jpg';


export default function MediaCard() {
  return (
     <div className='cou'>
         
         <marquee  behavior="alternate" direction="right">         
          
    <h1 className="c">User Profile</h1>
    </marquee> 

    <div className="media-container">
      <div className="card-wrapper">
      <Card className="card-item">
        <CardMedia
          sx={{ height: 140 }}
          image={mlImage}
          title="machine learning"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          CAYENA  
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <br></br><br></br>
          ROLE: USER<br></br><br></br>
          BUISNESS: FASHION<br></br><br></br>
            WORK STATUS: COMPLETED<br></br>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">PROFILE</Button>
          <Link to="/chart">
          <Button size="small">STATUS</Button>
          </Link>
        </CardActions>
      </Card>
</div>
<div className="card-wrapper">
<Card className="card-item">
  <CardMedia
    sx={{ height: 140 }}
    image={mlImage}
    title="machine learning"
    />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    CALIS
    </Typography>
    <Typography variant="body2" color="text.secondary">
    <br></br><br></br>
    ROLE: USER<br></br><br></br>
    BUISNESS: FASHION<br></br><br></br>
      WORK STATUS: COMPLETED<br></br>
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">PROFILE</Button>
    <Link to="/chart">
    <Button size="small">STATUS</Button>
    </Link>
  </CardActions>
</Card>
</div>
<div className="card-wrapper">
<Card className="card-item">
  <CardMedia
    sx={{ height: 140 }}
    image={mlImage}
    title="machine learning"
    />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    REN  
    </Typography>
    <Typography variant="body2" color="text.secondary">
    <br></br><br></br>
    ROLE: USER<br></br><br></br>
    BUISNESS: FASHION<br></br><br></br>
      WORK STATUS: COMPLETED<br></br>
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">PROFILE</Button>
    <Link to="/chart">
    <Button size="small">STATUS</Button>
    </Link>
  </CardActions>
</Card>
</div>
<div className="card-wrapper">
<Card className="card-item">
  <CardMedia
    sx={{ height: 140 }}
    image={mlImage}
    title="machine learning"
    />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    MIYUKI
    </Typography>
    <Typography variant="body2" color="text.secondary">
    <br></br><br></br>
    ROLE: USER<br></br><br></br>
    BUISNESS: FASHION<br></br><br></br>
      WORK STATUS: COMPLETED<br></br>
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">PROFILE</Button>
    <Link to="/chart">
    <Button size="small">STATUS</Button>
    </Link>
  </CardActions>
</Card>
</div>
<div className="card-wrapper">
<Card className="card-item">
  <CardMedia
    sx={{ height: 140 }}
    image={mlImage}
    title="machine learning"
    />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    TATSUYA
    </Typography>
    <Typography variant="body2" color="text.secondary">
    <br></br><br></br>
    ROLE: USER<br></br><br></br>
    BUISNESS: FASHION<br></br><br></br>
      WORK STATUS: COMPLETED<br></br>
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">PROFILE</Button>
    <Link to="/chart">
    <Button size="small">STATUS</Button>
    </Link>
  </CardActions>
</Card>
</div>
<div className="card-wrapper">
<Card className="card-item">
  <CardMedia
    sx={{ height: 140 }}
    image={mlImage}
    title="machine learning"
    />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    ERIKA 
    </Typography>
    <Typography variant="body2" color="text.secondary">
    <br></br><br></br>
    ROLE: USER<br></br><br></br>
    BUISNESS: FASHION<br></br><br></br>
      WORK STATUS: COMPLETED<br></br>
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">PROFILE</Button>
    <Link to="/chart">
    <Button size="small">STATUS</Button>
    </Link>
  </CardActions>
</Card>
</div>
<div className="card-wrapper">
<Card className="card-item">
  <CardMedia
    sx={{ height: 140 }}
    image={mlImage}
    title="machine learning"
    />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    MITSUKI  
    </Typography>
    <Typography variant="body2" color="text.secondary">
    <br></br><br></br>
    ROLE: USER<br></br><br></br>
    BUISNESS: FASHION<br></br><br></br>
      WORK STATUS: COMPLETED<br></br>
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">PROFILE</Button>
    <Link to="/chart">
    <Button size="small">STATUS</Button>
    </Link>
  </CardActions>
</Card>
</div>
<div className="card-wrapper">
<Card className="card-item">
  <CardMedia
    sx={{ height: 140 }}
    image={mlImage}
    title="machine learning"
    />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    CAYENA  
    </Typography>
    <Typography variant="body2" color="text.secondary">
    <br></br><br></br>
    ROLE: USER<br></br><br></br>
    BUISNESS: FASHION<br></br><br></br>
      WORK STATUS: COMPLETED<br></br>
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">PROFILE</Button>
    <Link to="/chart">
    <Button size="small">STATUS</Button>
    </Link>
  </CardActions>
</Card>
</div>
<div className="card-wrapper">
<Card className="card-item">
  <CardMedia
    sx={{ height: 140 }}
    image={mlImage}
    title="machine learning"
    />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    CAYENA  
    </Typography>
    <Typography variant="body2" color="text.secondary">
    <br></br><br></br>
    ROLE: USER<br></br><br></br>
    BUISNESS: FASHION<br></br><br></br>
      WORK STATUS: COMPLETED<br></br>
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">PROFILE</Button>
    <Link to="/chart">
    <Button size="small">STATUS</Button>
    </Link>
  </CardActions>
</Card>
</div>
<div className="card-wrapper">
<Card className="card-item">
  <CardMedia
    sx={{ height: 140 }}
    image={mlImage}
    title="machine learning"
    />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    CAYENA  
    </Typography>
    <Typography variant="body2" color="text.secondary">
    <br></br><br></br>
    ROLE: USER<br></br><br></br>
    BUISNESS: FASHION<br></br><br></br>
      WORK STATUS: COMPLETED<br></br>
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">PROFILE</Button>
    <Link to="/chart">
    <Button size="small">STATUS</Button>
    </Link>
  </CardActions>
</Card>
</div>
<div className="card-wrapper">
<Card className="card-item">
  <CardMedia
    sx={{ height: 140 }}
    image={mlImage}
    title="machine learning"
    />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    CAYENA  
    </Typography>
    <Typography variant="body2" color="text.secondary">
    <br></br><br></br>
    ROLE: USER<br></br><br></br>
    BUISNESS: FASHION<br></br><br></br>
      WORK STATUS: COMPLETED<br></br>
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">PROFILE</Button>
    <Link to="/chart">
    <Button size="small">STATUS</Button>
    </Link>
  </CardActions>
</Card>
</div>
<div className="card-wrapper">
<Card className="card-item">
  <CardMedia
    sx={{ height: 140 }}
    image={mlImage}
    title="machine learning"
    />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    CAYENA  
    </Typography>
    <Typography variant="body2" color="text.secondary">
    <br></br><br></br>
    ROLE: USER<br></br><br></br>
    BUISNESS: FASHION<br></br><br></br>
      WORK STATUS: COMPLETED<br></br>
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">PROFILE</Button>
    <Link to="/chart">
    <Button size="small">STATUS</Button>
    </Link>
  </CardActions>
</Card>
</div>
<div className="card-wrapper">
<Card className="card-item">
  <CardMedia
    sx={{ height: 140 }}
    image={mlImage}
    title="machine learning"
    />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    CAYENA  
    </Typography>
    <Typography variant="body2" color="text.secondary">
    <br></br><br></br>
    ROLE: USER<br></br><br></br>
    BUISNESS: FASHION<br></br><br></br>
      WORK STATUS: COMPLETED<br></br>
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">PROFILE</Button>
    <Link to="/chart">
    <Button size="small">STATUS</Button>
    </Link>
  </CardActions>
</Card>
</div>
<div className="card-wrapper">
<Card className="card-item">
  <CardMedia
    sx={{ height: 140 }}
    image={mlImage}
    title="machine learning"
    />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    CAYENA  
    </Typography>
    <Typography variant="body2" color="text.secondary">
    <br></br><br></br>
    ROLE: USER<br></br><br></br>
    BUISNESS: FASHION<br></br><br></br>
      WORK STATUS: COMPLETED<br></br>
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">PROFILE</Button>
    <Link to="/chart">
    <Button size="small">STATUS</Button>
    </Link>
  </CardActions>
</Card>
</div>
<div className="card-wrapper">
<Card className="card-item">
  <CardMedia
    sx={{ height: 140 }}
    image={mlImage}
    title="machine learning"
    />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    CAYENA  
    </Typography>
    <Typography variant="body2" color="text.secondary">
    <br></br><br></br>
    ROLE: USER<br></br><br></br>
    BUISNESS: FASHION<br></br><br></br>
      WORK STATUS: COMPLETED<br></br>
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">PROFILE</Button>
    <Link to="/chart">
    <Button size="small">STATUS</Button>
    </Link>
  </CardActions>
</Card>
</div>

<br></br>

      
</div>


</div>

);
}