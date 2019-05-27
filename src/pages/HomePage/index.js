import React from 'react';
import styled from 'styled-components';

const WelcomeMessage = styled.p`
	font-family: Helvetica;
	font-size: 14px;
	color: #333333;
`;
WelcomeMessage.displayName = 'WelcomeMessage';

const HomePage = () => (
	<WelcomeMessage>
		Welcome to the home page with a really long message
	</WelcomeMessage>
);

export default HomePage;
