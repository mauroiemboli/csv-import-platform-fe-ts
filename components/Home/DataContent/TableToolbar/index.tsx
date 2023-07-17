import { Toolbar, Typography } from "@mui/material";
import { Props } from "./TableToolbar";

export function EnhancedTableToolbar(props: Props) {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
      className="toolbar__header"
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {props.title}
      </Typography>
    </Toolbar>
  );
}
