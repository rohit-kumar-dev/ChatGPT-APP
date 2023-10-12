import { useState } from "react";
import send from "./assets/send.svg";
import user from "./assets/user.png";
import loader from "./assets/loader.svg";
import bot from "./assets/loader.svg";

function App() {
  return (
    <main className="chatGPT-app">
      <section className="chat-container">
        <div className="layout">
          <div className="chat-bubble">
            <div className="avatar">
              <img src={user} />
            </div>
            <div className="post">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              debitis fugit ipsa, ipsam aspernatur magni dicta voluptatem ut
              sint temporibus obcaecati libero excepturi qui vero nobis
              voluptatibus id tenetur in.
            </div>
          </div>
          <div className="chat-bubble bot">
            <div className="avatar">
              <img src={bot} />
            </div>
            <div className="post">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              debitis fugit ipsa, ipsam aspernatur magni dicta voluptatem ut
              sint temporibus obcaecati libero excepturi qui vero nobis
              voluptatibus id tenetur in.
            </div>
          </div>
        </div>
      </section>
      <footer>
        <input
          className="composebar"
          autoFocus
          type="text"
          placeholder="Ask Anything!"
          onChange={() => {}}
        />
        <div className="send-button">
          <img src={send} />
        </div>
      </footer>
    </main>
  );
}

export default App;
