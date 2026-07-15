export default function AdminActivityPage() {
  return (
    <div className="content">

      <div className="card">
        <h1>📋 Admin Activity Log</h1>
        <p>All admin actions are recorded here.</p>
      </div>


      <div className="card">

        <table className="user-table">

          <thead>
            <tr>
              <th>Admin</th>
              <th>Action</th>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Aman</td>
              <td>Transaction Approved</td>
              <td>TX001</td>
              <td>12 July 2026</td>
              <td>Success</td>
            </tr>


            <tr>
              <td>Aman</td>
              <td>Transaction Reversed</td>
              <td>TX002</td>
              <td>12 July 2026</td>
              <td>Completed</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}
