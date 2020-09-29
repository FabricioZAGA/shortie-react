import React from "react";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/ShowFood.css";

class ShowFood extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

    await this._getimgBase64(event.target.files, fileName);
  }

  render() {
    return (
      <div>
        <div className="div-foot-form">
          <input type="text" />
          <div className="div-foot-form-titulo">PLATILLO A PAGAR</div>
        </div>
        <div className="div-foot-form">
          <input type="text" />
          <div className="div-foot-form-titulo">PRECIO</div>
        </div>
        <div className="div-foot-form">
          <textarea
            style={{ borderRadius: 30 }}
            rows="5"
            maxlength="250"
            cols="50"
          ></textarea>
          <div className="div-foot-form-titulo">DESCRIPCIÓN</div>
        </div>
        <div className="file-container">
          <div className="div-foot-form">
            <div
              className="div-foot-img"
              style={{ backgroundImage: `url(${this.state.fileBase64})` }}
            />
            <div className="div-foot-form-titulo">INSERTAR FOTOGRAFÍA</div>
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
        <div className="div-foot-form">
          <select>
            <option selected>PLATILLO FUERTE</option>
            <option>BEBIDAS</option>
            <option>ENTRADAS</option>
          </select>
          <div className="div-foot-form-titulo">TIPO DE COMIDA</div>
        </div>
        <div className="div-final-buttons">
          <button className="label-input-file">GUARDAR</button>
          <button className="icon-bin2 label-input-file red-color"></button>
        </div>
      </div>
    );
  }
}

export default withRouter(ShowFood);
