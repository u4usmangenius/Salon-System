import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { barbersStore } from "../../stores/Barbers/BarbersStore/BarbersStore";
import {
  Container,
  CustomAiHeading,
  CalendTaskContainer,
  ItemLeft,
  ItemRight,
  CalendarContainer,
  TaskItem,
  TaskSwitch,
  TaskIcon,
  TaskInfo,
  HeaderContainer,
} from "./BarberStyle";
import { Typography, Switch, Menu, MenuItem } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import TuneIcon from "@mui/icons-material/Tune";
import AdminHeader from "../../components/headers/admin/Header";
import CustomerHeader from "../../components/headers/customer-header/CustomerHeader";
import BarberHeader from "../../components/headers/BarberHeader.js/BarberHeader";
import barberStore from "../../stores/admin/barbers/barberStore";
import appointmentStore from "../../stores/appointment/AppointmentStore";
import { ShowAllLink } from "./Appointments/AppointmentStyle";

const Barbers = observer(() => {
  const [appointments, setAppointments] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const userToken = localStorage.getItem("userToken");
  const userTokenObj = userToken ? JSON.parse(userToken) : null;
  const role = userTokenObj ? userTokenObj.role : null;

  useEffect(() => {
    const fetchBarbersData = async () => {
      try {
        let appointment;
        if (role === "admin") {
          appointment = await appointmentStore.fetchAppointmentsAdmin();
        } else {
          console.log("else condition");
          appointment = await appointmentStore.fetchAppointments();
        }
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

  const handleSwitchClick = (event, appointmentId) => {
    event.stopPropagation();
    // Handle switch state change logic here
    console.log(`Switch clicked for appointment ${appointmentId}`);
  };

  const onDateChange = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Resetting the time to midnight

    if (date >= today) {
      barbersStore.setSelectedDate(date);
    } else {
      alert("Selected date cannot be in the past");
    }
  };

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
        await barberStore.fetchSpecificBarber();
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchBarbersData();
  }, []);

  return (
    <>
      <Container>
        {renderHeader()}

        <CustomAiHeading>
          <h1
            variant="h4"
            sx={{
              fontWeight: "bold",
            }}
          >
            {" "}
            {role !== "admin" ? (
              barberStore.barbers ? (
                <>
                  Welcome{"  "}
                  {barberStore.barbers?.name}
                </>
              ) : (
                ""
              )
            ) : (
              "Showing All Appointments"
            )}
          </h1>
        </CustomAiHeading>
        <CalendTaskContainer>
          <ItemLeft>
            <CalendarContainer>
              <Typography
                variant="h4"
                style={{
                  color: "#ffcc00",
                  marginBottom: "1rem",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                Calendar
              </Typography>
              <Calendar
                onChange={onDateChange}
                value={barbersStore.selectedDate}
                tileDisabled={({ date }) =>
                  date < new Date().setHours(0, 0, 0, 0)
                }
              />
            </CalendarContainer>
          </ItemLeft>
          <ItemRight>
            <HeaderContainer>
              <Typography
                variant="h5"
                style={{
                  color: "#ffcc00",
                  marginRight: "auto",
                  fontWeight: "bold",
                }}
              >
                Advanced Statistics
              </Typography>
              <TuneIcon style={{ color: "#fff" }} />
            </HeaderContainer>
            {appointments?.slice(0, 2).map((appointment) => {
              const [date, time] = appointment.time.split("T");

              return (
                <TaskItem key={appointment.id}>
                  <TaskIcon>📄</TaskIcon>

                  <TaskInfo>
                    <Typography variant="h6">
                      {appointment.customerName}
                    </Typography>
                    <Typography variant="body2">+ $20</Typography>
                  </TaskInfo>
                  <Typography variant="body2" style={{ marginRight: "0.5rem" }}>
                    On Progress
                  </Typography>
                  <Switch
                    defaultChecked
                    color="primary"
                    onClick={(event) =>
                      handleSwitchClick(event, appointment.id)
                    }
                  />
                </TaskItem>
              );
            })}
            {appointmentStore.appointments?.length > 2 && (
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
                      maxHeight: "100%",
                      width: "50%",
                      position: "absolute",
                      overflowY: "scroll",
                      maxHeight: "50%",
                      color: "#fff",
                      marginTop: "-1.6rem",
                    },
                  }}
                >
                  {appointmentStore.appointments
                    ?.slice(2)
                    .map((appointment) => {
                      const [date, time] = appointment.time.split("T");

                      return (
                        <MenuItem key={appointment.id}>
                          <TaskItem style={{ width: "100%" }}>
                            <TaskIcon>📄</TaskIcon>

                            <TaskInfo>
                              <Typography variant="h6">
                                {appointment.customerName}
                              </Typography>
                              <Typography variant="body2">+ $20</Typography>
                            </TaskInfo>
                            <TaskSwitch>
                              <Typography
                                variant="body2"
                                style={{ marginRight: "0.5rem" }}
                              >
                                On Progress
                              </Typography>
                              <Switch
                                defaultChecked
                                color="primary"
                                onClick={(event) =>
                                  handleSwitchClick(event, appointment.id)
                                }
                              />
                            </TaskSwitch>
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

export default Barbers;
