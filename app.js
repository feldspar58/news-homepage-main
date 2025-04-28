const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

function showSidebar(){
    sidebar.style.display = 'flex';
    overlay.style.display = 'block'; 
}

function hideSidebar(){
    sidebar.style.display = 'none';
    overlay.style.display = 'none'; 
}

overlay.addEventListener('click', () => {
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
  });