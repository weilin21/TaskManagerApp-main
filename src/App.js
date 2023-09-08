import "./App.css";
import { Box, Button } from "@mui/material";
import { useHistory } from "react-router";

function App() {
  const history = useHistory();
  const handleOnClick = (e) => {
    if (e.target.id == "tasklist") {
      history.push("/tasks");
    } else if (e.target.id == "taskform") {
      history.push("/taskform");
    }
  };

  return (
    <Box
      pt="30px"
      pb="30px"
      gap="10px"
      display="flex"
      flexDirection="column"
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      <Button id="tasklist" variant="contained" onClick={handleOnClick}>
        TASKS LIST
      </Button>
      <Button id="taskform" variant="contained" onClick={handleOnClick}>
        TASK FORM
      </Button>
    </Box>
  );
}

export default App;
