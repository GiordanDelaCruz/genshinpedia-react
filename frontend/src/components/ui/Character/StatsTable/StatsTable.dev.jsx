import { v4 as uuidv4 } from "uuid";

function StatsTableDev({ id, iconUrlBase, title, arrayData }) {
  return (
    <>
      <div className="bg-dark text-white px-4 pt-2 pb-3 mb-5 rounded border shadow">
        <h4 id={id} className="scroll-target mt-4 mb-3">
          {title}
        </h4>

        <div className="table-responsive">
          <table className="table custom-table text-center table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">Icon</th>
                <th scope="col">Name</th>
                <th scope="col">Unlock</th>
                <th scope="col">Level</th>
                <th scope="col" className="text-start">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {arrayData.map((elem, index) => (
                <tr key={uuidv4()}>
                  <td className="align-middle">
                    <img
                      className="genshin-table-icon"
                      src={
                        title === "Constellations"
                          ? `${iconUrlBase}${index + 1}`
                          : `${iconUrlBase}${index}`
                      }
                      alt=""
                    />
                  </td>
                  <td
                    className="align-middle text-wrap"
                    style={{ wordBreak: "break-word", maxWidth: "150px" }}
                  >
                    {elem.name}
                  </td>
                  <td
                    className="align-middle text-wrap"
                    style={{ wordBreak: "break-word", maxWidth: "150px" }}
                  >
                    {elem.unlock}
                  </td>
                  <td className="align-middle">{elem.level}</td>
                  <td className="align-middle text-start">
                    {elem.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default StatsTableDev;
