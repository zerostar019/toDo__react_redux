import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'


const entityAdapter = createEntityAdapter();

export const createTask = createSlice({
    name: "task",
    initialState: entityAdapter.getInitialState([{
        status: "active",
        createDate: ""
    }]),
    reducers: {
        addTask: (state, action) => (
            entityAdapter.addOne(state, action.payload)
        ),
        deleteTask: (state, action) => (
            entityAdapter.removeOne(state, action.payload)
        ),
        deleteAll: (state) => (
            entityAdapter.removeAll(state)
        ),
        updateTask: (state, action) => {
            entityAdapter.updateOne(state, action.payload)
        }
        }
    }
)


export default createTask.reducer;