const users = [
    { login: "kamilla", password: "1234", name: "Камилла" },
    { login: "alex", password: "pass123", name: "Александр" },
    { login: "mila", password: "flower", name: "Мила" },
    { login: "ivan", password: "qwerty", name: "Иван" },
    { login: "sofia", password: "love", name: "София" },
    { login: "dima", password: "sunny", name: "Дима" }
];

document.getElementById("loginBtn").addEventListener("click", loginUser);

function loginUser() {
    const loginInput = document.getElementById("login").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    const message = document.getElementById("message");
    const gif = document.getElementById("gif");

    const foundUser = users.find(
        user => user.login === loginInput && user.password === passwordInput
    );

    if (foundUser) {
        message.textContent = `Добро пожаловать, ${foundUser.name}! 🌸`;
        message.style.color = "#ff69b4";
        gif.src = "https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUyOHJyemthejlsMHZnMTAwaG1iYWlod2E2MjBrY2o1ejhmYWM0ZXhwcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/17EvcNvlvZ63ueEC7j/giphy.gif";
        gif.style.display = "block";
    } else {
        message.textContent = "Ошибка! Неверный логин или пароль 💔";
        message.style.color = "#d6336c";
        gif.src = "https://external-preview.redd.it/4_9dY9HvlNOH_zoghvb5bYBXtVM-Q8mbMx-jg7pP9Iw.gif?auto=webp&s=0462febe8885c09e251f0a146c773357283c8d21";
        gif.style.display = "block";
    }
}
