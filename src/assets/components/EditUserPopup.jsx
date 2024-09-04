import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateUser } from "../store/slice/UserSlice";

const EditUserPopup = ({ userData, onClose }) => {
  const [name, setName] = useState(userData.name);
  const [city, setCity] = useState(userData.city || '');
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(updateUser({ id: userData.id, name, city }));
    onClose();
  };

  return (
    <PopupWrapper>
      <div className="popup-content">
        <Label>
          Name and City:
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name and City seperate with ,"
          />
        </Label>
        
        {/* <Label>
          City:
          <Input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Label> */}
        <ButtonGroup>
          <SaveButton onClick={handleSave}>Save</SaveButton>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
        </ButtonGroup>
      </div>
    </PopupWrapper>
  );
};

const PopupWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const ButtonGroup = styled.div`
  text-align: right;
`;

const SaveButton = styled.button`
  padding: 8px 16px;
  margin-left: 8px; /* Add some space between buttons */
  margin-right: 8px; /* Add space here */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #4caf50;
  color: #fff;
`;

const CancelButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f44336;
  color: #fff;
`;


export default EditUserPopup;
