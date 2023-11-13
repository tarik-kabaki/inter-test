import { createSlice } from "@reduxjs/toolkit";
import english from "../../src/components/navbar/assets/english.png";
import france from "../../src/components/navbar/assets/france.png";
import germany from "../../src/components/navbar/assets/germany.png";
import nederlands from "../../src/components/navbar/assets/nederlands.png";
import spain from "../../src/components/navbar/assets/spain.png";
import { SignalCellularNull } from "@mui/icons-material";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quizs: [
      {
        id: 1,
        check: false,
        uncheck: true,
        quiz: "Dust-filter respirators may be used for continuous protection while silica sand is used as the blasting abrasive.",
        image: null,
      },
      {
        id: 2,
        check: false,
        uncheck: true,
        quiz: "Dust-filter respirators may be used for continuous protection while silica sand is used as the blasting abrasive.",
        image: null,
      },
    ],

    langs: [
      {
        id: 1,
        lan: "English (US)",
        picked: true,
        image: english,
      },
      {
        id: 2,
        lan: "Français (FR)",
        picked: false,
        image: france,
      },
      {
        id: 3,
        lan: "  Nederlands (NL)",
        picked: false,
        image: nederlands,
      },
      {
        id: 4,
        lan: "Español (ES)",
        picked: false,
        image: spain,
      },

      {
        id: 5,
        lan: "Deutsch (DE)",
        picked: false,
        image: germany,
      },
    ],
  },
  reducers: {
    imageDispatch: (state, action) => {
      const qz = state.quizs.find((item) => item.id === action.payload.id);
      qz.image = action.payload.image;
    },

    rmQuiz: (state, action) => {
      state.quizs.splice(
        state.quizs.findIndex((i) => i.id === action.payload),
        1
      );
    },

    addQuiz: (state, action) => {
      state.quizs.push(action.payload);
    },

    handCheck: (state, action) => {
      const currComponent = state.quizs.find(
        (item) => item.id === action.payload.id
      );

      if (action.payload.check === false) {
        currComponent.check = true;
        currComponent.uncheck = false;
      } else {
        currComponent.uncheck = true;
        currComponent.check = false;
      }
    },

    handlePickLangs: (state, action) => {
      const removePicked = state.langs.find((item) => item.picked === true);
      removePicked.picked = !removePicked.picked;
      const changeV = state.langs.find((item) => item.id === action.payload);
      changeV.picked = !changeV.picked;
    },

    rmvImage: (state, action) => {
      const currComponent = state.quizs.find((i) => i.id === action.payload.id);

      currComponent.image = null;
    },
  },
});

export const {
  imageDispatch,
  addQuiz,
  rmQuiz,
  handCheck,
  handlePickLangs,
  rmvImage,
} = quizSlice.actions;
export default quizSlice.reducer;
