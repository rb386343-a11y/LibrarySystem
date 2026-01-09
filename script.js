document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    message.textContent = "";
    message.className = "";

    if (email === "" || password === "") {
        message.textContent = "Please fill all required fields.";
        message.classList.add("error");
        return;
    }

    if (!email.includes("@")) {
        message.textContent = "Invalid email format.";
        message.classList.add("error");
        return;
    }

    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters.";
        message.classList.add("error");
        return;
    }

    message.textContent = "Registration successful!";
    message.classList.add("success");
});