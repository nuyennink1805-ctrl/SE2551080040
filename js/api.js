let loadCategories = async () => {
    let res = await fetch('https://6a8e39c2baf2ac84246da4fe.mockapi.io/BookCategory');
    let data = await res.json();

    return data
}

let loading = () =>{
    return `<i class="fa-spin fa-solid fa-spinner"></i>`
}

let loadBooks = async () => {
    let res = await fetch ('https://6a8e39c2baf2ac84246da4fe.mockapi.io/books');
    let data = await res.json();
    return data;
}

window.onload = () => {

    let m = document.querySelector('.submenu');
    m.innerHTML = loading();

    loadCategories().then(data => {
        console.table(data);

        let html = '';
        for (let d of data) {
        html += `<li><a href="#">${d.name}</a></li>`
        }

        m.innerHTML = html;
    
    })
    let b = document.querySelector('.Books');
    b.innerHTML = loading();
    

    
    


    loadBooks().then(data =>{
        let html = '';
        for( let d of data){
            html += ` <div class="book">
            <div>
                <a href="./details.html"><img src="${d.image}" alt="book"></a>
                <h3>${d.title}</h3>
                <p>${d.price}</p>
                <a href="#" class="close">&times;</a>
            </div>
        </div>`
        }
        b.innerHTML = html;
    })
}

