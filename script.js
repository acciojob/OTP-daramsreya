const otp = document.querySelectorAll(".code");

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
