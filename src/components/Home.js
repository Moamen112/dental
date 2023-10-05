import React from "react";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home = () => {
	return (
		<HomeContainer>
			<Header>
				{/* Left Section */}
				<LeftSection>
					<SmallText className="welcome">
						👋Hey! We Are Dentic
					</SmallText>
					<HeaderText>
						Your trusted partner for healthy and beautiful{" "}
						<span>Smiles...</span>
					</HeaderText>
					<SmallText>
						Lorem ipsum dolor sit amet, consectetuer adipiscing
						elit. Aenean commodo ligula eget dolor. Aenean massa.
						Cum sociis natoque penatibus et magnis dis parturient.
					</SmallText>
					<Button>Show More..</Button>
				</LeftSection>

				{/* Right Section */}
				<RightSection>
					<HeaderImage
						src="https://Moamen112.github.io/dental/imgs/header.svg"
						alt="Header Image"
					/>
				</RightSection>
			</Header>
			<Services>
				<Service>
					<ServiceIcon>
						{/* Add your icon for the first service */}
						<img
							src="https://Moamen112.github.io/dental/imgs/services1.svg"
							alt="Service 1"
						/>
					</ServiceIcon>
					<ServiceHeader>Affordable Price</ServiceHeader>
					<ServiceDescription>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Ut elit tellus nec.
					</ServiceDescription>
				</Service>
				<Service>
					<ServiceIcon>
						{/* Add your icon for the second service */}
						<img
							src="https://Moamen112.github.io/dental/imgs/services2.svg"
							alt="Service 2"
						/>
					</ServiceIcon>
					<ServiceHeader>Professional Dentist</ServiceHeader>
					<ServiceDescription>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Ut elit tellus nec.
					</ServiceDescription>
				</Service>
				<Service>
					<ServiceIcon>
						{/* Add your icon for the third service */}
						<img
							src="https://Moamen112.github.io/dental/imgs/services3.svg"
							alt="Service 3"
						/>
					</ServiceIcon>
					<ServiceHeader>Satisfactory Service</ServiceHeader>
					<ServiceDescription>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Ut elit tellus nec.
					</ServiceDescription>
				</Service>
			</Services>
			<Features>
				<Feature>
					<FeatureLeft className="hidden">
						<FeatureImage
							src="https://Moamen112.github.io/dental/imgs/feature1.svg"
							alt="Feature 1"
						/>
					</FeatureLeft>
					<FeatureRight>
						<SmallText className="welcome responsiveText">
							More About Us
						</SmallText>
						<HeaderText>
							The Best Dental Clinic That You Can Trust
						</HeaderText>
						<SmallText>
							Lorem ipsum dolor sit amet, consectetuer adipiscing
							elit. Aenean commodo ligula eget dolor. Aenean
							massa. Cum sociis natoque penatibus et magnis dis
							parturient.
						</SmallText>
						<br />
						<SmallText>
							Nullam quis ante. Etiam sit amet orci eget eros
							faucibus tincidunt. Duis leo. Sed fringilla mauris
							sit amet nibh.
						</SmallText>
						<FeatureList>
							<CheckItem>
								<CheckCircleIcon
									sx={{ fontSize: "16px", color: "#3d75c3" }}
								/>
								Modern Equipment
							</CheckItem>
							<CheckItem>
								<CheckCircleIcon
									sx={{ fontSize: "16px", color: "#3d75c3" }}
								/>
								Easy Online Appointment
							</CheckItem>
							<CheckItem>
								<CheckCircleIcon
									sx={{ fontSize: "16px", color: "#3d75c3" }}
								/>
								Comfortable CIinic
							</CheckItem>
							<CheckItem>
								<CheckCircleIcon
									sx={{ fontSize: "16px", color: "#3d75c3" }}
								/>
								Always Monitored
							</CheckItem>
						</FeatureList>
						<FeatureButton>Show More..</FeatureButton>
					</FeatureRight>
				</Feature>
				<Feature>
					<FeatureRightPercentage>
						<SmallText className="welcome">Why Choose Us</SmallText>
						<HeaderText>Helping Your Dental Problems</HeaderText>
						<SmallText>
							Lorem ipsum dolor sit amet, consectetuer adipiscing
							elit. Aenean commodo ligula eget dolor. Aenean
							massa. Cum sociis natoque penatibus et magnis dis
							parturient.
						</SmallText>

						<PercentageBarContainer>
							<PercentageTitle>
								<Title>{"Dental and Mouth Care"}</Title>
								<Percentage>{50}%</Percentage>
							</PercentageTitle>
							<PercentageBar>
								<FilledPercentage
									percentage={50}></FilledPercentage>
							</PercentageBar>
						</PercentageBarContainer>
						<PercentageBarContainer>
							<PercentageTitle>
								<Title>{"Cosmetic Treatment"}</Title>
								<Percentage>{87}%</Percentage>
							</PercentageTitle>
							<PercentageBar>
								<FilledPercentage
									percentage={87}></FilledPercentage>
							</PercentageBar>
						</PercentageBarContainer>
					</FeatureRightPercentage>
					<FeatureServices>
						<FeatureImageService
							src="https://Moamen112.github.io/dental/imgs/feature2.svg"
							alt="Feature 1"
						/>
						<FeatureService>
							<HeaderText className="feature-header">
								Don't Hesitate to Do Consultation
							</HeaderText>
							<SmallText className="feature-text">
								Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit. Aenean commodo ligula eget
								dolor.
							</SmallText>
							<FeatureServiceList>
								<FeatureServiceListItem>
									<h5>Monday - Friday</h5>
									<p>8AM - 10PM</p>
								</FeatureServiceListItem>
								<FeatureServiceListItem>
									<h5>Monday - Friday</h5>
									<p>8AM - 10PM</p>
								</FeatureServiceListItem>
								<FeatureServiceListItem>
									<h5>Monday - Friday</h5>
									<p>8AM - 10PM</p>
								</FeatureServiceListItem>
							</FeatureServiceList>
							<FeatureServiceButton>
								Call +01234 567 890
							</FeatureServiceButton>
						</FeatureService>
					</FeatureServices>
				</Feature>
				<Feature>
					<FeatureMembers>
						<FeatureMember>
							<div className="member-img1"></div>

							<h3>Sara Ehab</h3>
							<p className="member">cardiology & neurology</p>
						</FeatureMember>
						<FeatureMember>
							<div className="member-img2"></div>
							<h3>Amr Ahmed</h3>
							<p className="member">cardiology & neurology</p>
						</FeatureMember>
						<FeatureMembersDescription>
							<SmallText className="welcome">
								Our Doctors
							</SmallText>
							<HeaderText>Our Experienced Doctors</HeaderText>
							<SmallText>
								Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit. Aenean commodo ligula eget
								dolor. Aenean massa. Cum sociis natoque
								penatibus et magnis dis parturient.
							</SmallText>
							<Button>View more </Button>
						</FeatureMembersDescription>
					</FeatureMembers>
				</Feature>
			</Features>
			<CounterSectionContainer>
				<Counters>
					<Counter>
						<CounterImage
							src="https://Moamen112.github.io/dental/imgs/Tooth-white.svg"
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
							src={
								"https://Moamen112.github.io/dental/imgs/clinic-1.svg"
							}
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
							src={
								"https://Moamen112.github.io/dental/imgs/dentist-white.svg"
							}
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
							src={
								"https://Moamen112.github.io/dental/imgs/scedule-white.svg"
							}
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
							src="https://Moamen112.github.io/dental/imgs/offer2.svg"
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
							src="https://Moamen112.github.io/dental/imgs/offer2.svg"
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
							src="https://Moamen112.github.io/dental/imgs/offer3.svg"
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
			<ReviewsContainer>
				{/* First Div (Centered Text) */}
				<ReviewsText>
					<SmallText className="welcome">Our Reviews</SmallText>
					<HeaderText>What Our Patients Say</HeaderText>
					<SmallText style={{ width: "80%" }}>
						Read what our satisfied patients have to say about us.
					</SmallText>
				</ReviewsText>

				{/* Second Div (Single Row of Review Boxes) */}
				<ReviewsBoxes>
					{/* Review Box 1 */}
					<ReviewBox>
						<ReviewImage
							src="/imgs/review1.svg"
							alt="Review 1"
						/>
						<ReviewName>
							<h3>Muhammed Kamal</h3>
							<img
								src="/imgs/review.svg"
								alt="icon"
							/>
						</ReviewName>
						<ReviewDescription>
							Lorem ipsum dolor sit amet,consectetur adipiscing
							elit Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit
						</ReviewDescription>
					</ReviewBox>

					{/* Review Box 2 */}
					<ReviewBox>
						<ReviewImage
							src="/imgs/review2.svg"
							alt="Review 2"
						/>
						<ReviewName>
							<h3>Muhammed Kamal</h3>
							<img
								src="/imgs/review.svg"
								alt="icon"
							/>
						</ReviewName>
						<ReviewDescription>
							Lorem ipsum dolor sit amet,consectetur adipiscing
							elit Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit
						</ReviewDescription>
					</ReviewBox>

					{/* Review Box 3 */}
					<ReviewBox>
						<ReviewImage
							src="/imgs/review3.svg"
							alt="Review 3"
						/>
						<ReviewName>
							<h3>Nada Abdelnasser</h3>
							<img
								src="/imgs/review.svg"
								alt="icon"
							/>
						</ReviewName>
						<ReviewDescription>
							Lorem ipsum dolor sit amet,consectetur adipiscing
							elit Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit
						</ReviewDescription>
					</ReviewBox>
				</ReviewsBoxes>
			</ReviewsContainer>
			<ContactContainer>
				<ContactLeftSection>
					<SmallText className="welcome">Contact Us</SmallText>
					<ContactText>
						Your trusted partner for healthy and beautiful{" "}
						<span>Smiles...</span>
					</ContactText>
					<SmallText>
						Lorem ipsum dolor sit amet, consectetuer adipiscing
						elit. Aenean commodo ligula eget dolor. Aenean massa.
						Cum sociis natoque penatibus et magnis dis parturient.
					</SmallText>
					<Button>Show More..</Button>
				</ContactLeftSection>

				{/* Right Section */}
				<ContactRightSection className="hidden">
					<ContactImage
						src="/imgs/contact.svg"
						alt="Header Image"
					/>
				</ContactRightSection>
			</ContactContainer>
		</HomeContainer>
	);
};

