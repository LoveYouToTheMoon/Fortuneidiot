document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    const input = document.getElementById('myInput');
    const vineboom = new Audio('vine-boom.mp3');
    const buttondd = document.getElementById('Hienthi');
    button.addEventListener('click', function() {
        const inputValue = input.value;
        var h1Element = document.createElement('h2');
        h1Element.textContent = 'Lời Tiên Tri Sẽ Xuất Hiện Sau 2 Giây!!';
        document.body.appendChild(h1Element);        
        setTimeout(function() {
            window.location.href = 'page2.html';
        }, 2000);
    });
});
