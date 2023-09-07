const input = document.getElementById('input');
const voiceConverTer = document.getElementById('voiceConverTer');
const select = document.querySelector('#select')
const synth = window.speechSynthesis;

// speak input value
let speech;
voiceConverTer.addEventListener('click',()=>{
    speech = new SpeechSynthesisUtterance(input.value);
    synth.speak(speech)
    
})


// change language voice
// let option;
// const voices = synth.getVoices(); 
// select.addEventListener('change',()=>{
//     for(i=0;i<voices.length;i++){
//          option = document.createElement('option');
//         option.innerText = voices[i].name;
//         option.value = voices[i].lang;
//         select.appendChild(option)
//     }
//     speech.voices(option)

// })