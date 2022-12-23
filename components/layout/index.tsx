import { HeaderMenu, HeaderMenuProps } from "./HeaderMenu";
import { LogoButton, LogoButtonProps } from "./LogoButton";
import { MypageDrawer, MypageDrawerProps } from "./MypageDrawer";

export const Layout = {
  header: {
    LogoButton: ({ ...props }: LogoButtonProps) => <LogoButton {...props} />,
    HeaderMenu: ({ ...props }: HeaderMenuProps) => <HeaderMenu {...props} />,
    MypageDrawer: ({ ...props }: MypageDrawerProps) => (
      <MypageDrawer {...props} />
    ),
  },
};
