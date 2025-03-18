import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDHzW9zVRMkhZakRs5reLimI0NPtLejc4Q",
    authDomain: "login-7afe1.firebaseapp.com",
    projectId: "login-7afe1",
    storageBucket: "login-7afe1.appspot.com",
    messagingSenderId: "1001689689419",
    appId: "1:1001689689419:web:8fae6de5d31f027a4e8cce"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.onload = () => {
    showLoginModal();
};

function showLoginModal() {
    const modal = document.createElement("div");
    modal.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(16, 10, 141, 1);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            font-size: 30px;
        ">
            <div style="
                background: #3769DB;
                padding: 50px;
                border-radius: 20px;
                color: white;
                text-align: center;
                font-family: poppins;
                width: 300px;
                box-shadow: 0px 0px 20px black;
            ">
                <h2>Beta Testing OrbitV2</h2>
                <input type="text" id="username" placeholder="Email" style="
                    display: block;
                    margin: 10px auto;
                    padding: 8px;
                    border-radius: 20px;
                    border: none;
                    outline: none;
                    width: 90%;
                    font-family: poppins;
                    font-size: 20px;
                "/>
                <input type="password" id="password" placeholder="Password" style="
                    display: block;
                    margin: 10px auto;
                    padding: 8px;
                    border-radius: 20px;
                    border: none;
                    outline: none;
                    width: 90%;
                    font-family: poppins;
                    font-size: 20px;
                "/>
                <button id="loginBtn" style="
                    margin-top: 15px;
                    padding: 8px 15px;
                    background-color: #8E0FCD;
                    color: white;
                    border: none;
                    border-radius: 20px;
                    cursor: pointer;
                    font-family: poppins;
                    font-size: 20px;
                ">Login</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    document.getElementById("loginBtn").onclick = () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        signInWithEmailAndPassword(auth, username, password)
            .then(() => {
                sessionStorage.setItem("isAuthenticated", "true");
                modal.remove();
            })
            .catch(() => {
                alert("Invalid username or password. Try again.");
            });
    };
}