// Styled components for the header and its elements
const HomeContainer = styled.div`
	/* Add your container styles here */
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

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 540px;
	background-color: #fff;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 20px;
	}
`;

const LeftSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 60px auto;
	padding: 0 0 0 8%;
	justify-content: center;
	width: 35%;
	gap: 20px;

	@media (max-width: 1200px) {
		padding: 0 0px 0 10%;
	}

	@media (max-width: 768px) {
		width: 80%;
		align-items: center;
		padding-top: 30px;
		text-align: center;
		gap: 10px;
	}
`;

const RightSection = styled.div`
	/* Add styling for the right section, like width and padding */
	width: 50%;
	height: 100%;
	display: flex;
	justify-content: center;
	order: 1;

	@media (max-width: 768px) {
		width: 100%;
		padding-left: 30px;
	}
`;

const SmallText = styled.div`
	font-size: 14px;
	color: #333;
	padding: 5px;
`;

const HeaderText = styled.div`
	font-size: 40px;
	font-weight: bold;
	color: #333;

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

const Button = styled.button`
	background-color: #3d75c3;
	color: #fff;
	border: none;
	padding: 20px 30px;
	border-radius: 5px;
	font-size: 12px;
	cursor: pointer;

	@media (max-width: 768px) {
		padding: 10px 20px;
	}
`;

