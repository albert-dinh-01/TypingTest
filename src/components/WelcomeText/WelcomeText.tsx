import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import InfoIcon from "@mui/icons-material/Info";
import Box from "@mui/material/Box";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 500,
	bgcolor: "background.paper",
	borderRadius: "20px",
	boxShadow: 24,
	textAlign: "center",
	padding: "10px",
	heigh: "auto",
	maxHeight: "75vh",
	overflowY: "auto",
	"@media (max-width: 501px)": {
		width: "90vw"
	}
};

const WelcomeText = () => {
	const [openInfo, setOpenInfo] = useState(false);

	const handleOpenInfo = (e: any) => {
		e.preventDefault();
		setOpenInfo(true);
	};
	const handleCloseInfo = (e: any) => {
		e.preventDefault();
		setOpenInfo(false);
	};

	return (
		<div
			className="absolute left-[15%] text-pink-500 h-auto w-auto top-[30px] text-[3rem] sm:top-0 sm:left-[10%] sm:text-[2rem] flex"
			id="welcomeContainer"
		>
			<p className="" id="welcomeText">
				Typing Speed Test
			</p>
			<div className="p-0 m-0" id="info">
				<IconButton
					color="secondary"
					aria-label="add an alarm"
					onClick={(e) => {
						handleOpenInfo(e);
					}}
				>
					<InfoIcon />
				</IconButton>
				<Modal
					open={openInfo}
					onClose={handleCloseInfo}
					aria-labelledby="parent-modal-title"
					aria-describedby="parent-modal-description"
				>
					<Box sx={style}>
						<p className="text-left" id="WhyStringComparison">
							<strong>Why Typing Speed Test?</strong>
						</p>

						<p className="text-left">
							{" "}
							I want to have my own app to test my typing speed.
						</p>
						<br />
						<p className="text-left" id="techUsed">
							<strong>Technologies used</strong>
						</p>
						<ul>
							<li className="text-left" id="front">
								- TypeScript React
							</li>
							<li className="text-left" id="style">
								- Styled with Tailwind CSS
							</li>
							<li className="text-left" id="deployment">
								- Deployed with Netlify
							</li>
						</ul>
					</Box>
				</Modal>
			</div>
		</div>
	);
};

export default WelcomeText;
