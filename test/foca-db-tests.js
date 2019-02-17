'use strict';

const assert = require('assert')
const e_db = require('../data/foca-db')(this)

describe('elastic db test', () => {

    before(async () => {
        await e_db.init()
    })

    after(async () => {
        await e_db.init()
    })

    it('create and get group test', async (done) => {

        return e_db.createGroup("991", "group991", "group991_description", "teste")
            .then(_ => e_db.getGroup(991))
            .then(res => {
                assert.equal(res._source.name, 'group991')
                done()
            })
            .catch(error => {
                done(new Error(error.error))
            })
    })

    it('update group test',  async (done) => {

        return e_db.createGroup("992", "group992", "group992_description", "teste")
            .then(res => e_db.updateGroup("992", "newName", "new_description"))
            .then(res => e_db.getGroup(992))
            .then(res => {
                assert.equal(res._source.name, 'newName')
                done()
            })
            .catch(error => {
                done(new Error(error.error))
            })
    })

    it('update throws group not found test', async (done) => {

        return e_db.updateGroup("993", "newName", "new_description", "teste")
            .then(res => {
                assert.fail("should have thrown exception")
                done(new Error("should have thrown exception"))
            })
            .catch(error => {
                assert.equal(error.status, 404)
                assert.equal(error.error, "group not found")
                done()
            })
    })

    it('add team to group test', async (done) => {

        return e_db.createGroup("994", "group994", "group994_description", "teste")
            .then(res => e_db.insertTeam(994, 496, "team 1"))
            .then(res => e_db.insertTeam(994, 498, "team 2"))
            .then(res => e_db.getGroup(994))
            .then(res => {
                assert.equal(res._source.teams.length, 2)
                done()
            })
            .catch(error => done(new Error(error.error)))
    })

    it('remove team from group test',  async (done) => {

        return e_db.createGroup("995", "group995", "group995_description", "teste")
            .then(res => e_db.insertTeam(995, 496, "team 1"))
            .then(res => e_db.removeTeam(995, 496, "team 1"))
            .then(res => e_db.getGroup(995))
            .then(res => {
                assert.equal(res._source.teams.length, 0)
                done()
            })
            .catch(error => done(new Error(error)))
    })
})