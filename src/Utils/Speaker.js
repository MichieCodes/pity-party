let voices;

export default function Speaker(msg, cb = null) {
  if(!window.speechSynthesis) return false;

  // if(!voices) 
  //   voices = window.speechSynthesis.getVoices();

  msg = new SpeechSynthesisUtterance(msg.toLowerCase());
  // msg.voice = voices[5];
  // console.log(voices)
  msg.rate = 1.15;
  msg.pitch = 1.63;
  msg.onend = cb;
  window.speechSynthesis.speak(msg);

  return true;
}