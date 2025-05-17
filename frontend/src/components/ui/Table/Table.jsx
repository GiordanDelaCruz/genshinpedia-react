import { v4 as uuidv4 } from "uuid";

function Table({ skillTalents }) {
  return (
    <>
      <table className="table custom-table table-hover">
        <thead>
          <tr>
            <th scope="col">Upgrade</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          {skillTalents.upgrades.map((elem, index) => {
            return (
              <tr key={uuidv4()}>
                <td>{elem.name}</td>
                <td>{elem.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;

//   {/* TODO: Make this feature happen in a different function */}
//   <table className="table custom-table table-hover">
//   <tbody>
//       <tr>
//           {/* Data is not available */}
//           <td className="">Currently Not Available</td>
//       </tr>
//   </tbody>
// </table>
