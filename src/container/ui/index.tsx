import { ReactElement } from "react";
import withStyles from "@mui/styles/withStyles";
import {
  Paper,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider
} from "@mui/material";
import { getStyles } from "../../assets/theme/utils";

const styleClasses = getStyles.use_styles;
function CustomizedButtons({ classes }: any): ReactElement {
  return (
    <Grid container spacing={5} direction="column">
      <Grid item className={classes.header}>
        <Paper elevation={0} className={classes.paper}>
          <Typography variant="h3" color="primary">
            {"Geonames - All Cities with a population > 1000"}
          </Typography>
        </Paper>
      </Grid>
      <Grid item zeroMinWidth className={classes.body}>
        <Paper elevation={0} className={classes.paper}>
          <Card sx={{ maxWidth: 320, maxHeight:500, pointerEvents: "auto", overflow: "auto"}}>
            <CardContent >
              <Typography variant="body1">
                {'All cities with a population > 1000 or seats of adm div (ca 80.000)'}
              </Typography>
              <Divider variant="fullWidth" style={{margin: `30px 0 10px 0`}}/>
              <Typography variant="body2" color='secondary'>
                {'140865 Datapoints / 246 Countries'}
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
      <Grid item zeroMinWidth className={classes.footer}>
        <Paper elevation={0} className={classes.paper}></Paper>
      </Grid>
    </Grid>
  );
}

export default withStyles(styleClasses)(CustomizedButtons);
