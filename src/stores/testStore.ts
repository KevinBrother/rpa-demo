import { flattenChildren } from '@/utils';
import { makeAutoObservable } from 'mobx';

const userData = [
  {
    pId: '',
    id: '1',
    name: 'John',
    children: [
      {
        pId: '1',
        id: '3',
        name: 'Essen',
        children: [
          {
            pId: '3',
            id: '4',
            name: 'Essen-child',
            children: []
          }
        ]
      }
    ]
  },
  {
    pId: '',
    id: '2',
    name: 'Mack',
    children: []
  }
];

const flattenedData = flattenChildren(userData);
console.log('%c [ flattenedData ]-27', 'font-size:13px; background:pink; color:#bf2c9f;', flattenedData);

class TestStore {
  arr = [1];
  users = flattenedData;

  constructor() {
    makeAutoObservable(this);
  }

  add(value: number) {
    this.arr.push(value);
  }

  getNumber(number: number) {
    const numbers = this.arr.filter((item) => item === number) || [];
    return numbers;
  }

  getUser(id: string) {
    const users = this.users.filter((item) => item.id === id);
    return users;
  }

  getChildren(id: string) {
    const users = this.users.filter((item) => item.pId === id);
    return users;
  }
}

export const testStore = new TestStore();

export const testStoreService = {
  getUser(id: string) {
    return new Promise((resolve, reject) => {
      const users = testStore.getUser(id);
      resolve(users);
    });
  },

  getChildren(id: string) {
    return new Promise((resolve, reject) => {
      const users = testStore.getChildren(id);
      resolve(users);
    });
  }
};
