//Creamos un componente que podamos reutilizar.
const app = document.getElementById('app');
const Avatar = params => {
    const src = `https://randomuser.me/api/portraits/women/${params.id}.jpg`;
    //Devuelve HTML
    return `   
        <picture>
            <img src="${src}" />
            <h3>${params.name}</h3>
        </picture>`
}
app.innerHTML += Avatar( {id: 24, name:"Andrea"} )
app.innerHTML += Avatar( {id: 56, name:"Scarleth"} )