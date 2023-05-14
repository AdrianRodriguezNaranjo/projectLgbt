import db from "../firebase";
import { ref, get, remove, push, update } from "firebase/database";

const dbRef = ref(db, "/messages");

const getAllMessages = () => {
  return get(dbRef);
};

const addMessage = (sentBy, text) => {
  return push(dbRef, {
    sentBy: sentBy,
    text: text
  });
};

const removeMessage = (key) => {
  const dbRefMessage = ref(db, `/messages/${key}`);
  return remove(dbRefMessage);
};

const updateMessage = (key, updates) => {
  const dbRefUpdate = ref(db, `/messages/${key}`);
  return update(dbRefUpdate, updates);
};

export default {
  getAllMessages,
  addMessage,
  removeMessage,
  updateMessage,
};