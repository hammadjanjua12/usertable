import React, { useState } from "react"; // Add this import
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slice/UserSlice";
import EditUserPopup from "./EditUserPopup";

const DisplayUsers = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);
  const [selectedUser, setSelectedUser] = useState(null); // Define selectedUser state

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  const openEditPopup = (user) => {
    setSelectedUser(user);
  };

  const closeEditPopup = () => {
    setSelectedUser(null);
  };

  return (
    <Wrapper>
      {data.map((user,id) => (
        <li key={id}>
          {user.name}, {user.city}
          <button className="btn-edit" onClick={() => openEditPopup(user)}>
            Edit
          </button>
          <button className="btn-delete" onClick={() => deleteUser(user.id)}>
            <span role="img" aria-label="delete">❌</span>
          </button>
        </li>
      ))}
      {selectedUser && (
        <EditUserPopup userData={selectedUser} onClose={closeEditPopup} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    &:first-child {
      border-top: 1px solid #eee;
    }
  }

  .btn-delete {
    background-color: #db338a;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin-left: 0.5rem;
    border-radius: 5px;
  }

  .btn-edit {
    background-color: #4287f5;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin-left: 0.5rem;
    border-radius: 5px;
  }
  
  .btn-edit:hover {
    background-color: #3066be;
  }
  
`;

export default DisplayUsers;
