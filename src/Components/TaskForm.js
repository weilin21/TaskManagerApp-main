import { Box, Button, TextField, Alert } from "@mui/material";
import React, { useState } from "react";

const TaskForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const handleAddTask = () => {
    setShowAlert(true);
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <Box p="20px" display="flex" flexDirection="column" gap="30px">
      <Box> Title </Box>
      <TextField> </TextField>
      <Box> Description </Box>
      <TextField multiline rows={4}>
        {" "}
      </TextField>
      <Button variant="contained" onClick={handleAddTask}>
        {" "}
        Add Task{" "}
      </Button>
      {showAlert && (
        <Alert severity="info" onClose={handleCloseAlert}>
          This is an alert message.
        </Alert>
      )}
    </Box>
  );
};

export default TaskForm;
