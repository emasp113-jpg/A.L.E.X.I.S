/* ===== ALEXIS AI - App Logic & Personality ===== */

// Personalidad de Alexis:
// - Hombre
// - Humilde
// - Confiado
// - Carismático
// - Leal, cercano, como un mejor amigo tecnológico

const alexisPersonality = {
    name: "Alexis",
    traits: ["humilde", "confiado", "carismático"],
    style: "Habla de forma natural, cercana y sin soberbia. Como un mejor amigo que sabe de todo y siempre está dispuesto a ayudar."
};

// Respuestas base según personalidad
const responses = {
    greetings: [
        "Ey, ¿qué tal? Dime en qué te puedo echar una mano.",
        "Aquí estoy. ¿Qué necesitas?",
        "Hola. Listo cuando tú lo estés.",
        "¿Qué se ofrece? Cuéntame."
    ],
    resumen: [
        "Claro, te hago un resumen rápido y sin rodeos. ¿De qué tema o del día en general?",
        "Con gusto. Dime de qué quieres el resumen y te lo dejo claro y directo.",
        "Perfecto. Mientras más detalles me des, mejor te lo dejo. ¿Empezamos?"
    ],
    autos: [
        "Me encanta hablar de autos. ¿Buscas recomendaciones, datos técnicos, o solo quieres charlar de algún modelo?",
        "Autos es de mis temas favoritos. ¿Qué tienes en mente? Deportivos, eléctricos, clásicos… lo que sea.",
        "Dime qué te late y te cuento con detalle, sin rodeos."
    ],
    juegos: [
        "Juegos, buena elección. ¿Quieres recomendaciones, tips, o hablar de algún título en específico?",
        "Claro. ¿Estás buscando algo nuevo para jugar o quieres tips de algo que ya tienes?",
        "Con gusto. Dime género o plataforma y te ayudo."
    ],
    instrucciones: [
        "Sin problema. Dime qué necesitas hacer y te doy los pasos claros y en orden.",
        "Claro, te guío paso a paso. ¿De qué se trata?",
        "Aquí estoy para eso. Cuéntame qué quieres lograr y lo desgloso fácil."
    ],
    default: [
        "Entiendo. Déjame pensarlo un segundo… Listo, te respondo con calma.",
        "Buena pregunta. Te lo explico de forma sencilla.",
        "Claro, vamos a verlo juntos. ¿Me das un poco más de contexto?",
        "Tranquilo, aquí estoy. Cuéntame con más detalle y te ayudo.",
        "Me parece interesante. Te doy mi punto de vista sin rodeos."
    ]
};

// ===== Splash =====
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splash').classList.add('hide');
        document.getElementById('app').classList.remove('hidden');
    }, 2200);
});

// ===== Navigation =====
const navButtons = document.querySelectorAll('.nav-btn');
const screens = document.querySelectorAll('.screen');

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.screen;

        navButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        screens.forEach(s => s.classList.remove('active'));
        document.getElementById(target).classList.add('active');

        if (target === 'chat') {
            scrollChatToBottom();
        }
    });
});

function goToChat(prefill = '') {
    // Cambiar a chat
    navButtons.forEach(b => b.classList.remove('active'));
    document.querySelector('[data-screen="chat"]').classList.add('active');

    screens.forEach(s => s.classList.remove('active'));
    document.getElementById('chat').classList.add('active');

    if (prefill) {
        document.getElementById('message-input').value = prefill;
        setTimeout(() => sendMessage(), 300);
    }
}

// ===== Chat Logic =====
const chatContainer = document.getElementById('chat-container');
const messageInput = document.getElementById('message-input');

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const text = messageInput.value.trim();
    if (!text) return;

    // Mensaje del usuario
    appendMessage(text, 'user');
    messageInput.value = '';

    // Simular que Alexis está pensando
    setTimeout(() => {
        const reply = generateReply(text);
        appendMessage(reply, 'alexis');
    }, 700 + Math.random() * 600);
}

function appendMessage(text, sender) {
    const div = document.createElement('div');
    div.className = `message ${sender}`;

    const time = new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });

    if (sender === 'alexis') {
        div.innerHTML = `
            <div class="avatar">A</div>
            <div class="bubble">
                <p>${text}</p>
                <span class="time">${time}</span>
            </div>
        `;
    } else {
        div.innerHTML = `
            <div class="avatar">Tú</div>
            <div class="bubble">
                <p>${text}</p>
                <span class="time">${time}</span>
            </div>
        `;
    }

    chatContainer.appendChild(div);
    scrollChatToBottom();
}

function scrollChatToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function generateReply(userText) {
    const lower = userText.toLowerCase();

    // Detectar intención
    if (lower.includes('hola') || lower.includes('hey') || lower.includes('buenas') || lower.includes('qué tal')) {
        return randomFrom(responses.greetings);
    }
    if (lower.includes('resumen') || lower.includes('resume') || lower.includes('día')) {
        return randomFrom(responses.resumen);
    }
    if (lower.includes('auto') || lower.includes('carro') || lower.includes('coche') || lower.includes('vehículo')) {
        return randomFrom(responses.autos);
    }
    if (lower.includes('juego') || lower.includes('game') || lower.includes('videojuego')) {
        return randomFrom(responses.juegos);
    }
    if (lower.includes('instruccion') || lower.includes('cómo') || lower.includes('paso') || lower.includes('guía')) {
        return randomFrom(responses.instrucciones);
    }
    if (lower.includes('quién eres') || lower.includes('quién sos') || lower.includes('tu nombre')) {
        return "Soy Alexis. Un asistente hecho para ti. Humilde, confiado y siempre dispuesto a echarte una mano. ¿En qué andamos?";
    }
    if (lower.includes('gracias') || lower.includes('thank')) {
        return "De nada, para eso estoy. Cualquier otra cosa, aquí me tienes.";
    }
    if (lower.includes('adios') || lower.includes('chao') || lower.includes('nos vemos')) {
        return "Nos vemos. Cuídate y cuando necesites algo, aquí estaré.";
    }

    // Respuesta por defecto con personalidad
    return randomFrom(responses.default);
}

function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Mensaje inicial ya está en el HTML
