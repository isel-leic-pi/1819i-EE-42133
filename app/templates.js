const Handlebars = require('../node_modules/handlebars/dist/handlebars')

const nop = function() {}
const leagueSearchScript = require('./fragment/leagueSearch')
const groupSearchScript = require('./fragment/groupSearch')
const getGroupScript = require('./fragment/getGroup')
const createGroupScript = require('./fragment/createGroup')
const groupManagerScript = require('./fragment/groupManager')
const welcomeScript = require('./fragment/login')

const compiledTemplates = {
	// pages
	welcome: Handlebars.compile(require('./templates/pages/welcome.hbs')),
	groupSearch: Handlebars.compile(require('./templates/pages/groupSearch.hbs')),
	getGroup: Handlebars.compile(require('./templates/pages/getGroup.hbs')),
	createGroup: Handlebars.compile(require('./templates/pages/createGroup.hbs')),
	leagueSearch: Handlebars.compile(
		require('./templates/pages/leagueSearch.hbs')
	),
	groupManager: Handlebars.compile(
		require('./templates/pages/groupManager.hbs')
	),

	// helpers
	loginForm: Handlebars.compile(require('./templates/helpers/login.hbs')),
	groupSearchResults: Handlebars.compile(
		require('./templates/helpers/groupSearchResults.hbs')
	),
	countryList: Handlebars.compile(
		require('./templates/helpers/countryList.hbs')
	),
	leagueSearchResults: Handlebars.compile(
		require('./templates/helpers/leagueSearchResults.hbs')
	),
	leagueTeams: Handlebars.compile(
		require('./templates/helpers/leagueTeams.hbs')
	),
	groupDetails: Handlebars.compile(
		require('./templates/helpers/groupDetails.hbs')
	),
	groupTeams: Handlebars.compile(require('./templates/helpers/groupTeams.hbs')),
	editGroupDetails: Handlebars.compile(
		require('./templates/helpers/editGroupDetails.hbs')
	),
	addTeamToGroupForm: Handlebars.compile(
		require('./templates/helpers/addTeamToGroupForm.hbs')
	),
	addTeamLeagueResults: Handlebars.compile(
		require('./templates/helpers/addTeamLeagueResults.hbs')
	),
	addTeamLeagueTeamsResults: Handlebars.compile(
		require('./templates/helpers/addTeamLeagueTeamsResults.hbs')
	),
	gamesForm: Handlebars.compile(
		require('./templates/helpers/groupGamesForm.hbs')
	),
	gamesRes: Handlebars.compile(
		require('./templates/helpers/groupGamesRes.hbs')
	)
}

module.exports = {
	welcome: {
		view: compiledTemplates.welcome,
		script: () => welcomeScript(compiledTemplates.loginForm)
	},
	groupSearch: {
		view: compiledTemplates.groupSearch,
		script: () => groupSearchScript(compiledTemplates.groupSearchResults)
	},
	getGroup: {
		view: compiledTemplates.getGroup,
		script: () => getGroupScript()
	},
	createGroup: {
		view: compiledTemplates.createGroup,
		script: () => createGroupScript()
	},
	leagueSearch: {
		view: compiledTemplates.leagueSearch,
		script: () =>
			leagueSearchScript(
				compiledTemplates.countryList,
				compiledTemplates.leagueSearchResults,
				compiledTemplates.leagueTeams
			)
	},
	groupManager: {
		view: compiledTemplates.groupManager,
		script: () =>
			groupManagerScript(
				// group
				compiledTemplates.groupDetails,
				compiledTemplates.groupTeams,
				// edit group
				compiledTemplates.editGroupDetails,
				// add team to group
				compiledTemplates.addTeamToGroupForm,
				compiledTemplates.countryList,
				compiledTemplates.addTeamLeagueResults,
				compiledTemplates.addTeamLeagueTeamsResults,
				// group games
				compiledTemplates.gamesForm,
				compiledTemplates.gamesRes
			)
	}
}
