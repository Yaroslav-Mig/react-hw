import { useState } from 'react';

import { homeWorkReducer, checkAgeAC, sortDownAC, sortUpAC } from './bll/homeWorkReducer';
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton';
import User from './User';

import s from './HW8.module.css';
import s2 from '../../s1-main/App.module.css';

export type UserType = {
  _id: number;
  name: string;
  age: number;
};

const initialPeople: UserType[] = [
  { _id: 0, name: 'Кот', age: 3 },
  { _id: 1, name: 'Александр', age: 66 },
  { _id: 2, name: 'Коля', age: 16 },
  { _id: 3, name: 'Виктор', age: 44 },
  { _id: 4, name: 'Дмитрий', age: 40 },
  { _id: 5, name: 'Ирина', age: 55 },
];

const HW8 = () => {
  const [people, setPeople] = useState<UserType[]>(initialPeople);
  const [currentSort, setCurrentSort] = useState<string>('');

  const sortUp = () => {
    setPeople(homeWorkReducer(initialPeople, sortUpAC()));
    setCurrentSort('up');
  };

  const sortDown = () => {
    setPeople(homeWorkReducer(initialPeople, sortDownAC()));
    setCurrentSort('down');
  };

  const check18 = () => {
    setPeople(homeWorkReducer(initialPeople, checkAgeAC(18)));
    setCurrentSort('18');
  };

  const finalPeople = people.map((el: UserType) => <User key={el._id} u={el} />);

  return (
    <div id={'hw3'}>
      <div className={s2.hwTitle}>Homework #8</div>
      <div className={s2.hw}>
        <div className={s.container}>
          <div className={s.buttonsContainer}>
            <SuperButton
              id={'hw8-button-up'}
              onClick={sortUp}
              xType={currentSort === 'up' ? '' : 'secondary'}
            >
              Sort up
            </SuperButton>
            <SuperButton
              id={'hw8-button-down'}
              onClick={sortDown}
              xType={currentSort === 'down' ? '' : 'secondary'}
            >
              Sort down
            </SuperButton>
            <SuperButton
              id={'hw8-button-18'}
              onClick={check18}
              xType={currentSort === '18' ? '' : 'secondary'}
            >
              Check 18+
            </SuperButton>
          </div>

          <table id={'hw8-users'} className={s.users}>
            <thead className={s.thead}>
              <tr>
                <td className={s.nameCol}>Name</td>
                <td className={s.ageCol}>Age</td>
              </tr>
            </thead>
            <tbody>{finalPeople}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HW8;
