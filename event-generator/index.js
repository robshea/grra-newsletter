google.load("feeds", "1");

function initialize() {
	var feed = new google.feeds.Feed("http://grrowing.org/events/RSS");
	feed.setNumEntries(10);
	feed.setResultFormat(google.feeds.Feed.JSON_FORMAT);

	feed.load(function(result) {
		if (!result.error) {
			var container = document.getElementById("feed");
			for (var i = 0; i < result.feed.entries.length; i++) {
				var entry = result.feed.entries[i];

				var title = entry.title.split("(");
				var eventDate = title[1].split(" ");
				var eventMonth = eventDate[1];
				var eventDay = eventDate[0];
				var h3 = document.createElement("h3");
				h3.appendChild(document.createTextNode(eventMonth + " " + eventDay));
				container.appendChild(h3);

				var eventName = title[0].trim();
				var a = document.createElement("a");
				a.setAttribute('href', entry.link);
				a.appendChild(document.createTextNode(eventName));
				var p = document.createElement("p");
				p.appendChild(a);
				container.appendChild(p);
			}
			document.getElementById("feed2").value = document.getElementById("feed").innerHTML;
		}
	});
}
google.setOnLoadCallback(initialize);