import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Modal, Button, TextInput, Textarea, Group, Box } from "@mantine/core";

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
        <Box className="modalbox flex flex-col lg:flex-row gap-4 lg:gap-20 justify-center ">
          <div className="resume w-full  lg:w-3/5 lg:h-full ">
            <div className="buttons flex gap-4 sm:gap-10 mb-3">
              <Button variant="filled">Resume</Button>
              <Button variant="filled">Cover</Button>
            </div>
            <img
              className="w-full h-auto   "
              src="https://resumaker.ai/s3/en-US/cv-examples/Data-Scientist-CV-Example.png"
              alt=""
            />
          </div>
          <div className="remarks mt-6 lg:mt-6 w-full lg:w-1/4">
            <p className="font-bold">Remarks*</p>
            <form className="space-y-4 p-4 border-2">
              {Array.from({ length: 10 }).map((_, index) => (
                <TextInput
                  variant="filled"
                  key={index}
                  placeholder={`Type your message here...`}
                  required
                />
              ))}
              <Textarea
                variant="filled"
                placeholder="Add a comment..."
                required
                minRows={3}
              />
            </form>
            <Group position="right" mt="md">
              <Button
                variant="outline"
                color="rgba(95, 66, 199, 1)"
                size="sm"
                radius="md"
                type="submit"
              >
                Submit
              </Button>
            </Group>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
