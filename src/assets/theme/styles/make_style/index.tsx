const SeatMapStyle = (theme: any) => {
  return ({
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    backgroundColor: theme.palette.primary.dark,
    '&:hover': {
      color: theme.palette.getContrastText(theme.palette.primary.main),
      backgroundColor: theme.palette.primary.main,
    },
  });
};
export default SeatMapStyle;
