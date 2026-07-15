export default function SettingsPage() {
  return (
    <div className="content">

      <div className="settings-card">

        <h1>⚙️ Website Settings</h1>


        <label className="settings-label">
          Website Name
        </label>

        <input
          className="settings-input"
          type="text"
          placeholder="Enter website name"
        />


        <br /><br />


        <label className="settings-label">
          Telegram Support Username
        </label>

        <input
          className="settings-input"
          type="text"
          placeholder="@support_username"
        />


        <br /><br />


        <label className="settings-label">
          Company Registered Phone Number
        </label>

        <input
          className="settings-input"
          type="text"
          placeholder="Enter company phone number"
        />


        <div className="settings-section">

          <h2>
            👤 User Registration Settings
          </h2>


          <label className="settings-label">
            Phone Number
          </label>

          <select className="settings-select">

            <option value="required">
              Required
            </option>

            <option value="optional">
              Optional
            </option>

          </select>


          <br /><br />


          <label className="settings-label">
            Email Address
          </label>

          <select className="settings-select">

            <option value="required">
              Required
            </option>

            <option value="optional">
              Optional
            </option>

          </select>


        </div>


        <button className="settings-btn">
          💾 Save Settings
        </button>


      </div>

    </div>
  );
}