document.getElementById('loadBtn').addEventListener('click', loadUsers);

function loadUsers() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
            const users = data.results;
            renderUsers(users);
        })
        .catch(err => console.error('Помилка:', err));
}

function renderUsers(users) {
    const out = document.getElementById('out');
    out.innerHTML = "";

    users.forEach(user => {
        const card = document.createElement('div');
        card.className = "card";

        // Поля по варіанту (У ТАКІЙ ПОСЛІДОВНОСТІ!)
        const picture = user.picture.large;
        const email   = user.email;
        const name    = `${user.name.first} ${user.name.last}`;
        const phone   = user.phone;
        const city    = user.location.city;

        card.innerHTML = `
            <img src="${picture}" alt="user">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>City:</strong> ${city}</p>
        `;

        out.appendChild(card);
    });
}
