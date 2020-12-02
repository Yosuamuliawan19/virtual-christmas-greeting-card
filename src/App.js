import React from "react";
import "./style.scss";

export default function App() {
  var snow = [];
  for (var i = 0; i < 100; i++) {
    snow.push(<div class="snow" />);
  }
  var stars = [];
  for (var i = 0; i < 100; i++) {
    var star =
      '<div class="star" style="animation: twinkle ' +
      (Math.random() * 5 + 5) +
      "s linear " +
      (Math.random() * 5 + 5) +
      "s infinite; top: " +
      Math.random() * window.innerHeight +
      "px; left: " +
      Math.random() * window.innerWidth +
      'px;"></div>';
    stars.push(star);
  }

  // {
  //           <div className="share-dialog-container">
  //             <div className="share-dialog-container-white">
  //               share-dialog-container-white
  //             </div>
  //           </div>
  //         }

  return (
    <div>
      {snow}
      <div dangerouslySetInnerHTML={{ __html: stars.join(" ") }} />
      <button className="btn"> Share card</button>
      <div>
        <div className="greetings">
          <p> Merry Christmas and Happy New Year to</p>
          <p> Yosua Muliawan</p>
        </div>

        <div className="bg">
          <img
            className="santa"
            src="https://res.cloudinary.com/yosuam19/image/upload/v1606722563/christmas-santa_hechh1.png"
          />
          <img
            className="trees"
            src="https://res.cloudinary.com/yosuam19/image/upload/v1606721440/chirstmas-bg_rvbg3b.png"
          />
        </div>
      </div>
    </div>
  );
}
