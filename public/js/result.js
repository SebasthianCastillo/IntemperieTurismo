window.addEventListener('load', () => {

    // Via Query parameters - GET
     const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    
    document.getElementById('destino').innerHTML = name;


})