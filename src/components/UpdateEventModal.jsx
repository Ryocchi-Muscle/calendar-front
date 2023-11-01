import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Text,
} from "@chakra-ui/react";

export const UpdateEventModal = ({
  isOpen,
  onClose,
  updateEvent,
  updateTitle,
  updateEventId,
  updateDescription,
  updateStartDate,
  updateEndDate,
  setTitle,
  setDescription,
  setStartDate,
  setEndDate,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>イベント更新</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight={"bold"}>タイトル</Text>
          <Input
            placeholder="title"
            value={updateTitle}
            onChange={(event) => setTitle(event.target.value)}
            mb="16px"
          />
          <Text fontWeight={"bold"}>Description</Text>
          <Input
            placeholder="Description"
            value={updateTitle}
            onChange={(event) => setDescription(event.target.value)}
            mb="16px"
          />
          <Text fontWeight={"bold"}>StarttDate</Text>
          <Input
            placeholder="StartDate"
            value={updateTitle}
            onChange={(event) => setStartDate(event.target.value)}
            mb="16px"
          />
          <Text fontWeight={"bold"}>EndtDate</Text>
          <Input
            placeholder="EndtDate"
            value={updateTitle}
            onChange={(event) => setEndtDate(event.target.value)}
            mb="16px"
          />
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            onClick={() => {
              updateEvent({
                updateEvent,
                updateTitle,
                updateDescription,
                updateStartDescription,
                updateStartDate,
                updateEndDate,
              });
              onClose();
            }}
          >
            Update Event
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
