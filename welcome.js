const tutorial_texts = [
  "If a drone icon appears in the bottom right corner, a target is hidden on the page, visible for 20 seconds before disappearing.",
  "Find the target—a 10x10 pixel black square—and click on it.",
  "A drone flies over to identify it as it closes in, displaying an alert with an image and the 'Engage' option. Click the engage button to destroy the target.",
  "If the button is clicked within the 20-second window, the target is successfully destroyed, its value is added to your score, and a scrap token is added to your target database.",
  "Every now and then, after a successful mission, a short news story about the Russo-Ukrainian conflict might appear, capturing current events with a bit of artistic license.",
  "When your score reaches a milestone, a new chapter opens, unlocking new and more valuable targets. Click 'Play chapter' to see it unfold. A chapter lasts about 20 seconds.",
  "Click the extension icon in the top bar to open the popup options window. The Targets panel shows your target database.",
  "The Chapters panel shows chapters, the score milestones required to unlock them, and the number and value of new targets they reveal.",
  "The Daily Recon panel reveals one URL every 6 to 24 hours that hides a high-value target.",
  "Have fun! Peace on Earth and goodwill to all mankind soon...!"
];

const tutorial_steps_list= [
  '<div style="position: fixed; bottom: 0; right: 0; margin: 10px;"> <img src="drone3.png" style="width: 150px; height: auto; "> <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:45px; height:45px; border-radius:50%; background:black; color: white; display:flex; align-items:center; justify-content:center; font-size: 21px;"> 20 </div> </div> <div style="position: absolute; bottom: 0; right: 0; margin-bottom: 160px !important; margin-right: 140px;"><img src="arrow.png" style="width: 200px; transform: rotate(220deg)"></div><div style="position: fixed; transform:translate(-50%, -50%); top:0; left: 0; margin: 20vh 10vw; width: 15px; height: 15px; background: black;"></div>',

  '<div style="position: fixed; bottom: 0; right: 0; margin: 10px;"> <img src="drone3.png" style="width: 150px; height: auto; "> <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:45px; height:45px; border-radius:50%; background:black; color: white; display:flex; align-items:center; justify-content:center; font-size: 21px;"> 20 </div></div><div style="position: fixed; transform:translate(-50%, -50%); top:0; left: 0; margin: 20vh 10vw; width: 15px; height: 15px; background: black;"></div> <div style="position: fixed; top: 23.5vh; left: 11vw; margin-bottom: 180px !important; margin-right: 150px;"><img src="arrow.png" style="width: 200px; transform: rotate(40deg)"></div>',

  '<div style="position:fixed; top:20vh; left:10vw; width:150px; height:150px; transform:translate(-50%, -50%);"> <img src="drone3.png" style="width:150px; height:auto;"> <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:40px; height:40px; border-radius:50%; background:black; font-size: 21px; color: white; display:flex; align-items:center; justify-content:center;"> 12 </div> </div><div style="position: fixed; top: calc(7vh + 45px); right: calc(30vw - 240px); margin-bottom: 180px !important; margin-right: 150px;"><img src="arrow.png" style="width: 200px;"></div> <div style="position: fixed; top:0; left: 0; margin: 7vh 37vw;"> <img src="target.png" style="width: 26vw; height: auto;"></div>',

  '<div style="position: fixed; top:0; left: 0; margin: 20vh 10vw;"> <img src="explosion.png" style="width: 550px; height: auto; transform:translate(-50%, -50%);"></div><div style="position: fixed; top:0; left: 0; margin: 7vh 37vw;"> <img src="scrap.png" style="width: 26vw; height: auto;"></div>',

  '<div style="position: fixed; top:0; left: 0; margin: 7vh 37vw;"> <img src="news.png" style="width: 26vw; height: auto;"></div>',

  '<div style="position: fixed; top:0; left: 0; margin: 7vh 37vw;"> <img src="chapter_alert.png" style="width: 26vw; height: auto;"></div>',

  '<div style="position: fixed; top:0; right: 0;"> <img src="popup_targets.png" style="width: 20vw; height: auto;"></div>',

  '<div style="position: fixed; top:0; right: 0;"> <img src="popup_chapters.png" style="width: 20vw; height: auto;"></div>',

  '<div style="position: fixed; top:0; right: 0;"> <img src="popup_recon.png" style="width: 20vw; height: auto;"></div>',


]

const tutorial_outter_div = document.querySelector("#tutorial_outter_div")
const bkg_img = document.querySelector("#bkg_img")
const intro_text = document.querySelector("#intro_text")
const tutorial = document.querySelector("#tutorial")

const tutorial_previus_btn = document.querySelector("#tutorial_previus_btn")
const tutorial_next_btn = document.querySelector("#tutorial_next_btn")
const inner_tutorial = document.querySelector("#inner_tutorial")
const current_page = document.querySelector("#current_page")

tutorial.addEventListener("click", ()=>{
  intro_text.style.display = "none"
  tutorial.style.display = "none"
  tutorial_outter_div.style.display = "block"

  const div_tutorial_step = document.createElement("div")
  div_tutorial_step.id = "current_div_tutorial_step"
  div_tutorial_step.style.cssText = "position: relative"
  div_tutorial_step.innerHTML = tutorial_steps_list[0]
  document.body.appendChild(div_tutorial_step)
})

function adjust_button_display_f(n){
  if (n === 0){
    tutorial_previus_btn.style.cssText = "pointer-events: none;"
    tutorial_previus_btn.textContent = "-"
  }
  if (n === 9){
    tutorial_next_btn.style.cssText = "pointer-events: none;"
    tutorial_next_btn.textContent = "-"
  }
  if(n> 0){
    tutorial_previus_btn.style.cssText = "pointer-events: auto;"
    tutorial_previus_btn.textContent = "Previous"
  }
  if(n<9){
    tutorial_next_btn.textContent = "Next"
    tutorial_next_btn.style.cssText = "pointer-events: auto;"
  }

}

function tutorial_content_f(n){
  console.log(n, tutorial_steps_list[n])
  const old_div = document.querySelector("#current_div_tutorial_step")
  if(old_div) {
    console.log("the fuck")
    old_div.remove()
  }

  const div_tutorial_step = document.createElement("div")
  div_tutorial_step.id = "current_div_tutorial_step"
  div_tutorial_step.style.cssText = "position: relative"
  div_tutorial_step.innerHTML = tutorial_steps_list[n]
  document.body.appendChild(div_tutorial_step)
}


let n = 0
inner_tutorial.textContent = tutorial_texts[n]
tutorial_previus_btn.textContent = "-"
tutorial_next_btn.addEventListener("click", ()=>{
  n += 1
  inner_tutorial.textContent = tutorial_texts[n]
  adjust_button_display_f(n)
  current_page.textContent = n + 1
  tutorial_content_f(n)
})


tutorial_previus_btn.addEventListener("click", ()=>{
  n -= 1
  inner_tutorial.textContent = tutorial_texts[n]
  adjust_button_display_f(n)
  current_page.textContent = n + 1
  tutorial_content_f(n)
})