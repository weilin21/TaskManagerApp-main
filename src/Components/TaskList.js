import React, { useState } from "react";
import {
  Button,
  Box,
  Table,
  Tab,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import mockJson from "../mock.json";
import { useHistory } from "react-router";

const TaskList = () => {
  const history = useHistory();
  const [taskList, setTaskList] = useState(mockJson);

  const handleDeleteTask = () => {
    taskList.splice(0, taskList.length);
    setTaskList([...taskList]);
  };
  const handleSelectedRow = (id) => {
    history.push(`/tasks/${id}`);
  };

  return (
    <Box display="flex" flexDirection="column" p="15px" gap="15px">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>TITLE</TableCell>
              <TableCell>DESCRIPTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {taskList.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => {
                  handleSelectedRow(row.id);
                }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={handleDeleteTask}
      >
        Delete
      </Button>
    </Box>
  );
};

export default TaskList;
