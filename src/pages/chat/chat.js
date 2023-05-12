import { useState, useEffect, useRef } from "react";
import { FaRegTrashAlt } from 'react-icons/fa';
import ChatService from "../../services/chat.services.js";
import "./chat.css";

function MessagesList() {
  const [messages, setMessages] = useState([]);
  const refForm = useRef();

  const getAllMessages = () => {
    ChatService.getAllMessages()
      .then((items) => {
        let allMessages = [];
        items.forEach(item => {
          const key = item.key;
          const data = item.val();
          allMessages.push({
            key: key,
            sentBy: data.sentBy,
            text: data.text
          });
        });
        setMessages([...allMessages]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const removeMessage = (key) => {
    ChatService.removeMessage(key).then((res) => {
      getAllMessages();
    });
  }

  const addMessage = (e) => {
    e.preventDefault();
    const sentBy = e.target.sentBy.value;
    const text = e.target.text.value;
    ChatService.addMessage(sentBy, text).then((res) => {
      refForm.current.reset();
      setMessages(oldValues => [...oldValues, { key: res.key, sentBy, text }])
    })
  }

  useEffect(() => {
    getAllMessages();
  }, []);

  return (
    <>
      <div className="bicycle-list-main-container">
        <div className="bicycle-form-container">
          <form id="chat-form" onSubmit={addMessage} ref={refForm}>
            <input className="rounded-input" type="text" name="sentBy" placeholder="sentBy" />
            <input className="rounded-input" type="text" name="text" placeholder="text" />
            <input className="rounded-input" type="submit" value="Add Message" />
          </form>
        </div>

        <div className="chat-list">
          {messages.map(b =>
            <div className="message-item" key={b.key}>
              <p>{b.sentBy} {b.text}</p>
              <FaRegTrashAlt className="delete-message" onClick={() => removeMessage(b.key)} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MessagesList;