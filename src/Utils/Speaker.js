export default function Speaker(msg, cb = null) {
  if(!window.speechSynthesis) return false;

  msg = new SpeechSynthesisUtterance(msg.toLowerCase());

  msg.rate = 1.15;
  msg.pitch = 1.63;
  msg.onend = cb;
  window.speechSynthesis.speak(msg);

  return true;
}