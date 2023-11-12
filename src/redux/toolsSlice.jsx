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
        val: 10,
        type: null,
        image: dice,
      },
      {
        id: 2,
        val: 45,
        type: "s",
        image: time,
      },
      {
        id: 3,
        val: 80,
        type: "%",
        image: done,
      },
      {
        id: 4,
        val: false,
        type: "check",
        image: wbecam,
      },
      {
        id: 5,
        val: 30,
        type: "min",
        image: zone,
      },
      {
        id: 6,
        val: 3,
        type: null,
        image: figure,
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
