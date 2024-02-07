class medico extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
            <style>
            .showcase {
                position: relative;
                width: 100%;
                height: 600px;
                overflow: hidden;
                background-color: rgba(0, 128, 255, 0.8);
             }
             
             .bg-image-container {
                position: relative;
                width: 100%;
                height: 100%;
             }
             
             .bg-image {
                position: absolute;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
                opacity: 0.7; /* Opacidad de la imagen */
             }
             
             .bg-img-title {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
                font-size: 70px;
                text-align: center;
                z-index: 1;
             }
            </style>

            <div class="showcase">
            <div class="bg-image-container">
               <img src="img/centro_med.jpg" alt="lemurs" class="bg-image" />
               <center><h1 class="bg-img-title">
               Tu salud en las mejores manos</h1></center>
               
            </div>
         </div>
        `;
  }
}
customElements.define('imagen-medico', medico);

class video extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
        <style>
        .section {
            background-color: #f5f5f5;
            padding: 20px;
          }
          
          .video-section {
            display: block;
            width: 100%;
            height: auto;
            background-color: #000;
            overflow: hidden;
          }
          
          .video-section img {
            width: 100%;
            height: auto;
          }
          
          </style>
          <div class="section">
            <a href="https://youtu.be/97PrI1L9K7Q" target="_blank" class="video-section">
              <img src="../img/video.png">
            </a>
          </div>
        

        `;
  }
}
customElements.define('cus-video', video);


