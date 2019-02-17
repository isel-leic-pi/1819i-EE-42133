'use strict'

module.exports = () => {
    return {
        getTeam: getTeam,
        getTeamGames: getTeamGames,
        getLeagues: getLeagues,
        getLeagueTeams: getLeagueTeams
    }

    async function getLeagues() { 
        return { message:competitions.competitions }
    }

    async function getLeagueTeams(league_id) {
        if (league_id == 2019)
            return { message: competition_2019_teams.teams }
        else
            return { message:competition_2017_teams.teams }
    }

    async function getTeam(team_id) {
        if (team_id == 498)
            return team_498_sporting
        else if (team_id == 496)
            return team_496_porto
        else if (team_id == 503)
            return team_503
    }

    async function getTeamGames(team_id, dateFrom, dateTo) {
        if (team_id == 498)
            return matches498
        if (team_id == 496)
            return matches496
    }
}

const team_496_porto = {
    "id": 496,
    "area": {
        "id": 2187,
        "name": "Portugal"
    },
    "activeCompetitions": [{
            "id": 2017,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "Primeira Liga",
            "code": "PPL",
            "plan": "TIER_ONE",
            "lastUpdated": "2018-12-11T00:50:01Z"
        },
        {
            "id": 2146,
            "area": {
                "id": 2077,
                "name": "Europe"
            },
            "name": "UEFA Europa League",
            "code": "EL",
            "plan": "TIER_TWO",
            "lastUpdated": "2018-12-13T19:17:16Z"
        },
        {
            "id": 2098,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "Taça de Portugal",
            "code": null,
            "plan": "TIER_FOUR",
            "lastUpdated": "2018-06-05T00:22:53Z"
        }
    ],
    "name": "Rio Ave FC",
    "shortName": "Rio Ave",
    "tla": "RIO",
    "crestUrl": null,
    "address": "Praça da República, n.º35, Apartado 42 Vila do Conde 4481-909",
    "phone": "+351 (252) 640590",
    "website": "http://www.rioave-fc.pt",
    "email": "geral@rioave-fc.pt",
    "founded": 1939,
    "clubColors": "Green / White",
    "venue": "Estádio do Rio Ave Futebol Clube",
    "squad": [{
            "id": 1132,
            "name": "Leonardo",
            "position": "Goalkeeper",
            "dateOfBirth": "1995-03-20T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 20,
            "role": "PLAYER"
        },
        {
            "id": 37521,
            "name": "Paulo Vitor",
            "position": "Goalkeeper",
            "dateOfBirth": "1988-11-21T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 29,
            "role": "PLAYER"
        },
        {
            "id": 45436,
            "name": "Carlos Alves",
            "position": "Goalkeeper",
            "dateOfBirth": "1998-02-18T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": 98,
            "role": "PLAYER"
        },
        {
            "id": 45438,
            "name": "Giorgi Makaridze",
            "position": "Goalkeeper",
            "dateOfBirth": "1990-03-31T00:00:00Z",
            "countryOfBirth": "Georgia",
            "nationality": "Georgia",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 9125,
            "name": "Jonathan Buatu",
            "position": "Defender",
            "dateOfBirth": "1993-09-27T00:00:00Z",
            "countryOfBirth": "Belgium",
            "nationality": "Angola",
            "shirtNumber": 5,
            "role": "PLAYER"
        },
        {
            "id": 13844,
            "name": "Junio",
            "position": "Defender",
            "dateOfBirth": "1997-02-27T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 12,
            "role": "PLAYER"
        },
        {
            "id": 15878,
            "name": "Fábio Coentrão",
            "position": "Defender",
            "dateOfBirth": "1988-03-11T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": 17,
            "role": "PLAYER"
        },
        {
            "id": 20314,
            "name": "Afonso Figueiredo",
            "position": "Defender",
            "dateOfBirth": "1993-01-06T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": 25,
            "role": "PLAYER"
        },
        {
            "id": 23245,
            "name": "Toni Borevković",
            "position": "Defender",
            "dateOfBirth": "1997-06-18T00:00:00Z",
            "countryOfBirth": "Croatia",
            "nationality": "Croatia",
            "shirtNumber": 6,
            "role": "PLAYER"
        },
        {
            "id": 43462,
            "name": "Miguel Rodrigues",
            "position": "Defender",
            "dateOfBirth": "1993-03-16T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": 3,
            "role": "PLAYER"
        },
        {
            "id": 45441,
            "name": "Nélson Monte",
            "position": "Defender",
            "dateOfBirth": "1995-07-30T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": 4,
            "role": "PLAYER"
        },
        {
            "id": 45443,
            "name": "Eliseu Cassamá",
            "position": "Defender",
            "dateOfBirth": "1994-02-06T00:00:00Z",
            "countryOfBirth": "Guinea-Bissau",
            "nationality": "Guinea-Bissau",
            "shirtNumber": 22,
            "role": "PLAYER"
        },
        {
            "id": 1849,
            "name": "João Schmidt",
            "position": "Midfielder",
            "dateOfBirth": "1993-05-19T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 15,
            "role": "PLAYER"
        },
        {
            "id": 23292,
            "name": "Nikola Jambor",
            "position": "Midfielder",
            "dateOfBirth": "1995-09-25T00:00:00Z",
            "countryOfBirth": "Croatia",
            "nationality": "Croatia",
            "shirtNumber": 23,
            "role": "PLAYER"
        },
        {
            "id": 37363,
            "name": "Galeno",
            "position": "Midfielder",
            "dateOfBirth": "1997-10-22T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 90,
            "role": "PLAYER"
        },
        {
            "id": 37833,
            "name": "Carlos",
            "position": "Midfielder",
            "dateOfBirth": "1995-03-25T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 95,
            "role": "PLAYER"
        },
        {
            "id": 45210,
            "name": "Matheus Reis",
            "position": "Midfielder",
            "dateOfBirth": "1995-02-18T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 2,
            "role": "PLAYER"
        },
        {
            "id": 45233,
            "name": "Joca",
            "position": "Midfielder",
            "dateOfBirth": "1996-01-30T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": 30,
            "role": "PLAYER"
        },
        {
            "id": 45450,
            "name": "Tarantini",
            "position": "Midfielder",
            "dateOfBirth": "1983-10-07T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": 8,
            "role": "PLAYER"
        },
        {
            "id": 45454,
            "name": "Leandrinho",
            "position": "Midfielder",
            "dateOfBirth": "1993-09-25T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 21,
            "role": "PLAYER"
        },
        {
            "id": 45458,
            "name": "Diego Lopes",
            "position": "Midfielder",
            "dateOfBirth": "1994-05-03T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 10,
            "role": "PLAYER"
        },
        {
            "id": 37937,
            "name": "Ronan Jeronimo",
            "position": "Attacker",
            "dateOfBirth": "1995-04-22T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 38005,
            "name": "Gelson Dala",
            "position": "Attacker",
            "dateOfBirth": "1996-07-13T00:00:00Z",
            "countryOfBirth": "Angola",
            "nationality": "Angola",
            "shirtNumber": 57,
            "role": "PLAYER"
        },
        {
            "id": 45152,
            "name": "Bruno Moreira",
            "position": "Attacker",
            "dateOfBirth": "1987-09-06T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": 9,
            "role": "PLAYER"
        },
        {
            "id": 45463,
            "name": "Nuno Santos",
            "position": "Attacker",
            "dateOfBirth": "1995-02-13T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 45464,
            "name": "Gabrielzinho",
            "position": "Attacker",
            "dateOfBirth": "1996-03-29T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 26,
            "role": "PLAYER"
        },
        {
            "id": 74001,
            "name": "Damien Furtado",
            "position": "Attacker",
            "dateOfBirth": "1997-03-08T00:00:00Z",
            "countryOfBirth": "France",
            "nationality": "France",
            "shirtNumber": 91,
            "role": "PLAYER"
        },
        {
            "id": 76625,
            "name": "André Ricardo Ferreira Schutte",
            "position": "Attacker",
            "dateOfBirth": "1998-05-21T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": 77,
            "role": "PLAYER"
        },
        {
            "id": 74002,
            "name": "José Manuel Gomes",
            "position": null,
            "dateOfBirth": "1970-08-28T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": null,
            "role": "COACH"
        }
    ],
    "lastUpdated": "2018-10-15T15:08:59Z"
}

const team_498_sporting = {
    "id": 498,
    "area": {
        "id": 2187,
        "name": "Portugal"
    },
    "activeCompetitions": [{
            "id": 2017,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "Primeira Liga",
            "code": "PPL",
            "plan": "TIER_ONE",
            "lastUpdated": "2018-12-11T00:50:01Z"
        },
        {
            "id": 2146,
            "area": {
                "id": 2077,
                "name": "Europe"
            },
            "name": "UEFA Europa League",
            "code": "EL",
            "plan": "TIER_TWO",
            "lastUpdated": "2018-12-13T19:15:56Z"
        },
        {
            "id": 2098,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "Taça de Portugal",
            "code": null,
            "plan": "TIER_FOUR",
            "lastUpdated": "2018-06-05T00:22:53Z"
        }
    ],
    "name": "Sporting Clube de Portugal",
    "shortName": "Sporting CP",
    "tla": "SPO",
    "crestUrl": "https://upload.wikimedia.org/wikipedia/en/3/3e/Sporting_Clube_de_Portugal.png",
    "address": "Edifício Visconde de Alvalade, Apartado 42099 Lisboa 1601-801",
    "phone": "+351 (217) 516000",
    "website": "http://www.sporting.pt",
    "email": "sporting@sportmultimedia.pt",
    "founded": 1906,
    "clubColors": "Green / White",
    "venue": "Estádio José Alvalade",
    "squad": [{
            "id": 2242,
            "name": "Emiliano Viviano",
            "position": "Goalkeeper",
            "dateOfBirth": "1985-12-01T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": 1,
            "role": "PLAYER"
        },
        {
            "id": 15875,
            "name": "Romain Salin",
            "position": "Goalkeeper",
            "dateOfBirth": "1984-07-29T00:00:00Z",
            "countryOfBirth": "France",
            "nationality": "France",
            "shirtNumber": 19,
            "role": "PLAYER"
        },
        {
            "id": 39348,
            "name": "Luís Maximiano",
            "position": "Goalkeeper",
            "dateOfBirth": "1999-01-05T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": 81,
            "role": "PLAYER"
        },
        {
            "id": 45159,
            "name": "Renan Ribeiro",
            "position": "Goalkeeper",
            "dateOfBirth": "1990-03-23T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 40,
            "role": "PLAYER"
        },
        {
            "id": 1771,
            "name": "Bruno Gaspar",
            "position": "Defender",
            "dateOfBirth": "1993-04-21T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": 76,
            "role": "PLAYER"
        },
        {
            "id": 3162,
            "name": "Sebastián Coates",
            "position": "Defender",
            "dateOfBirth": "1990-10-07T00:00:00Z",
            "countryOfBirth": "Uruguay",
            "nationality": "Uruguay",
            "shirtNumber": 4,
            "role": "PLAYER"
        },
        {
            "id": 15155,
            "name": "Stefan Ristovski",
            "position": "Defender",
            "dateOfBirth": "1992-02-12T00:00:00Z",
            "countryOfBirth": "FYR Macedonia",
            "nationality": "FYR Macedonia",
            "shirtNumber": 13,
            "role": "PLAYER"
        },
        {
            "id": 15879,
            "name": "Jérémy Mathieu",
            "position": "Defender",
            "dateOfBirth": "1983-10-29T00:00:00Z",
            "countryOfBirth": "France",
            "nationality": "France",
            "shirtNumber": 22,
            "role": "PLAYER"
        },
        {
            "id": 15880,
            "name": "André Pinto",
            "position": "Defender",
            "dateOfBirth": "1989-10-05T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": 6,
            "role": "PLAYER"
        },
        {
            "id": 15882,
            "name": "Lumor Agbenyenu",
            "position": "Defender",
            "dateOfBirth": "1996-08-18T00:00:00Z",
            "countryOfBirth": "Ghana",
            "nationality": "Ghana",
            "shirtNumber": 20,
            "role": "PLAYER"
        },
        {
            "id": 37428,
            "name": "Raphinha",
            "position": "Defender",
            "dateOfBirth": "1996-02-14T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 21,
            "role": "PLAYER"
        },
        {
            "id": 37757,
            "name": "Mauro Riquicho",
            "position": "Defender",
            "dateOfBirth": "1995-04-07T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 45387,
            "name": "Jefferson",
            "position": "Defender",
            "dateOfBirth": "1988-07-05T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 5,
            "role": "PLAYER"
        },
        {
            "id": 45440,
            "name": "Marcelo",
            "position": "Defender",
            "dateOfBirth": "1989-07-27T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 2,
            "role": "PLAYER"
        },
        {
            "id": 2034,
            "name": "Stefano Sturaro",
            "position": "Midfielder",
            "dateOfBirth": "1993-03-09T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 2072,
            "name": "Nani",
            "position": "Midfielder",
            "dateOfBirth": "1986-11-17T00:00:00Z",
            "countryOfBirth": "Cape Verde Islands",
            "nationality": "Portugal",
            "shirtNumber": 17,
            "role": "PLAYER"
        },
        {
            "id": 3212,
            "name": "Marcos Acuña",
            "position": "Midfielder",
            "dateOfBirth": "1991-10-28T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": 9,
            "role": "PLAYER"
        },
        {
            "id": 3257,
            "name": "Bruno Fernandes",
            "position": "Midfielder",
            "dateOfBirth": "1994-09-08T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": 8,
            "role": "PLAYER"
        },
        {
            "id": 15158,
            "name": "Josip Mišić",
            "position": "Midfielder",
            "dateOfBirth": "1994-06-28T00:00:00Z",
            "countryOfBirth": "Croatia",
            "nationality": "Croatia",
            "shirtNumber": 27,
            "role": "PLAYER"
        },
        {
            "id": 15883,
            "name": "Bruno César",
            "position": "Midfielder",
            "dateOfBirth": "1988-11-03T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 11,
            "role": "PLAYER"
        },
        {
            "id": 15885,
            "name": "Rodrigo Battaglia",
            "position": "Midfielder",
            "dateOfBirth": "1991-07-12T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": 16,
            "role": "PLAYER"
        },
        {
            "id": 15886,
            "name": "Radoslav Petrović",
            "position": "Midfielder",
            "dateOfBirth": "1989-03-08T00:00:00Z",
            "countryOfBirth": "Serbia",
            "nationality": "Serbia",
            "shirtNumber": 25,
            "role": "PLAYER"
        },
        {
            "id": 15887,
            "name": "Rúben Ribeiro",
            "position": "Midfielder",
            "dateOfBirth": "1987-08-01T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 15888,
            "name": "Wendel",
            "position": "Midfielder",
            "dateOfBirth": "1997-08-28T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 37,
            "role": "PLAYER"
        },
        {
            "id": 21410,
            "name": "Nemanja Gudelj",
            "position": "Midfielder",
            "dateOfBirth": "1991-11-16T00:00:00Z",
            "countryOfBirth": "Serbia",
            "nationality": "Serbia",
            "shirtNumber": 86,
            "role": "PLAYER"
        },
        {
            "id": 37131,
            "name": "Miguel Luís",
            "position": "Midfielder",
            "dateOfBirth": "1999-02-27T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": 90,
            "role": "PLAYER"
        },
        {
            "id": 7605,
            "name": "Luc Castaignos",
            "position": "Attacker",
            "dateOfBirth": "1992-09-27T00:00:00Z",
            "countryOfBirth": "Netherlands",
            "nationality": "Netherlands",
            "shirtNumber": 30,
            "role": "PLAYER"
        },
        {
            "id": 8889,
            "name": "Abdoulay Diaby",
            "position": "Attacker",
            "dateOfBirth": "1991-05-21T00:00:00Z",
            "countryOfBirth": "France",
            "nationality": "Mali",
            "shirtNumber": 23,
            "role": "PLAYER"
        },
        {
            "id": 9407,
            "name": "Carlos Mané",
            "position": "Attacker",
            "dateOfBirth": "1994-03-11T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": 18,
            "role": "PLAYER"
        },
        {
            "id": 15889,
            "name": "Bas Dost",
            "position": "Attacker",
            "dateOfBirth": "1989-05-31T00:00:00Z",
            "countryOfBirth": "Netherlands",
            "nationality": "Netherlands",
            "shirtNumber": 28,
            "role": "PLAYER"
        },
        {
            "id": 15893,
            "name": "Fredy Montero",
            "position": "Attacker",
            "dateOfBirth": "1987-07-26T00:00:00Z",
            "countryOfBirth": "Colombia",
            "nationality": "Colombia",
            "shirtNumber": 10,
            "role": "PLAYER"
        },
        {
            "id": 37116,
            "name": "Jovane Cabral",
            "position": "Attacker",
            "dateOfBirth": "1998-06-14T00:00:00Z",
            "countryOfBirth": "Cape Verde Islands",
            "nationality": "Cape Verde Islands",
            "shirtNumber": 77,
            "role": "PLAYER"
        },
        {
            "id": 98932,
            "name": "Tiago Manuel Matos Da Costa",
            "position": null,
            "dateOfBirth": "1981-08-17T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": null,
            "role": "COACH"
        }
    ],
    "lastUpdated": "2018-10-15T15:08:59Z"
}

