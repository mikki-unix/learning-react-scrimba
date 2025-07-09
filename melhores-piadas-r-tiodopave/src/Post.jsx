import "./Post.css";

import upvote from "./assets/upvote.svg";
import downvote from "./assets/downvote.svg";
import comment from "./assets/comment.svg";

export default function Post() {
  return (
    <section>
      <div className="usuario">
        <img src="" alt="Foto de usuario" />
        <strong>u/usuario</strong>
        <span>há 0 anos</span>
      </div>

      <h1>Setup</h1>
      <p>Puch-line com spoiler</p>

      <section className="classificacao">
        <div>
          <img src={upvote} alt="Ícone de upvote" />
          <span>0</span>
          <img src={downvote} alt="Ícone de downvote" />
        </div>

        <div>
          <img src={comment} alt="Ícone de balão de fala" />
          <span>0</span>
        </div>
      </section>
    </section>
  );
}
