import axios from 'axios';
import { format } from 'date-fns';

exports.handler = async () => {
  // TODO- Convert to environment variable.
  const MEETUP_API_MEMBERS_URL = 'http://api.meetup.com/long-island-javascript-group/members';

  const getData = async () => {
    try {
      const result = await axios.get(MEETUP_API_MEMBERS_URL);
      const { data } = result;
      const thumbnails = data
        .map(member => {
          return { thumbnail: member.photo ? member.photo.thumb_link : '' };
        })
        .filter(({ thumbnail }) => !!thumbnail.length);
      return {
        statusCode: 200,
        body: JSON.stringify(thumbnails),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: error,
      };
    }
  };

  return getData();
};
