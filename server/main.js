import { Meteor } from "meteor/meteor";
import { LinksCollection } from "/imports/api/links";

async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

Meteor.methods({
  Insert: function (data, Titledata) {
    const s = LinksCollection.insert({
      Tittle: Titledata,
      Text: data,
      createdAt: new Date(),
    });
  },
  Update: function(taskId,data,Tittledata,){
    console.log("data",data)
    console.log("Tittledata",Tittledata)
    console.log("taskId",taskId)
    const s = LinksCollection.update(taskId,{
      Tittle: Tittledata,
      Text: data,
      createdAt: new Date(),
    });},
  fetch: function () {
    const value =  LinksCollection.find({}).fetch()
    return value
  },
  removes : function(id){
    {
      LinksCollection.remove(id);
    }
  }
});
Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  // if ((await LinksCollection.find().countAsync()) === 0) {
  //   await insertLink({
  //     title: "Do the Tutorial",
  //     url: "https://www.meteor.com/tutorials/react/creating-an-app",
  //   });

  //   await insertLink({
  //     title: "Follow the Guide",
  //     url: "https://guide.meteor.com",
  //   });

  //   await insertLink({
  //     title: "Read the Docs",
  //     url: "https://docs.meteor.com",
  //   });

  //   await insertLink({
  //     title: "Discussions",
  //     url: "https://forums.meteor.com",
  //   });
  // }

  // We publish the entire Links collection to all clients.
  // In order to be fetched in real-time to the clients
  Meteor.publish("links", function () {
    return LinksCollection.find();
  });
});
