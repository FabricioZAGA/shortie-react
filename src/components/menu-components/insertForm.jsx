import React from "react";
import S3Service from "../../services/S3Service";
import ApiService from "../../services/ApiService";

import { withRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/ShowFood.css";


class ShowFood extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file: '',
      fileName: "EXAMINAR",
      fileBase64: "",
    };
  }

  _getimgBase64(base, f) {
    if (base && base[0]) {
      var FR = new FileReader();
      console.log(this._bool);

      FR.readAsDataURL(base[0]);

      FR.addEventListener(
        "load",
        function (e) {
          //console.log(e.target.result);
          this.setState({
            ...this.state,
            fileName: f,
            fileBase64: e.target.result,
          });
          //return e.target.result;
        }.bind(this)
      );
    }
  }

  async _handleUploadFile(event) {
    var fileName = event.target.files[0].name;

    this.setState({
      ...this.state,
      file: event.target.files[0]
    });

    await this._getimgBase64(event.target.files, fileName);
  }

  _handleSubmit() {
    S3Service.uploadFile(this.state.file)
  }

  render() {
    return (
      <div>
        <div className="div-food-form">
          <input type="text" />
          <div className="div-food-form-titulo">PLATILLO A PAGAR</div>
        </div>
        <div className="div-food-form">
          <input type="text" />
          <div className="div-food-form-titulo">PRECIO</div>
        </div>
        <div className="div-food-form">
          <textarea
            style={{ borderRadius: 30 }}
            rows="5"
            maxlength="250"
            cols="50"
          ></textarea>
          <div className="div-food-form-titulo">DESCRIPCIÓN</div>
        </div>
        <div className="file-container">
          <div className="div-food-form">
            <div
              className="div-food-img"
              style={{ backgroundImage: `url(${this.state.fileBase64})` }}
            />
            <div className="div-food-form-titulo">INSERTAR FOTOGRAFÍA</div>
          </div>
          <div className="file-button">
            <label className="label-input-file" for="upload-photo">
              {this.state.fileName}
            </label>
            <input
              className="input-file"
              type="file"
              name="photo"
              id="upload-photo"
              onChange={(e) => this._handleUploadFile(e)}
            />
          </div>
        </div>
        <div className="div-food-form">
          <select>
            <option selected>PLATILLO FUERTE</option>
            <option>BEBIDAS</option>
            <option>ENTRADAS</option>
          </select>
          <div className="div-food-form-titulo">TIPO DE COMIDA</div>
        </div>
        <div className="div-final-buttons">
          <button className="label-input-file" onClick={(e) => this._handleSubmit(e)}>GUARDAR</button>
          <button className="icon-bin2 label-input-file red-color"></button>
        </div>
      </div>
    );
  }
}

export default withRouter(ShowFood);
