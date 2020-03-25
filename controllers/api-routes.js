const db = require("../models");
const mongoose = require("mongoose");

module.exports = function(app){

  app.get("/api/workouts", (req, res)=>{
    db.Workout.find({})
      .then(dbWorkout=>{
        res.json(dbWorkout);
      })
      .catch(err=>{
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res)=>{
    // db.Workout.update({__id: mongoose.ObjectId(req.params.id)}, {$set: {}})
    //   .then()
    //   .catch(err=>{
    //     res.json(err);
    //   });
    db.Workout.findByIdAndUpdate(req.params.user_id, {$set:req.body}, (err, result)=>{
      if(err){
          console.log(err);
      }
      console.log("RESULT: " + result);
      res.send('Done')
    });
  });

  app.post("/api/workouts", ({ body }, res)=>{
    db.Workout.create(req.body)
      .then(dbWorkout=>{
        res.json(dbWorkout);
      })
      .catch(err=>{
        res.json(err);
      });
    // const work = new Workout(body);
    // work.setFullName();
    // work.lastUpdatedDate();

    // User.create(work)
    //   .then(dbUser => {
    //     res.json(dbUser);
    //   })
    //   .catch(err => {
    //     res.json(err);
    //   });
  });

  app.get("/api/workouts/range", (req, res)=>{
    db.Workout.find();


  });

};