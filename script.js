function realPic() {
  let id = Math.floor((Math.random() * 6 + 1) * 10000);
  return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}

let fakePic = "https://thispersondoesnotexist.com/";

function game() {
  let imgsCon = document.getElementById("images");
  let resCon = document.getElementById("results");
  let streakCon = document.getElementById("streak");


  let streak = 0;


  function draw() {
    imgsCon.innerHTML = "";
    resCon.innerHTML = "";

    let againBtn = document.createElement("button");
    againBtn.textContent = "contiune";
    againBtn.onclick = draw;

    let realOrFake = Math.random() > 0.5;
    let list = [realOrFake, !realOrFake];

imgsCon.style.pointerEvents = "auto";

    for (let isReal of list) {
      let img = document.createElement("img");
      img.src = isReal ? realPic() : fakePic;

      img.onclick = function(){
        imgsCon.style.pointerEvents = "none";
        
           resCon.textContent = isReal ? "you are correct, good for you!":"rematch noob";

           streak = isReal ? streak +1 : 0;
           streakCon.innerHTML = "streak: " + streak;

           resCon.appendChild(againBtn);
      }

      imgsCon.appendChild(img);
    }
  }

  draw();



}


game();
