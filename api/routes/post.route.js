'use strict'
/**
 *  Module dependencies
 */
import express from 'express'
import {readPost, readPostById, readPostByTitle, createPost, updatePostById, deletePostById} from '../controllers/post.controller.js'

const router = express.Router()

/**
 *  routers
 */
router.get('/', readPost)
router.get('/:id', readPostById)
router.get('/title/:title', readPostByTitle)

router.post('/', createPost)

router.put('/:id', updatePostById)

router.delete('/:id', deletePostById)

export default router