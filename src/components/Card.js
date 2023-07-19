import React, { useState } from "react";
import "./Card.css";
import Grid from "@mui/material/Grid";
import {
  CalendarOutline,
  ListOutline,
  TimerOutline,
  ColorWandOutline,
  CheckmarkDoneCircleOutline,
} from "react-ionicons";

const Card = ({ setShowCardModal }) => {

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <div className="card">
          <div
            className="cardContainer"
            onClick={() => {
              setShowCardModal(true);
            }}
          >
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
          </div>

          <div className="buttonContainer">
            <div
              className="btn done-btn"
              onClick={() => {
                alert("Marked as Done");
              }}
            >
              Mark As Done
            </div>
            <div
              className="btn edit-btn"
              onClick={() => {
                alert("EditClicked");
              }}
            >
              Edit
            </div>
            <div
              className="btn delete-btn"
              onClick={() => {
                alert("DeleteClicked");
              }}
            >
              Delete
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Card;
