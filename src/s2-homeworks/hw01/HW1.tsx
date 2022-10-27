import React from 'react';
import Message from './message/Message';
import MessageSender from './message-sender/MessageSender';
import s2 from '../../s1-main/App.module.css';
import FriendMessage from './friend-message/FriendMessage';
import avatar from './avatar.png';

/*
 * 1 - описать тип MessageType
 * 2 - описать тип MessagePropsType в файле Message.tsx
 * 3 - в файле Message.tsx отобразить приходящие данные
 * 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
 * 5 - сделать стили в соответствии с дизайном
 * */

export type MessageType = {
  id: number;
  user: {
    avatar: string;
    name: string;
  };
  message: {
    text: string;
    time: string;
  };
};

export const message0: MessageType = {
  id: 0,
  user: {
    avatar: avatar,
    name: 'Tom',
  },
  message: {
    text: "Hello, Martin, lovely day, isn't it?",
    time: '22:00',
  },
};
export const friendMessage0: MessageType = {
  id: 100,
  user: {
    avatar: avatar,
    name: 'Martin',
  },
  message: {
    text: "Absolutely wonderful - warm and clear. What's the weather forecast for tomorrow? Do you know",
    time: '22:11',
  },
};

const HW1 = () => {
  return (
    <div id={'hw1'}>
      <div className={s2.hwTitle}>Homework #1</div>
      <div className={s2.hw}>
        {/*проверка отображения (не менять)*/}
        <div>
          <Message message={message0} />
          <FriendMessage message={friendMessage0} />
        </div>
        {/*для автоматической проверки дз (не менять)*/}
        <MessageSender M={Message} />
      </div>
    </div>
  );
};

export default HW1;
