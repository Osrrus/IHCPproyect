import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import './aprobarProyecto.css'

const SecondPage = () => (
  <Layout>
    <SEO title="Aprobar Proyecto" />
    <div className = "page2mainContainer">

      <div className = "page2nameContainer">
        <a id = "page2aName">Nombre:</a>
      </div>
      <div className = "page2proyectName">
        <a>Guarapitas de Ciencias</a>
      </div>

      <div className = "page2descripcionContainer">
        <a id = "page2aName">Descripcion:</a>
      </div>
      <div className = "page2inputDescripcionContainer">
        <a>Después de el curso de sistema de información la mayor motivación que nos dejó la materia, y el profesor Franklin fue hacer Guarapitas...</a>
      </div>

      <div className = "page2cargarImgContainer">
        <a>Imágenes:</a>
      </div>
      <div className = "page2cargarimgsContainer">
        <div></div>
      </div>

      <div className = "page2integrantesContainer">
        <a>Integrantes:</a>
      </div>
      <div className = "page2inputIntegrantesContainer">
        <p>- Yuliana Fernadez<br/>- Ricardo Osuna<br/>- Daniel Giannotti</p>
      </div>

      <div className = "page2buttonContainer">
        <div className = "page2cancelarButton">
          <a>Rechazar</a>
        </div>
        <div className = "page2aceptarButton">
          <a>Aprobar</a>
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
