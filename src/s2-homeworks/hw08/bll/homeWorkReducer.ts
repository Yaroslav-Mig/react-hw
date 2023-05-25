import { UserType } from '../HW8';

type ActionType =
  | ReturnType<typeof sortUpAC>
  | ReturnType<typeof sortDownAC>
  | ReturnType<typeof checkAgeAC>;

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
  switch (action.type) {
    case 'sort': {
      return action.payload === 'up'
        ? [...state].sort((a, b) => a.name.localeCompare(b.name))
        : [...state].sort((a, b) => b.name.localeCompare(a.name));
    }
    case 'check': {
			return state.filter(item => item.age >= action.payload);
    }
    default:
      return state;
  }
};

export const sortUpAC = () =>
  ({
    type: 'sort',
    payload: 'up',
  } as const);

export const sortDownAC = () =>
  ({
    type: 'sort',
    payload: 'down',
  } as const);

export const checkAgeAC = (age: number) =>
  ({
    type: 'check',
    payload: age,
  } as const);
