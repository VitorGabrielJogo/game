window.addEventListener('load', () => {
    setTimeout(() => {
        move_pages.section_left();
    }, 4900);
});

const move_pages = {
    section_left: function() {
        document.querySelector('#container_page_logo').classList.add("move_left");
    },
};