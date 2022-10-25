import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {
        "id_": "0001",
        "timeStamp":"",
        "textSearsh": "Liz Anali Araujo Quispe"
    },
    {
        "id_": "0002",
        "timeStamp":"",
        "textSearsh": "Carlos B"
    },
    {
        "id_": "0003",
        "timeStamp":"",
        "textSearsh": "Reportes"
    },
    {
        "id_": "0004",
        "timeStamp":"",
        "textSearsh": "David Bendez"
    },
    {
        "id_": "0005",
        "timeStamp":"",
        "textSearsh": "Billetera Dig"
    }
]
export const recentSearshSlice = createSlice({
    name: "RecentSearshSlice",
    initialState,
    reducers: {

    }
})

export default recentSearshSlice.reducer