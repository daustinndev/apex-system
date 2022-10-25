import { configureStore } from "@reduxjs/toolkit";
import appInfoReducer from '../features/app/appSlice'
import recentSlice from '../features/recent/recentSlice'
import monthSlice from '../features/report/monthSlice'
import recentSearshSlice from '../features/searsh/recentSlice'
import navSlice from '../features/nav/navSlice'
import WekkReportSlice from "../features/inventory/wekkReportSlice";

export const store = configureStore({
    reducer:{
        appInfo: appInfoReducer,
        recentData: recentSlice,
        monthReportData: monthSlice,
        recentSearshSlice: recentSearshSlice,
        nav:navSlice,
        WekkInventory:WekkReportSlice
    }
})