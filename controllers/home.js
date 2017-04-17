let template = require("../views/template-main")
let test_data = require("../models/test-data")

exports.get = function(req, res) {
	let teamlist = test_data.teamlist
	let strTeam = ""
	for(let  i = 0; i<teamlist.count; i++){
		strTeam = strTeam + "<li>" + teamlist.teams[i].country + "</li>";
	}
	strTeam = "<ul>" + strTeam + "</ul>";
	res.writeHead(200, {
		"Content-Type": "text/html"
	})
	res.write(template.build("Test web page on node.js", 
		"Hello there", 
		"<p>The teams in Group " + teamlist.GroupName + " for Euro 2012 are:</p>" + strTeam))
	res.end()
}