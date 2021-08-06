'use strict'
/**
 *  Module dependencies
 */
 import {Post} from '../models/posts.js'
 import mongoose from 'mongoose'
 import initDatabase from '../config/MongoDb.js'

 initDatabase(mongoose)
 /** GET HTTPS */
/**
  *  Get all post
  */
 export const readPost = async (req, res)=>{
    await Post.find((err, posts)=>{
        if(err) res.status(404).json({message: err.message})
        res.status(200).json({posts: posts})
    })
 }
/**
  *  Get post by id
  */
 export const readPostById = async (req, res)=>{
    const id = req.params.id
    await Post.findById(id,(err, posts)=>{
       if(err) res.status(404).json({message: err.message})
       res.status(200).json({posts: posts})
   })
 }
/**
  *  Get post by title
  */
 export const readPostByTitle = async (req, res)=>{
    const title = req.params.title
    await Post.findOne({title: title},(err, posts)=>{
        if(err) res.status(404).json({message: err.message})
        res.status(200).json({posts: posts})
    })
 }
 //-----------------------------------------------------
 
 /** POST HTTPS */

 /**
  *  Creating post
  */
 export const createPost = async (req, res) =>{
    const {title, description} = req.body
    // validating input data's
    if(title === "" && description === ""){
        res.status(204).json({message: "Input required"})
    }
    else{
        const createPost = new Post({
            title: title,
            description: description
        })
    
        try{
           const posted = await createPost.save((err, posted) =>{
              if(err) res.json({message: err.message})
              res.status(201).json({message: "Posted successfully!", post: posted})
           })
        }catch(err){
            res.status(404).json(err.message)
        }
    }
 }
//------------------------------------------------------
 /** PUT HTTPS */

  /**
  *  Updating post by id
  */
 export const updatePostById = async (req, res) =>{
    const {title, description} = req.body
    const id = req.params.id

    await Post.findOne({_id: id}, async (err, oldPost) =>{
        // if error display error
        if(err) res.json({message: err.message})
        else{
            try{
                await Post.findByIdAndUpdate({_id: oldPost._id},
                    {title: title, description: description}, (err, updated)=>{
                    if(err) res.json({message: err.message})       
                    res.status(200).json({message: "Updated successfully!", updated: updated}) // updated successfully
                })
        
            }catch(e){
                res.status(404).json({message: "NO such post exist"})
            }
        }

    })
}
 //------------------------------------------------------
 /** DELETE HTTPS */

 /**
  *  Delete post by id
  */
 export const deletePostById = async (req, res) =>{
    const id = req.params.id
    await Post.findOne({_id: id}, async (err, oldPost) =>{
        // if error display error
        if(err) res.json({message: err.message})
        try{
            await Post.findByIdAndDelete({_id: oldPost._id}, (err, deleted)=>{
                if(err) res.json({message: err.message})       
                res.status(200).json({message: "Deleted successfully!"}) // deleted successfully
            })
    
        }catch(e){
            res.status(404).json({message: "NO such post exist"})
        }

    })
}