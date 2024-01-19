window.addEventListener('DOMContentLoaded', () => {
    console.log("Holaa");

    const menuDropdown = document.getElementById('menuDropdown');
    const menuButtonOpen = document.getElementById('menuButtonOpen');

    console.log(menuDropdown);

    menuButtonOpen.addEventListener('click', () => {
        menuDropdown.classList.toggle('menu-dropdown-toggle');
        console.log(menuDropdown);
    });

});