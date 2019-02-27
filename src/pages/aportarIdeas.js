import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import './aportarIdeas.css'

const ThreePage = () => (
  <Layout>
    <SEO title="Aportar Ideas" />
    <div className = "mainAportarIdeas">

      <div className = "proyectoContainer">
        <a id = "nameProyecto">Guarapita en Ciencias</a>
        <p id = "descricionProyecto">Después de el curso de sistema de información la mayor motivación que nos 
          dejó la materia, y el profesor Franklin fue hacer Guarapitas...</p>
        <div id = "imgProyecto"></div>
      </div>

      <a id = "comentarios">Comentarios:</a>
      <div id ="heart"></div>
      <a id = "like">100</a>

      <div id = "comentario1">
        <div id = "userImg1"></div>
        <div id = "cBackground1"></div>
        <a id = "cNane1">Ochacco</a>
        <a id = "cComentario1">Me parece un excelente emprendimiento :3</a>
      </div>

      <div id = "comentario2">
        <div id = "userImg2"></div>
        <div id = "cBackground2"></div>
        <a id = "cNane2">Tsuyu</a>
        <a id = "cComentario2">Donaré $800 a su causa"</a>
      </div>

      <div id = "comentario3">
        <div id = "userImg3"></div>
        <div id = "cBackground3"></div>
        <a id = "cComentario3"></a>
      </div>

      <div id = "buttonEnviar">
        <a>Enviar</a>
      </div>
    </div>
  </Layout>
)

export default ThreePage
