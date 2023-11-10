import React from "react";
import Navbar from "../../components/navbar/navbar";
import EditTraining from "../../components/editTraining/editTraining";
import EditQuiz from "../../components/editQuiz/editQuiz";
import Quiz from "../../components/quiz/quiz";
import Tools from "../../components/tools/tools";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <div className="bg-[#F8FAFD] w-auto">
      <Navbar />
      <Container maxWidth="xl">
        <div className="flex flex-col items-center gap-5">
          <EditTraining />
          <EditQuiz />
          <Quiz />
          <Tools />
        </div>
      </Container>
    </div>
  );
};

export default Home;
