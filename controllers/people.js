let people = require("../data");

const list = (req, res) => {
  res.json(people);
};

const show = (req, res) => {
  const id = req.params.id;
  const person = people.find((person) => person.id === Number(id));
  res.json(person);
};

const create = (req, res) => {
  const person = {
    id: people.length + 1,
    ...req.body,
  };
  console.log(person);
  people.push(person);
  res.json(person);
};

const update = (req, res) => {
  const id = req.params.id;
  const person = people.find((person) => person.id === Number(id));
  const foundIndex = people.findIndex((person) => person.id === Number(id));

  const newPerson = {
    ...person,
    ...req.body,
  };

  people.splice(foundIndex, 1, newPerson);
  res.json(newPerson);
};

const remove = (req, res) => {
  const id = req.params.id;
  const foundIndex = people.findIndex((person) => person.id === Number(id));

  console.log({ people });
  people.splice(foundIndex, 1);

  console.log({ people });
  res.json({ message: `Deleted user id: ${id}` });
};

module.exports = {
  list,
  show,
  create,
  update,
  remove,
};