const team_503 = {
    "id": 503,
    "area": {
        "id": 2187,
        "name": "Portugal"
    },
    "activeCompetitions": [{
            "id": 2001,
            "area": {
                "id": 2077,
                "name": "Europe"
            },
            "name": "UEFA Champions League",
            "code": "CL",
            "plan": "TIER_ONE",
            "lastUpdated": "2018-12-13T18:55:02Z"
        },
        {
            "id": 2017,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "Primeira Liga",
            "code": "PPL",
            "plan": "TIER_ONE",
            "lastUpdated": "2018-12-14T14:15:09Z"
        },
        {
            "id": 2098,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "Taça de Portugal",
            "code": null,
            "plan": "TIER_FOUR",
            "lastUpdated": "2018-06-05T00:22:53Z"
        }
    ],
    "name": "FC Porto",
    "shortName": "Porto",
    "tla": "POR",
    "crestUrl": "http://upload.wikimedia.org/wikipedia/de/e/ed/FC_Porto_1922-2005.svg",
    "address": "Estádio do Dragão, Entrada Poente - Piso 3 Porto 4350-451",
    "phone": "+351 (022) 5070500",
    "website": "http://www.fcporto.pt",
    "email": "geral@portosad.pt",
    "founded": 1893,
    "clubColors": "Blue / White",
    "venue": "Estádio Do Dragão",
    "squad": [{
            "id": 15898,
            "name": "Iker Casillas",
            "position": "Goalkeeper",
            "dateOfBirth": "1981-05-20T00:00:00Z",
            "countryOfBirth": "Spain",
            "nationality": "Spain",
            "shirtNumber": 1,
            "role": "PLAYER"
        },
        {
            "id": 15900,
            "name": "Fabiano",
            "position": "Goalkeeper",
            "dateOfBirth": "1988-02-29T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 15901,
            "name": "Vaná",
            "position": "Goalkeeper",
            "dateOfBirth": "1991-04-25T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 26,
            "role": "PLAYER"
        },
        {
            "id": 1337,
            "name": "Éder Militão",
            "position": "Defender",
            "dateOfBirth": "1998-01-18T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 3,
            "role": "PLAYER"
        },
        {
            "id": 3163,
            "name": "Maxi Pereira",
            "position": "Defender",
            "dateOfBirth": "1984-06-08T00:00:00Z",
            "countryOfBirth": "Uruguay",
            "nationality": "Uruguay",
            "shirtNumber": 2,
            "role": "PLAYER"
        },
        {
            "id": 7918,
            "name": "Chancel Mbemba",
            "position": "Defender",
            "dateOfBirth": "1994-08-08T00:00:00Z",
            "countryOfBirth": "Congo DR",
            "nationality": "Congo DR",
            "shirtNumber": 19,
            "role": "PLAYER"
        },
        {
            "id": 8754,
            "name": "Jorge",
            "position": "Defender",
            "dateOfBirth": "1996-03-28T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 15903,
            "name": "Felipe",
            "position": "Defender",
            "dateOfBirth": "1989-05-16T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 28,
            "role": "PLAYER"
        },
        {
            "id": 15904,
            "name": "Alex Telles",
            "position": "Defender",
            "dateOfBirth": "1992-12-15T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 13,
            "role": "PLAYER"
        },
        {
            "id": 37377,
            "name": "Diogo Queirós",
            "position": "Defender",
            "dateOfBirth": "1999-01-05T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 37796,
            "name": "Diogo Leite",
            "position": "Defender",
            "dateOfBirth": "1999-01-23T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": 4,
            "role": "PLAYER"
        },
        {
            "id": 1387,
            "name": "João Pedro",
            "position": "Midfielder",
            "dateOfBirth": "1996-11-15T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 3294,
            "name": "Héctor Herrera",
            "position": "Midfielder",
            "dateOfBirth": "1990-04-19T00:00:00Z",
            "countryOfBirth": "Mexico",
            "nationality": "Mexico",
            "shirtNumber": 16,
            "role": "PLAYER"
        },
        {
            "id": 3296,
            "name": "Jesús Manuel Corona",
            "position": "Midfielder",
            "dateOfBirth": "1993-01-06T00:00:00Z",
            "countryOfBirth": "Mexico",
            "nationality": "Mexico",
            "shirtNumber": 17,
            "role": "PLAYER"
        },
        {
            "id": 3393,
            "name": "Chidozie Awaziem",
            "position": "Midfielder",
            "dateOfBirth": "1997-01-01T00:00:00Z",
            "countryOfBirth": "Nigeria",
            "nationality": "Nigeria",
            "shirtNumber": 5,
            "role": "PLAYER"
        },
        {
            "id": 9428,
            "name": "Riechedly Bazoer",
            "position": "Midfielder",
            "dateOfBirth": "1996-10-12T00:00:00Z",
            "countryOfBirth": "Netherlands",
            "nationality": "Netherlands",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 15907,
            "name": "Yacine Brahimi",
            "position": "Midfielder",
            "dateOfBirth": "1990-02-08T00:00:00Z",
            "countryOfBirth": "France",
            "nationality": "Algeria",
            "shirtNumber": 8,
            "role": "PLAYER"
        },
        {
            "id": 15909,
            "name": "Danilo Pereira",
            "position": "Midfielder",
            "dateOfBirth": "1991-09-09T00:00:00Z",
            "countryOfBirth": "Guinea-Bissau",
            "nationality": "Portugal",
            "shirtNumber": 22,
            "role": "PLAYER"
        },
        {
            "id": 15910,
            "name": "Otávio",
            "position": "Midfielder",
            "dateOfBirth": "1995-02-09T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 25,
            "role": "PLAYER"
        },
        {
            "id": 15911,
            "name": "Óliver Torres",
            "position": "Midfielder",
            "dateOfBirth": "1994-11-10T00:00:00Z",
            "countryOfBirth": "Spain",
            "nationality": "Spain",
            "shirtNumber": 10,
            "role": "PLAYER"
        },
        {
            "id": 15912,
            "name": "Sergio Oliveira",
            "position": "Midfielder",
            "dateOfBirth": "1992-06-02T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": 27,
            "role": "PLAYER"
        },
        {
            "id": 94,
            "name": "Adrián",
            "position": "Attacker",
            "dateOfBirth": "1988-01-08T00:00:00Z",
            "countryOfBirth": "Spain",
            "nationality": "Spain",
            "shirtNumber": 20,
            "role": "PLAYER"
        },
        {
            "id": 15914,
            "name": "Tiquinho",
            "position": "Attacker",
            "dateOfBirth": "1991-01-17T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 29,
            "role": "PLAYER"
        },
        {
            "id": 15915,
            "name": "Vincent Aboubakar",
            "position": "Attacker",
            "dateOfBirth": "1992-01-22T00:00:00Z",
            "countryOfBirth": "Cameroon",
            "nationality": "Cameroon",
            "shirtNumber": 9,
            "role": "PLAYER"
        },
        {
            "id": 15916,
            "name": "Hernâni",
            "position": "Attacker",
            "dateOfBirth": "1991-08-20T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": 7,
            "role": "PLAYER"
        },
        {
            "id": 15917,
            "name": "Moussa Maréga",
            "position": "Attacker",
            "dateOfBirth": "1991-04-14T00:00:00Z",
            "countryOfBirth": "France",
            "nationality": "Mali",
            "shirtNumber": 11,
            "role": "PLAYER"
        },
        {
            "id": 37357,
            "name": "André Pereira",
            "position": "Attacker",
            "dateOfBirth": "1995-05-05T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": 21,
            "role": "PLAYER"
        },
        {
            "id": 76174,
            "name": "Marius Mouandilmadji",
            "position": "Attacker",
            "dateOfBirth": "1997-01-22T00:00:00Z",
            "countryOfBirth": "Chad",
            "nationality": "Chad",
            "shirtNumber": 14,
            "role": "PLAYER"
        },
        {
            "id": 15922,
            "name": "Sergio  Conceição",
            "position": null,
            "dateOfBirth": "1974-11-15T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": null,
            "role": "COACH"
        }
    ],
    "lastUpdated": "2018-10-15T15:09:00Z"
}

const matches498 = {
    "count": 21,
    "filters": {
        "permission": "TIER_ONE",
        "dateFrom": "2018-12-17",
        "dateTo": "2019-05-26",
        "limit": 100
    },
    "matches": [{
            "id": 241295,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2018-12-23T20:00:00Z",
            "status": "SCHEDULED",
            "matchday": 14,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-10T19:33:03Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 5543,
                "name": "Vitória SC"
            },
            "awayTeam": {
                "id": 498,
                "name": "Sporting Clube de Portugal"
            },
            "referees": []
        },
        {
            "id": 241302,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-01-02T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 15,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:02Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 498,
                "name": "Sporting Clube de Portugal"
            },
            "awayTeam": {
                "id": 5568,
                "name": "CF Os Belenenses"
            },
            "referees": []
        },
        {
            "id": 241316,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-01-06T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 16,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:02Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 1049,
                "name": "CD Tondela"
            },
            "awayTeam": {
                "id": 498,
                "name": "Sporting Clube de Portugal"
            },
            "referees": []
        },
        {
            "id": 241319,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-01-17T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 17,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:02Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 498,
                "name": "Sporting Clube de Portugal"
            },
            "awayTeam": {
                "id": 503,
                "name": "FC Porto"
            },
            "referees": []
        },
        {
            "id": 241328,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-01-19T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 18,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:03Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 498,
                "name": "Sporting Clube de Portugal"
            },
            "awayTeam": {
                "id": 583,
                "name": "Moreirense FC"
            },
            "referees": []
        },
        {
            "id": 241340,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-01-30T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 19,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:03Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 5620,
                "name": "Vitória FC"
            },
            "awayTeam": {
                "id": 498,
                "name": "Sporting Clube de Portugal"
            },
            "referees": []
        },
        {
            "id": 241346,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-02-03T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 20,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:03Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 498,
                "name": "Sporting Clube de Portugal"
            },
            "awayTeam": {
                "id": 1903,
                "name": "Sport Lisboa e Benfica"
            },
            "referees": []
        },
        {
            "id": 241358,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-02-10T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 21,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:04Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 5565,
                "name": "CD Feirense"
            },
            "awayTeam": {
                "id": 498,
                "name": "Sporting Clube de Portugal"
            },
            "referees": []
        },
        {
            "id": 241366,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-02-17T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 22,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:04Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 498,
                "name": "Sporting Clube de Portugal"
            },
            "awayTeam": {
                "id": 5613,
                "name": "Sporting Clube de Braga"
            },
            "referees": []
        },
        {
            "id": 241372,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-02-24T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 23,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:05Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 5575,
                "name": "CS Marítimo"
            },
            "awayTeam": {
                "id": 498,
                "name": "Sporting Clube de Portugal"
            },
            "referees": []
        },
        {
            "id": 241384,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-03-03T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 24,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:05Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 498,
                "name": "Sporting Clube de Portugal"
            },
            "awayTeam": {
                "id": 5601,
                "name": "Portimonense SC"
            },
            "referees": []
        },
        {
            "id": 241397,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-03-10T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 25,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:06Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 810,
                "name": "Boavista FC"
            },
            "awayTeam": {
                "id": 498,
                "name": "Sporting Clube de Portugal"
            },
            "referees": []
        },
        {
            "id": 241401,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-03-17T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 26,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:06Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 498,
                "name": "Sporting Clube de Portugal"
            },
            "awayTeam": {
                "id": 5530,
                "name": "CD Santa Clara"
            },
            "referees": []
        },
        {
            "id": 241414,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-03-31T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 27,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:06Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 1103,
                "name": "GD Chaves"
            },
            "awayTeam": {
                "id": 498,
                "name": "Sporting Clube de Portugal"
            },
            "referees": []
        },
        {
            "id": 241419,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-04-07T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 28,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:07Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 498,
                "name": "Sporting Clube de Portugal"
            },
            "awayTeam": {
                "id": 496,
                "name": "Rio Ave FC"
            },
            "referees": []
        },
        {
            "id": 241430,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-04-14T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 29,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:07Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 5544,
                "name": "CD Aves"
            },
            "awayTeam": {
                "id": 498,
                "name": "Sporting Clube de Portugal"
            },
            "referees": []
        },
        {
            "id": 241435,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-04-20T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 30,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:07Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 5529,
                "name": "CD Nacional"
            },
            "awayTeam": {
                "id": 498,
                "name": "Sporting Clube de Portugal"
            },
            "referees": []
        },
        {
            "id": 241446,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-04-28T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 31,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:08Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 498,
                "name": "Sporting Clube de Portugal"
            },
            "awayTeam": {
                "id": 5543,
                "name": "Vitória SC"
            },
            "referees": []
        },
        {
            "id": 241458,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-05-05T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 32,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:08Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 5568,
                "name": "CF Os Belenenses"
            },
            "awayTeam": {
                "id": 498,
                "name": "Sporting Clube de Portugal"
            },
            "referees": []
        },
        {
            "id": 241463,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-05-12T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 33,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:08Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 498,
                "name": "Sporting Clube de Portugal"
            },
            "awayTeam": {
                "id": 1049,
                "name": "CD Tondela"
            },
            "referees": []
        },
        {
            "id": 241470,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-05-19T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 34,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:09Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 503,
                "name": "FC Porto"
            },
            "awayTeam": {
                "id": 498,
                "name": "Sporting Clube de Portugal"
            },
            "referees": []
        }
    ]
}

