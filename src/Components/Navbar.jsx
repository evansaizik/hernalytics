import {
  Button,
  SimpleGrid,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Flex,
  HStack,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const menuStyle = {
    display: "inline",
    textAlign: "center",
    color: "white",
    p: '0',
    fontSize: ".9rem",
    fontWeight: "800",
    w: "fit-content",
    bg: "transparent",
    _hover: {
      bg: "transparent",
    },
  };

  // const menuList = {
  //   bg: "#1C2031",
  //   w: "264px",
  //   h: "30px",
  //   maxHeight: "2rem",
  //   overFlow: "scroll",
  //   px: "0",
  //   color: "#C6C7CB",
  //   py: "0",
  //   border: "none",
  //   _hover: {
  //     bg: "#1C2031",
  //   },
  // };

  // const menuItem = {
  //   bg: "#1C2031",
  // };

  const styles = {
    display: "inline",
    textAlign: "center",
    color: "white",
    fontSize: ".9rem",
    fontWeight: "800",
    bg: "transparent",
  };

  return (
    <HStack gap="10px" alignItems="center">
      <Text sx={styles}>ABOUT US</Text>
      <Menu>
        <MenuButton as={Button} sx={menuStyle} rightIcon={<ChevronDownIcon />}>
          OUR COMMUNITIES
        </MenuButton>
        <MenuList>
          <MenuItem>Pre-Election</MenuItem>
          <MenuDivider m="0" color="#C6C7CB" />
          <MenuItem>Election Day Live Updates</MenuItem>
          <MenuDivider m="0" color="#C6C7CB" />
          <MenuItem>Post-Election Analysis</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton as={Button} sx={menuStyle} rightIcon={<ChevronDownIcon />}>
          ELECTION DATA
        </MenuButton>
        <MenuList borderRadius="none">
          <MenuItem>Election Day Live Updates</MenuItem>
          <MenuDivider m="0" color="#C6C7CB" />
          <MenuItem>Post- Election Analysis</MenuItem>
        </MenuList>
      </Menu>
      <Text sx={styles}>E-BUDDY</Text>
      <Text sx={styles}>VEO PLATFORM</Text>
      <Text sx={styles}>LOGIN</Text>
      <Button
        bg="#E5B805"
        w="129px"
        h="47px"
        borderRadius="none"
        display="inline"
        color="black"
      >
        SIGN UP
      </Button>
    </HStack>
  );
};

export default Navbar;
