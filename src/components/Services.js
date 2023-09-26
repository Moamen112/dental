import React from "react";
import styled from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Services = () => {
	return (
		<ServicesContainer>
			<Header>
				<HeaderLayout>
					<h2>Smiling Brighter Together</h2>
					<h2>Your Trusted Dental Care Partner</h2>
				</HeaderLayout>
			</Header>
			<OfferingSection>
				{/* First Div (Centered Text) */}
				<OfferingText>
					<SmallText className="welcome">Our Services</SmallText>
					<HeaderText>Services</HeaderText>
					<SmallText style={{ width: "80%" }}>
						Lorem ipsum dolor sit amet, consectetuer adipiscing
						elit. Aenean commodo ligula aenean massa.
					</SmallText>
				</OfferingText>

				{/* Second Div (Grid of Boxes) */}
				<OfferingBoxes>
					{/* First Row */}
					<OfferingBox>
						<OfferingImage
							src="/imgs/offer2.svg"
							alt="Offering 2"
						/>
						<h3>Teeth Checkup</h3>
						<OfferingDescription>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit
						</OfferingDescription>
						<OfferingLearn>
							Learn More
							<div className="forward">
								<ArrowForwardIcon
									sx={{ color: "#fff", fontSize: "12px" }}
								/>
							</div>
						</OfferingLearn>
					</OfferingBox>
					<OfferingBox>
						<OfferingImage
							src="/imgs/offer2.svg"
							alt="Offering 2"
						/>
						<h3>Teeth Whitening</h3>
						<OfferingDescription>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit
						</OfferingDescription>
						<OfferingLearn>
							Learn More
							<div className="forward">
								<ArrowForwardIcon
									sx={{ color: "#fff", fontSize: "12px" }}
								/>
							</div>
						</OfferingLearn>
					</OfferingBox>
					<OfferingBox>
						<OfferingImage
							src="/imgs/offer3.svg"
							alt="Offering 2"
						/>
						<h3>Dental Checkup</h3>
						<OfferingDescription>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit
						</OfferingDescription>
						<OfferingLearn>
							Learn More
							<div className="forward">
								<ArrowForwardIcon
									sx={{ color: "#fff", fontSize: "12px" }}
								/>
							</div>
						</OfferingLearn>
					</OfferingBox>
					{/* Second Row */}
					<OfferingBox>
						<OfferingImage
							src="/imgs/offer4.svg"
							alt="Offering 2"
						/>
						<h3>Teeth Implants</h3>
						<OfferingDescription>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit
						</OfferingDescription>
						<OfferingLearn>
							Learn More
							<div className="forward">
								<ArrowForwardIcon
									sx={{ color: "#fff", fontSize: "12px" }}
								/>
							</div>
						</OfferingLearn>
					</OfferingBox>
					<OfferingBox>
						<OfferingImage
							src="/imgs/offer5.svg"
							alt="Offering 2"
						/>
						<h3>Dental Filling</h3>
						<OfferingDescription>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit
						</OfferingDescription>
						<OfferingLearn>
							Learn More
							<div className="forward">
								<ArrowForwardIcon
									sx={{ color: "#fff", fontSize: "12px" }}
								/>
							</div>
						</OfferingLearn>
					</OfferingBox>
					<OfferingBox>
						<OfferingImage
							src="/imgs/offer6.svg"
							alt="Offering 2"
						/>
						<h3>Cosmetic</h3>
						<OfferingDescription>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit
						</OfferingDescription>
						<OfferingLearn>
							Learn More
							<div className="forward">
								<ArrowForwardIcon
									sx={{ color: "#fff", fontSize: "12px" }}
								/>
							</div>
						</OfferingLearn>
					</OfferingBox>
				</OfferingBoxes>
			</OfferingSection>
			<CounterSectionContainer>
				<Counters>
					<Counter>
						<CounterImage
							src="/imgs/Tooth-white.svg"
							alt="Counter 1"
						/>
						<CounterDesc>
							<CounterNumber>
								1200<span>+</span>
							</CounterNumber>
							<CounterName>Happy Client</CounterName>
						</CounterDesc>
					</Counter>
					<Counter>
						<CounterImage
							src={"/imgs/clinic-1.svg"}
							alt="Counter 2"
						/>
						<CounterDesc>
							<CounterNumber>
								15<span>+</span>
							</CounterNumber>
							<CounterName>Year Experience</CounterName>
						</CounterDesc>
					</Counter>
					<Counter>
						<CounterImage
							src={"/imgs/dentist-white.svg"}
							alt="Counter 3"
						/>
						<CounterDesc>
							<CounterNumber>
								70<span>+</span>
							</CounterNumber>
							<CounterName>Doctor & Staff</CounterName>
						</CounterDesc>
					</Counter>
					<Counter>
						<CounterImage
							src={"/imgs/scedule-white.svg"}
							alt="Counter 4"
						/>
						<CounterDesc>
							<CounterNumber>
								340<span>+</span>
							</CounterNumber>
							<CounterName>Online Appointment</CounterName>
						</CounterDesc>
					</Counter>
				</Counters>
			</CounterSectionContainer>

			<WorkingHours>
				<WorkingLayout>
					<SmallText className="welcome">Our Story</SmallText>
					<h2>Working Hours</h2>
					<SmallText>
						Monday To Saturday: 9.00 am - 11.30 pm Sunday Closed
					</SmallText>
				</WorkingLayout>
			</WorkingHours>
		</ServicesContainer>
	);
};