const HeaderImage = styled.img`
	/* Add styling for the header image, like width and height */
	width: 65%;
	height: 100%;

	@media (max-width: 1200px) {
		width: 70%;
	}
`;

const Services = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 60px auto;
	max-width: 1200px;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 5px;
		padding-top: 80px;
	}
`;

const Service = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
	background-color: #fff;
	text-align: center;
	align-items: center;
	justify-content: center;

	@media (max-width: 768px) {
		flex: none;
	}
`;

const ServiceIcon = styled.div`
	margin-bottom: 5px;

	img {
		max-width: 100px;
	}
`;

const ServiceHeader = styled.h2`
	font-size: 24px;
	margin: 5px 0;
	color: #333;
`;

const ServiceDescription = styled.p`
	font-size: 14px;
	text-align: center;
	width: 80%;
	color: #777;
`;

const Features = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 60px auto;
	max-width: 1200px;
	flex-direction: column;
	gap: 40px;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 20px;
	}
`;

const Feature = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
	padding: 20px;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const FeatureLeft = styled.div`
	width: 40%;
`;

const FeatureServices = styled.div`
	width: 60%;
	position: relative;
	display: flex;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		padding-top: 80px;
	}
`;

const FeatureImage = styled.img`
	width: 100%;

	@media (max-width: 768px) {
		position: absolute;
	}
