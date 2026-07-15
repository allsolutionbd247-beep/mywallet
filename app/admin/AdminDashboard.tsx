"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

const reloadDashboard = () => {
  router.refresh();
};
  return (
    <div className="admin-layout">

      <aside className="sidebar">
        <h2>💳 My Wallet</h2>

        <ul>
          <li><Link href="/admin">🏠 Dashboard</Link></li>
          <li><Link href="/admin/users">👤 Users</Link></li>
          <li><Link href="/admin/add-money">💰 Add Money</Link></li>
          <li><Link href="/admin/cash-out">💸 Cash Out</Link></li>
          <li><Link href="/admin/transactions">📄 Transactions</Link></li>
          <li><Link href="/admin/notifications">🔔 Notifications</Link></li>
          <li><Link href="/admin/settings">⚙️ Settings</Link></li>
        </ul>
      </aside>


      <main className="content">

<div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
  <h1>Admin Dashboard</h1>

<button
  onClick={() => window.location.reload()}
  style={{
    border: "none",
    background: "transparent",
    fontSize: "24px",
    cursor: "pointer"
  }}
>
  🔄
</button>
</div>
        <p>Welcome to Admin Panel</p>


        <div className="cards">

          <div className="card">
            <h3>Total Users</h3>
            <h2>120</h2>
          </div>

          <div className="card">
            <h3>Total Balance</h3>
            <h2>৳50,000</h2>
          </div>

          <div className="card">
            <h3>Pending Request</h3>
            <h2>15</h2>
          </div>

          <div className="card">
            <h3>Transactions</h3>
            <h2>2,540</h2>
          </div>

        </div>


        <h2 style={{ marginTop: "40px" }}>Users</h2>

        <table className="user-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Balance</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>


          <tbody>

            <tr>
              <td>1</td>
              <td>Rahim</td>
              <td>017XXXXXXXX</td>
              <td>৳2,500</td>
              <td>Active</td>
              <td>
                <button className="edit-btn">Edit</button>
              </td>
            </tr>


            <tr>
              <td>2</td>
              <td>Karim</td>
              <td>018XXXXXXXX</td>
              <td>৳1,200</td>
              <td>Blocked</td>
              <td>
                <button className="edit-btn">Edit</button>
              </td>
            </tr>

          </tbody>

        </table>


      </main>

    </div>
  );
}