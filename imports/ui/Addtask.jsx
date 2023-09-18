import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { Form } from "react-bootstrap";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

function Addtask(props) {
  const [Tittledata, setTittledata] = useState("");
  const [Textdata, setTextdata] = useState("");

  useEffect(() => {
    console.log("props.taskToEdit", props.taskToEdit);
    if (props.taskToEdit) {
      setTittledata(props.taskToEdit.Text);
      setTextdata(props.taskToEdit.Tittle);
    } else {
      setTittledata("");
      setTextdata("");
    }
  }, [props.taskToEdit]);

  const submit = (event) => {
    event.preventDefault();
    if (!Textdata || !Tittledata) {
      return;
    }

    if (props.taskToEdit && props.taskToEdit._id) {
      console.log("Midhun");
// Update the task if taskId is provided
      Meteor.call(
        "Update",
        props.taskToEdit._id,
        Textdata,
        Tittledata,
        (err, result) => {
          if (err) {
            console.error("ERROR", err);
          } else {
            console.log("SUCCESS", result);
            props.onFinishAddingTask();
          }
        }
      );
    } else {
 // Insert a new task if taskId is not provided
      console.log("Veena");

      Meteor.call("Insert", Textdata, Tittledata, (err, result) => {
        if (err) {
          console.error(err);
        } else {
          console.log(result);
          props.onFinishAddingTask();
        }
      });
    }
    setTextdata("");
    setTittledata("");
    props.closeTask();
  };

  console.log("Tittledata", Tittledata);
  console.log("Textdata", Tittledata);

  return (
    <Fragment>
      <DialogTitle style={{ padding: "0" }}>
        <div id="heading">
          <Typography className="heading">New Note</Typography>
        </div>
      </DialogTitle>

      <DialogContent id="dialogcontentpadding_addtask">
        <Form onSubmit={submit} id="textfield_add_task">
          {" "}
          <TextField
            className="Newnote-one"
            variant="outlined"
            multiline
            rows={1}
            type="text"
            placeholder="Title"
            value={Tittledata}
            onChange={(event) => {
              setTittledata(event.target.value);
            }}
            InputProps={{
              classes: {
                root: "custom-taskadding",
              },
              style: {
                maxWidth: "780px !important",
                width: "100% !important",
                height: "84px !important",
                boxSizing: "border-box !important",
                background: "#ffffff !important",
                borderRadius: "15px",
                whiteSpace: "pre-line !important",
                fontFamily: "Poppins !important",
                fontStyle: "normal !important",
                fontWeight: "400 !important",
                fontSize: "20px !important",
                lineHeight: "30px !important",
              },
            }}
          />
        </Form>
        <Form id="formoftxt_add_task" onSubmit={submit}>
          {" "}
          <TextField
            className="Newnote-two"
            variant="outlined"
            multiline
            rows={4}
            type="text"
            placeholder="Details"
            value={Textdata}
            onChange={(event) => setTextdata(event.target.value)}
            InputProps={{
              classes: {
                root: "custom-taskadding2",
              },
              style: {
                maxWidth: "780px",
                width: "100%",
                height: "209px",
                boxSizing: "border-box",
                background: "#ffffff !important",
                borderRadius: "15px",
                whiteSpace: "pre-line",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "30px",
              },
            }}
          ></TextField>
        </Form>
        <DialogActions id="dialogactionspaddingremover">
          <div className="common-box">
            <button onClick={props.closeTask} className="one">
              CANCEL
            </button>
            <br></br>
            <button onClick={submit} className="two">
              {" "}
              SAVE
            </button>
          </div>
        </DialogActions>
      </DialogContent>
    </Fragment>
  );
}
export default Addtask;
