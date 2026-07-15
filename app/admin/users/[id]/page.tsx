export default function UserDetailsPage() {
  return (
    <div className="content">

      {/* User Header */}
      <div className="card">
        <h1>👤 User Control Center</h1>
        <p><b>User ID:</b> #001</p>
        <p><b>Name:</b> Rahim</p>
        <p><b>Status:</b> 🟢 Active</p>
      </div>


      <div className="cards">

        {/* User Overview */}
        <div className="card">
          <h2>👤 User Overview</h2>

          <p>Name: Rahim</p>
          <p>Phone: 017XXXXXXXX</p>
          <p>Email: rahim@gmail.com</p>
          <p>Join Date: 12 July 2026</p>

          <button className="edit-btn">
            Edit Profile
          </button>
        </div>


        {/* Wallet Management */}
        <div className="card">
          <h2>💰 Wallet Management</h2>

          <p>Balance: ৳50,000</p>
          <p>Total Deposit: ৳1,20,000</p>
          <p>Total Withdraw: ৳70,000</p>

          <button className="edit-btn">
            Add Money
          </button>

          <button className="edit-btn">
            Adjust Balance
          </button>
        </div>


        {/* Security Control */}
        <div className="card">
          <h2>🔐 Security Control</h2>

          <button className="edit-btn">
            Reset Password
          </button>

          <button className="edit-btn">
            Reset PIN
          </button>

          <button className="edit-btn">
            Force Logout
          </button>
        </div>


        {/* Account Control */}
        <div className="card">
          <h2>⚙️ Account Control</h2>

          <p>Status: Active</p>

          <button className="edit-btn">
            Block User
          </button>

          <button className="edit-btn">
            Unblock User
          </button>
        </div>

      </div>


      {/* Transaction History */}
      <div className="card">

        <h2>📄 Transaction History</h2>

        <table className="user-table">

          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>


          <tbody>

            <tr>
              <td>12 July</td>
              <td>Add Money</td>
              <td>৳5000</td>
              <td>Success</td>

              <td>
                <button className="edit-btn">
                  👁 View
                </button>

                <button className="edit-btn">
                  🔄 Reverse
                </button>
              </td>
            </tr>


            <tr>
              <td>10 July</td>
              <td>Cash Out</td>
              <td>৳2000</td>
              <td>Success</td>

              <td>
                <button className="edit-btn">
                  👁 View
                </button>

                <button className="edit-btn">
                  🔄 Reverse
                </button>
              </td>
            </tr>

          </tbody>

        </table>

      </div>


      {/* Admin Notes */}
      <div className="card">

        <h2>📝 Admin Notes</h2>

        <textarea
          placeholder="Write admin note..."
          style={{
            width: "100%",
            height: "100px",
            padding: "10px"
          }}
        />

        <br />
        <br />

        <button className="edit-btn">
          Save Note
        </button>

      </div>


    </div>
  );
}

