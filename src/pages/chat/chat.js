import { useState, useEffect, useRef } from "react";
import ChatService from "../../services/chat.services.js";
import "./chat.css";
import Header from "../../components/header/Header.js";
import Footer from "../../components/footer/Footer.js";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState('');
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

  const updateMessage = (key) => {
    ChatService.updateMessage(key, newMessages)
      .then(() => {
        getAllMessages()
        setNewMessages('')
      })
    ;
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
      <Header />
      <div className="chat-list-main-container">
        <div className="chat-form-container">
          <form id="chat-form" onSubmit={addMessage} ref={refForm}>
            <input className="rounded-input" type="text" name="sentBy" placeholder="sentBy" />
            <input className="rounded-input" type="text" name="text" placeholder="text" />
            <input className="rounded-input" type="submit" value="Enviar mensaje" />
          </form>
        </div>
        <div className="chat-list">
          {messages.map(b =>
            <div className="message-item" key={b.key}>
              <p>{b.sentBy}: {b.text}{" "}</p>
              <button className="delete-message" onClick={() => removeMessage(b.key)}>Eliminar mensaje</button>
              <input className="newText" type="text"  onChange={(e) => setNewMessages(e.target.value)} />
              <button className="update-message" onClick={() => updateMessage(b.key)}>Actualizar mensaje</button>
            </div>
          )}
        </div>        
      </div>
      <Footer />
    </>
  );
}

export default Chat;