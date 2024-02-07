const menuStyles = `
  <style>
  .menu {
    background: linear-gradient(to bottom right, rgb(241, 244, 245), rgb(0, 102, 255));
    padding: 10px;
    text-align: right;
  }
    
  .menu-item {
    display: inline-block;
    margin-right: 10px;
    text-decoration: none;
    color: white;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .menu-item:hover {
    background-color: lightblue;
    color: white;
  }
  
  </style>
`,
  mision = `
<style>
.section {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
  }

  .description {
    flex-grow: 1;
    padding-right: 20px;
    font-size: 16px;
    color: #333;
  }

  .image {
    max-width: 600px;
  max-height: auto;
    align-self: flex-end;
  }
  </style>
`,
  doctor = `
<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    background: linear-gradient(to right, #FFFF, #63A6F7);;
    padding: 20px;
    border-radius: 10px;
  }

  .top {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bottom {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box {
    width: 200px;
    height: 200px;
    background-color: #f1f1f1;
    border: 2px solid blue;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }

  .box:hover {
    transform: scale(1.05);
  }

  .box img {
    width: 120px;
    height: 120px;
    border-radius: 0%;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .box p {
    margin: 0;
    font-size: 16px;
    color: #333;
    text-align: center;
  }
</style>
`,
  Pie = `
</style>
.footer {
    background-color: #f9f9f9;
    padding: 20px;
    text-align: center;
  }
  
  .footer-content {
    color: white;
    font-size: 14px;
  }
  .footer p{
    color:white;
  }
  </style>
`;

class Menu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      ${menuStyles}

      <nav class="menu">
        <a href="index.html" class="menu-item">Inicio</a>
        <a href="html/nosotros.html" class="menu-item">Nosotros</a>
        <a href="html/especialidad.html" class="menu-item">Especialidades</a>
        <a href="html/contacto.html" class="menu-item">Contactenos</a>
      </nav>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
customElements.define('custom-menu', Menu);

class Menu2 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
    ${menuStyles}

    <nav class="menu">
<a href="../index.html" class="menu-item">Inicio</a>
<a href="nosotros.html" class="menu-item">Nosotros</a>
<a href="especialidad.html" class="menu-item">Especialidades</a>
<a href="contacto.html" class="menu-item">Contactenos</a>
</nav>
  `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('custom-menu2', Menu2);

class Mision extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      ${mision}
      <section class="section">
      <div class="description">
        <h2>Mision</h2>
        <p>"Cuidar la salud de nuestros pacientes, con calidez, mediante infraestructura y tecnología modernas, y un equipo humano calificado y comprometido"</p>
        <h2>Vision</h2>
        <p>"Ser la institución médica reconocida por cumplir las expectativas de calidad y servicio de sus pacientes logrando sustentabilidad e impacto social positivo"</p>
        <h2>Valores</h2>
        <p>"Etica Profesional, Lealtad, Honestidad, Compromiso, Perseverancia, Puntualidad, Responsabilidad. "</p>
        </div>
      <div class="image">
        <img src="img/mision.jpg" alt="Imagen">
      </div>
    </section>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('custom-mision', Mision);



class Doctor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      ${doctor}
      <section class="container">
      <h1>Servicios</h1>
      <div class="top">
        <div class="box">
          <img src="img/1.png" alt="Imagen 1">
          <p>Laboratorio Clinico</p>
        </div>
        <div class="box">
        <img src="img/2.png" alt="Imagen 1">
          <p>Unidad de cuidados intensivos</p>
        </div>
        <div class="box">
        <img src="img/3.png" alt="Imagen 1">
          <p>Emergencia</p>
        </div>
      </div>
      <div class="bottom">
        <div class="box">
        <img src="img/4.png" alt="Imagen 1">
          <p>Neonatos</p>
        </div>
        <div class="box">
        <img src="img/5.png" alt="Imagen 1">
          <p>Endoscopia</p>
        </div>
        <div class="box">
        <img src="img/6.png" alt="Imagen 1">
          <p>Servicios Complementarios</p>
        </div>
      </div>
    </section>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('custom-doctor', Doctor);

class Derechos extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      ${doctor}
      <footer class="footer">
  <div class="footer-content">
    <p>&copy; 2023 ESPE - Jacome Ivonne </p>
  </div>
</footer>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('custom-pie', Derechos);

