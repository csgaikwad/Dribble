import { atom } from 'recoil';

export const UserAtom = atom({
  key: 'userState',
  default: {
    name: '',
    username: '',
    email: '',
    image: '',
    location: '',
    purpose: {option1:false,option2:false,option3:false,}
  },
});