const matches496 = {
    "count": 21,
    "filters": {
        "permission": "TIER_ONE",
        "dateFrom": "2018-12-17",
        "dateTo": "2019-05-26",
        "limit": 100
    },
    "matches": [{
            "id": 241290,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2018-12-23T15:00:00Z",
            "status": "SCHEDULED",
            "matchday": 14,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-10T19:33:03Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 503,
                "name": "FC Porto"
            },
            "awayTeam": {
                "id": 496,
                "name": "Rio Ave FC"
            },
            "referees": []
        },
        {
            "id": 241301,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-01-02T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 15,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:02Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 496,
                "name": "Rio Ave FC"
            },
            "awayTeam": {
                "id": 583,
                "name": "Moreirense FC"
            },
            "referees": []
        },
        {
            "id": 241312,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-01-06T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 16,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:02Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 1903,
                "name": "Sport Lisboa e Benfica"
            },
            "awayTeam": {
                "id": 496,
                "name": "Rio Ave FC"
            },
            "referees": []
        },
        {
            "id": 241318,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-01-17T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 17,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:02Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 496,
                "name": "Rio Ave FC"
            },
            "awayTeam": {
                "id": 5620,
                "name": "Vitória FC"
            },
            "referees": []
        },
        {
            "id": 241327,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-01-19T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 18,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:03Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 496,
                "name": "Rio Ave FC"
            },
            "awayTeam": {
                "id": 5565,
                "name": "CD Feirense"
            },
            "referees": []
        },
        {
            "id": 241337,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-01-30T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 19,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:03Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 5575,
                "name": "CS Marítimo"
            },
            "awayTeam": {
                "id": 496,
                "name": "Rio Ave FC"
            },
            "referees": []
        },
        {
            "id": 241345,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-02-03T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 20,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:03Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 496,
                "name": "Rio Ave FC"
            },
            "awayTeam": {
                "id": 1049,
                "name": "CD Tondela"
            },
            "referees": []
        },
        {
            "id": 241359,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-02-10T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 21,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:04Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 5601,
                "name": "Portimonense SC"
            },
            "awayTeam": {
                "id": 496,
                "name": "Rio Ave FC"
            },
            "referees": []
        },
        {
            "id": 241365,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-02-17T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 22,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:04Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 496,
                "name": "Rio Ave FC"
            },
            "awayTeam": {
                "id": 5530,
                "name": "CD Santa Clara"
            },
            "referees": []
        },
        {
            "id": 241378,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-02-24T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 23,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:05Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 810,
                "name": "Boavista FC"
            },
            "awayTeam": {
                "id": 496,
                "name": "Rio Ave FC"
            },
            "referees": []
        },
        {
            "id": 241383,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-03-03T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 24,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:05Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 496,
                "name": "Rio Ave FC"
            },
            "awayTeam": {
                "id": 5613,
                "name": "Sporting Clube de Braga"
            },
            "referees": []
        },
        {
            "id": 241396,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-03-10T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 25,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:06Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 1103,
                "name": "GD Chaves"
            },
            "awayTeam": {
                "id": 496,
                "name": "Rio Ave FC"
            },
            "referees": []
        },
        {
            "id": 241399,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-03-17T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 26,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:06Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 5529,
                "name": "CD Nacional"
            },
            "awayTeam": {
                "id": 496,
                "name": "Rio Ave FC"
            },
            "referees": []
        },
        {
            "id": 241409,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-03-31T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 27,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:06Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 496,
                "name": "Rio Ave FC"
            },
            "awayTeam": {
                "id": 5544,
                "name": "CD Aves"
            },
            "referees": []
        },
        {
            "id": 241419,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-04-07T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 28,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:07Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 498,
                "name": "Sporting Clube de Portugal"
            },
            "awayTeam": {
                "id": 496,
                "name": "Rio Ave FC"
            },
            "referees": []
        },
        {
            "id": 241427,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-04-14T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 29,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:07Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 496,
                "name": "Rio Ave FC"
            },
            "awayTeam": {
                "id": 5543,
                "name": "Vitória SC"
            },
            "referees": []
        },
        {
            "id": 241440,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-04-20T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 30,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:07Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 5568,
                "name": "CF Os Belenenses"
            },
            "awayTeam": {
                "id": 496,
                "name": "Rio Ave FC"
            },
            "referees": []
        },
        {
            "id": 241445,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-04-28T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 31,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:08Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 496,
                "name": "Rio Ave FC"
            },
            "awayTeam": {
                "id": 503,
                "name": "FC Porto"
            },
            "referees": []
        },
        {
            "id": 241454,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-05-05T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 32,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:08Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 583,
                "name": "Moreirense FC"
            },
            "awayTeam": {
                "id": 496,
                "name": "Rio Ave FC"
            },
            "referees": []
        },
        {
            "id": 241462,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-05-12T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 33,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:08Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 496,
                "name": "Rio Ave FC"
            },
            "awayTeam": {
                "id": 1903,
                "name": "Sport Lisboa e Benfica"
            },
            "referees": []
        },
        {
            "id": 241475,
            "competition": {
                "id": 2017,
                "name": "Primeira Liga"
            },
            "season": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 13,
                "winner": null
            },
            "utcDate": "2019-05-19T00:00:00Z",
            "status": "SCHEDULED",
            "matchday": 34,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2018-12-05T13:33:09Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 5620,
                "name": "Vitória FC"
            },
            "awayTeam": {
                "id": 496,
                "name": "Rio Ave FC"
            },
            "referees": []
        }
    ]
}

const team_98 = {
    "id": 98,
    "area": {
        "id": 2114,
        "name": "Italy"
    },
    "activeCompetitions": [
        {
            "id": 2124,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "Supercoppa",
            "code": null,
            "plan": "TIER_FOUR",
            "lastUpdated": "2018-06-05T00:14:07Z"
        },
        {
            "id": 2122,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "Coppa Italia",
            "code": "CIT",
            "plan": "TIER_THREE",
            "lastUpdated": "2018-12-06T22:44:21Z"
        },
        {
            "id": 2019,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "Serie A",
            "code": "SA",
            "plan": "TIER_ONE",
            "lastUpdated": "2018-12-27T19:55:05Z"
        },
        {
            "id": 2146,
            "area": {
                "id": 2077,
                "name": "Europe"
            },
            "name": "UEFA Europa League",
            "code": "EL",
            "plan": "TIER_TWO",
            "lastUpdated": "2018-12-14T22:45:01Z"
        }
    ],
    "name": "AC Milan",
    "shortName": "Milan",
    "tla": "MIL",
    "crestUrl": "http://upload.wikimedia.org/wikipedia/de/9/9e/AC_Mailand_Logo.svg",
    "address": "Via Filippo Turati 3 Milano 20121",
    "phone": "+39 (02) 62281",
    "website": "http://www.acmilan.com",
    "email": null,
    "founded": 1899,
    "clubColors": "Red / Black",
    "venue": "Stadio Giuseppe Meazza",
    "squad": [
        {
            "id": 1731,
            "name": "Gianluigi Donnarumma",
            "position": "Goalkeeper",
            "dateOfBirth": "1999-02-25T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": 99,
            "role": "PLAYER"
        },
        {
            "id": 1733,
            "name": "Marco Storari",
            "position": "Goalkeeper",
            "dateOfBirth": "1977-01-07T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 1734,
            "name": "Antonio Donnarumma",
            "position": "Goalkeeper",
            "dateOfBirth": "1990-07-07T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": 90,
            "role": "PLAYER"
        },
        {
            "id": 1735,
            "name": "Matteo Soncin",
            "position": "Goalkeeper",
            "dateOfBirth": "2001-03-28T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 2082,
            "name": "Pepe Reina",
            "position": "Goalkeeper",
            "dateOfBirth": "1982-08-31T00:00:00Z",
            "countryOfBirth": "Spain",
            "nationality": "Spain",
            "shirtNumber": 25,
            "role": "PLAYER"
        },
        {
            "id": 1736,
            "name": "Ignazio Abate",
            "position": "Defender",
            "dateOfBirth": "1986-11-12T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": 20,
            "role": "PLAYER"
        },
        {
            "id": 1737,
            "name": "Cristián Zapata",
            "position": "Defender",
            "dateOfBirth": "1986-09-30T00:00:00Z",
            "countryOfBirth": "Colombia",
            "nationality": "Colombia",
            "shirtNumber": 17,
            "role": "PLAYER"
        },
        {
            "id": 1738,
            "name": "Davide Calabria",
            "position": "Defender",
            "dateOfBirth": "1996-12-06T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": 2,
            "role": "PLAYER"
        },
        {
            "id": 1740,
            "name": "Alessio Romagnoli",
            "position": "Defender",
            "dateOfBirth": "1995-01-12T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": 13,
            "role": "PLAYER"
        },
        {
            "id": 1742,
            "name": "Andrea Conti",
            "position": "Defender",
            "dateOfBirth": "1994-03-02T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": 12,
            "role": "PLAYER"
        },
        {
            "id": 1745,
            "name": "Ricardo Rodriguez",
            "position": "Defender",
            "dateOfBirth": "1992-08-25T00:00:00Z",
            "countryOfBirth": "Switzerland",
            "nationality": "Switzerland",
            "shirtNumber": 68,
            "role": "PLAYER"
        },
        {
            "id": 1746,
            "name": "Mateo Musacchio",
            "position": "Defender",
            "dateOfBirth": "1990-08-26T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": 22,
            "role": "PLAYER"
        },
        {
            "id": 1747,
            "name": "Franck Kessié",
            "position": "Defender",
            "dateOfBirth": "1996-12-19T00:00:00Z",
            "countryOfBirth": "Côte d’Ivoire",
            "nationality": "Côte d’Ivoire",
            "shirtNumber": 79,
            "role": "PLAYER"
        },
        {
            "id": 1748,
            "name": "Raoul Bellanova",
            "position": "Defender",
            "dateOfBirth": "2000-06-17T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": 95,
            "role": "PLAYER"
        },
        {
            "id": 1833,
            "name": "Mattia Caldara",
            "position": "Defender",
            "dateOfBirth": "1994-05-05T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": 33,
            "role": "PLAYER"
        },
        {
            "id": 2217,
            "name": "Stefan Simič",
            "position": "Defender",
            "dateOfBirth": "1995-01-20T00:00:00Z",
            "countryOfBirth": "Czech Republic",
            "nationality": "Czech Republic",
            "shirtNumber": 56,
            "role": "PLAYER"
        },
        {
            "id": 2252,
            "name": "Ivan Strinić",
            "position": "Defender",
            "dateOfBirth": "1987-07-17T00:00:00Z",
            "countryOfBirth": "Croatia",
            "nationality": "Croatia",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 1749,
            "name": "Riccardo Montolivo",
            "position": "Midfielder",
            "dateOfBirth": "1985-01-18T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": 18,
            "role": "PLAYER"
        },
        {
            "id": 1750,
            "name": "Giacomo Bonaventura",
            "position": "Midfielder",
            "dateOfBirth": "1989-08-22T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": 5,
            "role": "PLAYER"
        },
        {
            "id": 1752,
            "name": "Suso",
            "position": "Midfielder",
            "dateOfBirth": "1993-11-19T00:00:00Z",
            "countryOfBirth": "Spain",
            "nationality": "Spain",
            "shirtNumber": 8,
            "role": "PLAYER"
        },
        {
            "id": 1754,
            "name": "Hakan Çalhanoğlu",
            "position": "Midfielder",
            "dateOfBirth": "1994-02-08T00:00:00Z",
            "countryOfBirth": "Germany",
            "nationality": "Turkey",
            "shirtNumber": 10,
            "role": "PLAYER"
        },
        {
            "id": 1755,
            "name": "Lucas Biglia",
            "position": "Midfielder",
            "dateOfBirth": "1986-01-30T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": 21,
            "role": "PLAYER"
        },
        {
            "id": 1756,
            "name": "Josè Mauri",
            "position": "Midfielder",
            "dateOfBirth": "1996-05-16T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Italy",
            "shirtNumber": 4,
            "role": "PLAYER"
        },
        {
            "id": 1973,
            "name": "Diego Laxalt",
            "position": "Midfielder",
            "dateOfBirth": "1993-02-07T00:00:00Z",
            "countryOfBirth": "Uruguay",
            "nationality": "Uruguay",
            "shirtNumber": 93,
            "role": "PLAYER"
        },
        {
            "id": 1979,
            "name": "Andrea Bertolacci",
            "position": "Midfielder",
            "dateOfBirth": "1991-01-11T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": 16,
            "role": "PLAYER"
        },
        {
            "id": 3131,
            "name": "Alen Halilović",
            "position": "Midfielder",
            "dateOfBirth": "1996-06-18T00:00:00Z",
            "countryOfBirth": "Croatia",
            "nationality": "Croatia",
            "shirtNumber": 77,
            "role": "PLAYER"
        },
        {
            "id": 7812,
            "name": "Tiemoué Bakayoko",
            "position": "Midfielder",
            "dateOfBirth": "1994-08-17T00:00:00Z",
            "countryOfBirth": "France",
            "nationality": "France",
            "shirtNumber": 14,
            "role": "PLAYER"
        },
        {
            "id": 1757,
            "name": "Patrick Cutrone",
            "position": "Attacker",
            "dateOfBirth": "1998-01-03T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": 63,
            "role": "PLAYER"
        },
        {
            "id": 1758,
            "name": "Fabio Borini",
            "position": "Attacker",
            "dateOfBirth": "1991-03-29T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": 11,
            "role": "PLAYER"
        },
        {
            "id": 1763,
            "name": "Franck Tsadjout",
            "position": "Attacker",
            "dateOfBirth": "1999-07-28T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": 96,
            "role": "PLAYER"
        },
        {
            "id": 1765,
            "name": "Emmanuel Torres",
            "position": "Attacker",
            "dateOfBirth": "1992-01-24T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 2047,
            "name": "Gonzalo Higuaín",
            "position": "Attacker",
            "dateOfBirth": "1987-12-10T00:00:00Z",
            "countryOfBirth": "France",
            "nationality": "Argentina",
            "shirtNumber": 9,
            "role": "PLAYER"
        },
        {
            "id": 33126,
            "name": "Samu Castillejo",
            "position": "Attacker",
            "dateOfBirth": "1995-01-18T00:00:00Z",
            "countryOfBirth": "Spain",
            "nationality": "Spain",
            "shirtNumber": 7,
            "role": "PLAYER"
        },
        {
            "id": 11088,
            "name": "Gennaro Gattuso",
            "position": null,
            "dateOfBirth": "1978-01-09T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": null,
            "role": "COACH"
        }
    ],
    "lastUpdated": "2018-10-15T15:08:31Z"
}

