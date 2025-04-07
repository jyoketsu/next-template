export default function Layout({
  user,
  admin,
}: {
  user: React.ReactNode;
  admin: React.ReactNode;
}) {
  const checkUserRole = () => {
    // Simulate a function that checks the user's role
    return "admin";
  };
  const role = checkUserRole();

  return role === "admin" ? admin : user;
}
