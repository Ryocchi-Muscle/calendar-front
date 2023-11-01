import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Box, Flex, Button, Image, useDisclosure } from "@chakra-ui/react";
import { CreateEventModal } from "../components/CreateEventModal";
import { UpdateEventModal } from "../components/UpdateEventModal";
import {
  getCalendarEvents,
  createCalendarEvent,
  updateCalendarEvent,
} from "../lib/api/calendarEvent";
import { getUser } from "../lib/api/auth.js";
import { useNavigate } from "react-router-dom";


const Calendar = () => {
  const {
    isOpen: isCreateModalOpen,
    onOpen: onCreateModalOpen,
    onClose: onCreateModalClose,
  } = useDisclosure();

  const [event, setEvents] = useState();
  const [updateTitle, setTitle] = useState("");
  const [updateDescription, setDescription] = useState("");
  const [updateSateDate, setStartDate] = useState("");
  const [updateEndDate, setEndDate] = useState("");
  const [eventId, setEventId] = useState("");


  }
  return (
    <div>
      <p>カレンダーページ</p>
      <Link to="/">ホーム画面に戻る</Link>
    </div>
  );
};

export default Calendar;
