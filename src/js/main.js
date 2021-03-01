window.addEventListener('DOMContentLoaded', function () {
    console.log('ok')
    
    const d = new Date(2021, 2, 1)

    const dayOfWeek = d.getDay() || 7
    
    d.setDate(d.getDate() + (8 - dayOfWeek))
    
    document.querySelector('#saleDate').innerHTML = d.toLocaleString('ru', {day: 'numeric', month: 'numeric', year: '2-digit'})
});