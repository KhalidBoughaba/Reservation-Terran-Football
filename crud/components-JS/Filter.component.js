class FilterDates extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   pending : 0,
    //   accepted : 0,
    //   refused : 0
    // }

  }

  // componentDidMount() {
  //   this.getNumPending();
  //   this.getNumAccepted();
  //   this.getNumRefused();
  //   // this.setToday();
  // }

// getNumPending(){
//   $.ajax({
//     url:'api/getNumPending.php',
//     method:'POST',
//     data:{
//       date : this.props.value,
//     },
//     success:(data)=>{
//       console.log(data)
//       this.setState((prev)=>{
//         return {
//           ...prev,
//           pending : data
//         }
//       })
//     }
//   })
// }

// getNumAccepted(){
//   $.ajax({
//     url:'api/getNumAccepted.php',
//     method:'POST',
//     data:{
//       date : this.props.value,
//     },
//     success:(data)=>{
//       console.log(data)
//       this.setState((prev)=>{
//         return {
//           ...prev,
//           accepted : data
//         }
//       })
//     }
//   })
// }


// getNumRefused(){
//   $.ajax({
//     url:'api/getNumRefused.php',
//     method:'POST',
//     data:{
//       date : this.props.value,
//     },
//     success:(data)=>{
//       console.log(data)
//       this.setState((prev)=>{
//         return {
//           ...prev,
//           refused : data
//         }
//       })
//     }
//   })
// }

  render() {
    return (
      <div>
        <input
          type="date"
          placeholder={this.props.value}
          onChange={(e) => {
            this.props.onChange(e.target.value);
          }
          }
          min={this.props.min}
          max={this.props.max}
          className="datesAdm form-control"
          // onLoad={this.props.setToday(
          //   new Date().getFullYear() +
          //     "-" +
          //     (new Date().getMonth() + 1 < 10
          //       ? "0" + (new Date().getMonth() + 1)
          //       : new Date().getMonth() + 1) +
          //     "-" +
          //     new Date().getDate()
          // )}
        />
        <div className="mb-4">
          <button className ="btn border-warning mr-2 font-weight-bold w-25"
            style={
              +this.props.status === 0 ? { backgroundColor: "#FFC107" } : {}
            }
            onClick={() => this.props.onFilterByStatus(0)}
          >
          {`En attendant  "${this.props.pending}"`} 
          </button>
          <button className ="btn border-success mr-2 font-weight-bold w-25"
            style={+this.props.status === 1 ? { backgroundColor: "#28A745",color:"white"} : {}}
            onClick={() => this.props.onFilterByStatus(1)}
          >
             {`Accepté  "${this.props.accepted}"`} 
          </button>
          <button className ="btn border-danger font-weight-bold w-25"
            style={+this.props.status === 2 ? { backgroundColor: "#DC3545",color:"white"} : {}}
            onClick={() => this.props.onFilterByStatus(2)}
          >
             {`Refusé  "${this.props.refused}"`} 
             
          </button>
        </div>
      </div>
    );
  }
}
