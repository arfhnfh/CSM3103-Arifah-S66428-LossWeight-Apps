document.addEventListener('DOMContentLoaded', function() {
    const bmiTab = document.getElementById('bmiTab');
    const historyTab = document.getElementById('historyTab');
    const messageTab = document.getElementById('messageTab');

    const bmiContent = document.getElementById('bmiContent');
    const historyContent = document.getElementById('historyContent');
    const messageContent = document.getElementById('messageContent');

    bmiTab.addEventListener('click', function() {
        activateTab(bmiTab, bmiContent);
    });

    historyTab.addEventListener('click', function() {
        activateTab(historyTab, historyContent);
    });

    messageTab.addEventListener('click', function() {
        activateTab(messageTab, messageContent);
    });

    function activateTab(tab, content) {
        const tabs = document.querySelectorAll('.tab-button');
        const contents = document.querySelectorAll('.tab-content');

        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        content.classList.add('active');
    }

    // Initially activate the BMI tab
    activateTab(bmiTab, bmiContent);
});
