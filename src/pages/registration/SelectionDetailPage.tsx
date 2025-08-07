import Button from "@/components/common/Button";
import RegistrationHeader from "@/components/registration/common/RegistrationHeader";
import SelectionDetail from "@/components/registration/selectionFlow/SelectionDetail";

const SelectionDetailPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <RegistrationHeader showBackButton={true} />
      <main className="flex-1 ">
        <SelectionDetail />
      </main>
      <footer className="flex items-center justify-center pb-5.25">
        <Button variant="primary" size="lg">
          다음
        </Button>
      </footer>
    </div>
  );
};

export default SelectionDetailPage;
