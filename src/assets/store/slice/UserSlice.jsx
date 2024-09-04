import { createSlice } from "@reduxjs/toolkit";

let idCounter = 0;
const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      const user = {
        id: idCounter++,
        name: action.payload.name,
        city: action.payload.city,
      };
      state.push(user);
    },
    updateUser(state, action) {
      const { id, name, city } = action.payload;
      const userIndex = state.findIndex((user) => user.id === id);

      if (userIndex !== -1) {
        state[userIndex].name = name;
        state[userIndex].city = city;
      }
    },
    removeUser(state, action) {
      return state.filter((user) => user.id !== action.payload);
    },
    clearAllUsers(state, action) {
      return [];
    },
  },
});

export default userSlice.reducer;
export const { addUser, updateUser, removeUser, clearAllUsers } = userSlice.actions;