`;

const FeatureImageService = styled.img`
	width: 50%;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const FeatureService = styled.div`
	box-shadow: 2px 4px 20px 0px rgba(0, 60, 179, 0.13);
	border-radius: 4px;
	background: #fff;
	padding: 35px;
	flex-direction: column;
	display: flex;
	gap: 20px;
	justify-content: center;
	flex-shrink: 0;
	position: absolute;
	right: 0px;
	width: 320.86px;
	height: 400.56px;

	.feature-header {
		font-size: 24px;
	}

	.feature-text {
		color: #636571;
		width: 80%;
	}

	@media (max-width: 768px) {
		bottom: -25%;
	}
`;

const FeatureServiceList = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	padding: 0;

	align-items: center;
	gap: 10px;

	@media (max-width: 768px) {
	}
`;

const FeatureServiceListItem = styled.li`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;

	p {
		color: #636571;
	}

	@media (max-width: 768px) {
	}
`;

const FeatureServiceButton = styled.button`
	background-color: #3d75c3;
	color: #fff;
	border: none;
	padding: 20px 30px;
	border-radius: 5px;
	font-size: 12px;
	cursor: pointer;
`;

const FeatureRight = styled.div`
	width: 50%;

	@media (max-width: 768px) {
		width: 80%;
		gap: 15px;
		margin-top: 20px;

		.responsiveText {
			width: 40%;
			margin: 0px 0 20px 0;
		}
	}
`;

const FeatureRightPercentage = styled.div`
	width: 35%;

	@media (max-width: 768px) {
		width: 100%;
		margin-top: 20px;
	}
`;

const FeatureList = styled.ul`
	list-style: none;
	padding: 10px 5px;
	display: flex;
	flex-wrap: wrap;
	gap: 5px;
	width: 100%;
	align-items: center;
	justify-content: space-between;
`;

const CheckItem = styled.li`
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	gap: 5px;
	width: 45%;
	font-size: 16px;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const FeatureButton = styled.button`
	background-color: #3d75c3;
	color: #fff;
	border: none;
	padding: 20px 30px;
	border-radius: 5px;
	font-size: 12px;
	cursor: pointer;

	@media (max-width: 768px) {
		padding: 10px 20px;
	}
`;

const PercentageBarContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	flex-direction: column;
	padding-top: 20px;
