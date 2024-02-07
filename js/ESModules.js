export class exam extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
        .carousel-section {
          background-color: white;
        }
        
        .carousel {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 400px;
        }
        
        .carousel__radio {
          display: none;
        }
        
        .carousel__slides {
          display: flex;
          width: 300%;
        }
        
        .carousel__slide {
          flex-basis: 100%;
        }
        
        .carousel__slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .carousel__navigation {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .carousel__navButton {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: gray;
          margin: 5px;
          cursor: pointer;
        }
        
        .carousel__navButton:hover {
          background-color: darkgray;
        }
        
        .carousel__radio:checked + .carousel__slides {
          transform: translateX(-33.33%);
        }
        
        .carousel__radio:nth-child(1):checked ~ .carousel__navigation label:nth-child(1),
        .carousel__radio:nth-child(2):checked ~ .carousel__navigation label:nth-child(2),
        .carousel__radio:nth-child(3):checked ~ .carousel__navigation label:nth-child(3) {
          background-color: darkgray;
        }
        
        
        </style>
        
        <section class="carousel-section">
        <div class="carousel">
          <input class="carousel__radio" type="radio" name="carousel" id="slide1" checked>
          <input class="carousel__radio" type="radio" name="carousel" id="slide2">
          <input class="carousel__radio" type="radio" name="carousel" id="slide3">
          
          <div class="carousel__slides">
            <div class="carousel__slide">
              <img src="../img/car1.jpg" alt="Imagen 1">
            </div>
            <div class="carousel__slide">
              <img src="../img/car2.jpg" alt="Imagen 2">
            </div>
            <div class="carousel__slide">
              <img src="../img/car3.jpg" alt="Imagen 3">
            </div>
          </div>
          
          <div class="carousel__navigation">
            <label class="carousel__navButton" for="slide1"></label>
            <label class="carousel__navButton" for="slide3"></label>
          </div>
        </div>
      </section>
      
`;
    }
}


export class info extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `
      <style>
      .divided-section {
        display: flex;
        overflow: hidden;
      }
      
      .divided-section__part {
        flex-grow: 1;
        padding: 40px;
        color: white;
        text-align: center;
      }
      
      .divided-section__part h1 {
        font-weight: bold;
        font-size: 24px;
        margin-bottom: 10px;
      }
      
      .divided-section__part p {
        font-size: 16px;
        line-height: 1.5;
      }
      
      .divided-section__part--blue {
        background-color: #4286f4;
      }
      
      .divided-section__part--green {
        background-color: #41a93a;
      }
      
      .divided-section__part--orange {
        background-color: #ff8300;
      }
      
      </style>
      
      <section class="divided-section">
  <div class="divided-section__part divided-section__part--blue">
    <h1>EN CASO DE EMERGENCIA
    (+593)-02-382-9500</h1>
  </div>
  <div class="divided-section__part divided-section__part--green">
    <h1>SERVICIO 24 HORAS</h1>
    <p>Hospitalizacion, Area de Imagenes, Laboratorio y Emergencias</p>
  </div>
  <div class="divided-section__part divided-section__part--orange">
    <h1>HORARIO DE CONSULTAS</h1>
    <p>LUNES - VIERNES --
    MON - FRI </p>
  </div>
</section>
`;
  }
}

export class docs extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `
      <style>
      .image-section {
        background-color: white;
        display: flex;
        justify-content: space-between;
        padding: 20px;
      }
      
      .image-section__part {
        flex-basis: calc(33.33% - 20px);
        text-align: center;
      }
      
      .image-section__part img {
        width: 100%;
        max-width: 300px;
        height: auto;
        display: block;
        margin: 0 auto;
        border-radius: 50%;
      }
      
      .image-section__part p {
        margin-top: 10px;
        font-size: 16px;
      }
      
      </style>
      
      <section class="image-section">
      <div class="image-section__part">
        <img src="../img/dc1.jpeg" alt="Imagen 1">
        <p>DR. ELIO RAMIREZ</p>
      </div>
      <div class="image-section__part">
        <img src="../img/dc2.jpeg" alt="Imagen 2">
        <p>DR. JOSÉ FERRER</p>
      </div>
      <div class="image-section__part">
        <img src="../img/dc3.jpeg" alt="Imagen 3">
        <p>DR. HECTOR VALLEJO</p>
      </div>
    </section>
    
`;
  }
}

export class espec extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `
      <style>
      .menu-section {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60vh;
        background: linear-gradient(70deg, blue, #66F9E0);
      }
      
      .menu-item {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 20px;
        cursor: pointer;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
      }
      
      .menu-item:hover {
        transform: scale(1.05);
      }
      
      .menu-label {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 12px 16px;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      
      .menu-item:hover .menu-label {
        opacity: 0;
      }
      
      .info {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      .menu-item:hover .info {
        opacity: 1;
      }
      
      .info img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        margin-bottom: 16px;
      }
      
      .info p {
        text-align: center;
        font-size: 14px;
        color: white;
        margin: 0;
      }
      
      </style>
      <section class="menu-section">
      <div class="menu-item">
        <input type="checkbox" id="toggle-info1" class="toggle-info">
        <label for="toggle-info1" class="menu-label"></label>
        <div class="info">
          <img src="../img/h1.jpg" alt="Imagen 1">
          <p>CARDIOLOGO INTERNISTA</p>
        </div>
      </div>
      <div class="menu-item">
        <input type="checkbox" id="toggle-info2" class="toggle-info">
        <label for="toggle-info2" class="menu-label"></label>
        <div class="info">
          <img src="../img/h2.jpg" alt="Imagen 2">
          <p>Odontología</p>
        </div>
      </div>
      <div class="menu-item">
        <input type="checkbox" id="toggle-info3" class="toggle-info">
        <label for="toggle-info3" class="menu-label"></label>
        <div class="info">
          <img src="../img/h3.jpg" alt="Imagen 3">
          <p>Médicina Interna</p>
        </div>
      </div>
      <div class="menu-item">
        <input type="checkbox" id="toggle-info4" class="toggle-info">
        <label for="toggle-info4" class="menu-label"></label>
        <div class="info">
          <img src="../img/h4.jpg" alt="Imagen 4">
          <p>Laboratorio</p>
        </div>
      </div>
      <div class="menu-item">
        <input type="checkbox" id="toggle-info5" class="toggle-info">
        <label for="toggle-info5" class="menu-label"></label>
        <div class="info">
          <img src="../img/h5.jpg" alt="Imagen 5">
          <p>Quirófano</p>
        </div>
      </div>
    </section>
    
    
    
`;
  }
}

export class infotec extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `
      <style>
      .image-section {
        background-color: #fff;
        padding: 40px;
      }
      
      .content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      
      .image-container {
        flex-basis: 50%;
        padding-right: 20px;
      }
      
      .image-container img {
        max-width: 100%;
        border-radius: 8px;
      }
      
      .text-container {
        flex-basis: 50%;
        color: #333;
      }
      
      .text-container h2 {
        font-size: 24px;
        margin-bottom: 20px;
      }
      
      .text-container p {
        line-height: 1.5;
      }
      </style>
      
      <section class="image-section">
      <div class="content">
        <div class="image-container">
          <img src="../img/cardi.jpg" alt="Imagen">
        </div>
        <div class="text-container">
          <h2>Cardiología</h2>
          <p>Rama de la medicina que se especiliza en el diagnóstico y tratamiento de enfermedades del corazón, los vasos sanguíneos y el sistema circulatorio. Estas enfermedades incluyen enfermedad de las arterias coronarias, problemas del ritmo del corazón e insuficiencia cardíaca.</p>
        </div>
      </div>
    </section>
    
    
`;
  }
}

export class odon extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `
      <style>
      .image-section {
        background-color: #fff;
        padding: 40px;
      }
      
      .content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      
      .image-container {
        flex-basis: 50%;
        padding-right: 20px;
      }
      
      .image-container img {
        max-width: 100%;
        border-radius: 8px;
      }
      
      .text-container {
        flex-basis: 50%;
        color: #333;
      }
      
      .text-container h2 {
        font-size: 24px;
        margin-bottom: 20px;
      }
      
      .text-container p {
        line-height: 1.5;
      }
      </style>
      
      <section class="image-section">
      <div class="content">
        <div class="image-container">
          <img src="../img/odon.jpg" alt="Imagen">
        </div>
        <div class="text-container">
          <h2>Odontología</h2>
          <p>La Odontología es el área médica dedicada al estudio de los dientes y las estructuras anejas y al tratamiento de las enfermedades que les afectan.</p>
        </div>
      </div>
    </section>
    
    
`;
  }
}

export class interna extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `
      <style>
      .image-section {
        background-color: #fff;
        padding: 40px;
      }
      
      .content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      
      .image-container {
        flex-basis: 50%;
        padding-right: 20px;
      }
      
      .image-container img {
        max-width: 100%;
        border-radius: 8px;
      }
      
      .text-container {
        flex-basis: 50%;
        color: #333;
      }
      
      .text-container h2 {
        font-size: 24px;
        margin-bottom: 20px;
      }
      
      .text-container p {
        line-height: 1.5;
      }
      </style>
      
      <section class="image-section">
      <div class="content">
        <div class="image-container">
          <img src="../img/interna.jpg" alt="Imagen">
        </div>
        <div class="text-container">
          <h2>Medicina Interna</h2>
          <p>Consiste en el ejercicio de una atención clínica completa y científica, que integra en todo momento los aspectos fisiopatológicos, diagnóstica y terapéutica, con los pacientes, mediante el adecuado uso de los recursos médicos disponibles.Rama de la medicina que se especiliza en el diagnóstico y tratamiento de enfermedades del corazón, los vasos sanguíneos y el sistema circulatorio. Estas enfermedades incluyen enfermedad de las arterias coronarias, problemas del ritmo del corazón e insuficiencia cardíaca.</p>
        </div>
      </div>
    </section>
    
    
`;
  }
}
export class labor extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `
      <style>
      .image-section {
        background-color: #fff;
        padding: 40px;
      }
      
      .content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      
      .image-container {
        flex-basis: 50%;
        padding-right: 20px;
      }
      
      .image-container img {
        max-width: 100%;
        border-radius: 8px;
      }
      
      .text-container {
        flex-basis: 50%;
        color: #333;
      }
      
      .text-container h2 {
        font-size: 24px;
        margin-bottom: 20px;
      }
      
      .text-container p {
        line-height: 1.5;
      }
      </style>
      
      <section class="image-section">
      <div class="content">
        <div class="image-container">
          <img src="../img/labora.jpg" alt="Imagen">
        </div>
        <div class="text-container">
          <h2>Laboratorio Clínico</h2>
          <p>El laboratorio clínico es el lugar donde un equipo multidisciplinario formado por el químico clínico, el analista clínico, el médico, el patólogo clínico, los técnicos de laboratorio y los técnicos </p>
        </div>
      </div>
    </section>
    
    
`;
  }
}

export class cirujia extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `
      <style>
      .image-section {
        background-color: #fff;
        padding: 40px;
      }
      
      .content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      
      .image-container {
        flex-basis: 50%;
        padding-right: 20px;
      }
      
      .image-container img {
        max-width: 100%;
        border-radius: 8px;
      }
      
      .text-container {
        flex-basis: 50%;
        color: #333;
      }
      
      .text-container h2 {
        font-size: 24px;
        margin-bottom: 20px;
      }
      
      .text-container p {
        line-height: 1.5;
      }
      </style>
      
      <section class="image-section">
      <div class="content">
        <div class="image-container">
          <img src="../img/ciru.jpg" alt="Imagen">
        </div>
        <div class="text-container">
          <h2>Cirujía</h2>
          <p>Se denomina cirugía a la práctica que implica la manipulación mecánica de las estructuras anatómicas con un fin médico, bien sea diagnóstico, terapéutico o pronóstico</p>
        </div>
      </div>
    </section>
    
    
`;
  }
}

export class formulario extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `
      <style>
      .contact-section {
        background-color: #fff;
        padding: 40px 0;
      }
      
      .form-container {
        max-width: 500px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f8f8f8;
        border-radius: 8px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      }
      
      .form {
        text-align: center;
      }
      
      .form h2 {
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: bold;
      }
      
      .form-group {
        margin-bottom: 20px;
      }
      
      .form-group label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }
      
      .form-group input,
      .form-group textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      
      button[type="submit"] {
        display: inline-block;
        padding: 10px 20px;
        background-color: #4caf50;
        color: #fff;
        border: none;
        border-radius: 4px;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s;
      }
      
      button[type="submit"]:hover {
        background-color: #45a049;
      }
      
      </style>
      <section class="contact-section">
      <div class="form-container">
        <form class="form">
          <h2>Contacto</h2>
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" placeholder="Ingrese su nombre" required>
          </div>
          <div class="form-group">
            <label for="telefono">Teléfono:</label>
            <input type="tel" id="telefono" placeholder="Ingrese su teléfono" required>
          </div>
          <div class="form-group">
            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" placeholder="Ingrese su apellido" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Ingrese su email" required>
          </div>
          <div class="form-group">
            <label for="asunto">Asunto:</label>
            <input type="text" id="asunto" placeholder="Ingrese el asunto" required>
          </div>
          <div class="form-group">
            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" placeholder="Escriba su mensaje" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
`;
  }
}

export class ubicacion extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `
      <style>
      .gradient-section {
        background: linear-gradient(to right, #fff, #87ceeb);
        padding: 40px 0;
      }
      
      .content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      
      .image-container {
        flex-basis: 50%;
        padding-right: 20px;
      }
      
      .image-container img {
        max-width: 100%;
        border-radius: 8px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
      }
      
      .contact-info {
        flex-basis: 50%;
        padding-left: 20px;
        color: #333;
      }
      
      .contact-info h2 {
        font-size: 24px;
        margin-bottom: 20px;
      }
      
      .social-media {
        margin-bottom: 20px;
      }
      
      .social-link {
        display: inline-block;
        width: 40px;
        height: 40px;
        background-color: #fff;
        border-radius: 50%;
        margin-right: 10px;
        color: #333;
        text-align: center;
        line-height: 40px;
        font-size: 20px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s, color 0.3s, transform 0.3s;
      }
      
      .social-link:hover {
        background-color: #87ceeb;
        color: #fff;
        transform: scale(1.1);
      }
      
      .contact-details p {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
      }
      
      .contact-details i {
        margin-right: 10px;
        font-size: 16px;
      }
      
      .contact-details i:before {
        font-weight: bold;
      }
      
      @media (max-width: 768px) {
        .content {
          flex-direction: column;
          text-align: center;
        }
      
        .image-container {
          margin-bottom: 20px;
          padding-right: 0;
        }
      
        .contact-info {
          padding-left: 0;
        }
      }
      
      </style>
      <section class="gradient-section">
      <div class="content">
        <div class="image-container">
          <img src="../img/map.png" alt="Imagen">
        </div>
        <div class="contact-info">
          <h2>Contacto</h2>
          <div class="contact-details">
            <p><i class="fas fa-phone-alt"></i> +123456789</p>
            <p><i class="fas fa-envelope"></i> vitamen@gmail.com.com</p>
          </div>
        </div>
      </div>
    </section>
    
`;
  }
}

