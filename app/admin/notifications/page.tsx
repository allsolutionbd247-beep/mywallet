export default function NotificationsPage() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Notifications</h1>

      <div style={{ marginTop: "20px" }}>
        <label>
          Notification Title
        </label>
        <br />

        <input
          type="text"
          placeholder="Enter title"
          style={{ padding: "10px", width: "300px" }}
        />

        <br /><br />

        <label>
          Message
        </label>
        <br />

        <textarea
          placeholder="Write notification message"
          style={{ padding: "10px", width: "300px", height: "100px" }}
        />

        <br /><br />

        <button>
          Send Notification
        </button>
      </div>
    </div>
  );
}