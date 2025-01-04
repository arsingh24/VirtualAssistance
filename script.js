let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate =1
    text_speak.pitch =1
    text_speak.volume =1
    text_speak.lang="en-IN"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day = new Date()
    let hours= day.getHours()
    console.log(hours)
    if (hours>=0 && hours<12){
        speak("Good morning Sir")
    }
    else if (hours>=12 && hours<16){
        speak("Good afternoon Sir")
    }
    else{
        speak("Good evening Sir")
    }
}

window.addEventListener('load',()=>{
    wishMe()
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
    recognition.onresult = (event)=>{
    let currentIndex = event.resultIndex
    // console.log(currentIndex); 
    let transcript = event.results[currentIndex][0].transcript
    // console.log(transcript); 
    // console.log(event); 
    content.innerText = "";
    takeCommand(transcript.toLowerCase())
    }

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display ="none"
    voice.style.display="block"
})

function takeCommand(message){
    btn.style.display ="flex"
    voice.style.display="none"

    if (message.includes("hello")||message.includes("hey")){
        speak("mogambo khush huaa, pucho kya janana hai")
    }
    else if(message.includes("hu r u")||message.includes("kaun ho tum")){
        speak("mera nam mogambo hai, mere sarkar abhishek hai")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube.........")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram.........")
        window.open("https://www.instagram.com")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook.........")
        window.open("https://www.facebook.com")
    }
    else if(message.includes("open chat gpt")){
        speak("opening chatgpt.........")
        window.open("https://www.ChatGPT.com")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator.........")
        window.open("calculator://")
    }

    else if(message.includes("time")){
        let time = new Date().toLocaleTimeString(undefined,{hour:"numeric",minutes:"numeric"})
         speak(time)
       
    }
    else if(message.includes("open mdn")){
        speak("opening javascript in mdn.........")
        window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript")
    }
    else{
        let finalText = `yeh mila hai google pe ${message.replace("mogambo","")}`
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("mogambo","")}`)
    }
}

