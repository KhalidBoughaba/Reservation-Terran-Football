// Application
class CrudProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productsArray: [],
      date:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1 < 10
          ? "0" + (new Date().getMonth() + 1)
          : new Date().getMonth() + 1) +
        "-" +
        new Date().getDate(),
      min: new Date().toISOString().split("T")[0],
      max: new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
    };
  }
  componentDidMount() {
    this.chargementDonnees();
    // this.setToday();
  }
  chargementDonnees() {


    // affichage de données par Ajax

    $.getJSON(
      "api/getProduct.php",
      function (data) {
        this.setState({ ...this.state, productsArray: data });
      }.bind(this)
    ).fail(function (jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    });
  }
  // //add product
  // addproduct(e) {
  //   $.ajax({
  //     url: "api/addProduct.php",
  //     method: "POST",
  //     data: {
  //       Firstname: Firstname.value,
  //       Lastname: Lastname.value,
  //       Matricule: Matricule.value,
  //       Email: Email.value,
  //     },
  //     success: function (data) {
  //       this.chargementDonnees();
  //       $("#exampleModalCenter").modal("hide");
  //       console.log(data);
  //     }.bind(this),
  //   });
  //   e.preventDefault();
  // }
  // Remove product
  removeproduct(i) {
    $.ajax({
      url: "api/deleteProduct.php",
      method: "POST",
      data: {
        id: i,
      },
      success: function (data) {
        //   $(this).parent().remove();
        this.chargementDonnees();
      }.bind(this),
    });
  }
  //update product
  updateproduct(i) {
    $.ajax({
      url: "api/updateProduct.php",
      method: "POST",
      data: {
        id: i,
        Firstname: Firstname.value,
        Lastname: Lastname.value,
        Matricule: Matricule.value,
        Email: Email.value,
      },
      success: function (data) {
        this.chargementDonnees();
        console.log(data);
      }.bind(this),
    });
    e.preventDefault();
  }

  onChangeDate(newDate) {
    // this.setState({value: e.target.value})
    this.setState((prev)=>{
      return {
        ...prev,
        date: newDate
      }
    });
  }

  // setToday(today){

  //     this.setState({
  //       ...this.state,
  //       date: today,
  //     });

  // }

  render() {
    let productsArray = this.state.productsArray.map((product) => {
      return (
        <Product
          key={product.id}
          product={product}
          onClickClose={this.removeproduct.bind(this, product.id)}
          onClickUpdate={this.updateproduct.bind(this, product.id)}
        />
      );
    });

    return (
      <div className="container">
        <FilterDates
          onChange={this.onChangeDate.bind(this)}
          value={this.state.date}
          min={this.state.min}
          max={this.state.max}
          // setToday={this.setToday.bind(this)}
        />
        <table className="table table-hover">
          <thead className="thead">
            <tr>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Phone</th>
              <th scope="col">Hours</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{productsArray}</tbody>
        </table>
      </div>
    );
  }
}
