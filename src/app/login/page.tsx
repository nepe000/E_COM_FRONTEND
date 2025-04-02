import Form from "@/component/pages";

const Page = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center ">
      <div className="flex flex-col items-center px-14 py-10 border border-gray-600 rounded-md">
        <h1 className="text-2xl font-bold tracking-widest mb-4">Login Page</h1>
        <Form />
      </div>
    </div>
  );
};

export default Page;
