import React from 'react';
import { Container } from '../../styles/Common.style';
import { H2, H3, Para } from '../../styles/Typography.style';
import { InfoCard, InfoGrid, InfoHeader, InfoWrapper } from './Info.style';
import BankingIcon from '../../images/icon-online.svg';
import BudgetingIcomn from '../../images/icon-budgeting.svg';
import Onboarding from '../../images/icon-onboarding.svg';
import Api from '../../images/icon-api.svg';
// import profile from '../../images/myprofile.png'
// import samkam from '../../images/samkam.jpg'
const Info = () => {
	return (
		<div>
			<InfoWrapper>
				<Container>
					<InfoHeader>
						<H2 style={{marginTop:'20px'}}>
							We always love showing brotherly and sister love
						</H2>
						<Para>
							{' '}
							We do have our sunday meeting at 2pm then a weekly meetup as from 4pm	
						</Para>
					</InfoHeader>
					<p style={{
					textAlign:'center',
					fontSize:'20px',
					fontWeight:'bolder',
					marginTop:'20px'}}>
					 OUR LEADERS</p>
					<InfoGrid>
						<InfoCard>
							<img src={Api} alt='' />
							<H3>Elder Samuel Omweri</H3>
							<p>Elder in charge</p>
							<Para>
								Am the elder in charge feel much welcome
							</Para>
						</InfoCard>
						<InfoCard>
							<img src={BudgetingIcomn} alt='' />
							<H3>Sister Viclkine</H3>
							<p>Family leader</p>
							<Para>
							Come lets commune together
							</Para>
						</InfoCard>
						<InfoCard>
							<img src={''} alt='' />
							<H3>Jacob</H3>
							<p>Family leader</p>
							<Para>
								Welcome to upperkutus family
							</Para>
						</InfoCard>
						<InfoCard>
							<img src={'dfdf'} alt='' />
							<H3>Samuel Kamotho</H3>
							<p>Family leader</p>
							<Para>
							A friend of upper kutus
							</Para>
						</InfoCard>
					</InfoGrid>
				</Container>
			</InfoWrapper>
		</div>
	);
};

export default Info;
