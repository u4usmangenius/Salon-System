import React, { useCallback } from "react";
import {
  Container,
  CustomAiHeading,
  QuoteBox,
  Quote,
  Author,
  CameraIconBox,
  CameraIcon,
  UploadButton,
  SelectButton,
  ItemRight,
  ItemLeft,
  SubContainer,
  Logo,
  ItemCenter,
} from "./AiStylesPageStyles";
import AdminHeader from "../../../components/headers/admin/Header";
import { Typography, Modal, Box, Button } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import logo from "../../../assests/AIStyles.png";
import Webcam from "react-webcam";
import Cropper from "react-easy-crop";
import { observer } from "mobx-react";
import { aiStyleStore } from "../../../stores/AIStyleStore/AIStyleStore";
import CustomerHeader from "../../../components/headers/customer-header/CustomerHeader";
import BarberHeader from "../../../components/headers/BarberHeader.js/BarberHeader";

const AIStyles = () => {
  const webcamRef = React.useRef(null);

  const handleUploadClick = () => {
    aiStyleStore.setOpenCamera(true);
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    aiStyleStore.setFormField("capturedImage", imageSrc);
    aiStyleStore.setOpenCamera(false);
    aiStyleStore.setOpenCrop(true);
  }, [webcamRef]);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    aiStyleStore.setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const getCroppedImg = async (imageSrc, pixelCrop) => {
    const createImage = (url) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener("load", () => resolve(image));
        image.addEventListener("error", (error) => reject(error));
        image.setAttribute("crossOrigin", "anonymous");
        image.src = url;
      });
    };

    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    return new Promise((resolve) => {
      canvas.toBlob((file) => {
        resolve(URL.createObjectURL(file));
      }, "image/jpeg");
    });
  };

  const handleSaveCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(
        aiStyleStore.formFields.capturedImage,
        aiStyleStore.croppedAreaPixels
      );
      aiStyleStore.setFormField("capturedImage", croppedImage);
      aiStyleStore.setOpenCrop(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      aiStyleStore.setUploadedFile(file);
    }
  };
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
            AI Recommendation Styles
          </h1>
        </CustomAiHeading>
        <SubContainer>
          <ItemLeft>
            <QuoteBox>
              <Author>Jason Makki</Author>
              <Quote>
                Style Speaks Louder Than Words. Discover Your Signature Look,
                Captivate the World
              </Quote>
            </QuoteBox>
          </ItemLeft>
          <ItemCenter>
            <CameraIconBox>
              <CameraIcon>
                {aiStyleStore.formFields.capturedImage ? (
                  <img
                    src={aiStyleStore.formFields.capturedImage}
                    alt="Captured"
                    style={{
                      width: "10rem",
                      height: "10rem",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <CameraAltIcon style={{ fontSize: "10rem" }} />
                )}
              </CameraIcon>
              <UploadButton variant="contained" onClick={handleUploadClick}>
                UPLOAD
              </UploadButton>
              <label htmlFor="file-upload">
                <SelectButton variant="contained" component="span">
                  SELECT
                </SelectButton>
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileInputChange}
              />
            </CameraIconBox>
            <Typography
              variant="h5"
              style={{ marginTop: "20px", color: "#ffcc00" }}
            >
              Allow Camera Access!
            </Typography>
          </ItemCenter>
          <ItemRight sx={{ display: "flex", alignItems: "center" }}>
            <Logo src={logo} alt="Logo" />
          </ItemRight>
        </SubContainer>
      </Container>

      <Modal
        open={aiStyleStore.openCamera}
        onClose={() => aiStyleStore.setOpenCamera(false)}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          flexDirection="column"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={300}
            height={300}
            borderRadius="50%"
            overflow="hidden"
            bgcolor="black"
          >
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={300}
              height={300}
              style={{ borderRadius: "50%" }}
            />
          </Box>
          <Button
            onClick={capture}
            variant="contained"
            style={{ marginTop: "20px" }}
          >
            Capture
          </Button>
        </Box>
      </Modal>

      {aiStyleStore.formFields.capturedImage && (
        <Modal
          open={aiStyleStore.openCrop}
          onClose={() => aiStyleStore.setOpenCrop(false)}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            flexDirection="column"
          >
            <Box position="relative" width={250} height={250} bgcolor="black">
              <Cropper
                image={aiStyleStore.formFields.capturedImage}
                crop={aiStyleStore.crop}
                zoom={aiStyleStore.zoom}
                aspect={1}
                onCropChange={(crop) => aiStyleStore.setCrop(crop)}
                onZoomChange={(zoom) => aiStyleStore.setZoom(zoom)}
                onCropComplete={onCropComplete}
              />
            </Box>
            <Button
              onClick={handleSaveCroppedImage}
              variant="contained"
              style={{ marginTop: "20px" }}
            >
              Save
            </Button>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default observer(AIStyles);
