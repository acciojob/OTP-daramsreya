const otp = document.querySelectorAll(".code");
window.addEventListener('DOMContentLoaded', () => {
    otp[0].focus(); // ensure first input is focused
});
otp.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value && index < otp.length - 1) {
            otp[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === "Backspace" && input.value === "" && index > 0) {
            otp[index - 1].focus();
        }
    });
});
