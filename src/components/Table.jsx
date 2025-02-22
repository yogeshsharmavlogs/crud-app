function Table() {
  return (
    <table className="shadow-lg bg-white mx-auto font-[poppins] w-[860px] rounded">
      <tr>
        <th className="bg-zinc-100 text-start px-4 py-3">ID</th>
        <th className="bg-zinc-100 text-start px-4 py-3">Product Name</th>
        <th className="bg-zinc-100 text-start px-4 py-3">Price</th>
        <th className="bg-zinc-100 text-start px-4 py-3">Status</th>
        <th className="bg-zinc-100 text-start px-4 py-3">Action</th>
      </tr>
      <tr>
        <td className="px-4" py-4>
          1
        </td>
        <td className="px-4" py-4>
          Mouse
        </td>
        <td className="px-4" py-4>
          350
        </td>
        <td className="px-4" py-4>
          Stocks
        </td>
        <td className="px-4" py-4>
          <button
            type="submit"
            className="bg-green-700 text-white px-4 py-1.5 rounded active:scale-95 mr-5"
          >
            Edit
          </button>
        </td>
      </tr>
    </table>
  );
}

export default Table;
