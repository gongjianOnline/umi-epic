const userInfo = JSON.parse(localStorage.getItem('userInfo')) || '';
export default {
  namespace: 'user',
  state: {
    userName: userInfo ? userInfo.username : '',
    userId: userInfo ? userInfo.shortId : '',
  },
  reducers: {
    userConfig(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
