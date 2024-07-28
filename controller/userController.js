// controllers/userController.js
const { request } = require('express');
const Person = require('../model/person')
const getUser = (req, res) => {

  let userdata={
    name :'user 1',
    email :"user@example.com",
    userID:'use1232'
  }

    res.status(200).send({ message: 'User fetched successfully' , userdata});
  };
  
  
  const createUser = async (req, res) => {
    
 try {
  const data = req.body;
  const newPerson = new Person(data);
  const responce = await newPerson.save();
  console.log('data saved');
  res.status(200).json({message:'data saved successfully',responce
  })
 } catch (error) {
  
  console.log(error);
  res.status(500).json({message:'Internal serverError', error});

 }
  }

    // Assume user creation logic here
    
  //   res.status(201).send({ message: 'User created successfully' });
  // };
  
  const updateUser = (req, res) => {
    // Assume user update logic here
    res.status(200).send({ message: `User updated successfully ${req.params.id}` });
  };
  
  const deleteUser = (req, res) => {
    // Assume user deletion logic here
    
    res.status(200).send({ message: `User deleted successfully ${req.params.id}` });
  };
  
  const patchUser = (req, res) => {
    // Assume partial user update logic here
    res.status(200).send({ message: `User updated partially successfully ${req.params.id}` });
  };
  
  module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    patchUser
  };
  