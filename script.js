si = document.getElementById('si');
no = document.getElementById('no');
form = document.getElementById('form');
quest = document.getElementById('quest');

si.addEventListener('click', function() {
    alert('Gracias cuchurrumín, te amo');
    form.style.display = 'none';
    quest.style.display = 'flex';
});

no.addEventListener('click', function() {
    alert('No pasa nada cuchurrumín, te amo y respeto igual');
});