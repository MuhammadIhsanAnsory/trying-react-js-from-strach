import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout
      title="Login"
      subtitle="Welcome, please enter your credentials"
      type="login"
    >
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
