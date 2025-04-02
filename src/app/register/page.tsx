import RegisterPage from "@/component/formlogin";

const Page = () => {
  return (
    <div className="h-full flex justify-center items-center mt-10 ">
      <div className="flex flex-col items-center px-14 py-10 border border-gray-600 rounded-md">
        <h1 className="text-2xl font-bold tracking-widest ">Login Page</h1>
        <RegisterPage />
      </div>
    </div>
  );
};

export default Page;
