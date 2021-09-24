import React from "react";
import {
  Container,
  Grid,
  Button,
  Typography,
  Hidden,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  CardMedia,
  CardHeader,
  Avatar,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import one from "../Images/pexels-daria-shevtsova-1095550.jpg";
import two from "../Images/pexels-lisa-1279330.jpg";
import three from "../Images/pexels-nerfee-mirandilla-3186654.jpg";
import four from "../Images/pexels-william-choquette-2641886.jpg";

import Home from "@material-ui/icons/Home";
const useStyles = makeStyles((theam) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theam.palette.grey[200],
    paddingTop: theam.spacing(5),
  },
}));

export default function CardEx() {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item sm={3}>
            <Card>
              <CardHeader
                avatar={<Avatar> AH</Avatar>}
                title="Abhijeet Hore"
                subheader="posted on 23-09-2021"
                action={
                  <IconButton>
                    <Home color="primary" />
                  </IconButton>
                }
              />
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={one}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="h5">Post Title</Typography>
                  <Typography variant="subtitle1">
                    Lorem rhh gdhd re eñeajhtruwuwru uru rry ha ytr
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button>Read More</Button>
              </CardActions>
            </Card>
          </Grid>


          {/* second card */}

          <Grid item sm={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={two}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="h5">Post Title</Typography>
                  <Typography variant="subtitle1">
                    Lorem rhh gdhd re eñeajhtruwuwru uru rry ha ytr
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button>Read More</Button>
              </CardActions>
            </Card>
          </Grid>{" "}

          {/* Third card */}

          <Grid item sm={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={three}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="h5">Post Title</Typography>
                  <Typography variant="subtitle1">
                    Lorem rhh gdhd re eñeajhtruwuwru uru rry ha ytr
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button>Read More</Button>
              </CardActions>
            </Card>
          </Grid>{" "}

          {/* fourth card */}

          <Grid item sm={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={four}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="h5">Post Title</Typography>
                  <Typography variant="subtitle1">
                    Lorem rhh gdhd re eñeajhtruwuwru uru rry ha ytr
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button>Read More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
