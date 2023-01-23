import "./App.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getapifetch } from "./action";
import TextField from "@mui/material/TextField";
import { Paper } from "@mui/material";

function App() {
  const [userid, setUserid] = useState();

  const handleInput = (e) => {
    setUserid(e.target.value);
  };

  const dispatch = useDispatch();

  // user todos.................................
  const todos = useSelector((state) => state.value.user);
  console.log("todos value is :- ", todos.todos);

  // error .......................................
  const error = useSelector((state) => state.value.user);
  console.log("your error message is :- ", error.message);

  return (
    <>
      {/* <h1 className="err">{` error is = ${error.message}`}</h1> */}

      <div className="main">
        {/* <Paper className="container"> */}
        <div className="hed">
          <div className="header">TODO</div>
        </div>

        <Paper className="form">
          <div className="input">
            <TextField
              variant="outlined"
              className="int"
              type="number"
              onChange={handleInput}
              value={userid}
              placeholder="Enter User ID"
            ></TextField>
          </div>
          <div className="cbtn">
            <Button
              // variant="outlined"
              variant="contained"
              className="btn"
              onClick={() => dispatch(getapifetch(userid))}
            >
              ADD
            </Button>
          </div>
        </Paper>

        <pap className="store">
          {todos.todos ? (
            todos.todos &&
            todos.todos.map((post) => {
              const { id, todo, completed, userId } = post;

              /* console.log("id is :- " + id); */

              return (
                <div className="data" key={id}>
                  <p>ID : {id}</p>
                  <p>TODO : {todo} </p>
                  <p>{completed}</p>
                  <p> UserID : {userId} </p>
                </div>
              );
            })
          ) : (
            <>
              {error !== "" && (
                <h1 className="err">{` error is = ${error.message}`}</h1>
              )}
            </>
          )}
        </pap>

        {/* <Card> this is Toolbar</Card> */}

        {/* </Paper> */}
      </div>
    </>
  );
}

export default App;
