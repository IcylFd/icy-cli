import Fetch from '../utils/fetch';
import URL from '../config/apiUrl';

const getToolList = (params) => Fetch.getJSON({
  url: URL.getToolList,
  params,
});

export default {
  getToolList,
};
