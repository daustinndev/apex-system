import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {
        "id_": "0001",
        "description": "Venta satisfactoria - 4 Productos - ingreso 14500",
        "timeStamp":"Ahora",
        "area":"Venta"
    },
    {
        "id_": "0002",
        "description": "Venta satisfactoria - 4 Productos - ingreso 14500",
        "timeStamp":"Ahora",
        "area":"Servicio"
    },
    {
        "id_": "0003",
        "description": "Venta satisfactoria - 4 Productos - ingreso 14500",
        "timeStamp":"Ahora",
        "area":"Venta"
    },
    {
        "id_": "0004",
        "description": "Venta satisfactoria - 4 Productos - ingreso 14500",
        "timeStamp":"Ahora",
        "area":"Venta"
    },
    {
        "id_": "0005",
        "description": "Venta satisfactoria - 4 Productos - ingreso 14500",
        "timeStamp":"Ahora",
        "area":"Servicio"
    },
    {
        "id_": "0006",
        "description": "Venta satisfactoria - 4 Productos - ingreso 14500",
        "timeStamp":"Ahora",
        "area":"Venta"
    },
    {
        "id_": "0007",
        "description": "Venta satisfactoria - 4 Productos - ingreso 14500",
        "timeStamp":"Ahora",
        "area":"Renta"
    }
]

export const recentSlice = createSlice({
    name: "recentSlice",
    initialState,
    reducers: {
        
    }
})

export default recentSlice.reducer