import "./Profile.css"; 
export default function Profile({ user }) {
  return (
    <div>
      <h2>My Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}
