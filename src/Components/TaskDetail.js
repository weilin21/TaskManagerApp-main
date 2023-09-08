import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const TaskDetail = (id) => {
  const [editText, setEditText] = useState(false);
  const handleEditText = () => {
    setEditText(true);
  };

  return (
    <Box p="20px" display="flex" flexDirection="column" gap="30px">
      <Box> Title </Box>

      <TextField defaultValue="Test 1" disabled={editText}></TextField>

      <Box> Description </Box>

      <TextField
        multiline
        rows={4}
        defaultValue="Testing 1"
        disabled={editText}
      ></TextField>

      <Button
        variant="contained"
        onClick={() => {
          handleEditText();
        }}
      >
        {" "}
        Edit{" "}
      </Button>
    </Box>
  );
};

export default TaskDetail;
