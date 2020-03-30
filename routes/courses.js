const express = require("express");
const router = express.Router();
const Joi = require("joi");

const courses = [
  { id: 1, name: "Algebra" },
  { id: 2, name: "Linear Algebra" },
  { id: 3, name: "Multi Variable Algebra " },
  { id: 4, name: "Anime Algebra" }
];

// app.get(address,what you want to show at that address)
router.get("/", (req, res) => {
  res.send(courses);
});

// GET
// IT SHOWS the resources
router.get("/:id", (req, res) => {
  const course = findCourse(req.params.id);
  if (course) {
    res.send(course);
    return;
  }
  return res.status(404).send("There is no such course with this ID");
});

// POST
// IT is used to add resourse to the existing resourses
// we return the the whole resourses here

router.post("/", (req, res) => {
  const result = validateCourse(req.body);

  if (result.error) {
    res
      .status(400)
      .send(
        `result.error.details[0].message and It's lenght should be atleast 3`
      );
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };

  courses.push(course);
  res.send(courses);
});

// PUT
// It is used to update

router.put("/:id", (req, res) => {
  const course = findCourse(req.params.id);
  if (!course) {
    res.status(404).send("There is no course of such name");
    return;
  }

  const result = validateCourse(req.body);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  course.name = req.body.name;
  res.send(course);
});

// Delete

router.delete("/:id", (req, res) => {
  const course = findCourse(req.params.id);
  if (!course) {
    res.status(404).send("There is no course of such name");
    return;
  }

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  return res.send(course);
});

function validateCourse(course) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };

  return Joi.validate(course, schema);
}

function findCourse(courseID) {
  return courses.find(c => c.id === parseInt(courseID));
}

module.exports = router;
