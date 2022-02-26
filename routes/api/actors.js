const express = require('express')
const router = express.Router();
//Actor Model
const Actor = require('../../models/Actor')
const buildActorService = require('../../service/actorService')

const actorService = buildActorService({ actorRepository: Actor })

// @route   GET api/actors
// @desc    Get all actors
// @access  Public
router.get('/', (req, res) => {
  actorService.findAll()
    .then(actors => {
      res.json(actors)
    })
    .catch(err => console.log(err))
})

router.post('/filter', (req, res, next) => {
  actorService.findByFilter(req?.body)
    .then(actors => res.json(actors))
    .catch(err => next(err))
})

// @route   POST api/actors
// @desc    Create an actor
// @access  Public
router.post('/', (req, res) => {
  actorService.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })
    .then(actor => res.json({
      status: res.statusCode,
      actor: actor
    }))
    .catch(err => console.log(err))
})

//@route DELETE api/actors/:id
//@desc         Delete an actor by id
//@access       Public
router.delete('/:id', (req, res, next) => {
  actorService.deleteById(req.params.id)
    .then(() => res.json({ success: true }))
    .catch(err => next(err))
})

router.put('/:id', (req, res, next) => {
  actorService.update(req.params.id, req.body)
    .then(actor => res.status(200).json({
      success: true,
      actor: actor
    }))
    .catch(err => next(err))
})


module.exports = router;