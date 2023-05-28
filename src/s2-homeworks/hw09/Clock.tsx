import { useState } from 'react';
import s from './Clock.module.css';
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton';
import { restoreState } from '../hw06/localStorage/localStorage';

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const formatDate = new Intl.DateTimeFormat('ru', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
});

const formatMonth = new Intl.DateTimeFormat('en-US', { month: 'long' });

const addZeroTime = (value: number): string => {
  return value < 10 ? `0${value}` : String(value);
};

function Clock() {
  const [timerId, setTimerId] = useState<number | undefined>(undefined);
  const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())));
  const [show, setShow] = useState<boolean>(false);

  const start = () => {
    const id = setInterval(() => {
      const time = new Date();
      console.log(time);

      setDate(time);
    }, 1000);

    setTimerId(Number(id));
  };

  const stop = () => {
    clearInterval(timerId);
    setTimerId(undefined);
  };

  const onMouseEnter = () => setShow(true);
  const onMouseLeave = () => setShow(false);

  const stringDate = formatDate.format(date).toString() || <br />;
  const stringMonth = formatMonth.format(date) || <br />;
  const stringDay = weekDays[date.getDay()] || <br />;
  const stringTime = `
	${addZeroTime(date.getHours())}:${addZeroTime(date.getMinutes())}:${addZeroTime(date.getSeconds())}
	` || <br />;

  return (
    <div className={s.clock}>
      <div
        id={'hw9-watch'}
        className={s.watch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span id={'hw9-day'}>{stringDay}</span>,{' '}
        <span id={'hw9-time'}>
          <strong>{stringTime}</strong>
        </span>
      </div>

      <div id={'hw9-more'}>
        <div className={s.more}>
          {show ? (
            <>
              <span id={'hw9-date'}>{stringDate}</span>, <span id={'hw9-month'}>{stringMonth}</span>
            </>
          ) : (
            <>
              <br />
            </>
          )}
        </div>
      </div>

      <div className={s.buttonsContainer}>
        <SuperButton
          id={'hw9-button-start'}
          className={s.btn}
          disabled={Boolean(timerId)}
          onClick={start}
        >
          start
        </SuperButton>
        <SuperButton
          id={'hw9-button-stop'}
          className={s.btn}
          disabled={!Boolean(timerId)}
          onClick={stop}
        >
          stop
        </SuperButton>
      </div>
    </div>
  );
}

export default Clock;
