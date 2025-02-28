import AddressCardList from "@/components/AddressCardList";
import Input from "@/components/Input";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col justify-center">
      <Input />
      <div className="bg-green-200 flex justify-center pt-8">
        <AddressCardList />
      </div>
    </div>
  );
};

export default Home;
