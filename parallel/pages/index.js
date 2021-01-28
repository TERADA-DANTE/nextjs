import { useState, useEffect } from "react";

export default function Home() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    return () => {
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    };
  }, []);
  return (
    <div className="wrapper">
      <div
        className="bg bg1"
        style={{
          position: "relative",
          backgroundPositionY: position / -1,
        }}
      >
        <div>Welcome</div>
      </div>
      <div className="bg bg2">
        <div>Happy New Year</div>
      </div>
      <p className="desc" style={{ transform: `translateX(${-position})px` }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s,
      </p>
      <p className="desc2">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters,
      </p>
      <div className="desc3">
        Contrary to popular belief, Lorem Ipsum is not simply random text.
      </div>
      <div className="desc3">
        There are many variations of passages of Lorem Ipsum available,
      </div>
      <div className="desc3">
        The standard chunk of Lorem Ipsum used since the 1500s
      </div>
      <div className="desc3">
        Nulla hendrerit leo arcu, in fringilla dolor rutrum ac. Aenean semper
        turpis nisl,
      </div>
      <img src="/item1.jpg" className="item" alt="item1" />
      <img src="/item2.jpg" className="item item_snow" alt="item2" />
    </div>
  );
}
