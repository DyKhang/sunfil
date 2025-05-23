import { Bottom } from "@/components/header/Bottom";
import { Top } from "@/components/header/Top";
import { Wrapper } from "@/components/Wrapper";

export const Header = () => {
  return (
    <header className="pt-[24px] pb-[16px] bg-white">
      <Wrapper className="relative">
        <Top />
        <Bottom />
      </Wrapper>
    </header>
  );
};
