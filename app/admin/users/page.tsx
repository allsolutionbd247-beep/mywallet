export default function UsersPage() {
  return (
    <div className="content">

      <h1>Users Management</h1>
      <p>All registered users</p>

      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Balance</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Rahim</td>
            <td>017XXXXXXXX</td>
            <td>৳2500</td>
            <td>Active</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Karim</td>
            <td>018XXXXXXXX</td>
            <td>৳1200</td>
            <td>Blocked</td>
          </tr>

        </tbody>
      </table>

    </div>
  );
}
