import './sectionProject.css'
import img1  from '../../assets/img/Screenshot_1.png'
import img2  from '../../assets/img/Screenshot_2.png'
import img3  from '../../assets/img/Screenshot_3.png'

const SectionProject = () => { return (
    <div class="containerProject">
    <div class="cardProject">
      <div class="face front">
        <div class="content">
          <img src={img3} alt="" />
        </div>
      </div>
      <div class="face back">
        <div class="content">
          <p>
          Este es un proyecto desarrollado con Laravel que incluye un CRUD (Crear, Leer, Actualizar, Eliminar) y también funciones de registro y inicio de sesión.
          </p>
          <button><a href="https://github.com/jhey09/loginLaravel">Ver codigo</a></button>
        </div>
      </div>
    </div>
    <div class="cardProject">
      <div class="face front">
        <div class="content">
          <img src={img1} alt="" />
        </div>
      </div>
      <div class="face back">
        <div class="content">
          <p>
          esta página de restaurante combina las tecnologías Vite, React, Firebase y el uso de los hooks useState y useEffect, así como el uso de props para crear una experiencia de usuario dinámica y funcional.
          </p>
          <button><a href="https://github.com/jhey09/proyecto-5">Ver codigo</a></button>
        </div>
      </div>
    </div>
    <div class="cardProject">
      <div class="face front">
        <div class="content">
          <img src={img2} alt="" />
        </div>
      </div>
      <div class="face back">
        <div class="content">
          <p>
este proyecto es una Aplicación de Comercio Electrónico donde desarrolle una aplicación FULLSTACK integrando MONGO, EXPRESS, REACT Y NODEJS tambien pagos online. donde utilice paypal Sandbox para simular los pagos
          </p>
          <button><a href="https://github.com/jhey09/PROYECTO-4">Ver codigo</a></button>
        </div>
      </div>
    </div>
  </div>

)
    
}

export default SectionProject