import { useEffect, useState } from "react";
import data from "../../res.json";
import "./index.scss";
export default function HomePage() {
  const [viewIndex, setViewIndex] = useState(0);
  const [planView, setPlanView] = useState(
    data[viewIndex].tasksInZone.reverse()
  );
  const [url] = useState(
    "https://www.zohoapis.com/crm/v2/functions/Dabo_Test/actions/execute?auth_type=apikey&zapikey=1003.845ddf0d1ead8b309efa72a32c9f8506.77e8fd199bd493742baba27df45cb676"
  );
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div className="col-12 p-3 " id="HomePage">
      <h1 className="col-12 text-center">IPACO Retrofit Project</h1>
      <p className="col-12 alert alert-warning fs-2">EX : SB 149-009 </p>
      <h1 className="col-12 m-2 fs-3">Affected Zones</h1>
      <div className="col-12 gap-3" id="Spans">
        {data.map((zone, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setViewIndex(index);
                setPlanView(data[index].tasksInZone.reverse());
              }}
              className={
                "alert " +
                (viewIndex == index ? "alert-success" : "alert-primary")
              }
            >
              {zone["Zone-Name"]}
            </button>
          );
        })}
      </div>
      <div className="col-12">
        {/* <h1 className="col-12 fs-3"></h1> */}
        <table className="table table-bordered table-dark">
          <thead>
            <tr>
              <th colspan="7">
                <h1>Total Tasks in Zone : {planView.length}</h1>
              </th>
            </tr>
            <tr>
              <th className="col-1">-</th>
              <th className="col-1">Task Name</th>
              <th className="col-2">SB Part Name</th>
              <th className="col-3">Task Type</th>
              <th className="col-1">Total Manpower</th>
              <th className="col-1">Task Duration</th>
              <th className="col-2">Departments</th>
            </tr>
          </thead>
          <tbody>
            {planView.map((Task, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{Task.Name}</td>
                  <td>{Task.SB_Part}</td>
                  <td>{Task.Task_Type}</td>
                  <td>{Task.Total_ManPower}</td>
                  <td>{Task.Expected_Duration_in_Hrs}</td>
                  <td>
                    {Task.Manpower.map((dep, index) => {
                      return (
                        <span className="btn btn-danger" key={index}>
                          {dep.Department_Name.name}
                        </span>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
