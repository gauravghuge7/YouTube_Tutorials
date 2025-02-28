import { createSlice } from "@reduxjs/toolkit"


const initialState = {
      listItems : [],
      list: true,
}



const listSlice = createSlice({

      name: "listReducer",
      initialState,

      reducers: {

            insertInList: function(state, action) {
                  state.listItems.push(action.payload);
            },

            changeStatus: function(state, action) {
                  state.list = !state.list; 
            }

      }

})

export const { insertInList, changeStatus } = listSlice.actions

export default listSlice.reducer