const team_108 = {
    "id": 108,
    "area": {
        "id": 2114,
        "name": "Italy"
    },
    "activeCompetitions": [
        {
            "id": 2001,
            "area": {
                "id": 2077,
                "name": "Europe"
            },
            "name": "UEFA Champions League",
            "code": "CL",
            "plan": "TIER_ONE",
            "lastUpdated": "2018-12-13T18:55:02Z"
        },
        {
            "id": 2122,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "Coppa Italia",
            "code": "CIT",
            "plan": "TIER_THREE",
            "lastUpdated": "2018-12-06T22:44:21Z"
        },
        {
            "id": 2019,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "Serie A",
            "code": "SA",
            "plan": "TIER_ONE",
            "lastUpdated": "2018-12-27T19:55:05Z"
        }
    ],
    "name": "FC Internazionale Milano",
    "shortName": "Inter",
    "tla": "INT",
    "crestUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Inter_Milan.svg/316px-Inter_Milan.svg",
    "address": "Corso Vittorio Emanuele II 9 Milano 20122",
    "phone": "+39 (02) 77151",
    "website": "http://www.inter.it",
    "email": "segreteriaccic@inter.it",
    "founded": 1908,
    "clubColors": "Blue / Black",
    "venue": "Stadio Giuseppe Meazza",
    "squad": [
        {
            "id": 1991,
            "name": "Samir Handanovič",
            "position": "Goalkeeper",
            "dateOfBirth": "1984-07-14T00:00:00Z",
            "countryOfBirth": "Slovenia",
            "nationality": "Slovenia",
            "shirtNumber": 1,
            "role": "PLAYER"
        },
        {
            "id": 1992,
            "name": "Tommaso Berni",
            "position": "Goalkeeper",
            "dateOfBirth": "1983-03-06T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": 46,
            "role": "PLAYER"
        },
        {
            "id": 1993,
            "name": "Daniele Padelli",
            "position": "Goalkeeper",
            "dateOfBirth": "1985-10-25T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": 27,
            "role": "PLAYER"
        },
        {
            "id": 2819,
            "name": "Raffaele Di Gennaro",
            "position": "Goalkeeper",
            "dateOfBirth": "1993-10-03T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 116,
            "name": "Šime Vrsaljko",
            "position": "Defender",
            "dateOfBirth": "1992-01-10T00:00:00Z",
            "countryOfBirth": "Croatia",
            "nationality": "Croatia",
            "shirtNumber": 2,
            "role": "PLAYER"
        },
        {
            "id": 1995,
            "name": "Danilo D'Ambrosio",
            "position": "Defender",
            "dateOfBirth": "1988-09-09T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": 33,
            "role": "PLAYER"
        },
        {
            "id": 1997,
            "name": "Miranda",
            "position": "Defender",
            "dateOfBirth": "1984-09-07T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 23,
            "role": "PLAYER"
        },
        {
            "id": 1998,
            "name": "Andrea Ranocchi",
            "position": "Defender",
            "dateOfBirth": "1988-02-16T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": 13,
            "role": "PLAYER"
        },
        {
            "id": 1999,
            "name": "Dalbert Henrique",
            "position": "Defender",
            "dateOfBirth": "1993-09-08T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": 29,
            "role": "PLAYER"
        },
        {
            "id": 2053,
            "name": "Stefan de Vrij",
            "position": "Defender",
            "dateOfBirth": "1992-02-05T00:00:00Z",
            "countryOfBirth": "Netherlands",
            "nationality": "Netherlands",
            "shirtNumber": 6,
            "role": "PLAYER"
        },
        {
            "id": 1813,
            "name": "Radja Nainggolan",
            "position": "Midfielder",
            "dateOfBirth": "1988-05-04T00:00:00Z",
            "countryOfBirth": "Belgium",
            "nationality": "Belgium",
            "shirtNumber": 14,
            "role": "PLAYER"
        },
        {
            "id": 2003,
            "name": "Marcelo Brozović",
            "position": "Midfielder",
            "dateOfBirth": "1992-11-16T00:00:00Z",
            "countryOfBirth": "Croatia",
            "nationality": "Croatia",
            "shirtNumber": 77,
            "role": "PLAYER"
        },
        {
            "id": 2004,
            "name": "Ivan Perišić",
            "position": "Midfielder",
            "dateOfBirth": "1989-02-02T00:00:00Z",
            "countryOfBirth": "Croatia",
            "nationality": "Croatia",
            "shirtNumber": 44,
            "role": "PLAYER"
        },
        {
            "id": 2005,
            "name": "Antonio Candreva",
            "position": "Midfielder",
            "dateOfBirth": "1987-02-28T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": 87,
            "role": "PLAYER"
        },
        {
            "id": 2006,
            "name": "Roberto Gagliardini",
            "position": "Midfielder",
            "dateOfBirth": "1994-04-07T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": 5,
            "role": "PLAYER"
        },
        {
            "id": 2007,
            "name": "Milan Škriniar",
            "position": "Midfielder",
            "dateOfBirth": "1995-02-11T00:00:00Z",
            "countryOfBirth": "Slovakia",
            "nationality": "Slovakia",
            "shirtNumber": 37,
            "role": "PLAYER"
        },
        {
            "id": 2008,
            "name": "Borja Valero",
            "position": "Midfielder",
            "dateOfBirth": "1985-01-12T00:00:00Z",
            "countryOfBirth": "Spain",
            "nationality": "Spain",
            "shirtNumber": 20,
            "role": "PLAYER"
        },
        {
            "id": 2009,
            "name": "Matías Vecino",
            "position": "Midfielder",
            "dateOfBirth": "1991-08-24T00:00:00Z",
            "countryOfBirth": "Uruguay",
            "nationality": "Uruguay",
            "shirtNumber": 8,
            "role": "PLAYER"
        },
        {
            "id": 2010,
            "name": "Assane Gnoukouri",
            "position": "Midfielder",
            "dateOfBirth": "1996-09-28T00:00:00Z",
            "countryOfBirth": "Côte d’Ivoire",
            "nationality": "Côte d’Ivoire",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 2033,
            "name": "Kwadwo Asamoah",
            "position": "Midfielder",
            "dateOfBirth": "1988-12-09T00:00:00Z",
            "countryOfBirth": "Ghana",
            "nationality": "Ghana",
            "shirtNumber": 18,
            "role": "PLAYER"
        },
        {
            "id": 2193,
            "name": "Matteo Politano",
            "position": "Midfielder",
            "dateOfBirth": "1993-08-03T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": 16,
            "role": "PLAYER"
        },
        {
            "id": 3253,
            "name": "João Mário",
            "position": "Midfielder",
            "dateOfBirth": "1993-01-19T00:00:00Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": 15,
            "role": "PLAYER"
        },
        {
            "id": 2014,
            "name": "Mauro Icardi",
            "position": "Attacker",
            "dateOfBirth": "1993-02-19T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": 9,
            "role": "PLAYER"
        },
        {
            "id": 3220,
            "name": "Lautaro Martínez",
            "position": "Attacker",
            "dateOfBirth": "1997-08-22T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": 10,
            "role": "PLAYER"
        },
        {
            "id": 3637,
            "name": "Keïta Baldé",
            "position": "Attacker",
            "dateOfBirth": "1995-03-08T00:00:00Z",
            "countryOfBirth": "Spain",
            "nationality": "Senegal",
            "shirtNumber": 11,
            "role": "PLAYER"
        },
        {
            "id": 10997,
            "name": "Luciano Spalletti",
            "position": null,
            "dateOfBirth": "1959-03-07T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": null,
            "role": "COACH"
        },
        {
            "id": 11102,
            "name": "Giulio Nuciari",
            "position": null,
            "dateOfBirth": "1960-04-21T00:00:00Z",
            "countryOfBirth": "Italy",
            "nationality": "Italy",
            "shirtNumber": null,
            "role": "GOALKEEPER_COACH"
        }
    ],
    "lastUpdated": "2018-10-15T15:08:35Z"
}

