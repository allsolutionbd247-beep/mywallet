export default function TransactionsPage() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Transaction History</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>TX001</td>
            <td>Rahim</td>
            <td>Add Money</td>
            <td>৳1000</td>
            <td>11-07-2026</td>
            <td>Success</td>
          </tr>

          <tr>
            <td>TX002</td>
            <td>Karim</td>
            <td>Cash Out</td>
            <td>৳500</td>
            <td>11-07-2026</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}