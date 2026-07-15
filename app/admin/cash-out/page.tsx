export default function CashOutPage() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Cash Out Requests</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Phone</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Rahim</td>
            <td>017XXXXXXXX</td>
            <td>৳1500</td>
            <td>bKash</td>
            <td>Pending</td>
            <td>
              <button>Approve</button>
              <button style={{ marginLeft: "10px" }}>Reject</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}