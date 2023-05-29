import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = () => {
  const modules = [
    {
      "name": "Full Stack Web Development 1",
      "lectures": 2,
      "practicals": 2
    },
    {
      "name": "Full Stack Web Development 2",
      "lectures": 3,
      "practicals": 2
    }
  ];
  const course = ["HDip Computer Science"];
  return (
    <div>
      <h1>{`${course} - Modules table`}</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td>{modules[0].name}</td>
            <td>{modules[0].lectures}</td>
            <td>{modules[0].practicals}</td>
          </tr>
          <tr>
            <td>{modules[1].name}</td>
            <td>{modules[1].lectures}</td>
            <td>{modules[1].practicals}</td>
          </tr>
        </tbody >
      </table>
    </div>
  );
};

export default Demo;
