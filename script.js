const input = document.querySelector('[autocomplete=one-time-code');
input.addEventListener('input', () => input.style.setProperty('--_otp-digit', input.selectionStart));

const wrongAudio = new Audio('/Wrong.mp3');
let wrongAnswers = 0;

function submit() {
    if (input.value.length != 7) {
        return;
    }

    if (input.value == "1432597") {
        document.location = "/win.html";
    } else if (wrongAnswers > 3) {
        document.location = "/lose.html";
    }
    else {
        wrongAnswers++;
        wrongAudio.play();
    }
}
