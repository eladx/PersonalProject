document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');
    const closeButton = document.querySelector('.close-button');

    function showSidebar() {
        sidebar.style.display = 'flex';
        document.addEventListener('click', outsideClickListener);
    }

    function hideSidebar() {
        sidebar.style.display = 'none';
        document.removeEventListener('click', outsideClickListener);
    }

    function outsideClickListener(event) {
        if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
            hideSidebar();
        }
    }

    menuButton.addEventListener('click', function (event) {
        event.preventDefault();
        showSidebar();
    });

    closeButton.addEventListener('click', function (event) {
        event.preventDefault();
        hideSidebar();
    });
});
