export default function AddMoneyPage() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Add Money Requests</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Phone</th>
            <th>Amount</th>
            <th>Transaction ID</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Rahim</td>
            <td>017XXXXXXXX</td>
            <td>৳1000</td>
            <td>TX123456</td>
            <td>Pending</td>
          </tr>
        </tbody>
        <td>
  <button>Approve</button>
  <button style={{ marginLeft: "10px" }}>Reject</button>
</td>
      </table>
    </div>
  );
}