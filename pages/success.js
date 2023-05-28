import Button from "@/components/Button";
import {BsCheckCircle} from "react-icons/bs"

const SuccessPage = () => {
  return (
    <div className="wrapper py-10 min-h-full">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-3xl flex items-center gap-2">
          <span className="text-green-700"><BsCheckCircle/></span> {"You've enrolled successflly! "}
        </h2>

        <Button href="/orders" placeholder="Go to your orders" />
      </div>
    </div>
  );
};

export default SuccessPage;
