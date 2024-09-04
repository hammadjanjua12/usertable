import styled from "styled-components";
import { clearAllUsers } from "../store/slice/UserSlice";
import { useDispatch } from "react-redux";

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteUsers = () => {
    dispatch(clearAllUsers());
  };

  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={deleteUsers}>
        Clear Users
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
  }
`;

export default DeleteAllUser;
