import Wrapper from "./style";
import Image from "@/components/Image";
import Link from "@/components/Link";
import LoginModal from "@/components/LoginModal";
type NavigationType = {};

const Navigation = ({ ...props }: NavigationType) => {
  return (
    <Wrapper {...props}>
      <div className="inner">
        <Link href="/">
          <Image src="/next.svg" width="80px" />
        </Link>
        <LoginModal pathname="/dashboard" />
      </div>
    </Wrapper>
  );
};

export default Navigation;
