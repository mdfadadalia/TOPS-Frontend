import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
  MDBRadio,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBProgress,
  MDBProgressBar,
  MDBBadge,
  MDBListGroup,
  MDBListGroupItem,
  MDBTextArea,
  MDBSwitch,
  MDBCarousel,
  MDBCarouselItem,  
  MDBCardImage,
} from "mdb-react-ui-kit";

export default function App() {
  const [range, setRange] = useState(50);

  return (
    <>
      {/* 🔝 Navbar */}
      <MDBNavbar light bgColor="light" className="mb-4">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">MDB Demo</MDBNavbarBrand>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink active>Home</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>Features</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>Features</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          {/* Profile Image  */}
          <img
            src="https://picsum.photos/100"
            alt="avatar"
            className="rounded-circle shadow"
            width="80"
          />
        </MDBContainer>
      </MDBNavbar>

      <MDBContainer>
        <MDBRow>
          {/* 📦 Form Section */}
          <MDBCol md="6">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBCardTitle>Form Controls</MDBCardTitle>

                <MDBInput label="Name" className="mb-3" />
                <MDBInput label="Email" type="email" className="mb-3" />

                <MDBTextArea label="Message" rows={2} className="mb-3" />

                <MDBCheckbox label="Accept Terms" className="mb-2" />
                <MDBSwitch label="Enable Notifications" className="mb-3" />

                <MDBRadio name="radio" label="Option 1" />
                <MDBRadio name="radio" label="Option 2" className="mb-3" />

                <input
                  type="range"
                  className="form-range mb-3"
                  value={range}
                  onChange={(e) => setRange(e.target.value)}
                />
                <p>Range Value: {range}</p>

                <MDBBtn color="primary">Submit</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          {/* 📊 UI Elements */}
          <MDBCol md="6">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBCardTitle>UI Components</MDBCardTitle>

                {/* Buttons */}
                <MDBBtn color="success" className="me-2">
                  Success
                </MDBBtn>
                <MDBBtn color="danger" className="me-2">
                  Danger
                </MDBBtn>
                <MDBBtn color="warning">Warning</MDBBtn>

                {/* Badges */}
                <div className="mt-3">
                  <MDBBadge color="primary" className="me-2">
                    New
                  </MDBBadge>
                  <MDBBadge color="danger">Hot</MDBBadge>
                </div>

                {/* Progress */}
                <div className="mt-4">
                  <MDBProgress height="20">
                    <MDBProgressBar width={range} valuemin={0} valuemax={100}>
                      {range}%
                    </MDBProgressBar>
                  </MDBProgress>
                </div>
              </MDBCardBody>
            </MDBCard>

            {/* 📋 List */}
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>List Group</MDBCardTitle>

                <MDBListGroup>
                  <MDBListGroupItem active>Dashboard</MDBListGroupItem>
                  <MDBListGroupItem>Profile</MDBListGroupItem>
                  <MDBListGroupItem>Settings</MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        {/* 🃏 Cards Section */}
        <MDBRow className="mt-4">
          {[1, 2, 3].map((item) => (
            <MDBCol md="4" key={item}>
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBCardTitle>Card {item}</MDBCardTitle>
                  <MDBCardText>
                    This is a sample card using MDB components.
                  </MDBCardText>
                  <MDBBtn>Read More</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>

      {/* Image Control */}
      <MDBContainer>
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem itemId={1}>
            <img
              src="https://picsum.photos/800/300?1"
              className="d-block w-100"
              alt=""
            />
          </MDBCarouselItem>

          <MDBCarouselItem itemId={2}>
            <img
              src="https://picsum.photos/800/300?2"
              className="d-block w-100"
              alt=""
            />
          </MDBCarouselItem>

          <MDBCarouselItem itemId={3}>
            <img
              src="https://picsum.photos/800/300?3"
              className="d-block w-100"
              alt=""
            />
          </MDBCarouselItem>

          <MDBCarouselItem itemId={4}>
            <img
              src="https://picsum.photos/800/300?4"
              className="d-block w-100"
              alt=""
            />
          </MDBCarouselItem>
        </MDBCarousel>
      </MDBContainer>
      <br />
      <MDBContainer>
        <div className="bg-image hover-overlay rounded">
          <img
            src="https://picsum.photos/800/300?2"
            className="img-fluid"
            alt=""
          />
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <h4 className="text-white">Overlay Text</h4>
            </div>
          </div>
        </div>
      </MDBContainer>
      <br />
      <MDBContainer>
        <div className="hover-zoom">
          <img
            src="https://picsum.photos/400/250"
            className="img-fluid rounded"
            alt=""
          />
        </div>
      </MDBContainer>
      <br />

      <MDBContainer>
        <MDBRow>
          {[1, 2, 3, 4].map((i) => (
            <MDBCol md="3" key={i} className="mb-3 hover-zoom">
              <img
                src={`https://picsum.photos/300/200?random=${i}`}
                className="img-fluid rounded shadow hover-zoom"
                alt=""
              />
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
      <br />

      <MDBContainer className="col-2">
        <MDBCard>
          <MDBCardImage
            src="https://picsum.photos/400/200"
            position="top"
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>Product Title</MDBCardTitle>
            <MDBCardText>
              Some quick example text for image card.
            </MDBCardText>
            <MDBBtn>View</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}