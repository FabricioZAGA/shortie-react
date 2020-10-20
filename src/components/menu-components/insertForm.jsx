import React from "react";
import S3Service from "../../services/S3Service";
import ApiService from "../../services/ApiService";
import Cookies from "../../services/CookiesService";
import { withRouter } from "react-router-dom";
import qs from "query-string";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/ShowFood.css";
import DeleteModal from "./DeleteModal"

class ShowFood extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      img: '',
      category: '',
      price: '',
      categories: [],
      file: "",
      fileName: "EXAMINAR",
      fileBase64: "",
      index: Cookies.get('object-index'),
      style: ''
    };
  }


  async componentDidMount() {
    var categoriesRes = await ApiService.getById(Cookies.get('id-menu'), "menus/categories");

    if (categoriesRes) {
      this.setState({
        ...this.state,
        categories: categoriesRes.data
      })
    }

    console.log(this.state.index, 'INDEX')


    if (this.state.index != false && Cookies.get('object-index')) {
      console.log('AQUI ENTRA')
      var food = await ApiService.get(`menus/selectDish/${Cookies.get('id-menu')}/${this.state.index}`);
      food = food.data;

      if (food) {
        this.setState({
          ...this.state,
          name: food.name,
          description: food.description,
          img: food.img,
          category: food.category,
          fileBase64: food.img,
          price: food.price,
          style: 'no-show-input'
        })

        Cookies.remove('object-index')
        console.log(this.state)
      }
    }
  }

  _renderValues() {
    if (document.getElementById('inputName') != null) {
      console.log(this.state.name)
      document.getElementById('inputName').value = this.state.name;
      document.getElementById('inputPrice').value = this.state.price;
      document.getElementById('inputDescription').value = this.state.description;
      document.getElementById('inputCategory').value = this.state.category;
    }


  }

  _renderCategories() {
    var cat = this.state.categories;

    return cat.map(c => (
      <option value={c}>{c}</option >
    ));
  }

  _getimgBase64(base, f) {
    if (base && base[0]) {
      var FR = new FileReader();

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
      file: event.target.files[0],
    });

    await this._getimgBase64(event.target.files, fileName);
  }

  _handleNameChange(event) {
    this.setState({
      ...this.state,
      name: event.target.value
    })
  }

  _handleDescriptionChange(event) {
    this.setState({
      ...this.state,
      description: event.target.value
    })
  }

  _handleCategoryChange(event) {
    var style2 = ''
    if (event.target.value != 0) {
      style2 = 'no-show-input'
    }

    this.setState({
      ...this.state,
      style: style2,
      category: event.target.value
    })
  }

  _handleCategoryInputChange(event) {
    this.setState({
      ...this.state,
      category: event.target.value
    })
  }

  _handlePriceChange(event) {
    this.setState({
      ...this.state,
      price: event.target.value
    })
  }


  async _handleSubmit() {




    if (this.state.index) {
      const obj = {
        name: this.state.name,
        description: this.state.description,
        img: this.state.img,
        category: this.state.category,
        price: Number(this.state.price)
      }
      console.log("alo alo")
      var response = await ApiService.updateByIndex(obj, `menus/updateDish/${Cookies.get("id-menu")}/${this.state.index}`)
      response = response.data;
      console.log(response);
      if (response) {
        window.location.reload(false)
      }
    } else {
      var s3 = await S3Service.uploadFile(this.state.file);
      const obj = {
        name: this.state.name,
        description: this.state.description,
        img: s3,
        category: this.state.category,
        price: Number(this.state.price)
      }
      var response = await ApiService.insert(obj, `menus/insertDish/${Cookies.get("id-menu")}`)
      response = response.data;
      if (response) {
        window.location.reload(false)
      }
    }


  }

  render() {
    return (

      <div>

        <div className="div-food-form">
          <input type="text" id="inputName" onInput={this._handleNameChange.bind(this)} />
          <div className="div-food-form-titulo" >PLATILLO A PAGAR</div>
        </div>
        <div className="div-food-form">
          <input type="text" id="inputPrice" onInput={this._handlePriceChange.bind(this)} />
          <div className="div-food-form-titulo" >PRECIO</div>
        </div>
        <div className="div-food-form">
          <textarea
            id="inputDescription"
            style={{ borderRadius: 30 }}
            rows="5"
            maxlength="250"
            cols="50"
            onChange={this._handleDescriptionChange.bind(this)}
          ></textarea>
          <div className="div-food-form-titulo" >DESCRIPCIÓN</div>
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
          <select id="inputCategory" onChange={this._handleCategoryChange.bind(this)}>
            <option value="0" selected>otra...</option>
            {this._renderCategories()}
          </select>
          <input className={`mt-2 ${this.state.style}`} type="text" onInput={this._handleCategoryInputChange.bind(this)} />
          <div className="div-food-form-titulo">TIPO DE COMIDA</div>
        </div>
        <div className="div-final-buttons">
          <button
            className="label-input-file"
            onClick={(e) => this._handleSubmit(e)}
          >
            GUARDAR
          </button>
          <DeleteModal id="sdasdasd"></DeleteModal>

        </div>
        {this._renderValues()}
      </div>

    );
  }
}




export default withRouter(ShowFood);
