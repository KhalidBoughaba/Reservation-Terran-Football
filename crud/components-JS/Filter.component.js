class FilterDates extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input
          type="date"
          placeholder={this.props.value}
          onChange={(e) => this.props.onChange(e.target.value)}
          min={this.props.min}
          max={this.props.max}
          className='datesAdm'
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
      </div>
    );
  }
}
