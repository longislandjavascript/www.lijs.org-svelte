const axios = require("axios");
const { format } = require("date-fns");

exports.handler = async () => {
  // TODO- Convert to environment variable.
  const { MEETUP_MEMBERS_URL, MEETUP_COUNT_URL } = process.env;

  const getData = async () => {
    const fetchMembers = axios.get(MEETUP_MEMBERS_URL);
    const fetchCount = axios.get(MEETUP_COUNT_URL);
    const result = await Promise.all([fetchMembers, fetchCount]);
    const [members, count] = result;
    const thumbnails = members.data
      .map(member => {
        return { thumbnail: member.photo ? member.photo.thumb_link : "" };
      })
      .filter(({ thumbnail }) => !!thumbnail.length);
    return {
      count: `${count.data.members} ${count.data.who}`,
      members: thumbnails
    };
  };

  return getData()
    .then(data => {
      return { statusCode: 200, body: JSON.stringify(data) };
    })
    .catch(error => {
      return { statusCode: 500, body: JSON.stringify(error) };
    });
};
