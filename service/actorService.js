module.exports = function buildActorService({ actorRepository }) {
  function findAll() {
    return actorRepository.findAll()
  }

  function findByFilter(req) {
    const filter = {}
    if (req?.firstName) {
      filter.firstName = req.body.firstName
    }
    if (req?.lastName) {
      filter.lastName = req.body.lastName
    }
    return actorRepository.findAll({
      where: { ...filter }
    })
  }

  function create(req) {
    if (!req.firstName) {
      throw "firstName is required"
    }
    if (!req.lastName) {
      throw "lastName is required"
    }
    return actorRepository.create({
      firstName: req.firstName,
      lastName: req.lastName
    })
  }

  function deleteById(actorId) {
    return actorRepository.destroy({
      where: {
        actor_id: actorId
      }
    })
  }

  function update({id, req}) {
    return actorRepository.findByPk(id)
      .then(actor => {
        if (!actor) {
          throw "actor not exist"
        }
      })
      .then(actor => actor.update({
        firstName: req.firstName,
        lastName: req.lastName
      }))
  }

  return Object.freeze({
    findAll,
    findByFilter,
    create,
    deleteById,
    update
  })
}