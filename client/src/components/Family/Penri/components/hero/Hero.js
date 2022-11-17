import React from 'react';
import { Button, NoRightPaddingContainer } from '../../styles/Common.style';
import { H1, Para } from '../../styles/Typography.style';
import {
	HeroWrapper,
	HeroContent,
	HeroImage,
	HeroContentWrapper,
} from './Hero.style';
import HeroImg from '../../images/image-mockups.png';

const Hero = () => {
	return (
		<div>
			<NoRightPaddingContainer>
				<HeroWrapper>
					<HeroContent>
						<HeroContentWrapper>
				<H1>Welcome to  Penri family</H1>
							<Para>
			Located near penri hostels... 
							</Para>
							{/* <Button>Request Invite</Button> */}
						</HeroContentWrapper>
					</HeroContent>
					<HeroImage>
						<img src={HeroImg} alt='hero' />
					</HeroImage>
				</HeroWrapper>
			</NoRightPaddingContainer>
		</div>
	);
};

export default Hero;
