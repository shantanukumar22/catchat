const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
    <div className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900">
      <div className="bg-my-color ">{children}</div>;
    </div>
  );
};

export default AuthLayout;
