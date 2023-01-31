const template = document.createElement('template');
template.innerHTML = `
        <footer class="">
        <section class="footerContact">
        footer left
        </section>

        <section class="footerSocials">
        footer right
        </section>

        </footer>
`
document.body.appendChild(template.content);