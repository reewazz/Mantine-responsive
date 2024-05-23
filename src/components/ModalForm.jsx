import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Box, Text } from "@mantine/core";
import { CopyPhone } from "./CopyPhone";
import { CopyEmail } from "./CopyEmail";
import Reviews from "./Reviews";
import { Nav } from "./Nav";

export const ModalForm = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="ModalForm">
      <Button onClick={open}>Open Modal</Button>
      <Modal
        opened={opened}
        onClose={close}
        fullScreen
        radius={0}
        transitionProps={{ transition: "fade", duration: 200 }}
      >
        <Box className="modalbox flex flex-col lg:flex-row gap-4 lg:gap-20 justify-center p-4">
          <div className="resume w-full lg:w-1/2 p-4">
            <Nav />
          </div>
          <div className="remarks w-full flex-col items-center justify-center lg:w-1/4 mt-6 lg:mt-6 p-4">
            <Text className="font-bold">Phone Number</Text>
            <Box className="flex flex-row gap-3 items-center">
              <CopyPhone />
              <Text className="font-bold">98456758522</Text>
            </Box>

            <Text className="font-bold">Email</Text>
            <Box className="flex flex-row gap-3 items-center">
              <CopyEmail />
              <Text className="font-bold">riwaj.neupane@jobaxle.com</Text>
            </Box>
            <p className="font-bold mt-2">Remarks*</p>
            <Reviews />
          </div>
        </Box>
      </Modal>
    </div>
  );
};
