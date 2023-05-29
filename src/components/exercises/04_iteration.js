import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = (props) => {
  const moduleInfo = props.modules.map((m) =>
    <tr>
      <td>{m.name}</td>
      <td>{m.noLectures}</td>
      <td>{m.noPracticals}</td>
    </tr>
  ); 
  return (
    <div>
      <h1>{`${props.course} - Modules table`}</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>
          {moduleInfo}
        </tbody>
      </table>
    </div>
  );
};

export default Demo;
