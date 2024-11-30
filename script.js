let moodData = [];

function trackMood(mood) {
    const date = new Date().toLocaleDateString();
    moodData.push({ date, mood });
    alert(`You are feeling ${mood}!`);
    updateChart();
}

function updateChart() {
    const ctx = document.getElementById('moodChart').getContext('2d');
    const labels = moodData.map(entry => entry.date);
    const data = moodData.map(entry => entry.mood);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label: 'Mood Trends',
                data,
            }]
        }
    });
}
