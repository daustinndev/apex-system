import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    "name": "Masser",
    "username":"massercorporation",
    "slogan": "Tecnologia de calidad",
    "banner": "banner.jpg",
    "profile": "profile.png"
}

export const appInfo = createSlice({
    name: "appInfo",
    initialState,
    reducers: {
        
    }
})

export default appInfo.reducer