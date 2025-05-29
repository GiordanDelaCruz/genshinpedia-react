import { v4 as uuidv4 } from "uuid";

function StatsTableTest({ id, iconUrl, title, arrayData }) {
  return (
    <>
      <div className="bg-dark text-white px-4 pt-2 pb-3 mb-5 rounded border shadow">
        {/* Title */}
        <h4 id={id} className="scroll-target mt-4 mb-3">
          {title}
        </h4>

        {/* Table */}
        <table className="table custom-table text-center table-hover table-bordered ">
          <thead>
            <tr>
              <th scope="col" className="w-auto">
                Icon
              </th>
              <th scope="col" className="w-auto">
                Name
              </th>
              <th scope="col" className="w-auto">
                Unlock
              </th>
              <th scope="col" className="w-auto">
                Level
              </th>
              <th scope="col" className="text-start">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {arrayData.map((elem, index) => {
              return (
                <tr key={uuidv4()}>
                  <td className="align-middle w-auto">
                    <img
                      className="genshin-table-icon"
                      src={
                        title === "Constellations"
                          ? `${iconUrl}${index + 1}`
                          : `${iconUrl}${index}`
                      }
                      alt=""
                    />
                  </td>
                  <td className="align-middle w-auto">{elem.name}</td>
                  <td className="align-middle w-auto">{elem.unlock}</td>
                  <td className="align-middle w-auto">{elem.level}</td>
                  <td className="align-middle text-start">
                    {elem.description}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StatsTableTest;
