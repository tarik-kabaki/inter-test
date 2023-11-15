import { createSlice } from "@reduxjs/toolkit";
import dice from "../../src/components/tools/assets/dice.png";
import done from "../../src/components/tools/assets/done.png";
import figure from "../../src/components/tools/assets/figure.png";
import time from "../../src/components/tools/assets/time.png";
import wbecam from "../../src/components/tools/assets/wbecam.png";
import zone from "../../src/components/tools/assets/zone.png";
import info from "../../src/components/tools/assets/info.png";
import plus from "../../src/components/tools/assets/plus.png";
import mines from "../../src/components/tools/assets/mines.png";
import { AddAPhoto } from "@mui/icons-material";

export const toolsSlice = createSlice({
  name: "tools",
  initialState: {
    toolsArray: [
      {
        id: 1,
        val: 1,
        type: null,
        image: figure,
        name: "Exemple",
        info: "Exemple Information",
      },
      {
        id: 2,
        val: 1,
        type: null,
        image: figure,
        name: "Exemple",
        info: "Exemple Information",
      },
      {
        id: 3,
        val: 10,
        type: null,
        image: dice,
        name: "Random questions",
        info: "Random questions Information",
      },
      {
        id: 4,
        val: 45,
        type: "s",
        image: time,
        name: "Time per question",
        info: "Time per question Information",
      },
      {
        id: 5,
        val: 80,
        type: "%",
        image: done,
        name: "Passing score",
        info: "Passing score Information",
      },
      {
        id: 6,
        val: false,
        type: "check",
        image: wbecam,
        name: "Webcam validation",
        info: "Webcam Information",
      },
      {
        id: 7,
        val: 30,
        type: "min",
        image: zone,
        name: "Time Expected",
        info: "Time Expected Information",
      },
      {
        id: 8,
        val: 3,
        type: null,
        image: figure,
        name: "Attemps",
        info: "Attemps Information",
      },
    ],

    navLogs: [
      { link: "Dashboard", active: false },
      { link: "Trainings", active: true },
      { link: "Users", active: false },
      { link: "More", active: false },
    ],
  },
  reducers: {
    toolInc: (state, action) => {
      const tool = state.toolsArray.find((item) => item.id === action.payload);
      switch (tool.type) {
        case "min":
          if (tool.val < 60) {
            tool.val++;
          }

          break;
        case null:
          if (tool.val < 100) {
            tool.val++;
          }
          break;

        case "%":
          if (tool.val < 100) {
            tool.val += 5;
          }
          break;

        case "s":
          if (tool.val < 60) {
            tool.val++;
          }
          break;
      }
    },

    toolDec: (state, action) => {
      const tool = state.toolsArray.find((item) => item.id === action.payload);

      switch (tool.type) {
        case "min":
          if (tool.val > 1) {
            tool.val--;
          }
          break;

        case null:
          if (tool.val > 1) {
            tool.val--;
          }
          break;

        case "%":
          if (tool.val > 1) {
            tool.val -= 5;
          }
          break;

        case "s":
          if (tool.val > 1) {
            tool.val--;
          }
          break;
      }
    },

    handleNav: (state, action) => {
      const rmvLog = state.navLogs.find((item) => item.active === true);
      rmvLog.active = !rmvLog.active;
      const Addclass = state.navLogs.find(
        (i) => i.link === action.payload.link
      );
      Addclass.active = !Addclass.active;
    },
  },
});

export const { toolInc, toolDec, handleNav } = toolsSlice.actions;
export default toolsSlice.reducer;
