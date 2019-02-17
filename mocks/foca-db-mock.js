'use strict'

const request = require('request')
const fetch = require('node-fetch')

const URL = 'http://localhost:9200/foca'

module.exports = () => {
    return {
        insertTeam: insertTeam,
        removeTeam: removeTeam,
        init: init,
        getGroup: getGroup,
        getGroups: getGroups,
        updateGroup: updateGroup,
        createGroup: createGroup,
        getAll: getAll,
        get: get,
        post: post,
        put: put
    }

    // init: try to delete index, put index, put mapping
    async function init() {
        return del('')
            .then(res => put('', undefined))
            .then(res => {
                if (res.acknowledged != true)
                    throw 'error: index -> put index'
                else
                    put('/_mapping/group', group_mapping)

            })
    }

    async function createGroup(id, name, description) {
        if (id == 992 || id == 981)
            throw "group exists"
        else
            return {
                "_index": "foca",
                "_type": "group",
                "_id": id,
                "_version": 1,
                "result": "created",
                "_shards": {
                    "total": 2,
                    "successful": 1,
                    "failed": 0
                },
                "_seq_no": 0,
                "_primary_term": 1
            }
    }


    async function getGroup(id) { // get group
        if (id == 991)
            return {
                "_index": "foca",
                "_type": "group",
                "_id": "991",
                "_version": 3,
                "found": true,
                "_source": {
                    "name": "Group991_name",
                    "description": "Description of Group991",
                    "teams": []
                }
            }
        else if (id == 981)
            return {
                "_index": "foca",
                "_type": "group",
                "_id": "981",
                "_version": 3,
                "found": true,
                "_source": {
                    "name": "Group991_name",
                    "description": "Description of Group991",
                    "teams": [{
                            "name": "Rio Ave FC",
                            "id": "496"
                        },
                        {
                            "name": "Sporting Clube de Portugal",
                            "id": "498"
                        }
                    ]
                }
            }
        else throw {
            _index: 'foca',
            _type: 'group',
            _id: id,
            found: false
        }
    }


    async function getGroups() {
        return {}
    }

    async function insertTeam(group_id, team_id, team_name) {
        if (group_id == 981)
            return "done"
        else
            throw "error"
    }

    async function updateGroup(id, name, description) {
        if (id == 981)
            return "updated"
        try {
            var group = getGroup(id)
        } catch (e) {
            throw {
                error: "group not found",
                status: 404
            }
        }
    }

    async function removeTeam(group_id, team_id, team_name) {
        if (group_id == 981 && team_id == 498)
            return "team " + team_id + " removed"
        else
            throw "not supported"
    }

    async function get(index) {
        const method = 'GET'
        let url = URL + index
        return execFetchNoBody(url, method)
    }

    async function getAll(index) {
        const method = 'GET'
        let url = URL + index + '/_search'
        return execFetchNoBody(url, method)
            .then(resObj => resObj.hits.hits.map(hit => hit._source))
    }

    async function del(index) {
        const method = 'DELETE'
        let url = URL + index
        return execFetchNoBody(url, method)
    }

    async function post(index, jsonObject) {
        const method = 'POST'
        let url = URL + index
        return jsonObject == undefined ?
            execFetchNoBody(url, method) :
            execFetchWithBody(url, method, jsonObject)
    }

    async function put(index, jsonObject) {
        const method = 'PUT'
        let url = URL + index
        return jsonObject == undefined ?
            execFetchNoBody(url, method) :
            execFetchWithBody(url, method, jsonObject)
    }

    function execFetchWithBody(url, method, jsonObject) {
        throw Error("no fetch")
    }

    function execFetchNoBody(url, method) {
        throw Error("no fetch")
    }


    async function handleError(err) {
        if (err.code == 'ECONNREFUSED')
            throw {
                error: 'no connection to elastic db',
                status: 503
            }
        else
            throw "unknown error" + err
    }

    const group_mapping = {
        "properties": {
            "name": {
                "type": "text"
            },
            "description": {
                "type": "text"
            },
            "teams": {
                "type": "object"
            }
        }
    }

    var groups = {
        group_991: undefined,
        group_992: undefined,
        group_993: undefined,
        group_981: undefined
    }
}