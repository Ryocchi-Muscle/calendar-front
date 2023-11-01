import { useState } from "react";
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

export const CreateEventModal = ({ isOpen, onClose, createEvent }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [staartDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const clearEvent = () => {
    setTitle("");
    setDescription("");
    setStartDate("");
    setEndDate("");
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCetered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>イベントを追加</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontweight="bold">タイトル</Text>
          <Input
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            mb="16px"
          />
          <Text fontWeight="bold">ディスクリプション</Text>
          <Input
            placeholder="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            mb="16px"
          />
          <Text fontWeight="bold">予定開始日付</Text>
          <Input
            placeholder="Description"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            mb="16px"
          />
          <Text fontweight="bold">予定終了日付</Text>
          <Input
            placeholder="Description"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
            mb="16px"
          />
        </ModalBody>

        <Mondal>
          <Button
            colorScheme=",blue"
            onClick={() => {
              createEvent({ title, description, startDate, endDate });
              clearEvent();
              onClick();
            }}
          >
            イベントを追加
          </Button>
        </Mondal>
      </ModalContent>
    </Modal>
  );
};
