export default function SecurityPage() {
  return (
    <div className="content">

      <div className="card">
        <h1>🛡 User Security Center</h1>
        <p>Monitor user login activity, devices and account security.</p>
      </div>


      <div className="card">
        <h2>👤 User Security Profile</h2>

        <p><b>User ID:</b> #001</p>
        <p><b>Name:</b> Rahim</p>
        <p><b>Risk Level:</b> 🟢 Low</p>
        <p><b>Account Status:</b> Active</p>
      </div>



      <div className="card">
        <h2>📱 Device Information</h2>

        <table className="user-table">

          <thead>
            <tr>
              <th>Device</th>
              <th>Browser</th>
              <th>IP Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>


          <tbody>
            <tr>
              <td>Android Phone</td>
              <td>Chrome</td>
              <td>192.xxx.xxx.xxx</td>
              <td>Active</td>
              <td>
                <button className="edit-btn">
                  Logout Device
                </button>
              </td>
            </tr>


            <tr>
              <td>Windows PC</td>
              <td>Edge</td>
              <td>192.xxx.xxx.xxx</td>
              <td>Old Device</td>
              <td>
                <button className="edit-btn">
                  Remove
                </button>
              </td>
            </tr>
          </tbody>

        </table>
      </div>




      <div className="card">
        <h2>📍 Login Activity</h2>

        <table className="user-table">

          <thead>
            <tr>
              <th>Date</th>
              <th>Device</th>
              <th>IP</th>
              <th>Location</th>
            </tr>
          </thead>


          <tbody>

            <tr>
              <td>12 July 2026</td>
              <td>Android</td>
              <td>192.xxx.xxx.xxx</td>
              <td>Dhaka</td>
            </tr>


            <tr>
              <td>10 July 2026</td>
              <td>Windows</td>
              <td>192.xxx.xxx.xxx</td>
              <td>Dhaka</td>
            </tr>

          </tbody>

        </table>
      </div>




      <div className="card">

        <h2>⚠️ Admin Security Action</h2>

        <button className="edit-btn">
          Block User
        </button>

        <button className="edit-btn">
          Unblock User
        </button>

        <button className="edit-btn">
          Force Logout All Devices
        </button>

      </div>


    </div>
  );
}