const ServicesContainer = styled.section`
	padding-top: 80px;

	.welcome {
		border: 1px solid rgba(0, 0, 0, 0.1);
		font-weight: bold;
		color: #3d75c3;
		width: 28%;
		text-align: center;
	}

	.hidden {
		@media (max-width: 768px) {
			display: none;
		}
	}
`;

const SmallText = styled.div`
	color: #545454;
	text-align: center;
	font-family: Manrope;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 142%; /* 22.72px */
`;

const HeaderText = styled.div`
	color: #1c1c1c;
	text-align: center;
	font-family: Manrope;
	font-size: 40px;
	font-style: normal;
	font-weight: 700;
	line-height: 114.5%; /* 45.8px */

	span {
		color: #3d75c3;
	}

	@media (max-width: 1200px) {
		font-size: 30px;
	}

	@media (max-width: 768px) {
		font-size: 24px;
	}
`;

const Header = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 531px;
	background-color: #fff;
	background-image: url("/imgs/services.svg");
	background-repeat: no-repeat;
	background-size: cover;

	@media (max-width: 768px) {
		width: 100%;
		height: 200px;
		background-image: url("/imgs/services1.png");
		box-sizing: border-box;
	}
`;

const HeaderLayout = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: rgba(217, 217, 217, 0.5);

	h2 {
		width: 50%;
		color: #000;
		text-align: center;
		font-family: Manrope;
		font-size: 45px;
		font-style: normal;
		font-weight: 700;
		line-height: 142%; /* 63.9px */
	}

	@media (max-width: 768px) {
		h2 {
			color: #000;
			text-align: center;
			font-family: Manrope;
			font-size: 15px;
			font-style: normal;
			font-weight: 700;
			line-height: 142%; /* 21.3px */
		}
	}
`;

// Styled components for the Offering section
const OfferingSection = styled.div`
	background-color: #fff;
	margin: 60px auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px 0;
	text-align: center;
`;

const OfferingText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	padding: 20px;
`;

const OfferingBoxes = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 77%;
	gap: 1%;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 40px;
		width: 70%;
	}
`;

const OfferingBox = styled.div`
	width: 32%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
	height: 400px;
	position: relative;
	margin: 10px 0;
	padding: 0;
	box-shadow: 2px 4px 20px 0px rgba(0, 60, 179, 0.13);

	h3 {
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		text-align: left;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const OfferingImage = styled.img`
	width: 110%;
	height: 60%;
	object-fit: cover;
`;

const OfferingDescription = styled.p`
	font-size: 16px;
	box-sizing: border-box;
	color: #636571;
	padding: 0px 10px;
	width: 100%;
	text-align: left;
`;

const OfferingLearn = styled.div`
	position: absolute;
	bottom: 10px;
	right: 10px;
	color: #3d75c3;
	text-align: center;
	font-family: Manrope;
	font-size: 15px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px; /* 160% */
	display: flex;
	gap: 5px;

	.forward {
		background-color: #3d75c3;
		padding: 5px;
		font-size: 10px;
		border-radius: 50%;
		display: flex;
		align-items: center;
	}
`;

const CounterSectionContainer = styled.div`
	background-color: #f1f8ff; /* Set the background color for the full-width section */
	margin: 60px 0; /* Add some padding as needed */
	padding: 20px 0;
`;

const Counters = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	max-width: 1200px;
	background: #f1f8ff;
	padding: 0 20px;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}
`;

const Counter = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
	padding: 20px;
	width: 23%;
	gap: 10px;

	@media (max-width: 768px) {
		width: 50%;
		align-items: center;
		justify-content: center;
	}
`;

const CounterDesc = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;

	@media (max-width: 768px) {
		width: 40%;
	}
`;

const CounterImage = styled.img`
	width: 80px;
	height: 80px;
	background-color: #3d75c3;
`;

const CounterNumber = styled.div`
	font-size: 24px;

	span {
		color: #3d75c3;
		font-size: 40px;
		padding: 0 0 0 5px;
	}
`;

const CounterName = styled.div`
	font-size: 16px;
	color: #636571;
	margin-top: 10px;
`;

const WorkingHours = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80%;
	margin: 60px auto;
	height: 531px;
	background-color: #fff;
	background-image: url("/imgs/hours.svg");
	background-repeat: no-repeat;
	background-size: cover;

	@media (max-width: 768px) {
		width: 100%;
		height: 200px;
		background-image: url("/imgs/hours.svg");
		box-sizing: border-box;
	}
`;

const WorkingLayout = styled.div`
	width: 333px;
	height: 227px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background: rgba(255, 255, 255, 0.85);
	gap: 20px;

	@media (max-width: 768px) {
		width: 250px;
		height: 150px;
	}
`;

export default Services;