const competitions = {
    "count": 147,
    "filters": {},
    "competitions": [
        {
            "id": 2006,
            "area": {
                "id": 2001,
                "name": "Africa"
            },
            "name": "WC Qualification",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 7,
                "startDate": "2015-10-07",
                "endDate": "2017-11-14",
                "currentMatchday": 6,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-06-04T23:54:04Z"
        },
        {
            "id": 2025,
            "area": {
                "id": 2011,
                "name": "Argentina"
            },
            "name": "Supercopa Argentina",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 27,
                "startDate": "2018-03-15",
                "endDate": "2018-03-15",
                "currentMatchday": null,
                "winner": {
                    "id": 2069,
                    "name": "CA River Plate",
                    "shortName": "River Plate",
                    "tla": "RIV",
                    "crestUrl": null
                }
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-06-04T23:54:32Z"
        },
        {
            "id": 2023,
            "area": {
                "id": 2011,
                "name": "Argentina"
            },
            "name": "Primera B Nacional",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 295,
                "startDate": "2018-08-25",
                "endDate": "2019-04-20",
                "currentMatchday": 14,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-13T19:00:17Z"
        },
        {
            "id": 2024,
            "area": {
                "id": 2011,
                "name": "Argentina"
            },
            "name": "Superliga Argentina",
            "code": "ASL",
            "emblemUrl": null,
            "plan": "TIER_TWO",
            "currentSeason": {
                "id": 282,
                "startDate": "2018-08-11",
                "endDate": "2019-04-07",
                "currentMatchday": 8,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-14T03:39:37Z"
        },
        {
            "id": 2008,
            "area": {
                "id": 2015,
                "name": "Australia"
            },
            "name": "A League",
            "code": "AAL",
            "emblemUrl": null,
            "plan": "TIER_TWO",
            "currentSeason": {
                "id": 283,
                "startDate": "2018-10-19",
                "endDate": "2019-04-28",
                "currentMatchday": 10,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-28T12:29:48Z"
        },
        {
            "id": 2026,
            "area": {
                "id": 2015,
                "name": "Australia"
            },
            "name": "FFA Cup",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 28,
                "startDate": "2018-02-10",
                "endDate": "2018-08-29",
                "currentMatchday": null,
                "winner": {
                    "id": 1833,
                    "name": "Adelaide United FC",
                    "shortName": "Adelaide Utd",
                    "tla": "ADE",
                    "crestUrl": null
                }
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-10-30T12:09:45Z"
        },
        {
            "id": 2012,
            "area": {
                "id": 2016,
                "name": "Austria"
            },
            "name": "Bundesliga",
            "code": "ABL",
            "emblemUrl": null,
            "plan": "TIER_THREE",
            "currentSeason": {
                "id": 208,
                "startDate": "2018-07-27",
                "endDate": "2019-03-17",
                "currentMatchday": 19,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-17T21:45:05Z"
        },
        {
            "id": 2022,
            "area": {
                "id": 2016,
                "name": "Austria"
            },
            "name": "Playoffs 1/2",
            "code": "APL",
            "emblemUrl": null,
            "plan": "TIER_TWO",
            "currentSeason": {
                "id": 24,
                "startDate": "2018-05-31",
                "endDate": "2018-06-03",
                "currentMatchday": null,
                "winner": {
                    "id": 2022,
                    "name": "SKN Sankt Pölten",
                    "shortName": "St. Pölten",
                    "tla": "STP",
                    "crestUrl": null
                }
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-08-23T15:47:33Z"
        },
        {
            "id": 2027,
            "area": {
                "id": 2016,
                "name": "Austria"
            },
            "name": "ÖFB Cup",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 162,
                "startDate": "2018-07-20",
                "endDate": "2019-05-31",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-11-01T15:26:04Z"
        },
        {
            "id": 2020,
            "area": {
                "id": 2016,
                "name": "Austria"
            },
            "name": "Erste Liga",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 161,
                "startDate": "2018-07-27",
                "endDate": "2019-06-01",
                "currentMatchday": 16,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-11-25T15:18:43Z"
        },
        {
            "id": 2009,
            "area": {
                "id": 2023,
                "name": "Belgium"
            },
            "name": "Jupiler Pro League",
            "code": "BJL",
            "emblemUrl": null,
            "plan": "TIER_TWO",
            "currentSeason": {
                "id": 163,
                "startDate": "2018-07-27",
                "endDate": "2019-03-17",
                "currentMatchday": 21,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-27T22:18:49Z"
        },
        {
            "id": 2028,
            "area": {
                "id": 2023,
                "name": "Belgium"
            },
            "name": "Coupe de Belgique",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 166,
                "startDate": "2018-07-29",
                "endDate": "2019-05-31",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-20T14:55:01Z"
        },
        {
            "id": 2010,
            "area": {
                "id": 2023,
                "name": "Belgium"
            },
            "name": "Supercoupe de Belgique",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 165,
                "startDate": "2018-07-22",
                "endDate": "2018-07-22",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-06-04T23:58:10Z"
        },
        {
            "id": 2032,
            "area": {
                "id": 2023,
                "name": "Belgium"
            },
            "name": "Playoffs II",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 34,
                "startDate": "2018-03-31",
                "endDate": "2018-05-23",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-06-02T13:08:02Z"
        },
        {
            "id": 2033,
            "area": {
                "id": 2023,
                "name": "Belgium"
            },
            "name": "Division 1B",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 164,
                "startDate": "2018-08-03",
                "endDate": "2019-03-01",
                "currentMatchday": 21,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-24T17:25:03Z"
        },
        {
            "id": 2034,
            "area": {
                "id": 2028,
                "name": "Bolivia"
            },
            "name": "LFPB",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 36,
                "startDate": "2018-01-27",
                "endDate": "2018-11-28",
                "currentMatchday": 21,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-12-27T17:25:49Z"
        },
        {
            "id": 2035,
            "area": {
                "id": 2030,
                "name": "Bosnia and Herzegovina"
            },
            "name": "Premier Liga",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 167,
                "startDate": "2018-07-21",
                "endDate": "2019-02-09",
                "currentMatchday": 20,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-03T17:20:08Z"
        },
        {
            "id": 2013,
            "area": {
                "id": 2032,
                "name": "Brazil"
            },
            "name": "Série A",
            "code": "BSA",
            "emblemUrl": null,
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 15,
                "startDate": "2018-04-14",
                "endDate": "2018-12-02",
                "currentMatchday": 38,
                "winner": {
                    "id": 1776,
                    "name": "São Paulo FC",
                    "shortName": "São Paulo",
                    "tla": "SAO",
                    "crestUrl": null
                }
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-12-03T22:10:11Z"
        },
        {
            "id": 2038,
            "area": {
                "id": 2032,
                "name": "Brazil"
            },
            "name": "Série D",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 40,
                "startDate": "2018-04-21",
                "endDate": "2018-08-04",
                "currentMatchday": 6,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-06-04T23:59:34Z"
        },
        {
            "id": 2036,
            "area": {
                "id": 2032,
                "name": "Brazil"
            },
            "name": "Série C",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 38,
                "startDate": "2018-04-14",
                "endDate": "2018-08-28",
                "currentMatchday": 18,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-09-24T02:30:06Z"
        },
        {
            "id": 2029,
            "area": {
                "id": 2032,
                "name": "Brazil"
            },
            "name": "Série B",
            "code": "BSB",
            "emblemUrl": null,
            "plan": "TIER_THREE",
            "currentSeason": {
                "id": 31,
                "startDate": "2018-04-14",
                "endDate": "2018-11-24",
                "currentMatchday": 38,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-11-25T20:25:17Z"
        },
        {
            "id": 2037,
            "area": {
                "id": 2032,
                "name": "Brazil"
            },
            "name": "Copa do Brasil",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 39,
                "startDate": "2018-01-30",
                "endDate": "2018-08-17",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-10-19T23:40:00Z"
        },
        {
            "id": 2039,
            "area": {
                "id": 2035,
                "name": "Bulgaria"
            },
            "name": "Kupa na Bulgarija",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 419,
                "startDate": "2018-09-25",
                "endDate": "2019-05-31",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-06-05T00:00:10Z"
        },
        {
            "id": 2040,
            "area": {
                "id": 2035,
                "name": "Bulgaria"
            },
            "name": "A PFG",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 168,
                "startDate": "2018-07-20",
                "endDate": "2019-03-16",
                "currentMatchday": 21,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-17T21:50:05Z"
        },
        {
            "id": 2041,
            "area": {
                "id": 2040,
                "name": "Canada"
            },
            "name": "Canadian Championship",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 43,
                "startDate": "2018-06-07",
                "endDate": "2018-08-16",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-06-05T00:01:12Z"
        },
        {
            "id": 2043,
            "area": {
                "id": 2045,
                "name": "Chile"
            },
            "name": "Supercopa de Chile",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 45,
                "startDate": "2018-01-26",
                "endDate": "2018-01-26",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-06-05T00:01:51Z"
        },
        {
            "id": 2048,
            "area": {
                "id": 2045,
                "name": "Chile"
            },
            "name": "Primera División",
            "code": "CPD",
            "emblemUrl": null,
            "plan": "TIER_THREE",
            "currentSeason": {
                "id": 51,
                "startDate": "2018-02-03",
                "endDate": "2018-12-01",
                "currentMatchday": 30,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-03T21:15:11Z"
        },
        {
            "id": 2042,
            "area": {
                "id": 2045,
                "name": "Chile"
            },
            "name": "Playoffs 1/2",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 44,
                "startDate": "2017-11-25",
                "endDate": "2017-12-21",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-06-05T00:01:23Z"
        },
        {
            "id": 2044,
            "area": {
                "id": 2046,
                "name": "China PR"
            },
            "name": "Chinese Super League",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 46,
                "startDate": "2018-03-02",
                "endDate": "2018-11-12",
                "currentMatchday": 30,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-11-11T17:31:36Z"
        },
        {
            "id": 2045,
            "area": {
                "id": 2049,
                "name": "Colombia"
            },
            "name": "Liga Postobón",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 47,
                "startDate": "2018-02-03",
                "endDate": "2018-11-11",
                "currentMatchday": 19,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-12-17T20:25:07Z"
        },
        {
            "id": 2046,
            "area": {
                "id": 2049,
                "name": "Colombia"
            },
            "name": "Superliga de Colombia",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 48,
                "startDate": "2018-02-01",
                "endDate": "2018-02-08",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-06-05T00:02:32Z"
        },
        {
            "id": 2047,
            "area": {
                "id": 2058,
                "name": "Croatia"
            },
            "name": "Prva Liga",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 170,
                "startDate": "2018-07-27",
                "endDate": "2019-05-25",
                "currentMatchday": 18,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-17T21:45:05Z"
        },
        {
            "id": 2049,
            "area": {
                "id": 2062,
                "name": "Czech Republic"
            },
            "name": "Synot Liga",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 171,
                "startDate": "2018-07-20",
                "endDate": "2019-04-27",
                "currentMatchday": 20,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-18T16:35:01Z"
        },
        {
            "id": 2051,
            "area": {
                "id": 2065,
                "name": "Denmark"
            },
            "name": "DBU Pokalen",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 173,
                "startDate": "2018-08-07",
                "endDate": "2019-05-31",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-06T02:05:03Z"
        },
        {
            "id": 2050,
            "area": {
                "id": 2065,
                "name": "Denmark"
            },
            "name": "Superliga",
            "code": "DSU",
            "emblemUrl": null,
            "plan": "TIER_THREE",
            "currentSeason": {
                "id": 172,
                "startDate": "2018-07-13",
                "endDate": "2019-03-17",
                "currentMatchday": 21,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-18T16:35:01Z"
        },
        {
            "id": 2141,
            "area": {
                "id": 2065,
                "name": "Denmark"
            },
            "name": "Play Offs 1/2",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": null,
            "numberOfAvailableSeasons": 0,
            "lastUpdated": "2018-07-13T13:34:22Z"
        },
        {
            "id": 2052,
            "area": {
                "id": 2069,
                "name": "Ecuador"
            },
            "name": "Copa Pilsener Serie A",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 55,
                "startDate": "2018-02-17",
                "endDate": "2018-12-09",
                "currentMatchday": 22,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-12-17T21:50:05Z"
        },
        {
            "id": 2030,
            "area": {
                "id": 2072,
                "name": "England"
            },
            "name": "League One",
            "code": "EL1",
            "emblemUrl": null,
            "plan": "TIER_TWO",
            "currentSeason": {
                "id": 152,
                "startDate": "2018-08-04",
                "endDate": "2019-05-04",
                "currentMatchday": 25,
                "winner": null
            },
            "numberOfAvailableSeasons": 10,
            "lastUpdated": "2018-12-26T18:40:13Z"
        },
        {
            "id": 2021,
            "area": {
                "id": 2072,
                "name": "England"
            },
            "name": "Premier League",
            "code": "PL",
            "emblemUrl": null,
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 20,
                "winner": null
            },
            "numberOfAvailableSeasons": 26,
            "lastUpdated": "2018-12-28T00:05:00Z"
        },
        {
            "id": 2056,
            "area": {
                "id": 2072,
                "name": "England"
            },
            "name": "FA Community Shield",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 60,
                "startDate": "2018-08-05",
                "endDate": "2018-08-05",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-06-05T00:05:10Z"
        },
        {
            "id": 2053,
            "area": {
                "id": 2072,
                "name": "England"
            },
            "name": "National League",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 174,
                "startDate": "2018-08-04",
                "endDate": "2019-04-27",
                "currentMatchday": 27,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-27T14:55:05Z"
        },
        {
            "id": 2139,
            "area": {
                "id": 2072,
                "name": "England"
            },
            "name": "Football League Cup",
            "code": "FLC",
            "emblemUrl": null,
            "plan": "TIER_THREE",
            "currentSeason": {
                "id": 176,
                "startDate": "2018-08-14",
                "endDate": "2019-02-24",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-20T01:15:01Z"
        },
        {
            "id": 2054,
            "area": {
                "id": 2072,
                "name": "England"
            },
            "name": "League Two",
            "code": "EL2",
            "emblemUrl": null,
            "plan": "TIER_THREE",
            "currentSeason": {
                "id": 153,
                "startDate": "2018-08-04",
                "endDate": "2019-05-04",
                "currentMatchday": 25,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-26T18:49:09Z"
        },
        {
            "id": 2055,
            "area": {
                "id": 2072,
                "name": "England"
            },
            "name": "FA Cup",
            "code": "FAC",
            "emblemUrl": null,
            "plan": "TIER_TWO",
            "currentSeason": {
                "id": 207,
                "startDate": "2018-08-10",
                "endDate": "2019-05-18",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-19T11:10:01Z"
        },
        {
            "id": 2016,
            "area": {
                "id": 2072,
                "name": "England"
            },
            "name": "Championship",
            "code": "ELC",
            "emblemUrl": null,
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 154,
                "startDate": "2018-08-03",
                "endDate": "2019-05-05",
                "currentMatchday": 25,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-26T18:40:13Z"
        },
        {
            "id": 2057,
            "area": {
                "id": 2075,
                "name": "Estonia"
            },
            "name": "Meistriliiga",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 61,
                "startDate": "2018-03-03",
                "endDate": "2018-11-10",
                "currentMatchday": 36,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-11-10T21:12:18Z"
        },
        {
            "id": 2018,
            "area": {
                "id": 2077,
                "name": "Europe"
            },
            "name": "European Championship",
            "code": "EC",
            "emblemUrl": null,
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 20,
                "startDate": "2016-06-10",
                "endDate": "2016-07-10",
                "currentMatchday": 3,
                "winner": {
                    "id": 765,
                    "name": "Portugal",
                    "shortName": "Portugal",
                    "tla": "POR",
                    "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg"
                }
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-08-23T12:16:01Z"
        },
        {
            "id": 2001,
            "area": {
                "id": 2077,
                "name": "Europe"
            },
            "name": "UEFA Champions League",
            "code": "CL",
            "emblemUrl": "https://upload.wikimedia.org/wikipedia/en/b/bf/UEFA_Champions_League_logo_2.svg",
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 175,
                "startDate": "2018-06-26",
                "endDate": "2019-06-01",
                "currentMatchday": 7,
                "winner": null
            },
            "numberOfAvailableSeasons": 19,
            "lastUpdated": "2018-12-13T18:55:02Z"
        },
        {
            "id": 2058,
            "area": {
                "id": 2077,
                "name": "Europe"
            },
            "name": "UEFA Women's EURO",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 62,
                "startDate": "2017-07-16",
                "endDate": "2017-08-06",
                "currentMatchday": 3,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-06-05T00:06:08Z"
        },
        {
            "id": 2146,
            "area": {
                "id": 2077,
                "name": "Europe"
            },
            "name": "UEFA Europa League",
            "code": "EL",
            "emblemUrl": null,
            "plan": "TIER_TWO",
            "currentSeason": {
                "id": 293,
                "startDate": "2018-06-26",
                "endDate": "2019-05-29",
                "currentMatchday": 7,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-12-14T22:45:01Z"
        },
        {
            "id": 2007,
            "area": {
                "id": 2077,
                "name": "Europe"
            },
            "name": "WC Qualification",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 8,
                "startDate": "2016-09-04",
                "endDate": "2017-11-14",
                "currentMatchday": 10,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-06-05T00:06:41Z"
        },
        {
            "id": 2031,
            "area": {
                "id": 2080,
                "name": "Finland"
            },
            "name": "Veikkausliiga",
            "code": "VEI",
            "emblemUrl": null,
            "plan": "TIER_THREE",
            "currentSeason": {
                "id": 33,
                "startDate": "2018-04-07",
                "endDate": "2018-10-27",
                "currentMatchday": 33,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-11-03T17:36:56Z"
        },
        {
            "id": 2059,
            "area": {
                "id": 2080,
                "name": "Finland"
            },
            "name": "Suomen Cup",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 63,
                "startDate": "2018-01-19",
                "endDate": "2018-08-22",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-06-05T00:07:27Z"
        },
        {
            "id": 2142,
            "area": {
                "id": 2081,
                "name": "France"
            },
            "name": "Ligue 2",
            "code": "FL2",
            "emblemUrl": null,
            "plan": "TIER_TWO",
            "currentSeason": {
                "id": 210,
                "startDate": "2018-07-27",
                "endDate": "2019-05-17",
                "currentMatchday": 20,
                "winner": null
            },
            "numberOfAvailableSeasons": 21,
            "lastUpdated": "2018-12-23T15:30:07Z"
        },
        {
            "id": 2143,
            "area": {
                "id": 2081,
                "name": "France"
            },
            "name": "Playoffs 1/2",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 211,
                "startDate": "2018-05-23",
                "endDate": "2018-05-27",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-07-12T14:32:17Z"
        },
        {
            "id": 2138,
            "area": {
                "id": 2081,
                "name": "France"
            },
            "name": "Coupe de France",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 418,
                "startDate": "2018-11-17",
                "endDate": "2019-04-27",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-17T10:55:05Z"
        },
        {
            "id": 2135,
            "area": {
                "id": 2081,
                "name": "France"
            },
            "name": "Coupe de la Ligue",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 284,
                "startDate": "2018-08-14",
                "endDate": "2019-03-30",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-20T11:30:02Z"
        },
        {
            "id": 2144,
            "area": {
                "id": 2081,
                "name": "France"
            },
            "name": "Playoffs 2/3",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 212,
                "startDate": "2018-05-22",
                "endDate": "2018-05-27",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-09-25T15:07:37Z"
        },
        {
            "id": 2136,
            "area": {
                "id": 2081,
                "name": "France"
            },
            "name": "Trophée des Champions",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 206,
                "startDate": "2018-08-04",
                "endDate": "2018-08-04",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-06-05T00:08:21Z"
        },
        {
            "id": 2015,
            "area": {
                "id": 2081,
                "name": "France"
            },
            "name": "Ligue 1",
            "code": "FL1",
            "emblemUrl": null,
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 177,
                "startDate": "2018-08-10",
                "endDate": "2019-05-25",
                "currentMatchday": 18,
                "winner": null
            },
            "numberOfAvailableSeasons": 8,
            "lastUpdated": "2018-12-24T00:45:00Z"
        },
        {
            "id": 2134,
            "area": {
                "id": 2088,
                "name": "Germany"
            },
            "name": "DFL Super Cup",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 158,
                "startDate": "2018-08-12",
                "endDate": "2018-08-12",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-06-05T00:10:19Z"
        },
        {
            "id": 2129,
            "area": {
                "id": 2088,
                "name": "Germany"
            },
            "name": "Regionalliga",
            "code": "REG",
            "emblemUrl": null,
            "plan": "TIER_THREE",
            "currentSeason": {
                "id": 178,
                "startDate": "2018-07-12",
                "endDate": "2019-05-18",
                "currentMatchday": 20,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-16T06:00:09Z"
        },
        {
            "id": 2004,
            "area": {
                "id": 2088,
                "name": "Germany"
            },
            "name": "2. Bundesliga",
            "code": "BL2",
            "emblemUrl": null,
            "plan": "TIER_TWO",
            "currentSeason": {
                "id": 157,
                "startDate": "2018-08-03",
                "endDate": "2019-05-19",
                "currentMatchday": 19,
                "winner": null
            },
            "numberOfAvailableSeasons": 23,
            "lastUpdated": "2018-12-23T18:01:32Z"
        },
        {
            "id": 2140,
            "area": {
                "id": 2088,
                "name": "Germany"
            },
            "name": "3. Liga",
            "code": "BL3",
            "emblemUrl": null,
            "plan": "TIER_THREE",
            "currentSeason": {
                "id": 150,
                "startDate": "2018-07-27",
                "endDate": "2019-05-18",
                "currentMatchday": 21,
                "winner": null
            },
            "numberOfAvailableSeasons": 6,
            "lastUpdated": "2018-12-23T19:22:51Z"
        },
        {
            "id": 2002,
            "area": {
                "id": 2088,
                "name": "Germany"
            },
            "name": "Bundesliga",
            "code": "BL1",
            "emblemUrl": null,
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 155,
                "startDate": "2018-08-24",
                "endDate": "2019-05-18",
                "currentMatchday": 18,
                "winner": null
            },
            "numberOfAvailableSeasons": 23,
            "lastUpdated": "2018-12-24T00:45:00Z"
        },
        {
            "id": 2133,
            "area": {
                "id": 2088,
                "name": "Germany"
            },
            "name": "Frauen Bundesliga",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 142,
                "startDate": "2017-09-02",
                "endDate": "2018-06-03",
                "currentMatchday": 22,
                "winner": {
                    "id": 7522,
                    "name": "VfL Wolfsburg",
                    "shortName": null,
                    "tla": null,
                    "crestUrl": null
                }
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-06-05T00:09:39Z"
        },
        {
            "id": 2011,
            "area": {
                "id": 2088,
                "name": "Germany"
            },
            "name": "DFB-Pokal",
            "code": "DFB",
            "emblemUrl": null,
            "plan": "TIER_TWO",
            "currentSeason": {
                "id": 12,
                "startDate": "2018-08-17",
                "endDate": "2019-05-25",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-10-31T23:25:14Z"
        },
        {
            "id": 2131,
            "area": {
                "id": 2093,
                "name": "Greece"
            },
            "name": "Greek Cup",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 420,
                "startDate": "2018-08-26",
                "endDate": "2019-08-26",
                "currentMatchday": 3,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-20T20:21:29Z"
        },
        {
            "id": 2132,
            "area": {
                "id": 2093,
                "name": "Greece"
            },
            "name": "Super League",
            "code": "GSL",
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 299,
                "startDate": "2018-08-25",
                "endDate": "2019-05-05",
                "currentMatchday": 16,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-18T16:35:01Z"
        },
        {
            "id": 2130,
            "area": {
                "id": 2106,
                "name": "Hungary"
            },
            "name": "Magyar Kupa",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 297,
                "startDate": "2019-09-22",
                "endDate": "2019-05-01",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-05T20:18:38Z"
        },
        {
            "id": 2128,
            "area": {
                "id": 2106,
                "name": "Hungary"
            },
            "name": "NB I",
            "code": "HNB",
            "emblemUrl": null,
            "plan": "TIER_THREE",
            "currentSeason": {
                "id": 179,
                "startDate": "2018-07-21",
                "endDate": "2019-05-19",
                "currentMatchday": 19,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-17T16:05:05Z"
        },
        {
            "id": 2127,
            "area": {
                "id": 2107,
                "name": "Iceland"
            },
            "name": "Úrvalsdeild",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 136,
                "startDate": "2018-04-27",
                "endDate": "2018-09-29",
                "currentMatchday": 22,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-09-30T07:05:12Z"
        },
        {
            "id": 2126,
            "area": {
                "id": 2108,
                "name": "India"
            },
            "name": "I-League",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 421,
                "startDate": "2018-10-26",
                "endDate": "2019-03-03",
                "currentMatchday": 11,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-28T15:09:48Z"
        },
        {
            "id": 2125,
            "area": {
                "id": 2113,
                "name": "Israel"
            },
            "name": "Ligat ha'Al",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 205,
                "startDate": "2018-08-25",
                "endDate": "2019-03-09",
                "currentMatchday": 16,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-27T21:22:49Z"
        },
        {
            "id": 2121,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "Serie B",
            "code": "SB",
            "emblemUrl": null,
            "plan": "TIER_TWO",
            "currentSeason": {
                "id": 294,
                "startDate": "2018-08-24",
                "endDate": "2019-05-11",
                "currentMatchday": 18,
                "winner": null
            },
            "numberOfAvailableSeasons": 14,
            "lastUpdated": "2018-12-28T00:20:00Z"
        },
        {
            "id": 2122,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "Coppa Italia",
            "code": "CIT",
            "emblemUrl": null,
            "plan": "TIER_THREE",
            "currentSeason": {
                "id": 285,
                "startDate": "2018-07-28",
                "endDate": "2019-01-13",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-06T22:44:21Z"
        },
        {
            "id": 2019,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "Serie A",
            "code": "SA",
            "emblemUrl": null,
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 290,
                "startDate": "2018-08-18",
                "endDate": "2019-05-26",
                "currentMatchday": 19,
                "winner": null
            },
            "numberOfAvailableSeasons": 14,
            "lastUpdated": "2018-12-27T19:55:05Z"
        },
        {
            "id": 2123,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "Serie C",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 298,
                "startDate": "2018-09-16",
                "endDate": "2019-05-05",
                "currentMatchday": 20,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-27T16:33:09Z"
        },
        {
            "id": 2124,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "Supercoppa",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 159,
                "startDate": "2019-01-12",
                "endDate": "2019-01-12",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-06-05T00:14:07Z"
        },
        {
            "id": 2117,
            "area": {
                "id": 2116,
                "name": "Japan"
            },
            "name": "J. League Division 2",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 126,
                "startDate": "2018-02-25",
                "endDate": "2018-11-16",
                "currentMatchday": 42,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-12-02T11:59:46Z"
        },
        {
            "id": 2118,
            "area": {
                "id": 2116,
                "name": "Japan"
            },
            "name": "J.League Cup",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 127,
                "startDate": "2018-03-07",
                "endDate": "2018-09-09",
                "currentMatchday": 6,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-10-27T23:29:20Z"
        },
        {
            "id": 2119,
            "area": {
                "id": 2116,
                "name": "Japan"
            },
            "name": "J. League",
            "code": "JJL",
            "emblemUrl": null,
            "plan": "TIER_TWO",
            "currentSeason": {
                "id": 128,
                "startDate": "2018-02-23",
                "endDate": "2018-12-01",
                "currentMatchday": 34,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-12-08T08:13:22Z"
        },
        {
            "id": 2120,
            "area": {
                "id": 2116,
                "name": "Japan"
            },
            "name": "Super Cup",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 129,
                "startDate": "2018-02-10",
                "endDate": "2018-02-10",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-06-05T00:15:43Z"
        },
        {
            "id": 2116,
            "area": {
                "id": 2129,
                "name": "Latvia"
            },
            "name": "Virslīga",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 125,
                "startDate": "2018-03-31",
                "endDate": "2018-11-10",
                "currentMatchday": 28,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-11-11T18:40:15Z"
        },
        {
            "id": 2115,
            "area": {
                "id": 2135,
                "name": "Lithuania"
            },
            "name": "A Lyga",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 124,
                "startDate": "2018-02-24",
                "endDate": "2018-10-30",
                "currentMatchday": 2,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-11-12T13:20:09Z"
        },
        {
            "id": 2114,
            "area": {
                "id": 2143,
                "name": "Malta"
            },
            "name": "Premier League",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 160,
                "startDate": "2018-08-17",
                "endDate": "2019-04-25",
                "currentMatchday": 14,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-18T15:55:00Z"
        },
        {
            "id": 2112,
            "area": {
                "id": 2149,
                "name": "Mexico"
            },
            "name": "SuperCopa MX",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 121,
                "startDate": "2018-07-15",
                "endDate": "2018-07-15",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-06-05T00:17:16Z"
        },
        {
            "id": 2113,
            "area": {
                "id": 2149,
                "name": "Mexico"
            },
            "name": "Liga MX",
            "code": "LMX",
            "emblemUrl": null,
            "plan": "TIER_THREE",
            "currentSeason": {
                "id": 186,
                "startDate": "2018-07-21",
                "endDate": "2018-11-25",
                "currentMatchday": 17,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-17T20:24:56Z"
        },
        {
            "id": 2111,
            "area": {
                "id": 2149,
                "name": "Mexico"
            },
            "name": "Copa MX",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 187,
                "startDate": "2018-07-25",
                "endDate": "2019-05-31",
                "currentMatchday": 6,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-11-02T22:15:02Z"
        },
        {
            "id": 2109,
            "area": {
                "id": 2163,
                "name": "Netherlands"
            },
            "name": "KNVB Beker",
            "code": "KNV",
            "emblemUrl": null,
            "plan": "TIER_THREE",
            "currentSeason": {
                "id": 181,
                "startDate": "2018-08-18",
                "endDate": "2018-08-25",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-21T19:45:00Z"
        },
        {
            "id": 2005,
            "area": {
                "id": 2163,
                "name": "Netherlands"
            },
            "name": "Jupiler League",
            "code": "DJL",
            "emblemUrl": null,
            "plan": "TIER_THREE",
            "currentSeason": {
                "id": 180,
                "startDate": "2018-08-17",
                "endDate": "2019-05-03",
                "currentMatchday": 20,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-23T19:45:07Z"
        },
        {
            "id": 2110,
            "area": {
                "id": 2163,
                "name": "Netherlands"
            },
            "name": "Johan Cruijff Schaal",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 182,
                "startDate": "2018-08-04",
                "endDate": "2018-08-04",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-06-05T00:18:23Z"
        },
        {
            "id": 2003,
            "area": {
                "id": 2163,
                "name": "Netherlands"
            },
            "name": "Eredivisie",
            "code": "DED",
            "emblemUrl": null,
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 156,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 18,
                "winner": null
            },
            "numberOfAvailableSeasons": 9,
            "lastUpdated": "2018-12-23T19:45:07Z"
        },
        {
            "id": 2108,
            "area": {
                "id": 2171,
                "name": "Northern Ireland"
            },
            "name": "League Cup",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 203,
                "startDate": "2018-08-04",
                "endDate": "2019-02-16",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-12T14:55:03Z"
        },
        {
            "id": 2107,
            "area": {
                "id": 2171,
                "name": "Northern Ireland"
            },
            "name": "Premiership",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 204,
                "startDate": "2018-08-04",
                "endDate": "2019-03-23",
                "currentMatchday": 23,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-27T17:50:05Z"
        },
        {
            "id": 2104,
            "area": {
                "id": 2173,
                "name": "Norway"
            },
            "name": "Playoffs 1/2",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 112,
                "startDate": "2017-11-29",
                "endDate": "2017-12-02",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-06-05T00:20:23Z"
        },
        {
            "id": 2105,
            "area": {
                "id": 2173,
                "name": "Norway"
            },
            "name": "1. divisjon",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 113,
                "startDate": "2018-04-02",
                "endDate": "2018-11-11",
                "currentMatchday": 30,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-12-09T19:03:47Z"
        },
        {
            "id": 2106,
            "area": {
                "id": 2173,
                "name": "Norway"
            },
            "name": "Tippeligaen",
            "code": "TIP",
            "emblemUrl": null,
            "plan": "TIER_THREE",
            "currentSeason": {
                "id": 114,
                "startDate": "2018-03-11",
                "endDate": "2018-11-25",
                "currentMatchday": 30,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-12-09T20:39:47Z"
        },
        {
            "id": 2103,
            "area": {
                "id": 2175,
                "name": "Oceania"
            },
            "name": "WC Qualification",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 111,
                "startDate": "2015-08-31",
                "endDate": "2017-09-05",
                "currentMatchday": 6,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-06-05T00:20:43Z"
        },
        {
            "id": 2102,
            "area": {
                "id": 2181,
                "name": "Panama"
            },
            "name": "Liga Panameña de Fútbol",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 422,
                "startDate": "2018-07-28",
                "endDate": "2019-05-31",
                "currentMatchday": 18,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-06-05T00:21:02Z"
        },
        {
            "id": 2101,
            "area": {
                "id": 2184,
                "name": "Peru"
            },
            "name": "Primera División",
            "code": "PPD",
            "emblemUrl": null,
            "plan": "TIER_THREE",
            "currentSeason": {
                "id": 109,
                "startDate": "2018-02-03",
                "endDate": "2018-11-25",
                "currentMatchday": 15,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-12-17T20:25:07Z"
        },
        {
            "id": 2099,
            "area": {
                "id": 2186,
                "name": "Poland"
            },
            "name": "Superpuchar Polski",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 107,
                "startDate": "2018-07-14",
                "endDate": "2018-07-14",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-06-05T00:21:44Z"
        },
        {
            "id": 2100,
            "area": {
                "id": 2186,
                "name": "Poland"
            },
            "name": "Puchar Polski",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 198,
                "startDate": "2018-08-07",
                "endDate": "2019-05-02",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-07T15:55:01Z"
        },
        {
            "id": 2017,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "Primeira Liga",
            "code": "PPL",
            "emblemUrl": null,
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 183,
                "startDate": "2018-08-10",
                "endDate": "2019-05-19",
                "currentMatchday": 15,
                "winner": null
            },
            "numberOfAvailableSeasons": 8,
            "lastUpdated": "2018-12-24T00:45:00Z"
        },
        {
            "id": 2096,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "Liga2 Cabovisão",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 184,
                "startDate": "2018-08-11",
                "endDate": "2019-05-19",
                "currentMatchday": 14,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-28T15:25:00Z"
        },
        {
            "id": 2097,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "Supertaça Cândido de Oliveira",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 104,
                "startDate": "2018-08-04",
                "endDate": "2018-08-04",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-06-05T00:22:37Z"
        },
        {
            "id": 2098,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "Taça de Portugal",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 425,
                "startDate": "2018-09-09",
                "endDate": "2019-05-26",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-20T11:30:02Z"
        },
        {
            "id": 2095,
            "area": {
                "id": 2192,
                "name": "Republic of Ireland"
            },
            "name": "Premier Division",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 424,
                "startDate": "2019-02-15",
                "endDate": "2019-10-27",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-10-27T15:10:10Z"
        },
        {
            "id": 2092,
            "area": {
                "id": 2194,
                "name": "Romania"
            },
            "name": "Liga II",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 423,
                "startDate": "2018-07-21",
                "endDate": "2019-05-31",
                "currentMatchday": 22,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-06-05T00:23:34Z"
        },
        {
            "id": 2093,
            "area": {
                "id": 2194,
                "name": "Romania"
            },
            "name": "Supercupa României",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 202,
                "startDate": "2018-07-14",
                "endDate": "2018-07-14",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-06-05T00:23:54Z"
        },
        {
            "id": 2094,
            "area": {
                "id": 2194,
                "name": "Romania"
            },
            "name": "Liga I",
            "code": "RL1",
            "emblemUrl": null,
            "plan": "TIER_THREE",
            "currentSeason": {
                "id": 185,
                "startDate": "2018-07-20",
                "endDate": "2019-03-02",
                "currentMatchday": 22,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-23T19:30:08Z"
        },
        {
            "id": 2090,
            "area": {
                "id": 2195,
                "name": "Russia"
            },
            "name": "Playoffs 1/2",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 96,
                "startDate": "2018-05-17",
                "endDate": "2018-05-20",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-06-05T00:24:32Z"
        },
        {
            "id": 2091,
            "area": {
                "id": 2195,
                "name": "Russia"
            },
            "name": "Russian Super Cup",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 199,
                "startDate": "2018-07-27",
                "endDate": "2018-07-27",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-06-05T00:24:42Z"
        },
        {
            "id": 2088,
            "area": {
                "id": 2195,
                "name": "Russia"
            },
            "name": "FNL",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 200,
                "startDate": "2018-07-17",
                "endDate": "2019-05-25",
                "currentMatchday": 25,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-11-25T16:50:14Z"
        },
        {
            "id": 2089,
            "area": {
                "id": 2195,
                "name": "Russia"
            },
            "name": "Russian Cup",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 287,
                "startDate": "2018-07-21",
                "endDate": "2019-05-31",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-06T17:00:03Z"
        },
        {
            "id": 2137,
            "area": {
                "id": 2195,
                "name": "Russia"
            },
            "name": "RFPL",
            "code": "RFPL",
            "emblemUrl": null,
            "plan": "TIER_TWO",
            "currentSeason": {
                "id": 201,
                "startDate": "2018-07-28",
                "endDate": "2019-05-26",
                "currentMatchday": 18,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-11T17:30:02Z"
        },
        {
            "id": 2086,
            "area": {
                "id": 2204,
                "name": "Scotland"
            },
            "name": "Playoffs 2/3",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 92,
                "startDate": "2018-05-02",
                "endDate": "2018-05-13",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-06-05T00:25:54Z"
        },
        {
            "id": 2087,
            "area": {
                "id": 2204,
                "name": "Scotland"
            },
            "name": "Scottish Cup",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 288,
                "startDate": "2018-08-11",
                "endDate": "2019-05-31",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-04T23:01:21Z"
        },
        {
            "id": 2084,
            "area": {
                "id": 2204,
                "name": "Scotland"
            },
            "name": "Premier League",
            "code": "SPL",
            "emblemUrl": null,
            "plan": "TIER_TWO",
            "currentSeason": {
                "id": 196,
                "startDate": "2018-08-04",
                "endDate": "2019-04-06",
                "currentMatchday": 21,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-27T14:45:05Z"
        },
        {
            "id": 2085,
            "area": {
                "id": 2204,
                "name": "Scotland"
            },
            "name": "Championship",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 197,
                "startDate": "2018-08-04",
                "endDate": "2019-05-04",
                "currentMatchday": 19,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-23T14:40:07Z"
        },
        {
            "id": 2083,
            "area": {
                "id": 2219,
                "name": "South Africa"
            },
            "name": "ABSA Premiership",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 289,
                "startDate": "2018-08-04",
                "endDate": "2019-08-11",
                "currentMatchday": 16,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-23T19:45:07Z"
        },
        {
            "id": 2082,
            "area": {
                "id": 2220,
                "name": "South America"
            },
            "name": "WC Qualification",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 88,
                "startDate": "2015-10-08",
                "endDate": "2017-10-11",
                "currentMatchday": 18,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-06-05T00:27:01Z"
        },
        {
            "id": 2080,
            "area": {
                "id": 2220,
                "name": "South America"
            },
            "name": "Copa America",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 85,
                "startDate": "2019-06-30",
                "endDate": "2019-06-06",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-06-05T00:26:43Z"
        },
        {
            "id": 2081,
            "area": {
                "id": 2220,
                "name": "South America"
            },
            "name": "Copa Sudamericana",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 87,
                "startDate": "2018-02-13",
                "endDate": "2018-10-03",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-12-13T18:59:36Z"
        },
        {
            "id": 2078,
            "area": {
                "id": 2224,
                "name": "Spain"
            },
            "name": "Supercopa de España",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 83,
                "startDate": "2018-08-12",
                "endDate": "2018-08-14",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-06-05T00:27:12Z"
        },
        {
            "id": 2077,
            "area": {
                "id": 2224,
                "name": "Spain"
            },
            "name": "Segunda División",
            "code": "SD",
            "emblemUrl": null,
            "plan": "TIER_TWO",
            "currentSeason": {
                "id": 286,
                "startDate": "2018-08-17",
                "endDate": "2019-06-09",
                "currentMatchday": 20,
                "winner": null
            },
            "numberOfAvailableSeasons": 7,
            "lastUpdated": "2018-12-24T00:45:00Z"
        },
        {
            "id": 2014,
            "area": {
                "id": 2224,
                "name": "Spain"
            },
            "name": "Primera Division",
            "code": "PD",
            "emblemUrl": null,
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 281,
                "startDate": "2018-08-17",
                "endDate": "2019-05-26",
                "currentMatchday": 17,
                "winner": null
            },
            "numberOfAvailableSeasons": 26,
            "lastUpdated": "2018-12-24T00:45:00Z"
        },
        {
            "id": 2079,
            "area": {
                "id": 2224,
                "name": "Spain"
            },
            "name": "Copa del Rey",
            "code": "CDR",
            "emblemUrl": null,
            "plan": "TIER_THREE",
            "currentSeason": {
                "id": 291,
                "startDate": "2018-09-05",
                "endDate": "2019-03-30",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-07T13:35:01Z"
        },
        {
            "id": 2073,
            "area": {
                "id": 2233,
                "name": "Sweden"
            },
            "name": "Allsvenskan",
            "code": "ALL",
            "emblemUrl": null,
            "plan": "TIER_THREE",
            "currentSeason": {
                "id": 77,
                "startDate": "2018-04-01",
                "endDate": "2018-11-11",
                "currentMatchday": 30,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-11-11T17:40:27Z"
        },
        {
            "id": 2074,
            "area": {
                "id": 2233,
                "name": "Sweden"
            },
            "name": "Superettan",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 78,
                "startDate": "2018-03-31",
                "endDate": "2018-11-10",
                "currentMatchday": 30,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-11-25T17:34:18Z"
        },
        {
            "id": 2075,
            "area": {
                "id": 2233,
                "name": "Sweden"
            },
            "name": "Playoffs 2/3",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 79,
                "startDate": "2017-11-08",
                "endDate": "2017-11-11",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-06-05T00:28:43Z"
        },
        {
            "id": 2076,
            "area": {
                "id": 2233,
                "name": "Sweden"
            },
            "name": "Playoffs 1/2",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 80,
                "startDate": "2017-11-15",
                "endDate": "2017-11-19",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-06-05T00:28:54Z"
        },
        {
            "id": 2071,
            "area": {
                "id": 2234,
                "name": "Switzerland"
            },
            "name": "Schweizer Pokal",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 194,
                "startDate": "2018-08-18",
                "endDate": "2019-05-31",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-11-02T11:25:01Z"
        },
        {
            "id": 2072,
            "area": {
                "id": 2234,
                "name": "Switzerland"
            },
            "name": "Super League",
            "code": "SSL",
            "emblemUrl": null,
            "plan": "TIER_THREE",
            "currentSeason": {
                "id": 195,
                "startDate": "2018-07-21",
                "endDate": "2019-05-25",
                "currentMatchday": 19,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-17T21:45:05Z"
        },
        {
            "id": 2069,
            "area": {
                "id": 2247,
                "name": "Turkey"
            },
            "name": "TFF Süper Kupa",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 73,
                "startDate": "2017-08-06",
                "endDate": "2017-08-06",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-06-05T00:30:33Z"
        },
        {
            "id": 2070,
            "area": {
                "id": 2247,
                "name": "Turkey"
            },
            "name": "Süper Lig",
            "code": "TSL",
            "emblemUrl": null,
            "plan": "TIER_THREE",
            "currentSeason": {
                "id": 192,
                "startDate": "2018-08-10",
                "endDate": "2019-05-26",
                "currentMatchday": 18,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-24T20:39:48Z"
        },
        {
            "id": 2068,
            "area": {
                "id": 2247,
                "name": "Turkey"
            },
            "name": "1. Lig",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 193,
                "startDate": "2018-08-10",
                "endDate": "2019-05-18",
                "currentMatchday": 18,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-24T18:55:08Z"
        },
        {
            "id": 2065,
            "area": {
                "id": 2253,
                "name": "Ukraine"
            },
            "name": "Kubok Ukrainy",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 190,
                "startDate": "2018-07-17",
                "endDate": "2019-05-15",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-10-31T23:25:14Z"
        },
        {
            "id": 2064,
            "area": {
                "id": 2253,
                "name": "Ukraine"
            },
            "name": "Premier Liha",
            "code": "UPL",
            "emblemUrl": null,
            "plan": "TIER_THREE",
            "currentSeason": {
                "id": 189,
                "startDate": "2018-07-22",
                "endDate": "2018-10-06",
                "currentMatchday": 11,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-09T18:44:42Z"
        },
        {
            "id": 2066,
            "area": {
                "id": 2253,
                "name": "Ukraine"
            },
            "name": "Playoffs 1/2",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 70,
                "startDate": "2018-05-23",
                "endDate": "2018-05-27",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-06-02T14:03:07Z"
        },
        {
            "id": 2067,
            "area": {
                "id": 2253,
                "name": "Ukraine"
            },
            "name": "Superkubok Ukrainy",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 191,
                "startDate": "2018-07-21",
                "endDate": "2018-07-21",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-06-05T00:30:59Z"
        },
        {
            "id": 2145,
            "area": {
                "id": 2256,
                "name": "United States"
            },
            "name": "MLS",
            "code": "MLS",
            "emblemUrl": null,
            "plan": "TIER_TWO",
            "currentSeason": {
                "id": 292,
                "startDate": "2018-03-03",
                "endDate": "2018-10-28",
                "currentMatchday": null,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-12-09T21:42:27Z"
        },
        {
            "id": 2063,
            "area": {
                "id": 2257,
                "name": "Uruguay"
            },
            "name": "Primera División",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 67,
                "startDate": "2018-02-03",
                "endDate": "2018-10-28",
                "currentMatchday": 14,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-11-11T23:21:26Z"
        },
        {
            "id": 2062,
            "area": {
                "id": 2262,
                "name": "Venezuela"
            },
            "name": "Primera División",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 66,
                "startDate": "2018-01-27",
                "endDate": "2018-12-06",
                "currentMatchday": 17,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-12-06T01:56:16Z"
        },
        {
            "id": 2061,
            "area": {
                "id": 2263,
                "name": "Vietnam"
            },
            "name": "V-League",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 65,
                "startDate": "2018-03-10",
                "endDate": "2018-10-06",
                "currentMatchday": 26,
                "winner": null
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-10-08T14:27:29Z"
        },
        {
            "id": 2060,
            "area": {
                "id": 2264,
                "name": "Wales"
            },
            "name": "Welsh Premier League",
            "code": null,
            "emblemUrl": null,
            "plan": "TIER_FOUR",
            "currentSeason": {
                "id": 188,
                "startDate": "2018-08-10",
                "endDate": "2019-01-12",
                "currentMatchday": 19,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-12-27T15:45:05Z"
        },
        {
            "id": 2000,
            "area": {
                "id": 2267,
                "name": "World"
            },
            "name": "FIFA World Cup",
            "code": "WC",
            "emblemUrl": null,
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 1,
                "startDate": "2018-06-14",
                "endDate": "2018-07-15",
                "currentMatchday": 3,
                "winner": {
                    "id": 773,
                    "name": "France",
                    "shortName": "France",
                    "tla": "FRA",
                    "crestUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
                }
            },
            "numberOfAvailableSeasons": 1,
            "lastUpdated": "2018-08-23T12:16:17Z"
        }
    ]
}

const competition_2017 = {
    "id": 2017,
    "area": {
        "id": 2187,
        "name": "Portugal"
    },
    "name": "Primeira Liga",
    "code": "PPL",
    "emblemUrl": null,
    "plan": "TIER_ONE",
    "currentSeason": {
        "id": 183,
        "startDate": "2018-08-10",
        "endDate": "2019-05-19",
        "currentMatchday": 15,
        "winner": null
    },
    "seasons": [
        {
            "id": 183,
            "startDate": "2018-08-10",
            "endDate": "2019-05-19",
            "currentMatchday": 15,
            "winner": null
        },
        {
            "id": 19,
            "startDate": "2017-08-06",
            "endDate": "2018-05-13",
            "currentMatchday": 34,
            "winner": {
                "id": 503,
                "name": "FC Porto",
                "shortName": "Porto",
                "tla": "POR",
                "crestUrl": "http://upload.wikimedia.org/wikipedia/de/e/ed/FC_Porto_1922-2005.svg"
            }
        },
        {
            "id": 358,
            "startDate": "2016-08-12",
            "endDate": "2017-05-21",
            "currentMatchday": null,
            "winner": null
        },
        {
            "id": 359,
            "startDate": "2015-08-14",
            "endDate": "2016-05-15",
            "currentMatchday": null,
            "winner": null
        },
        {
            "id": 360,
            "startDate": "2014-08-15",
            "endDate": "2015-05-24",
            "currentMatchday": null,
            "winner": null
        },
        {
            "id": 361,
            "startDate": "2013-08-16",
            "endDate": "2014-05-11",
            "currentMatchday": null,
            "winner": null
        },
        {
            "id": 362,
            "startDate": "2012-08-17",
            "endDate": "2013-05-19",
            "currentMatchday": null,
            "winner": null
        },
        {
            "id": 363,
            "startDate": "2011-08-12",
            "endDate": "2012-05-12",
            "currentMatchday": null,
            "winner": null
        }
    ],
    "lastUpdated": "2018-12-24T00:45:00Z"
}

const competition_2017_teams = {
    "count": 18,
    "filters": {},
    "competition": {
        "id": 2017,
        "area": {
            "id": 2187,
            "name": "Portugal"
        },
        "name": "Primeira Liga",
        "code": "PPL",
        "plan": "TIER_ONE",
        "lastUpdated": "2018-12-24T00:45:00Z"
    },
    "season": {
        "id": 183,
        "startDate": "2018-08-10",
        "endDate": "2019-05-19",
        "currentMatchday": 15,
        "winner": null
    },
    "teams": [
        {
            "id": 496,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "Rio Ave FC",
            "shortName": "Rio Ave",
            "tla": "RIO",
            "crestUrl": null,
            "address": "Praça da República, n.º35, Apartado 42 Vila do Conde 4481-909",
            "phone": "+351 (252) 640590",
            "website": "http://www.rioave-fc.pt",
            "email": "geral@rioave-fc.pt",
            "founded": 1939,
            "clubColors": "Green / White",
            "venue": "Estádio do Rio Ave Futebol Clube",
            "lastUpdated": "2018-10-15T15:08:59Z"
        },
        {
            "id": 498,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "Sporting Clube de Portugal",
            "shortName": "Sporting CP",
            "tla": "SPO",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/en/3/3e/Sporting_Clube_de_Portugal.png",
            "address": "Edifício Visconde de Alvalade, Apartado 42099 Lisboa 1601-801",
            "phone": "+351 (217) 516000",
            "website": "http://www.sporting.pt",
            "email": "sporting@sportmultimedia.pt",
            "founded": 1906,
            "clubColors": "Green / White",
            "venue": "Estádio José Alvalade",
            "lastUpdated": "2018-10-15T15:08:59Z"
        },
        {
            "id": 503,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "FC Porto",
            "shortName": "Porto",
            "tla": "POR",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/e/ed/FC_Porto_1922-2005.svg",
            "address": "Estádio do Dragão, Entrada Poente - Piso 3 Porto 4350-451",
            "phone": "+351 (022) 5070500",
            "website": "http://www.fcporto.pt",
            "email": "geral@portosad.pt",
            "founded": 1893,
            "clubColors": "Blue / White",
            "venue": "Estádio Do Dragão",
            "lastUpdated": "2018-10-15T15:09:00Z"
        },
        {
            "id": 583,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "Moreirense FC",
            "shortName": "Moreirense",
            "tla": "MOR",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/pt/8/8c/Logo_Moreirense.svg",
            "address": "Avenida Comendador Joaquim de Almeida Freitas Moreira de Cónegos 4815-270",
            "phone": "+351 (253) 561836",
            "website": "http://www.moreirensefc.pt",
            "email": "geral@moreirensefc.com",
            "founded": 1938,
            "clubColors": "Green / White",
            "venue": "P.D. Comendador Joaquim de Almeida Freitas",
            "lastUpdated": "2018-10-15T15:09:17Z"
        },
        {
            "id": 810,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "Boavista FC",
            "shortName": "Boavista",
            "tla": "BOA",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/en/4/40/Boavista_F.C._logo.svg",
            "address": "Rua O Primeiro de Janeiro, Boavista Porto 4100-127",
            "phone": "+351 (022) 6071000",
            "website": "http://www.boavistafc.pt",
            "email": "geral@boavistafc.pt",
            "founded": 1903,
            "clubColors": "Black / White",
            "venue": "Estádio do Bessa Século XXI",
            "lastUpdated": "2018-10-15T15:09:43Z"
        },
        {
            "id": 1049,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "CD Tondela",
            "shortName": "CD Tondela",
            "tla": "TON",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Emblema_CD_Tondela.png",
            "address": "Av. Eurico José Gouveia (Estádio) - Apartado 84 Tondela 3460-582",
            "phone": "+351 (232) 821447",
            "website": "http://www.cdtondela.pt",
            "email": "cdtondela@gmail.com",
            "founded": 1933,
            "clubColors": "Green / Yellow",
            "venue": "Estádio João Cardoso",
            "lastUpdated": "2018-10-15T15:09:48Z"
        },
        {
            "id": 1103,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "GD Chaves",
            "shortName": "Chaves",
            "tla": "CHA",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/en/0/05/G_D_Chaves.png",
            "address": "Av. do Estádio Municipal Apartado 225 Chaves 5400",
            "phone": "+351 (276) 333149",
            "website": "http://www.gdchaves.pt",
            "email": "geral@gdchaves.pt",
            "founded": 1949,
            "clubColors": "Red / Blue",
            "venue": "Estádio Municipal Eng. Manuel Branco Teixeira",
            "lastUpdated": "2018-10-15T15:09:54Z"
        },
        {
            "id": 1903,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "Sport Lisboa e Benfica",
            "shortName": "Benfica Lisboa",
            "tla": "BEN",
            "crestUrl": null,
            "address": "Av. General Norton de Matos 1500, Apartado Nº 4100 Lisboa 1501-805",
            "phone": "+351 (021) 7219558",
            "website": "http://www.slbenfica.pt",
            "email": "sec.geral@slbenfica.pt",
            "founded": 1904,
            "clubColors": "Red / White",
            "venue": "Estádio do Sport Lisboa e Benfica",
            "lastUpdated": "2018-10-15T15:10:34Z"
        },
        {
            "id": 5529,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "CD Nacional",
            "shortName": "CD Nacional",
            "tla": "CDN",
            "crestUrl": null,
            "address": "Rua do Esmeraldo, n.º 46 Funchal 9060",
            "phone": "+351 (291) 227324",
            "website": "http://www.cdnacional.pt",
            "email": "geral@cdnacional.pt",
            "founded": 1910,
            "clubColors": "Black / White",
            "venue": "Estádio da Madeira",
            "lastUpdated": "2018-10-15T15:15:57Z"
        },
        {
            "id": 5530,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "CD Santa Clara",
            "shortName": "CD Santa Clara",
            "tla": "CDS",
            "crestUrl": null,
            "address": "Rua Comandante Jaime de Sousa, 21 Ponta Delgada 9500",
            "phone": "+351 (296) 306400",
            "website": "http://www.cdsantaclara.pt",
            "email": "cdsantaclara@mail.telepac.pt",
            "founded": 1921,
            "clubColors": "Red / White",
            "venue": "Estádio de São Miguel",
            "lastUpdated": "2018-10-15T15:15:57Z"
        },
        {
            "id": 5543,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "Vitória SC",
            "shortName": "Vitória SC",
            "tla": "GUI",
            "crestUrl": null,
            "address": "Dr. António Pimenta Machado, Apartado 505 Guimarães 4802-914",
            "phone": "+351 (253) 432570",
            "website": "http://www.vitoriasc.pt",
            "email": "vitoria@vitoriasc.pt",
            "founded": 1922,
            "clubColors": "White / Black",
            "venue": "Estádio Dom Afonso Henriques",
            "lastUpdated": "2018-10-15T15:16:00Z"
        },
        {
            "id": 5544,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "CD Aves",
            "shortName": "Aves",
            "tla": "AVE",
            "crestUrl": null,
            "address": "R. Luís Gonzaga Mendes de Carvalho, 265 Vila das Aves 4795-080",
            "phone": "+351 (252) 941816",
            "website": "http://www.cdaves.pt",
            "email": "cdaves@mail.pt",
            "founded": 1930,
            "clubColors": "Red / White",
            "venue": "Estádio Clube Desportivo das Aves",
            "lastUpdated": "2018-10-15T15:16:00Z"
        },
        {
            "id": 5565,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "CD Feirense",
            "shortName": "CD Feirense",
            "tla": "FEI",
            "crestUrl": null,
            "address": "Av.ª 25 de Abril n.º 14, Apartado 27 Santa Maria da Feira 4524-909",
            "phone": "+351 (256) 362472",
            "website": "http://www.cdfeirense.pt",
            "email": "secretaria@cdfeirense.pt",
            "founded": 1918,
            "clubColors": "Blue / White",
            "venue": "Estádio Marcolino de Castro",
            "lastUpdated": "2018-10-15T15:16:05Z"
        },
        {
            "id": 5568,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "CF Os Belenenses",
            "shortName": "Belenenses",
            "tla": "BEL",
            "crestUrl": null,
            "address": "Estádio do Restelo Lisboa 1449-015",
            "phone": "+351 (021) 3010461",
            "website": "http://www.osbelenenses.com",
            "email": "cfbelenenses@clix.pt",
            "founded": 1919,
            "clubColors": "Blue / White",
            "venue": "Estádio Nacional",
            "lastUpdated": "2018-10-15T15:16:06Z"
        },
        {
            "id": 5575,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "CS Marítimo",
            "shortName": "CS Marítimo",
            "tla": "CSM",
            "crestUrl": null,
            "address": "Rua Campo do Marítimo, Santo António Funchal 9020-073",
            "phone": "+351 (291) 708300",
            "website": "http://www.csmaritimo.org.pt",
            "email": "csmaritimo@netmadeira.com",
            "founded": 1910,
            "clubColors": "Green / Red",
            "venue": "Estádio dos Barreiros",
            "lastUpdated": "2018-10-15T15:16:07Z"
        },
        {
            "id": 5601,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "Portimonense SC",
            "shortName": "Portimonense",
            "tla": "PSC",
            "crestUrl": null,
            "address": "Praça Manuel Teixeira Gomes n.º 4 -1º Portimão 8500-542",
            "phone": "+351 (282) 422427",
            "website": "http://www.portimonense.pt",
            "email": "geral@portimonensesc.pt",
            "founded": 1914,
            "clubColors": "Black / White",
            "venue": "Estádio do Portimonense SC",
            "lastUpdated": "2018-10-15T15:16:11Z"
        },
        {
            "id": 5613,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "Sporting Clube de Braga",
            "shortName": "SC Braga",
            "tla": "SCB",
            "crestUrl": null,
            "address": "Parque Norte, Monte Crasto, Apartado 12 Braga 4700-087",
            "phone": "+351 (253) 206860",
            "website": "http://www.scbraga.pt",
            "email": "mail@scbraga.pt",
            "founded": 1921,
            "clubColors": "Red / White",
            "venue": "Estádio AXA",
            "lastUpdated": "2018-10-15T15:16:13Z"
        },
        {
            "id": 5620,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "Vitória FC",
            "shortName": "Vitória FC",
            "tla": "VIS",
            "crestUrl": null,
            "address": "Estádio do Bonfim, Apartado 132 Setúbal 2902-882",
            "phone": "+351 (265) 544270",
            "website": "http://www.vfc.pt",
            "email": "sad@vfc.pt",
            "founded": 1910,
            "clubColors": "Green / White",
            "venue": "Estádio do Bonfim",
            "lastUpdated": "2018-10-15T15:16:14Z"
        }
    ]
}

const competition_2019 = {
    "id": 2019,
    "area": {
        "id": 2114,
        "name": "Italy"
    },
    "name": "Serie A",
    "code": "SA",
    "emblemUrl": null,
    "plan": "TIER_ONE",
    "currentSeason": {
        "id": 290,
        "startDate": "2018-08-18",
        "endDate": "2019-05-26",
        "currentMatchday": 19,
        "winner": null
    },
    "seasons": [
        {
            "id": 290,
            "startDate": "2018-08-18",
            "endDate": "2019-05-26",
            "currentMatchday": 19,
            "winner": null
        },
        {
            "id": 21,
            "startDate": "2017-08-19",
            "endDate": "2018-05-20",
            "currentMatchday": 38,
            "winner": {
                "id": 109,
                "name": "Juventus FC",
                "shortName": "Juventus",
                "tla": "JUV",
                "crestUrl": "http://upload.wikimedia.org/wikipedia/de/d/d2/Juventus_Turin.svg"
            }
        },
        {
            "id": 405,
            "startDate": "2016-08-20",
            "endDate": "2017-05-28",
            "currentMatchday": null,
            "winner": null
        },
        {
            "id": 406,
            "startDate": "2015-08-22",
            "endDate": "2016-05-15",
            "currentMatchday": null,
            "winner": null
        },
        {
            "id": 407,
            "startDate": "2014-08-30",
            "endDate": "2015-05-31",
            "currentMatchday": null,
            "winner": null
        },
        {
            "id": 408,
            "startDate": "2013-08-24",
            "endDate": "2014-05-18",
            "currentMatchday": null,
            "winner": null
        },
        {
            "id": 416,
            "startDate": "2012-08-25",
            "endDate": "2013-05-19",
            "currentMatchday": null,
            "winner": null
        },
        {
            "id": 409,
            "startDate": "2011-09-09",
            "endDate": "2012-05-13",
            "currentMatchday": null,
            "winner": null
        },
        {
            "id": 410,
            "startDate": "2009-08-22",
            "endDate": "2010-05-16",
            "currentMatchday": null,
            "winner": null
        },
        {
            "id": 411,
            "startDate": "2008-08-30",
            "endDate": "2009-05-31",
            "currentMatchday": null,
            "winner": null
        },
        {
            "id": 412,
            "startDate": "2007-08-25",
            "endDate": "2008-05-18",
            "currentMatchday": null,
            "winner": null
        },
        {
            "id": 413,
            "startDate": "2006-09-09",
            "endDate": "2007-05-27",
            "currentMatchday": null,
            "winner": null
        },
        {
            "id": 414,
            "startDate": "2005-08-27",
            "endDate": "2006-05-14",
            "currentMatchday": null,
            "winner": null
        },
        {
            "id": 415,
            "startDate": "2004-09-11",
            "endDate": "2005-05-29",
            "currentMatchday": null,
            "winner": null
        }
    ],
    "lastUpdated": "2018-12-27T19:55:05Z"
}

const competition_2019_teams = {
    "count": 20,
    "filters": {},
    "competition": {
        "id": 2019,
        "area": {
            "id": 2114,
            "name": "Italy"
        },
        "name": "Serie A",
        "code": "SA",
        "plan": "TIER_ONE",
        "lastUpdated": "2018-12-27T19:55:05Z"
    },
    "season": {
        "id": 290,
        "startDate": "2018-08-18",
        "endDate": "2019-05-26",
        "currentMatchday": 19,
        "winner": null
    },
    "teams": [
        {
            "id": 98,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "AC Milan",
            "shortName": "Milan",
            "tla": "MIL",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/9/9e/AC_Mailand_Logo.svg",
            "address": "Via Filippo Turati 3 Milano 20121",
            "phone": "+39 (02) 62281",
            "website": "http://www.acmilan.com",
            "email": null,
            "founded": 1899,
            "clubColors": "Red / Black",
            "venue": "Stadio Giuseppe Meazza",
            "lastUpdated": "2018-10-15T15:08:31Z"
        },
        {
            "id": 99,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "ACF Fiorentina",
            "shortName": "Fiorentina",
            "tla": "FIO",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/ACF_Fiorentina_2.svg/261px-ACF_Fiorentina_2.svg",
            "address": "Viale Manfredo Fanti 4 Firenze 50137",
            "phone": "+39 (055) 5030190",
            "website": "http://www.acffiorentina.it",
            "email": "segreteria@acffiorentina.it",
            "founded": 1926,
            "clubColors": "Purple / White",
            "venue": "Stadio Artemio Franchi",
            "lastUpdated": "2018-10-15T15:08:31Z"
        },
        {
            "id": 100,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "AS Roma",
            "shortName": "Roma",
            "tla": "ROM",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/3/32/AS_Rom.svg",
            "address": "Via di Trigoria km. 3,600 Roma 00128",
            "phone": "+39 (06) 501911",
            "website": "http://www.asroma.it",
            "email": "info@asromaweb.com",
            "founded": 1927,
            "clubColors": "Maroon / Orange / White",
            "venue": "Stadio Olimpico",
            "lastUpdated": "2018-10-15T15:08:32Z"
        },
        {
            "id": 102,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "Atalanta BC",
            "shortName": "Atalanta",
            "tla": "ATA",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/2/28/Atalanta_BC.svg",
            "address": "Corso Europa, 46, Zingonia Ciserano 24040",
            "phone": "+39 (035) 4186211",
            "website": "http://www.atalanta.it",
            "email": "info@atalanta.it",
            "founded": 1904,
            "clubColors": "Black / Blue",
            "venue": "Stadio Atleti Azzurri d'Italia",
            "lastUpdated": "2018-10-15T15:08:32Z"
        },
        {
            "id": 103,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "Bologna FC 1909",
            "shortName": "Bologna",
            "tla": "BOL",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/9/92/FC_Bologna.svg",
            "address": "Via Casteldebole 10 Bologna 40132",
            "phone": "+39 (051) 6111111",
            "website": "http://www.bolognafc.it",
            "email": "comunicazione@bolognafc.it",
            "founded": 1909,
            "clubColors": "Red / Blue / White",
            "venue": "Stadio Renato Dall'Ara",
            "lastUpdated": "2018-10-15T15:08:33Z"
        },
        {
            "id": 104,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "Cagliari Calcio",
            "shortName": "Cagliari",
            "tla": "CAG",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/3/3d/Cagliari_Calcio.svg",
            "address": "Viale la Plaia 15 Cagliari 09123",
            "phone": "+39 (070) 604 201",
            "website": "http://www.cagliaricalcio.net",
            "email": "info@cagliaricalcio.net",
            "founded": 1920,
            "clubColors": "Red / Navy Blue / White",
            "venue": "Sardegna Arena",
            "lastUpdated": "2018-10-15T15:08:33Z"
        },
        {
            "id": 106,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "AC Chievo Verona",
            "shortName": "Chievo",
            "tla": "CHI",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/3/3f/AC_Chievo_Verona.svg",
            "address": "Via Luigi Galvani 3 Verona 37138",
            "phone": "+39 (045) 575779",
            "website": "http://www.chievoverona.it",
            "email": "info@chievoverona.it",
            "founded": 1929,
            "clubColors": "Yellow / Blue",
            "venue": "Stadio Marc'Antonio Bentegodi",
            "lastUpdated": "2018-10-15T15:08:34Z"
        },
        {
            "id": 107,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "Genoa CFC",
            "shortName": "Genoa",
            "tla": "GEN",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/7/76/Genoa_CFC.svg",
            "address": "Via Ronchi, 67 Genua 16155",
            "phone": "+39 (010) 612831",
            "website": "http://www.genoacfc.it",
            "email": "genoa@lega-calcio.it",
            "founded": 1893,
            "clubColors": "Red / Navy Blue",
            "venue": "Stadio Comunale Luigi Ferraris",
            "lastUpdated": "2018-10-15T15:08:34Z"
        },
        {
            "id": 108,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "FC Internazionale Milano",
            "shortName": "Inter",
            "tla": "INT",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Inter_Milan.svg/316px-Inter_Milan.svg",
            "address": "Corso Vittorio Emanuele II 9 Milano 20122",
            "phone": "+39 (02) 77151",
            "website": "http://www.inter.it",
            "email": "segreteriaccic@inter.it",
            "founded": 1908,
            "clubColors": "Blue / Black",
            "venue": "Stadio Giuseppe Meazza",
            "lastUpdated": "2018-10-15T15:08:35Z"
        },
        {
            "id": 109,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "Juventus FC",
            "shortName": "Juventus",
            "tla": "JUV",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/d/d2/Juventus_Turin.svg",
            "address": "Corso Galileo Ferraris, 32 Torino 10128",
            "phone": "+39 (011) 65631",
            "website": "http://www.juventus.com",
            "email": "francesco.gianello@juventus.com",
            "founded": 1897,
            "clubColors": "White / Black",
            "venue": "Allianz Stadium",
            "lastUpdated": "2018-10-15T15:08:35Z"
        },
        {
            "id": 110,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "SS Lazio",
            "shortName": "Lazio",
            "tla": "LAZ",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/thumb/4/47/Lazio_Rom.svg/500px-Lazio_Rom.svg.png",
            "address": "Via di Santa Cornelia, 1000 Formello 00060",
            "phone": "+39 (06) 976071",
            "website": "http://www.sslazio.it",
            "email": "segreteria.lazio@sslazio.it",
            "founded": 1900,
            "clubColors": "White / Sky Blue",
            "venue": "Stadio Olimpico",
            "lastUpdated": "2018-10-15T15:08:36Z"
        },
        {
            "id": 112,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "Parma Calcio 1913",
            "shortName": "Parma",
            "tla": "PAR",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/e/e2/FC_Parma.svg",
            "address": "Strada Carlo Pisacane, 4 Parma 43121",
            "phone": "+39 (521) 170591",
            "website": "http://www.parmacalcio1913.com",
            "email": "info@parmacalcio1913.com",
            "founded": 1913,
            "clubColors": "White / Black",
            "venue": "Stadio Ennio Tardini",
            "lastUpdated": "2018-10-15T15:08:36Z"
        },
        {
            "id": 113,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "SSC Napoli",
            "shortName": "Napoli",
            "tla": "NAP",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/commons/2/28/S.S.C._Napoli_logo.svg",
            "address": "Centro Tecnico di Castel Volturno, Via S.S. Domitana, Km 35 Castel Volturno 81030",
            "phone": "+39 (081) 5095344",
            "website": "http://www.sscnapoli.it",
            "email": "infocalcio@sscn.it",
            "founded": 1904,
            "clubColors": "Sky Blue / White",
            "venue": "Stadio San Paolo",
            "lastUpdated": "2018-10-15T15:08:37Z"
        },
        {
            "id": 115,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "Udinese Calcio",
            "shortName": "Udinese",
            "tla": "UDI",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/b/b1/Udinese_Calcio.svg",
            "address": "Via Agostino e Angelo Candolini 2 Udine 33100",
            "phone": "+39 (0432) 544911",
            "website": "http://www.udinese.it",
            "email": "udinese@udinese.it",
            "founded": 1896,
            "clubColors": "White / Black",
            "venue": "Dacia Arena",
            "lastUpdated": "2018-10-15T15:08:37Z"
        },
        {
            "id": 445,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "Empoli FC",
            "shortName": "Empoli",
            "tla": "EMP",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/4/42/Logo_FC_Empoli.svg",
            "address": "Piazza Matteotti Empoli 50053",
            "phone": "+39 (05) 7172212",
            "website": "http://www.empolicalcio.net",
            "email": "empoli@lega-calcio.it",
            "founded": 1920,
            "clubColors": "Blue / White",
            "venue": "Stadio Carlo Castellani",
            "lastUpdated": "2018-10-15T15:08:55Z"
        },
        {
            "id": 470,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "Frosinone Calcio",
            "shortName": "Frosinone",
            "tla": "FRO",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/it/c/c3/Frosinonestemma.png",
            "address": "Via Marittima, 2 Frosinone 03100",
            "phone": "+39 (0775) 822013",
            "website": "http://www.frosinonecalcio.com",
            "email": "frosinonecalcio@libero.it",
            "founded": 1912,
            "clubColors": "Yellow / Blue",
            "venue": "Stadio Benito Stirpe",
            "lastUpdated": "2018-10-15T15:08:57Z"
        },
        {
            "id": 471,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "US Sassuolo Calcio",
            "shortName": "Sassuolo",
            "tla": "SAS",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/a/a3/US_Sassuolo_Calcio.svg",
            "address": "Piazza Risorgimento, 47 Sassuolo 41049",
            "phone": "+39 (0536) 882645",
            "website": "http://www.sassuolocalcio.it",
            "email": "info@sassuolocalcio.it",
            "founded": 1922,
            "clubColors": "Green / Black",
            "venue": "Stadio Città del Tricolore",
            "lastUpdated": "2018-10-15T15:08:57Z"
        },
        {
            "id": 584,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "UC Sampdoria",
            "shortName": "Sampdoria",
            "tla": "SAM",
            "crestUrl": null,
            "address": "Piazza Borgo Pila, 39 Genova 16129",
            "phone": "+39 (010) 5316711",
            "website": "http://www.sampdoria.it",
            "email": "info@sampdoria.it",
            "founded": 1946,
            "clubColors": "Blue / White / Red",
            "venue": "Stadio Comunale Luigi Ferraris",
            "lastUpdated": "2018-10-15T15:09:18Z"
        },
        {
            "id": 586,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "Torino FC",
            "shortName": "Torino",
            "tla": "TOR",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/2/2e/Torino_FC_Logo.svg",
            "address": "Via Arcivescovado 1 Torino 10122",
            "phone": "+39 (01) 11970034",
            "website": "http://www.torinofc.it",
            "email": "info@toro.it",
            "founded": 1894,
            "clubColors": "Brown / White",
            "venue": "Stadio Olimpico di Torino",
            "lastUpdated": "2018-10-15T15:09:19Z"
        },
        {
            "id": 1107,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "SPAL 2013",
            "shortName": "SPAL 2013",
            "tla": "SPA",
            "crestUrl": null,
            "address": "Corso Piave 28 Ferrara 44100",
            "phone": "+39 (0532) 52752",
            "website": "http://www.spal2013.it",
            "email": "info@spal1907.net",
            "founded": 1907,
            "clubColors": null,
            "venue": "Stadio Paolo Mazza",
            "lastUpdated": "2018-10-15T15:09:55Z"
        }
    ]
}