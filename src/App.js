import "./App.css";
import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "./components/Card.js"
import CardModal from "./components/CardModal.js"
import TaskModal from "./components/TaskModal.js"
import {
  CalendarOutline,
  ListOutline,
  TimerOutline,
  ColorWandOutline,
  CheckmarkDoneCircleOutline,
} from "react-ionicons";

function App() {

  //  State Variables
  const [showCardModal, setShowCardModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);

  return (
    <div className="App">
      {showCardModal && <CardModal showCardModal={showCardModal} setShowCardModal={setShowCardModal} />}
      {showTaskModal && <TaskModal showTaskModal={showTaskModal} setShowTaskModal={setShowTaskModal} />}
      <div className="header">
        <h1>To-Do List</h1>
      </div>
      <Container className="eachContainer pendingTask">
        <Grid container className="headGroup">
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div className="sectionHead">
              <TimerOutline
                color={"#2f2f2f"}
                title={"PendingTask"}
                height="36px"
                width="36px"
              />
              <h2 className="sectionSubHead">Pending Task</h2>
            </div>
          </Grid>
          <Grid item>
            <div className="sectionHead addTaskContainer" onClick={() => {
              setShowTaskModal(true);
            }}>
              <ColorWandOutline
                color={"#2f2f2f"}
                title={"AddTask"}
                height="36px"
                width="36px"
              />
              <h2 className="sectionSubHead">Add Task</h2>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Card setShowCardModal={setShowCardModal} />
          <Card setShowCardModal={setShowCardModal} />
          <Card setShowCardModal={setShowCardModal} />
          <Card setShowCardModal={setShowCardModal} />
          <Card setShowCardModal={setShowCardModal} />

        </Grid>
      </Container>
      <Container className="eachContainer completedTask">
        <div className="sectionHead">
          <CheckmarkDoneCircleOutline
            color={"#2f2f2f"}
            title={"CompletedTask"}
            height="36px"
            width="36px"
          />
          <h2 className="sectionSubHead">Completed Task</h2>
        </div>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className="card">
              <p className="taskHead">Task One added now</p>
              <p className="taskDesc">Description goes here</p>
              <div className="moreDetails">
                <div className="iconContainer">
                  <CalendarOutline
                    color={"#2f2f2f"}
                    title={"Calendar"}
                    height="28px"
                    width="28px"
                  />
                  <p className="values">20th July</p>
                </div>
                <div className="iconContainer">
                  <ListOutline
                    color={"#2f2f2f"}
                    title={"SubTask"}
                    height="28px"
                    width="28px"
                  />
                  <p className="values">12/32 tasks</p>
                </div>
              </div>
              <div className="buttonContainer">
                <div className="btn done-btn">Mark As Undone</div>
                <div className="btn delete-btn">Delete</div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className="card">
              <p className="taskHead">Task One added now</p>
              <p className="taskDesc">Description goes here</p>
              <div className="moreDetails">
                <div className="iconContainer">
                  <CalendarOutline
                    color={"#2f2f2f"}
                    title={"Calendar"}
                    height="28px"
                    width="28px"
                  />
                  <p className="values">20th July</p>
                </div>
                <div className="iconContainer">
                  <ListOutline
                    color={"#2f2f2f"}
                    title={"SubTask"}
                    height="28px"
                    width="28px"
                  />
                  <p className="values">12/32 tasks</p>
                </div>
              </div>
              <div className="buttonContainer">
                <div className="btn done-btn">Mark As Undone</div>
                <div className="btn delete-btn">Delete</div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className="card">
              <p className="taskHead">Task One added now</p>
              <p className="taskDesc">Description goes here</p>
              <div className="moreDetails">
                <div className="iconContainer">
                  <CalendarOutline
                    color={"#2f2f2f"}
                    title={"Calendar"}
                    height="28px"
                    width="28px"
                  />
                  <p className="values">20th July</p>
                </div>
                <div className="iconContainer">
                  <ListOutline
                    color={"#2f2f2f"}
                    title={"SubTask"}
                    height="28px"
                    width="28px"
                  />
                  <p className="values">12/32 tasks</p>
                </div>
              </div>
              <div className="buttonContainer">
                <div className="btn done-btn">Mark As Undone</div>
                <div className="btn delete-btn">Delete</div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className="card">
              <p className="taskHead">Task One added now</p>
              <p className="taskDesc">Description goes here</p>
              <div className="moreDetails">
                <div className="iconContainer">
                  <CalendarOutline
                    color={"#2f2f2f"}
                    title={"Calendar"}
                    height="28px"
                    width="28px"
                  />
                  <p className="values">20th July</p>
                </div>
                <div className="iconContainer">
                  <ListOutline
                    color={"#2f2f2f"}
                    title={"SubTask"}
                    height="28px"
                    width="28px"
                  />
                  <p className="values">12/32 tasks</p>
                </div>
              </div>
              <div className="buttonContainer">
                <div className="btn done-btn">Mark As Undone</div>
                <div className="btn delete-btn">Delete</div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className="card">
              <p className="taskHead">Task One added now</p>
              <p className="taskDesc">Description goes here</p>
              <div className="moreDetails">
                <div className="iconContainer">
                  <CalendarOutline
                    color={"#2f2f2f"}
                    title={"Calendar"}
                    height="28px"
                    width="28px"
                  />
                  <p className="values">20th July</p>
                </div>
                <div className="iconContainer">
                  <ListOutline
                    color={"#2f2f2f"}
                    title={"SubTask"}
                    height="28px"
                    width="28px"
                  />
                  <p className="values">12/32 tasks</p>
                </div>
              </div>
              <div className="buttonContainer">
                <div className="btn done-btn">Mark As Undone</div>
                <div className="btn delete-btn">Delete</div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className="card">
              <p className="taskHead">Task One added now</p>
              <p className="taskDesc">Description goes here</p>
              <div className="moreDetails">
                <div className="iconContainer">
                  <CalendarOutline
                    color={"#2f2f2f"}
                    title={"Calendar"}
                    height="28px"
                    width="28px"
                  />
                  <p className="values">20th July</p>
                </div>
                <div className="iconContainer">
                  <ListOutline
                    color={"#2f2f2f"}
                    title={"SubTask"}
                    height="28px"
                    width="28px"
                  />
                  <p className="values">12/32 tasks</p>
                </div>
              </div>
              <div className="buttonContainer">
                <div className="btn done-btn">Mark As Undone</div>
                <div className="btn delete-btn">Delete</div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
