document.writeln('<div id="statuscafe"><div id="statuscafe-content"></div><div id="statuscafe-username"></div></div>');
fetch("https://status.cafe/users/desi/status.json")
  .then( r => r.json() )
  .then( r => {
    if (!r.content.length) {
      document.getElementById("statuscafe-content").innerHTML = "No status yet."
      return
    }
    document.getElementById("statuscafe-username").innerHTML = '<strong>' +' desi '  + '</strong> '  + ' - ' + r.timeAgo
    document.getElementById("statuscafe-content").innerHTML = r.content
  })