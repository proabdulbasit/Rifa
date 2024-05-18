import LeftSideMenu from "@/components/common/LeftSideMenu";
import RightSilde from "@/components/user-transaction/RightSilde";

const page = () => {
  return (
    <>
      <div className="inner-hero-section style--five"></div>

      <div className="mt-minus-150 pb-120">
        <div className="container">
          <div className="row">
            {/* user info */}
            <LeftSideMenu />

            {/* Right side here */}
            <RightSilde />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
