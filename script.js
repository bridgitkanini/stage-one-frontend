document.addEventListener("DOMContentLoaded", () => {
    const updateTime = () => {
        const currentTimeUTC = new Date().toISOString().split("T")[1].split(".")[0];
        const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

        document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentTimeUTC;
        document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
    };

    updateTime();
    setInterval(updateTime, 1000);
});
