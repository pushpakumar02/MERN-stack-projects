const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getContacts = asyncHandler(async (req, res) =>{
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts);
});

const getContact = asyncHandler(async(req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

const createContact = asyncHandler(async(req, res) =>{
    console.log("The body is :", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.used.id
    });
    res.status(201).json(contact);
});

const updateContact = asyncHandler(async(req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User don't have the permission to update the other user's contacts")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
     
    res.status(200).json(updatedContact);
});

const deleteContact = asyncHandler(async(req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
        
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User don't have the permission to update the other user's contacts")
    } 

    // await Contact.remove();
    // await Contact.findByIdAndDelete(req.params.id);
    await Contact.deleteOne({_id: req.params.id});
    res.status(200).json(contact);
});




module.exports = {getContacts, getContact, createContact, updateContact, deleteContact}