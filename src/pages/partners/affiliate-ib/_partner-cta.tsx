import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import { LinkButton } from 'components/form'
import { LiveChatLinkText } from 'components/elements'
import { localize } from 'components/localization'
import { affiliate_signup_url } from 'common/constants'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-black-3);

    ${Container} {
        @media ${device.tabletL} {
            justify-content: center;
            flex-direction: column;

            div:last-child {
                margin-top: 3.2rem;
            }
        }

        ${Flex} {
            max-width: 58.8rem;
        }
    }
`

const RedButton = styled(LinkButton)`
    border-radius: 4px;
    padding-top: 0.5rem;
    height: 32px;
    @media ${device.tabletL} {
        padding-top: 1rem;
        width: 100%;
    }
`

const PartnerCTA = () => {
    return (
        <StyledSection padding="4rem 0">
            <Container>
                <Flex direction="column" ai="center" jc="space-between">
                    <Header as="h4" type="sub-section-title" align="center" color="white">
                        {localize('Got more questions?')}
                    </Header>
                    <Text align="center" color="white" mt="0.8rem">
                        {localize('The Deriv affiliate management team is here to help.')}
                    </Text>
                    <LiveChatLinkText text="Contact us via live chat" weight="bold" />
                </Flex>
                <Flex direction="column" ai="center">
                    <Header as="h4" type="sub-section-title" align="center" color="white">
                        {localize(
                            'Enjoy generous commissions and all the other benefits of being a Deriv partner',
                        )}
                    </Header>
                    <RedButton
                        id="dm-cta-affiliate-signup"
                        mt="2rem"
                        to={affiliate_signup_url}
                        external
                        target="_blank"
                        type="affiliate_sign_up"
                        secondary
                    >
                        {localize('Sign up')}
                    </RedButton>
                </Flex>
            </Container>
        </StyledSection>
    )
}

export default PartnerCTA
