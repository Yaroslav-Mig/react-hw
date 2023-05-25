import { checkAgeAC, homeWorkReducer, sortDownAC, sortUpAC } from '../homeWorkReducer';
import { UserType } from '../../HW8';

let initialState: UserType[];

beforeEach(() => {
  initialState = [
    { _id: 0, name: 'Кот', age: 3 },
    { _id: 1, name: 'Александр', age: 66 },
    { _id: 2, name: 'Коля', age: 16 },
    { _id: 3, name: 'Виктор', age: 44 },
    { _id: 4, name: 'Дмитрий', age: 40 },
    { _id: 5, name: 'Ирина', age: 55 },
  ];
});

test('sort name up', () => {
  const action = sortUpAC();
  const newState = homeWorkReducer(initialState, action);

  expect(newState[0]._id).toBe(1);
  expect(newState[5]._id).toBe(0);

  const arrSortUp = [1, 3, 4, 5, 2, 0].filter((el, i) => el === newState[i]._id);
  expect(arrSortUp.length).toBe(newState.length);
});

test('sort name down', () => {
  const action = sortDownAC();
  const newState = homeWorkReducer(initialState, action);

  expect(newState[0]._id).toBe(0);
  expect(newState[5]._id).toBe(1);

	const arrSortDown = [0, 2, 5, 4, 3, 1].filter((el, i) => el === newState[i]._id);
	expect(arrSortDown.length).toBe(newState.length);
});

test('check age 18', () => {
  const action = checkAgeAC(18);
  const newState = homeWorkReducer(initialState, action);

	expect(newState.length).toBe(4);
	expect(newState.every(el => el.age >= 18)).toBeTruthy();
});
