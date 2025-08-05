"use client";
import withDataFetching from "@/components/hocs/withDataFetching";
import ProfileCard from "@/components/ProfileCard";

export default function Blog() {
  const SimpleLoadingSpinner = () => (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        fontSize: "24px",
        color: "#007bff",
      }}
    >
      Loading data...
    </div>
  );

  const FakeComp = ({ data }: { data?: unknown[] }) => (
    <div>
      {/* <ProfileCard basics={data.basics} type="home"/> */}
      {/* {JSON.stringify(data.basics.profiles, null, 2)} */}
    </div>
  );

  const TestBlog = withDataFetching(FakeComp, SimpleLoadingSpinner);

  return <TestBlog url="/api/resume" />;
}
