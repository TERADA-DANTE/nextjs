import styled from "styled-components";

export default function Hero() {
  return (
    <div className="recent-post">
      <article className="list-post">
        <a href="/" className="thumb-link">
          <div className="cover-image">s</div>
        </a>
        <div
          className="card"
          style={{
            background: "white",
            marginTop: "-80px",
            maxWidth: "50%",
          }}
        >
          <a href="/" style={{ margin: "32px" }}>
            The New Normal Creating sevices to keep our travel community safe
          </a>
        </div>
      </article>
    </div>
  );
}
