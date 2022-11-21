import React from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [activeKey, setActiveKey] = React.useState("");

  React.useEffect(() => {
    document.addEventListener("keydown", (event) => {
      let key = event.key.toUpperCase();
      switch (key) {
        
          case "Q":{
            playSound(key);
            break;
          }
          case "W":{
            playSound(key);
            break;
          }
          case "E":{
            playSound(key);
            break;
          }
          case "A":{
            playSound(key);
            break;
          }
          case "S":{
            playSound(key);
            break;
          }
          case "D":{
            playSound(key);
            break;
          }
          case "Z":{
            playSound(key);
            break;
          }
          case "X":{
            playSound(key);
            break;
          }
          case "C":{
            playSound(key);
            break;
          }
          default:{
            break;
          }
        }
      
    });
  }, []);

  const drumPadsArray = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  function playSound(id) {
    const audio = document.getElementById(id);
    audio.play();
    setActiveKey(id);
  }

  return (
    <div id="drum-machine" className="">
      <div id="display">
      {activeKey}
        <div className="drumPads">
          {drumPadsArray.map((drumPad) => (
            <div
              key={nanoid()}
              className="drum-pad flex"
              id={drumPad.src}
              onClick={() => playSound(drumPad.text)}
            >
              {drumPad.text}
              <audio
                id={drumPad.text}
                className="clip"
                src={drumPad.src}
              ></audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
