'use strict';

const assert = require('assert')
const e_db_mock = require('../mocks/foca-db-mock')(this)
const f_data_mock = require('../mocks/football-data-mock')(this)
const services = require('../services/foca-service')(e_db_mock, f_data_mock)

describe('service_tests', () => {

    it('add team to group test', (done) => {

        services.addTeamToGroup(981, 503, "teste")
            .then(res => {
                assert.equal(res, "team 503 added");
                done()
            })
            .catch(err => done(new Error(err)))
    })

    it('remove team from group test', (done) => {

        services.removeTeamFromGroup(981, 498, "teste")
            .then(res => {
                assert.equal(res, "team 498 removed");
                done()
            })
            .catch(err => done(new Error(err)))
    })

    it('get group games test', (done) => {
        services.getGroupGames(981, '2018-08-10', '2018-10-10', "teste")
            .then(res => {
                assert.equal(res.length, 42);
                done()
            })
            .catch(err => done(new Error(err)))
    })
})