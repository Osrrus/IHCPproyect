import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Proponer Proyecto" />
    <div className = "mainContainer">
      <div className = "titleContainer">
        <a id = "aTitle">Proponer Proyecto</a>
      </div>

      <div className = "nameContainer">
        <a id = "aName">Nombre:</a>
      </div>
      <div className = "inputNameContainer">
        <a>Nombre</a>
        <div></div>
      </div>

      <div className = "descripcionContainer">
        <a id = "aName">Descripcion:</a>
      </div>
      <div className = "inputDescripcionContainer">
        <a>Descripcion del emprendimiento...</a>
      </div>

      <div className = "cargarImgContainer">
        <a>Cargar Imagen:</a>
      </div>
      <div className = "cargarimgsContainer">
        <div></div>
      </div>

      <div className = "integrantesContainer">
        <a>Integrantes:</a>
      </div>
      <div className = "inputIntegrantesContainer">
        <a>Nombre</a>
        <div></div>
      </div>

      <div className = "imgAnuncio"></div>
      <div className = "buttonContainer">
        <div className = "cancelarButton">
          <a>Cancelar</a>
        </div>
        <div className = "aceptarButton">
          <a>Aceptar</a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
