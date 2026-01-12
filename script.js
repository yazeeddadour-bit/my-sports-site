const apiKey = '095a76963e86a6d8bc7b45ff1d7fb9e7'; // ضع مفتاحك هنا

async function getMatches() {
    const response = await fetch('https://v3.football.api-sports.io/fixtures?league=39&season=2026', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'v3.football.api-sports.io'
        }
    });
    const data = await response.json();
    const matchesList = document.getElementById('matches-list');

    matchesList.innerHTML = '';
    data.response.forEach(match => {
        const li = document.createElement('li');
        li.innerText = `${match.teams.home.name} vs ${match.teams.away.name} - ${match.fixture.date}`;
        matchesList.appendChild(li);
    });
}

// استدعاء الدالة عند تحميل الصفحة
window.onload = () => {
    getMatches();
    const lastVote = localStorage.getItem('lastVote');
    if(lastVote) {
        document.getElementById('result').innerText = 'آخر تصويت: ' + lastVote;
    }
}
