import React, { Fragment, useEffect, useState } from "react";
import Header from "./Header";
import Addtask from "./Addtask.jsx";
import Dialog from "@mui/material/Dialog";
import LastPage from "./LastPage";

function Page1({ onLogout }) {
  const [data,setData] = useState ([]);
  const [editTask, setEditTask] = useState(null);
  const [isTaskOpen, setIsTaskOpen] = useState(false);

  function openEditTask(task) {
     const taskToEdit = data.find((item) => item === task);
    setEditTask(taskToEdit);
    setIsTaskOpen(true); // Set state to open Addtask
  }

function loadList() {
  Meteor.call('fetch',(error, result) => {
    if (error) {
      console.error('error data',error);

    }else{
      setData(result)
    }
});
}

function removeTask(taskId) {
 Meteor.call("removes",taskId, (err, result) => {
  if (err) {
    console.error("err: ",err);
  } else {
    alert("Task removed")
    loadList();
  }
});
}

  useEffect(() => {
    loadList();
},[]);
 
  console.log('DATA',data)

  const handleclick = () => {
    console.log("veena Regikumar");
    
  };

  function openTask() {
    setEditTask(null);
    setIsTaskOpen(true); // Set state to open Addtask
  }

  function closeTask() {
    setIsTaskOpen(false); // Set state to open Addtask
    loadList();

  }

  function addButton() {
    return (
      <div className="page1-maindiv">
              <img
                className="cng"
                src="Ellipse 13.png"
                alt="Example"
                onClick={() => {
                  openTask();
                }}
              ></img>
            </div>
    );
  }

  return (
    <Fragment>
      <div className="new">
        <div>
          <Header onLogout={onLogout}/>

          <Dialog
            open={isTaskOpen}
            onClose={closeTask}
            PaperProps={{
              classes: { root: "custom-dialog-paper-root" },
              style: {
                maxWidth: "944px",
                width: "100%",
                maxHeight: "596px",
                height: "100%",
                background: "#ffffff",
                borderRadius: "unset !important",
                borderRadius: "20px",
              },
            }}
          >
            <Addtask
              closeTask={closeTask}
              onFinishAddingTask={loadList}
              taskToEdit={editTask} 
            />
          </Dialog>
          {data.length ? (
            <div className="mainpage">
            {data.map((item,index) =>(
              <LastPage 
              key={item._id}
              taskId ={item._id}
              item={item}
              index={index}

              onClickEdit={(taskId) => {
                openEditTask(taskId); 
                console.log(taskId)
              }}
              onClickDelete={(taskId) => {
                removeTask(taskId)
              }}
              
              />
              ))}
              {addButton()}
          </div>
          ):(
            <div className="page1-box">
            <div>
              <h1 className="page1-text">Add Notes</h1>
            </div>
            <p className="page1-p">
              You can add your notes here and manage them anytime for
              convenience and easy access.
            </p>
            {addButton()}
          </div>
          )}

        </div>
      </div>
    </Fragment>
  );
}

export default Page1;
