import Banner from "@/components/common/Banner";
import LotteryBody from "@/components/lottery-details-two/LotteryBody";


const page = () => {
  return (
    <>
    {/* Banaer section Here */}
    <div className="inner-hero-section style--two">
      <Banner
        breadcrumb={[
          ["Home", "/"],
          ["Lottery", "/"],
          ["Contest No: B2T", "/"],
          ["Pick your Lottery Number", "/"],
        ]}
      />
    </div>

    {/* Lottery body here */}
    <LotteryBody />
  </>
  );
};

export default page;
