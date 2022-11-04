import Login from '@/pages/home/login';
import AV from 'leancloud-storage';

AV.init({
  appId: 'VdILy47NH8ZJZkk4rof3gSDU-gzGzoHsz',
  appKey: 'RNpE0ElDO5slr0K1FzcPMzdG',
  serverURL: 'https://vdily47n.lc-cn-n1-shared.com',
});

// 用户相关
const User = {
  //注册
  register(username: string, password: string) {
    const user = new AV.User();
    user.setUsername(username);
    user.setPassword(password);
    return new Promise((resolve, reject) => {
      user.signUp().then(
        (response) => {
          resolve(response);
        },
        (err) => {
          reject(err);
        },
      );
    });
  },
  // 登录
  Login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      AV.User.logIn(username, password).then(
        (response) => {
          resolve(response);
        },
        (err) => {
          reject(err);
        },
      );
    });
  },
};

export { User };
