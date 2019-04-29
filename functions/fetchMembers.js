import axios from 'axios';
import { format } from 'date-fns';

exports.handler = async () => {
  // TODO- Convert to environment variable.
  const MEETUP_API_MEMBERS_URL = 'http://api.meetup.com/long-island-javascript-group/members';

  const getData = async () => {
    const result = await axios.get(MEETUP_API_MEMBERS_URL);
    const { data } = result;
    const thumbnails = data
      .map(member => {
        return { thumbnail: member.photo ? member.photo.thumb_link : '' };
      })
      .filter(({ thumbnail }) => !!thumbnail.length);
    return thumbnails;
  };

  return getData()
    .then(data => {
      return { statusCode: 200, body: JSON.stringify(data) };
    })
    .catch(error => {
      return { statusCode: 500, body: JSON.stringify(error) };
    });
};
