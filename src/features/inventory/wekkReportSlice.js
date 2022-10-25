import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {
      "name": "Productos", 
      "data": {
        "2022-08-01": 51,
        "2022-08-02": 45,
        "2022-08-03": 38,
        "2022-08-04": 45,
        "2022-08-05": 46,
        "2022-08-06": 49,
        "2022-08-07": 25,
      }
    }
]
export const WekkReportSlice = createSlice({
    name: "WekkReportSlice",
    initialState,
    reducers: {
        
    }
})

export default WekkReportSlice.reducer