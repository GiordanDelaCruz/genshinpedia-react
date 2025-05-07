import react from "react";

function Table(props) {
  return (
    <>
      <table className="table custom-table table-hover">
        <tbody>
          {props.skillTalents.upgrades.map((elem, index) => {
            return (
              <tr>
                {/* Name */}
                <td className="">{elem.name}</td>
                {/* Value */}
                <td className="">{elem.value}</td>
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
