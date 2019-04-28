const axios = require("axios");
const { format } = require("date-fns");

exports.handler = async () => {
  // TODO- Convert to environment variable.
  const MEETUP_API_EVENTS_URL =
    "http://api.meetup.com/long-island-javascript-group/events?status=upcoming&page=1";

  const getNextMeetupEvent = async () => {
    const result = await axios.get(MEETUP_API_EVENTS_URL);
    const { data } = result;
    const nextEvent = data[0];
    const date = format(nextEvent.local_date, "MMMM DD, YYYY");
    const time = `${format(nextEvent.time, "h:mm")} - ${format(
      nextEvent.time + nextEvent.duration,
      "h:mm A"
    )}`;
    const rsvps = `${nextEvent.yes_rsvp_count} ${nextEvent.group.who}`;
    const venue = nextEvent.venue.name;

    const finalResult = {
      name: nextEvent.name,
      link: nextEvent.link,
      date,
      time,
      rsvps,
      venue,
      address_street: nextEvent.venue.address_1,
      address_city_state: "Huntington, NY 11743"
    };
    return finalResult;
  };

  // if (event.httpMethod === 'GET') {
  return getNextMeetupEvent()
    .then(result => {
      return { statusCode: 200, body: JSON.stringify(result) };
    })
    .catch(error => {
      return { statusCode: 500, body: JSON.stringify(error) };
    });
  // }
};
