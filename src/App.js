import "./App.css";
import Card from "@mui/material/Card";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getapifetch } from "./action";

function App() {
  const [userid, setUserid] = useState([]);
  const [Storedata, setStoredata] = useState([]);

  const handleInput = (e) => {
    setUserid(e.target.value);
  };

  const handleAdd = () => {
    setStoredata((preval) => {
      return { ...preval, userid };
    });
    console.log(userid);
    setUserid("");
  };

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.value.user);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div className="main">
        <Card className="container">
          <div className="hed">
            <Card className="header">TODO</Card>
          </div>

          <div className="input">
            <Input
              className="int"
              type="number"
              onChange={handleInput}
              value={userid}
              placeholder="Enter User ID"
            ></Input>
          </div>

          <div className="cbtn">
            <Button
              variant="outlined"
              className="btn"
              onClick={() => dispatch(getapifetch(userid))}
            >
              ADD
            </Button>
          </div>

          {/* <div className="store">
            {todos &&
              todos.map((user) => (
                <>
                  <div className="card">
                    <p>{user.id}</p>
                  </div>
                </>
              ))}
          </div> */}

          <div className="store">
            {todos &&
              todos.map((user) => {
                const { id, todo, completed, userID } = user;

                return (
                  <>
                    <div className="card">
                      <p>{id}</p>
                      <p>{todo}</p>
                      <p>{completed}</p>
                      <p>{userID}</p>
                    </div>
                  </>
                );
              })}
          </div>
        </Card>
      </div>
    </>
  );
}

export default App;
