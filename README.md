<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>Rock Paper Scissors</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Fredoka+One&family=Gulzar&family=Rajdhani:wght@300&family=Titan+One&display=swap');
    * {
      font-family: 'Fredoka One', cursive;
    }

    *::selection {
      background-color: white;
    }

    html, body {
      height: 100%;
    }

    body {
      background: linear-gradient(-45deg, rgb(249 119 116), rgb(249 213 116), rgb(255 255 255));
      background-size: 300% 300%;
      animation: gradient 15s ease infinite;
      margin: 0px auto;
    }
    
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    .hand-img {
      text-shadow: 2px 1px 1px black;
    }

    #intro {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    #intro-click {
      text-decoration: none;
      font-size: 100px;
      text-align: center;
    }

    
    #intro-click:link {
      color: black;
    }

    #intro-click:visited {
      color: black;
    }

    #intro-click:hover, #intro-click:active {
      color: white;
      text-shadow: 2px 2px 5px rgb(105, 105, 105);
    }

    #container {
      width: 90%;
      margin: 0px auto;
      padding: 30px;
      display: none;
    }

    #title {
      display: inline-block;
      width: 480px;
      height: 100%;
      font-size: 100px;
      font-weight: 900;
      letter-spacing: 5px;
    }

    #computer-box, #user-box {
      display: inline-block;
      margin: 0px 30px;
    }

    .textfield {
      width: 185px;
      margin: 0px 0px 0px 100px;
      padding: 13px;
      font-size: 20px;
      font-weight: bold;
      border: 3px dashed #ccc;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.5);
    }

    #computer-choice, #user-choice {
      font-size: 20px;
      font-weight: bold;
      animation: changeColor linear 1.5s infinite;
    }

    @keyframes changeColor {
     0% {
      color: black;
      text-shadow: 2px 2px 7px rgba(0, 0, 0, 0.5);
     }
     50% {
      color: red;
      text-shadow: 2px 2px 7px rgba(255, 0, 0, 0.5);
     }
    }

    main {
      position: relative;
      padding-top: 200px;
      display: inline-block;
    }

    #buttonField {
      position: absolute;
      display: inline-block;
      margin-top: 300px;
      margin-left: -20px;
      width: 500px;
      height: 100px;
      text-align: center;
    }

    #buttonField button {
      background: none;
      border: none;
      font-size: 100px;
      text-shadow: 2px 1px 2px black;
      animation: rotateButton 1s ease-in-out infinite;
    }

    #rock:hover, #scissors:hover, #paper:hover  {
      font-size: 90px;
      cursor: pointer;
    } 

    #rock:active, #scissors:active, #paper:active  {
      font-size: 90px;
      text-shadow: 2px 3px 5px black;
      cursor: pointer;
    } 

    @keyframes rotateButton{
      0% { transform: rotate(0deg);}
      25% { transform: rotate(-2deg); }
      100% { transform: rotate(2deg); }
    }
    
    #score {
      position: absolute;
      display: inline-block;
      margin: 450px 0px 0px 10px;
      width: 460px;
    }

    #score h4 {
      margin-left: 15px;
      margin-bottom: 10px;
      font-size: 30px;
    }

    #score h5 {
      display: inline-block;
      margin: 0px 15px;
      font-size: 30px;
    }

    #user-box {
      position: relative;
    }

    #result {
      display: inline;
      position: absolute;
      bottom: 100%;
      left: 35%;
      margin: 0px;
      padding: 0px 10px;
      font-size: 50px;
      color: white;
      text-shadow: 2px 2px black;
    }

  </style>

</head>
<body>
  <h1 id="intro"><a href="#" id="intro-click">Do you want to play?</a></h1>
  <div id="container">
    <h1 id="title">Rock<br>Paper<br>Scissors</h1>
    <main>
      <div id="computer-box">
        <img src="computer-default.png" id="computer-img" alt="computer image"></img>
        <p class="textfield">Computer: <span id="computer-choice">&emsp;&emsp;?</span></p>
      </div>
      <p style="font-size: 100px; display: inline;">VS</p>
      <div id="user-box">
        <p id="result"></p>
        <img src="profile-default.png" id="user-img" alt="profile image"></img>
        <p class="textfield">You: &emsp;&ensp; <span id="user-choice">&emsp;&emsp;?</span><p>
      </div>
    </main>
      <div id="buttonField">
        <button id="rock">???????</button>
        <button id="scissors">???????</button>
        <button id="paper">????????</button>
      </div>
      <div id="score">
        <h4>&lt SCORE &gt</h4>
        <h5>draw : <span id="draw-result">0</span></h5>
        <h5>win : <span id="win-result">0</span></h5>
        <h5>lose : <span id="lose-result">0</span></h5>
      </div>
  </div>
  <script src="app.js" charset="UTF-8"></script>
</body>
</html>
