import React, { Component } from "react";
import AxiosApi from "./api/Axios";
import Employee from "./components/Employee";
import Add from "./components/Add";
import Update from "./components/Update";
import Delete from "./components/Delete";

import "./styles.scss";

class App extends Component {
  state = {
    all: [],
    single: "",
    loading: true,
    error: null
  };

  componentDidMount() {
    AxiosApi.getAll()
      .then(all => this.setState({ all }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }
  getSingle = id => {
    AxiosApi.getSingle(id)
      .then(single => {
        this.setState({ single });
      })
      .catch(error => this.setState({ error }));
  };
  addSingle = item => {
    AxiosApi.addSingle(item).then(addedItem => {
      const { name, salary, age, id } = addedItem.data;
      const res = {
        employee_name: name,
        employee_salary: salary,
        employee_age: age,
        id
      };
      this.setState(prevState => {
        const all = [...prevState.all, res];
        return { all };
      });
    });
  };
  updateSingle = (indexToUpdate, itemToUpdate) => {
    const { name, salary, age } = itemToUpdate;
    const res = {
      employee_name: name,
      employee_salary: salary,
      employee_age: age,
      id: indexToUpdate + 1
    };

    AxiosApi.replaceSingle(res.id, itemToUpdate).then(updatedItem => {
      this.setState(prevState => {
        const all = prevState.all.map((item, index) =>
          index === indexToUpdate ? res : item
        );
        return { all };
      });
    });
  };

  removeSingle = indexToRemove => {
    AxiosApi.removeSingle(this.state.all[indexToRemove]).then(() =>
      this.setState(prevState => {
        const all = prevState.all.filter((_, index) => index !== indexToRemove);
        return { all };
      })
    );
  };

  render() {
    const employee = employee => {
      return (
        <Employee
          key={employee.id}
          employee={employee}
          onClick={() => this.getSingle(employee.id)}
        />
      );
    };
    return (
      <div className="App">
        <Add
          onClick={() =>
            this.addSingle({ name: "test", salary: "123", age: "23" })
          }
        />
        <Update
          onClick={() =>
            this.updateSingle(0, {
              name: "update",
              salary: "777",
              age: "29"
            })
          }
        />
        <Delete onClick={() => this.removeSingle(0)} />
        {this.state.all.map(employee)}
      </div>
    );
  }
}

export default App;
