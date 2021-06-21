import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { messagesRef } from '../firebase';

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
});

// 受け取ったときの構造
// key: -Mc7yxrxAQhjoF2Gh64M, value: {name: "testさん", text: "こんにちは"}
// 使いやすく整形した構造
// {key: -Mc7yxrxAQhjoF2Gh64M, name: "testさん", text: "こんにちは"}

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    // console.log('useEffect');
    messagesRef.orderByKey().limitToLast(3).on('value', (snapshot) => {
      // console.log(snapshot.val());
      const messages = snapshot.val();
      // console.log(Object.entries(messages));
      // console.log(messages);
      if (messages === null) return;
      const entries = Object.entries(messages);
      const newMessages = entries.map((entry) => {
        // console.log(entry);
        // const key = entry[0];
        // const nameAndText = entry[1];
        const [key, nameAndText] = entry;
        return { key, ...nameAndText };
      });
      // console.log(newMessages);
      setMessages(newMessages);
    });
  }, []);
  return <div className={classes.root}>MessageList</div>;
}

export default MessageList;
