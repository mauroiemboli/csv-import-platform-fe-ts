import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function CircularProgressWithLabel(
  props: CircularProgressProps & { value: any }
) {
  const { progress } = props.value;
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress value={progress} variant="determinate" />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {progress ? `${Math.round(progress)}%` : "0%"}
        </Typography>
      </Box>
    </Box>
  );
}
