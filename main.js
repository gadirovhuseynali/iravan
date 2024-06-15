const container = document.getElementById('main-container')

container.style.width = '80%'
container.style.maxWidth = '1200px'
container.style.margin = '0 auto'
container.style.paddingTop = '50px'


const navbar = `<header>
<div class="container">
    <nav>
        <div class="logo">
            Logo
        </div>
        <ul id="links-list" >
            <li>
                <a href="/pages/toponyms.html">Türk toponimləri</a>
            </li>
            <li>
                <a href="/pages/historical-persons.html">Irəvanlı şəxsiyyətlər</a>
            </li>
            <li>
                <a href="/pages/history-articles.html">Tarixi həqiqətlər</a>
            </li>
            <li>
                <a href="/pages/museum.html">Dünya muzeylərində irsimiz</a>
            </li>
            <li>
                <a href="/pages/blogs.html">Bloq yazıları</a>
            </li>
            <li>
                <a href="/pages/about.html">Layihə haqqında</a>
            </li>
            <li>
                <a href="/pages/qayidish.html">Qayıdış</a>
            </li>
        </ul>

        <div id="mobile-menu" class='hide' >
        <ul>
            <li>
                <a href="/pages/toponyms.html">Türk toponimləri</a>
            </li>
            <li>
                <a href="/pages/historical-persons.html">Irəvanlı şəxsiyyətlər</a>
            </li>
            <li>
                <a href="/pages/history-articles.html">Tarixi həqiqətlər</a>
            </li>
            <li>
                <a href="/pages/museum.html">Dünya muzeylərində irsimiz</a>
            </li>
            <li>
                <a href="/pages/blogs.html">Bloq yazıları</a>
            </li>
            <li>
                <a href="/pages/about.html">Layihə haqqında</a>
            </li>
            <li>
                <a href="/pages/qayidish.html">Qayıdış</a>
            </li>
        </ul></div>

        <button id="hamburger" >
        <i class="fa-solid fa-bars"></i>
        </button>
    </nav>
</div>
</header>`

const footer = `<footer>
        <div class="container-footer">
            <div class="logo">Logo</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eum!
            </p>
        </div>

        <p>
            &copy; 2024 @Sitename. All rights reserved. 
        </p>

    </footer>`

document.body.innerHTML = navbar + document.body.innerHTML + footer

document.getElementById("hamburger").addEventListener('click', (e)=> {
    e.stopPropagation()
    document.getElementById('mobile-menu').classList.toggle('hide')

    if (document.getElementById('mobile-menu').classList.contains('hide')) {
        document.getElementById("hamburger").innerHTML = `<i class="fa-solid fa-bars"></i>`
    } else {
        document.getElementById("hamburger").innerHTML = `<i class="fa-solid fa-xmark"></i>`
    }
})
document.body.addEventListener('click', ()=> {
    document.getElementById('mobile-menu').classList.add('hide')

})


const links = [...document.querySelectorAll('#links-list a')]

window.addEventListener('load', ()=> {
    links.map(i =>{
        if (i.getAttribute('href') == window.location.pathname) {
            i.classList.add('active')
        } else {
            i.classList.remove('active')
        }
    })
})


