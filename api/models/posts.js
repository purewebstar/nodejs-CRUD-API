'use strict'
/**
 * Module dependencies
 */
import mongoose from 'mongoose'

const postschema = mongoose.Schema({

    title:{
        type: String,
        required: [true, 'title is required']
    },
    description:{
        type: String,
        required: [true, 'description is required']
    }
},{
    timestamps: true
})

export const Post = mongoose.model('posts', postschema)