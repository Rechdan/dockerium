import { Grid, GridProps } from "@mui/material";

export const GridContainer = (props: GridProps) => <Grid container spacing={2} {...props} />;

export const GridItem = (props: GridProps) => <Grid item lg={4} md={6} xs={12} {...props} />;
