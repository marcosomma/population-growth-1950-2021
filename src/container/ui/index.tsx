import { ReactElement, useContext } from "react";
import withStyles from "@mui/styles/withStyles";
import {
  Paper,
  Grid,
  Card,
  CardContent,
  Typography
} from "@mui/material";
import { StateContext } from "../../context/providers/State";
import { getStyles } from "../../assets/theme/utils";

const styleClasses = getStyles.use_styles;
function CustomizedButtons({ classes }: any): ReactElement {
  const { state } = useContext(StateContext);
  return (
    <Grid container spacing={5} direction="column">
      <Grid item className={classes.header}>
        <Paper elevation={0} className={classes.paper}>
          <Typography variant="h3" color="primary">
            {"World Population Growth 1950 > 2021"}
          </Typography>
        </Paper>
      </Grid>
      <Grid item zeroMinWidth className={classes.body}>
        <Paper elevation={0} className={classes.paper}>
          <Card sx={{ maxWidth: 400, maxHeight:500, pointerEvents: "auto", overflow: "auto"}}>
            <CardContent >
              <Typography variant="h2">
                {'Year: ' + state.year}
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
