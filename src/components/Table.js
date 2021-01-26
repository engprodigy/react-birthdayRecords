import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Table extends Component {
  constructor(props) {
    super(props);
    //props.sortParameter;
    this.state = {
      people: [
        //	this.people = [
        {
          name: "John Sinas",
          birth: "11/30/2011"
        },
        {
          name: "Barcy Washington",
          birth: "09/16/1992"
        },
        {
          name: "Peter Parker",
          birth: "01/16/1992"
        },
        {
          name: "Jimmy Shergil",
          birth: "12/12/2001"
        },
        {
          name: "Alexander Alfred",
          birth: "02/09/1891"
        },
        {
          name: "Krishna Gupta",
          birth: "12/01/1982"
        },
        {
          name: "Sania Mirza",
          birth: "11/30/2011"
        },
        {
          name: "Lata Pathak",
          birth: "10/31/1999"
        }
      ]
    };
  }
  // componentDidMount() {
  //   let newArray = [...this.state.people];
  //   if (this.props.sortParameter === "name") {
  //     newArray.sort(compareNames);
  //     this.setState({ people: newArray });
  //   }
  //   function compareNames(person1, person2) {
  //     // complete this string comparator with enables sort by name
  //     if (person1.name < person2.name) {
  //       return -1;
  //     }
  //     if (person1.name > person2.name) {
  //       return 1;
  //     }
  //     return 0;
  //   }
  // }

  render() {
    const data = this.state.people;

    if (this.props.sortParameter === "name") {
      data.sort(compareNames);
    }else if (this.props.sortParameter === "age") {
      data.sort(compareDates);
      //data.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    function compareDates(person1, person2) {
      // complete this date comparator which enables sort by age

      return new Date(person1.birth) - new Date(person2.birth);
    }

    function compareNames(person1, person2) {
      // complete this string comparator with enables sort by name
      if (person1.name < person2.name) {
        return -1;
      }
      if (person1.name > person2.name) {
        return 1;
      }
      return 0;
    }

    return (
      <div className="table-div">
        <table className="table table-striped table-bordered table-hover full-width">
          <thead>
            <tr>
              <th className="course-name">Person Name</th>
              <th className="duration">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => {
              return (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.birth}</td>
                </tr>
              );
            })}
            <tr>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

// Uncomment the snippet below
Table.propTypes = {
  sortParameter: PropTypes.string
};

export default Table;
