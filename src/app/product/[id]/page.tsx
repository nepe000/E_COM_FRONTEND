import ProductDetailS from "@/component/product/ProductDetail";

/* eslint-disable @typescript-eslint/no-unused-vars */
interface IProps {
  params: Promise<{ id: string }>;
}

const Page: React.FC<IProps> = async ({ params }) => {
  const { id } = await params;

  return (
    <div className="w-full lg:max-w-[1440px] lg:mx-auto">
      <ProductDetailS id={id} />
    </div>
  );
};
export default Page;
