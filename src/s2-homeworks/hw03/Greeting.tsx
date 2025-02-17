import React, { ChangeEvent, KeyboardEvent } from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
  name: string;
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void;
  addUser: () => void;
  onBlur: () => void;
  onEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
  error: string;
  totalUsers: number;
  lastUserName?: string;
};

const Greeting: React.FC<GreetingPropsType> = (props) => {
  const { name, setNameCallback, addUser, onEnter, onBlur, error, totalUsers, lastUserName } = props;
  const inputClass = error ? `${s.errorInput} ${s.input}` : s.input;

  return (
    <div id={'hw3-form'} className={s.greetingForm}>
      <div className={s.text}>
        {'Людей добавили: '}
        <span id={'hw3-users-total'}>{totalUsers}</span>
      </div>

      <div className={s.inputAndButtonContainer}>
        <div className={s.input_box}>
          <input
						id={'hw3-input'}
						title={'Enter to add name'}
            value={name}
            onChange={setNameCallback}
            className={inputClass}
            onKeyDown={onEnter}
            onBlur={onBlur}
          />
          <div id={'hw3-error'} className={s.error}>
            {error}
          </div>
        </div>

        <button id={'hw3-button'} onClick={addUser} className={s.button} disabled={!name.trim()}>
          Add
        </button>
      </div>

      {lastUserName && (
        <div className={s.greeting}>
          Привет <span id={'hw3-last-user'}>{lastUserName}</span>!
        </div>
      )}
    </div>
  );
};

export default Greeting;
