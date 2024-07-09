import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AppointmentsImage from "../../../assests/Appointments.PNG";
import {
  Container,
  CustomAiHeading,
  CalendTaskContainer,
  ItemLeft,
  ItemRight,
  CalendarContainer,
  TaskList,
  TaskItem,
  TaskIcon,
  TaskInfo,
  ShowAllLink,
  TaskStatus,
  Logo,
} from "./AppointmentStyle";
import { Typography, Menu, MenuItem } from "@mui/material";
import { MoreHoriz, ArrowDropDown } from "@mui/icons-material";
import AdminHeader from "../../../components/headers/admin/Header";
import CustomerHeader from "../../../components/headers/customer-header/CustomerHeader";
import BarberHeader from "../../../components/headers/BarberHeader.js/BarberHeader";
import appointmentStore from "../../../stores/appointment/AppointmentStore";

const Appointments = observer(() => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [appointments, setAppointments] = useState([]);
  // appointment
  const userToken = localStorage.getItem("userToken");
  const userTokenObj = userToken ? JSON.parse(userToken) : null;
  const role = userTokenObj ? userTokenObj.role : null;

  const renderHeader = () => {
    switch (role) {
      case "admin":
        return <AdminHeader />;
      case "customer":
        return <CustomerHeader />;
      case "barber":
        return <BarberHeader />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const fetchBarbersData = async () => {
      try {
        const appointment = await appointmentStore.fetchAppointments();
        setAppointments(appointment);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchBarbersData();
  }, []);

  const handleShowAllClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Container>
        {renderHeader()}

        <CustomAiHeading>
          <h1
            sx={{
              fontWeight: "bold",
            }}
            variant="h4"
          >
            Appointments
          </h1>
        </CustomAiHeading>
        <CalendTaskContainer>
          <ItemLeft>
            <CalendarContainer>
              <Logo src={AppointmentsImage} alt="Logo" />
            </CalendarContainer>
          </ItemLeft>
          <ItemRight>
            <Typography
              variant="h5"
              style={{
                color: "#fff",
                textAlign: "center",
                marginBottom:"1rem"
              }}
              sx={{
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Upcoming Tasks
            </Typography>
            <TaskList>
              {appointments?.slice(0, 2).map((appointment) => {
                const [date, time] = appointment.time.split("T");

                return (
                  <TaskItem key={appointment.id}>
                    <TaskIcon />
                    <TaskInfo>
                      <Typography variant="h6">
                        {appointment.customerName}
                      </Typography>
                      <Typography variant="body2">
                        {date} {time.split(".")[0]}
                      </Typography>
                    </TaskInfo>
                    <TaskStatus color="green" />
                  </TaskItem>
                );
              })}
            </TaskList>
            {appointmentStore.appointments.length > 2 && (
              <>
                <ShowAllLink onClick={handleShowAllClick}>
                  <Typography variant="body2" style={{ color: "#ffcc00" }}>
                    Show All
                  </Typography>
                  <ArrowDropDown style={{ color: "#ffcc00" }} />
                </ShowAllLink>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      // maxHeight: 48 * 4.5,
                      // width: "20ch",
                      maxHeight: "100%",
                      width: "30%",
                      // marginTop: "6%",
                      position: "absolute",
                      overflowY: "scroll",
                      maxHeight: "50%",
                      // paddingLeft:"50rem",
                      // paddingRight:"10rem",
                    },
                  }}
                  style={{
                    maxHeight: "100%",
                    width: "100%",
                    paddingLeft: "50rem",
                    paddingRight: "10rem",
                  }}
                >
                  {appointmentStore.appointments
                    ?.slice(2)
                    .map((appointment) => {
                      const [date, time] = appointment.time.split("T");

                      return (
                        <MenuItem key={appointment.id} onClick={handleClose}>
                          <TaskItem style={{ width: "100%" }}>
                            <TaskIcon />
                            <TaskInfo>
                              <Typography variant="h6">
                                {appointment.customerName}
                              </Typography>
                              <Typography variant="body2">
                                {date} {time.split(".")[0]}
                              </Typography>
                            </TaskInfo>
                            <TaskStatus color="green" />
                          </TaskItem>
                        </MenuItem>
                      );
                    })}
                </Menu>
              </>
            )}
          </ItemRight>
        </CalendTaskContainer>
      </Container>
    </>
  );
});

export default Appointments;
