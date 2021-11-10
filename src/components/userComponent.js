import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../actions/userActions";
import "./userComponent.css"
import { Button } from "antd";
import { useHistory } from "react-router-dom";


const FetchUser = () => {
  const dispatch = useDispatch();
  const fetchUser = () => {
    dispatch(loadUser());
  };
  let history = useHistory();

  console.log(history)

  const state = useSelector((state) => ({ ...state.user }));
  return (
    <>
      <h2>Fetch User using Redux-Saga</h2><Button onClick={fetchUser} type="primary">
        Fetch User
      </Button>
      <div className="table-container">
        <table class="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>GET DETAILS</th>
            </tr>
          </thead>
          {!state.loading &&
            state.users.map((user) => (
              <tbody>
                <tr>
                  <td> {user.id}</td>
                  <td> {user.title}</td>
                  <td> <Button type="primary" onClick={() => { history.push(`/userDetails/${user.id}`) }}>Get Details</Button></td>
                </tr>
              </tbody>

            ))}
        </table>
      </div>
    </>
  );
};

export default FetchUser;