`;

const PercentageTitle = styled.div`
	display: flex;
	justify-content: space-between;

	width: 95%;
`;

const Title = styled.h3`
	font-size: 18px;
	margin: 0;
`;

const Percentage = styled.span`
	font-size: 16px;
	color: #000;
`;

const PercentageBar = styled.div`
	width: 100%;
	background-color: #f1f8ff;
	height: 10px;
	border-radius: 10px;
	position: relative;
	margin-left: 10px;
`;

const FilledPercentage = styled.div`
	width: ${(props) => props.percentage}%;
	background-color: #3d75c3;
	height: 100%;
	border-radius: 10px;
`;

const FeatureMembers = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;

	.member-img1 {
		width: 100%;
		height: 100%;
		background-image: url("/imgs/member1.svg");
	}

	.member-img2 {
		width: 100%;
		height: 300px;
		background-size: cover;
		background-image: url("/imgs/member2.svg");
	}

	@media (max-width: 768px) {
		flex-direction: column;
		padding-top: 30%;
		gap: 20px;
		align-items: center;
	}
`;

const FeatureMember = styled.div`
	box-shadow: 2px 4px 20px 0px rgba(0, 60, 179, 0.13);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	padding: 0 0 30px 0;
	width: 30%;

	img {
		width: 100%;
	}

	h3 {
		padding: 0;
	}

	p {
		color: rgba(0, 0, 0, 0.5);
		text-transform: capitalize;
	}

	@media (max-width: 768px) {
		order: 2;
		width: 80%;
	}
`;
const FeatureMembersDescription = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 35%;
	gap: 30px;

	@media (max-width: 1200px) {
	}

	@media (max-width: 768px) {
		width: 80%;
		align-items: center;
		padding-top: 30px;
		text-align: center;
		gap: 10px;
		order: 1;
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

const ReviewsContainer = styled.div`
	background-color: #fff;
	margin: 60px auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px 0;
	text-align: center;
`;

const ReviewsText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	padding: 20px;
`;

const ReviewsBoxes = styled.div`
	display: flex;
	justify-content: space-between;
	width: 77%;
	gap: 1%;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 40px;
		width: 70%;
	}
`;

const ReviewBox = styled.div`
	width: 32%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
	text-align: center;
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

const ReviewName = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	padding: 10px 0;

	img {
		padding: 0 20px 0 0;
	}
`;

const ReviewImage = styled.img`
	width: 100%;
	height: 60%;
	object-fit: cover;
`;

const ReviewDescription = styled.p`
	font-size: 16px;
	box-sizing: border-box;
	color: #636571;
	padding: 0px 10px;
	width: 100%;
	text-align: left;
`;

const ReviewRating = styled.div`
	font-size: 24px;
	color: #3d75c3;
	margin-top: auto;
`;
const ContactContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 60px auto;
	height: 540px;
	background-image: url("/imgs/contactbackground.svg");
	background-size: cover;
	background-color: #f1f8ff;
	@media (max-width: 768px) {
		height: auto;
		flex-direction: column;
	}
`;

const ContactLeftSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 60px auto;
	padding: 0 0 0 8%;
	justify-content: center;
	width: 35%;
	gap: 20px;

	@media (max-width: 1200px) {
		padding: 0 0px 0 10%;
	}

	@media (max-width: 768px) {
		width: 80%;
		padding: 0;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
`;

const ContactRightSection = styled.div`
	/* Add styling for the right section, like width and padding */
	width: 50%;
	height: 100%;
	display: flex;
	justify-content: center;

	@media (max-width: 768px) {
		width: 100%;
		padding-left: 30px;
	}
`;

const ContactText = styled.div`
	font-size: 40px;
	font-weight: bold;
	color: #333;

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

const ContactImage = styled.img`
	/* Add styling for the header image, like width and height */
	width: 65%;
	height: 100%;

	@media (max-width: 1200px) {
		width: 70%;
	}
`;

export default Home;
