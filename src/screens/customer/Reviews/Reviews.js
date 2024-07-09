// src/screens/customer/Reviews/Reviews.js

import React, { useEffect, useState } from "react";
import { Box, Typography, Container, Paper, Modal } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import CustomerHeader from "../../../components/headers/customer-header/CustomerHeader";
import AdminHeader from "../../../components/headers/admin/Header";
import BarberHeader from "../../../components/headers/BarberHeader.js/BarberHeader";
import barber_man1 from "./../../../assests/barber_man1.png";
import { CustomButton, ModalBox } from "./ReviewsPageStyle";
import barberStore from "../../../stores/admin/barbers/barberStore";
import { observer } from "mobx-react-lite";
import OpenReviewModal from "./OpenReviewModal";
import reviewStore from "../../../stores/ReviewStore/ReviewStore";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const handleOpen = () => barberStore.setOpenModal(true);
  const handleClose = () => {
    barberStore.setOpenModal(false);
    barberStore.setCurrentBarber(null);
  };

  const renderCarouselItem = (item) => (
    <Paper
      key={item.id}
      elevation={3}
      style={{
        backgroundColor: "#2a2a4a",
        color: "#fff",
        padding: "10px",
        textAlign: "center",
        width: "40%", // Adjust card width
        margin: "0 auto", // Center align horizontally
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={barber_man1}
        style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 5 }}
        alt="Barber"
      />
      <Typography variant="h6" gutterBottom>
        {item.barberName}
      </Typography>
      <Typography variant="body1">{item.review}</Typography>
    </Paper>
  );

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
    if (role === "admin") {
      const fetchReviews = async () => {
        let review = await reviewStore.AdminfetchReviews();
        setReviews(review);
      };
      fetchReviews();
    } else {
      const fetchReviews = async () => {
        setReviews([]);
        let review = await reviewStore.fetchReviews();
        setReviews(review);
      };
      fetchReviews();
    }
  }, []);

  return (
    <Box bgcolor="#1a1a3a" minHeight="100vh" color="#fff">
      {renderHeader()}

      <Container style={role === "customer" ? { paddingTop: "2.7rem" } : {}}>
        {role === "admin" ? null : (
          <CustomButton
            variant="contained"
            color="primary"
            onClick={handleOpen}
            style={{ fontWeight: "bold" }}
          >
            Give Review
          </CustomButton>
        )}
        <Box py={2}>
          <h1
            sx={{
              fontWeight: "bold",
            }}
            variant="h4"
            align="center"
            gutterBottom
          >
            WHAT OUR CLIENTS SAY
          </h1>
          <h2
            style={{ color: "#ffcc22" }}
            variant="body1"
            align="center"
            gutterBottom
          >
            {/* <h2> */}
            Elevate your Trim, Amplify your Style – Reallygreatsite, Where{" "}
            <br />
            Barbership meets the Extraordinary
            {/* </h2> */}
          </h2>
        </Box>
        <br />
        {/* {reviews?.length > 0 ? ( */}
        {reviewStore.reviews?.length > 0 ? (
          <Carousel
            autoPlay={true}
            animation="slide"
            timeout={5000}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            indicators={true}
            fullHeightHover={false}
            style={{ marginTop: "4rem" }}
          >
            {reviewStore.reviews.map((item) => renderCarouselItem(item))}
            {/* {reviews?.map((item) => renderCarouselItem(item))} */}
          </Carousel>
        ) : (
          "No reviews"
        )}
        <Modal open={barberStore.openModal} onClose={handleClose}>
          <ModalBox>
            <OpenReviewModal onClose={handleClose} />
          </ModalBox>
        </Modal>
      </Container>
    </Box>
  );
};

export default observer(Reviews);

// // src/screens/customer/Reviews/Reviews.js

// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Typography,
//   Container,
//   Paper,
//   Avatar,
//   Modal,
// } from "@mui/material";
// import Header from "../../../components/headers/admin/Header"; // Adjust the path based on your project structure
// import Carousel from "react-material-ui-carousel"; // Import the carousel component
// import CustomerHeader from "../../../components/headers/customer-header/CustomerHeader";
// import AdminHeader from "../../../components/headers/admin/Header";
// import BarberHeader from "../../../components/headers/BarberHeader.js/BarberHeader";
// import barber_man1 from "./../../../assests/barber_man1.png";
// import { CustomButton, ModalBox } from "./ReviewsPageStyle";
// import barberStore from "../../../stores/admin/barbers/barberStore";
// import { observer } from "mobx-react-lite";
// import OpenReviewModal from "./OpenReviewModal";
// import reviewStore from "../../../stores/ReviewStore/ReviewStore";
// const reviews = [
//   {
//     id: 1,
//     customerName: "John Doe",
//     customerAvatar: "src/assets/barber_man1.png", // Example path to avatar image
//     feedback:
//       " game-changer! My facial hair has never looked this sharp. The attention to detail and the cool atmosphere made the experience unforgettable. ",
//   },
//   {
//     id: 2,
//     customerName: "Jane Smith",
//     customerAvatar: "/avatars/jane.jpg", // Example path to avatar image
//     feedback: "Great experience. Friendly staff and quick resolution.",
//   },
//   {
//     id: 3,
//     customerName: "Michael Johnson",
//     customerAvatar: "/avatars/michael.jpg", // Example path to avatar image
//     feedback: "Superb support! Quick turnaround and very knowledgeable.",
//   },
//   {
//     id: 4,
//     customerName: "Emily Brown",
//     customerAvatar: "/avatars/emily.jpg", // Example path to avatar image
//     feedback: "Amazing service. They really went above and beyond.",
//   },
//   // Add more reviews as needed
// ];

// const Reviews = () => {
//   const [barbers, setBarbers] = useState([]);

//   const items = reviews.map((review) => ({
//     id: review.id,
//     customerName: review.customerName,
//     customerAvatar: review.customerAvatar,
//     feedback: review.feedback,
//   }));

//   const handleOpen = () => barberStore.setOpenModal(true);
//   const handleClose = () => {
//     barberStore.setOpenModal(false);
//     barberStore.setCurrentBarber(null);
//   };

//   const renderCarouselItem = (item, index) => (
//     <Paper
//       key={item.id}
//       elevation={3}
//       style={{
//         backgroundColor: "#2a2a4a",
//         color: "#fff",
//         padding: "10px",
//         textAlign: "center",
//         width: "40%", // Adjust card width
//         margin: "0 auto", // Center align horizontally
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <img
//         src={barber_man1}
//         style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 5 }}
//       />
//       {/* <Avatar
//         src={item.customerAvatar}
//         sx={{
//           width: 100, // Adjust avatar size
//           height: 100, // Adjust avatar size
//           marginBottom: 5,
//         }}
//       /> */}
//       <Typography variant="h6" gutterBottom>
//         {item.customerName}
//       </Typography>

//       <Typography variant="body1">{item.feedback}</Typography>
//     </Paper>
//   );

//   const userToken = localStorage.getItem("userToken");
//   const userTokenObj = userToken ? JSON.parse(userToken) : null;
//   const role = userTokenObj ? userTokenObj.role : null;

//   const renderHeader = () => {
//     switch (role) {
//       case "admin":
//         return <AdminHeader />;
//       case "customer":
//         return <CustomerHeader />;
//       case "barber":
//         return <BarberHeader />;
//       default:
//         return null;
//     }
//   };

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         // let reviews;
//         await reviewStore.fetchReviews();
//         // console.log("ussssssssssss", reviews);
//         // setBarbers(barbers);
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };

//     fetchReviews();
//   }, []);
//   useEffect(() => {
//     const fetchBarbersData = async () => {
//       try {
//         let barbers;
//         barbers = await reviewStore.fetchBarbers();
//         setBarbers(barbers);
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };

//     fetchBarbersData();
//   }, []);
//   return (
//     <Box bgcolor="#1a1a3a" minHeight="100vh" color="#fff">
//       {renderHeader()}

//       <Container>
//         <CustomButton variant="contained" color="primary" onClick={handleOpen}>
//           Give Review
//         </CustomButton>

//         <Box py={2}>
//           <Typography variant="h4" align="center" gutterBottom>
//             WHAT OUR CLIENTS SAY
//           </Typography>
//           <Typography variant="body1" align="center" gutterBottom>
//             Elevate your trim, amplify your style – reallygreatsite, where{" "}
//             <br />
//             barbership meets the extraordinary
//           </Typography>
//         </Box>
//         <br />
//         <Carousel
//           autoPlay={true}
//           animation="slide"
//           timeout={5000}
//           navButtonsAlwaysVisible={true}
//           cycleNavigation={true}
//           indicators={true}
//           fullHeightHover={false}
//         >
//           {items.map((item, index) => renderCarouselItem(item, index))}
//         </Carousel>
//         <Modal open={barberStore.openModal} onClose={handleClose}>
//           <ModalBox>
//             <OpenReviewModal onClose={handleClose} />
//           </ModalBox>
//         </Modal>
//       </Container>
//     </Box>
//   );
// };

// export default observer(Reviews);
