// Application
class CrudProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productsArray: [],
      currentStatus: 0,
      pending : 0,
      accepted : 0,
      refused : 0,
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
    this.getNumPending();
    this.getNumAccepted();
    this.getNumRefused();
    // this.setToday();
  }
  chargementDonnees() {
    // affichage de données par Ajax

    // $.getJSON(
    //   "api/getProduct.php",
    //   function (data) {
    //     this.setState({ ...this.state, productsArray: data });
    //   }.bind(this)
    // ).fail(function (jqXHR, textStatus, errorThrown) {
    //   console.log(errorThrown);
    // });

    $.ajax({
      url: "api/getProduct.php",
      method: "POST",
      data: {
        date: this.state.date,
        status: this.state.currentStatus,
      },
      success: (data) => {
        data = JSON.parse(data);
        this.setState({ ...this.state, productsArray: data });
      },
    });
  }


  getNumPending(){
    $.ajax({
      url:'api/getNumPending.php',
      method:'POST',
      data:{
        date : this.state.date,
      },
      success:(data)=>{
        console.log(data)
        this.setState((prev)=>{
          return {
            ...prev,
            pending : data
          }
        })
      }
    })
  }
  
  getNumAccepted(){
    $.ajax({
      url:'api/getNumAccepted.php',
      method:'POST',
      data:{
        date : this.state.date,
      },
      success:(data)=>{
        console.log(data)
        this.setState((prev)=>{
          return {
            ...prev,
            accepted : data
          }
        })
      }
    })
  }
  
  
  getNumRefused(){
    $.ajax({
      url:'api/getNumRefused.php',
      method:'POST',
      data:{
        date : this.state.date,
      },
      success:(data)=>{
        console.log(data)
        this.setState((prev)=>{
          return {
            ...prev,
            refused : data
          }
        })
      }
    })
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
    // $.ajax({
    //   url: "api/updateProduct.php",
    //   method: "POST",
    //   data: {
    //     id: i,
    //     Firstname: Firstname.value,
    //     Lastname: Lastname.value,
    //     Matricule: Matricule.value,
    //     Email: Email.value,
    //   },
    //   success: function (data) {
    //     this.chargementDonnees();
    //     console.log(data);
    //   }.bind(this),
    // });
    // e.preventDefault();
  }

  async onChangeDate(newDate) {
    // this.setState({value: e.target.value})

    await this.setState((prev) => {
      return {
        ...prev,
        date: newDate,
      };
    });
    this.getNumPending();
    this.getNumAccepted();
    this.getNumRefused();
    this.chargementDonnees();
  }

  changeStatus(id, newStatus) {
    console.log(id, newStatus);
    $.ajax({
      url: "api/updateStatus.php",
      method: "POST",
      data: {
        id: id,
        status: newStatus,
      },
      success: (data) => {
        this.chargementDonnees();
        console.log(data);
      },
    });
  }

  async FilterByStatus(status) {
    await this.setState((prev) => {
      return {
        ...prev,
        currentStatus: +status,
      };
    });
    this.chargementDonnees();
  }

  render() {
    let productsArray = this.state.productsArray.map((product) => {
      return (
        <Product
          onchangeStatus={this.changeStatus.bind(this, product.id)}
          key={product.id}
          product={product}
          onClickClose={this.removeproduct.bind(this, product.id)}
          // onClickUpdate={this.updateproduct.bind(this, product.id)}
        />
      );
    });

    return (
      <div className="container">
        <FilterDates
          onFilterByStatus={this.FilterByStatus.bind(this)}
          onChange={this.onChangeDate.bind(this)}
          status ={this.state.currentStatus}
          value={this.state.date}
          min={this.state.min}
          max={this.state.max}
          // dataArr={this.state.productsArray}
          pending={this.state.pending}
          accepted={this.state.accepted}
          refused={this.state.refused}
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
