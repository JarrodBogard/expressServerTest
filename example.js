// const express = require("express");
// const app = express();
// const data = require("./data");
// const port = 3000;
// // console.log(data)

// // middleware // converts everything coming back to json
// app.use(express.json());

// /////////////// post example /////////////////
// // let fakeNewPerson = {
// //         id: 6,
// // 		"name": "Kieran Williams",
// // 		"phone": "(752) 477-3147",
// // 		"email": "arcu.morbi@google.org",
// // 		"postalZip": "3735"
// // }

// // app.post("/people", (req, res) => {
// //     data.push(fakeNewPerson)
// //     res.json(data)
// // })
// /////////////////////////////////////////////

// ///// route handler /////
// // route || controller //
// app.get("/people", (req, res) => {
//     res.json(data)
//   res.send('Hello World!')
// res.json({
//     "class": "311",
//     "topic": "back-end programming"
// })
//   console.log(res);
// });

// // can use :id or slug as a variable parameter - this allows req objects //
// app.get("/people/:id", (req, res) => {
//     console.log(req, "-----req-----")
//     console.log(req.params, "-----req.params-----")
//     console.log(req.params.id, "-----req.params.id-----")
//     const foundItem = data.find(item => {
//         console.log(item.id, req.params.id , "foundItem console log")
//         // if id in the data file is a number convert to string using Number() or +
//         return item.id === req.params.id
//     })
//     console.log(foundItem)
// });

// // app.post("/people", (req, res) => {
// //     console.log(req, "-----post request-----")
// //     console.log(req.body , "-----body request-----")

// //     const length = data.length
// //     const newPerson = {
// //         id: length + 1,
// //         ...req.body
// //     }
// //     data.push(newPerson)
// //     // data.push(req.body)
// //     res.json(data)
// //     console.log(data, "----after post----")
// // })

// app.get("/people", (req, res) => {
//   res.json(data);
// });

// app.get("/people/:id", (req, res) => {
//   const foundItem = data.find((person) => person.id === req.params.id);
//   res.json(foundItem);
// });

// app.post("/people", (req, res) => {
//   const length = data.length;
//   const newPerson = {
//     id: length + 1,
//     ...req.body,
//   };
//   data.push(newPerson);
//   res.json(data);
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// Edit a person data entry //
// app.put("/people/:id", (req, res) => {
//     // getting index from url //
//   const id = req.params.id;
//     // find person linked to the id from the url //
//   const person = people.find((person) => person.id === Number(id));
// //   find index of person in people array that matches the id from the url //
//   const foundIndex = people.findIndex((person) => person.id === Number(id));

//   const newPerson = {
//     ...person,
//     ...req.body,
//   };

//   console.log({person});
//   console.log({newPerson})
//   console.log({foundIndex})

//   people.splice(foundIndex, 1, newPerson)
//   res.json(newPerson)
// });

// app.delete("/people/:id", (req, res) => {
    // const id = req.params.id
    // const foundIndex = people.findIndex((person) => person.id === Number(id))

    // console.log({people})
    // people.splice(foundIndex, 1)
    
    // console.log({people})
    // res.json({message: `Deleted user id: ${id}`})

//     const id = req.params.id;
//     const filtered = people.filter((person) => person.id !== Number(id))

//     people = filtered
//     // people = new Array(filtered)

//     res.json(filtered)
    
// })
