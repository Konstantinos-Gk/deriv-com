import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { useWebsiteStatus } from '../../components/hooks/use-website-status'
import { isEUAndNotUK } from '../../common/country-base'
import { Container, Flex } from 'components/containers'
import { Header, QueryImage, Text } from 'components/elements'
import { LocalizedLink } from 'components/localization'
import device from 'themes/device.js'
import Arrow from 'images/svg/trade-types/arrow-right.svg'
import {
    move_to_dmt5_is_eu_url,
    move_to_dmt5_url,
    move_to_dtrader_is_eu_url,
    move_to_dtrader_url,
} from 'common/constants'

const query = graphql`
    query {
        deriv_mt5_fav: file(relativePath: { eq: "binary-to-deriv/deriv-mt5-favorite.png" }) {
            ...fadeIn
        }
        dtrader_fav: file(relativePath: { eq: "binary-to-deriv/dtrader-favorite.png" }) {
            ...fadeIn
        }
    }
`
const StyledContainer = styled(Container)`
    @media ${device.tabletS} {
        display: none;
    }
`
const ImageWrapper = styled(Flex)`
    max-width: 384px;
    position: relative;

    :first-child {
        margin-right: 24px;
    }

    @media ${device.tabletL} {
        margin: 0 auto;

        :first-child {
            margin: 0 auto 44px;
        }
    }
`
const LearnMore = styled(LocalizedLink)`
    width: 131px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    background: #ffffff;
    border-radius: 100px;
    position: absolute;
    bottom: -8%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(0 0 24px rgba(0, 0, 0, 0.08)) drop-shadow(0 24px 24px rgba(0, 0, 0, 0.08));
    text-decoration: none;

    ${Text} {
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        color: var(--color-red);
    }
`
const ArrowImg = styled.img`
    margin-left: 8px;
    width: 16px;
    height: 16px;
`

const Favorite = () => {
    const data = useStaticQuery(query)

    const { 0: website_status, 2: is_loading } = useWebsiteStatus()
    const current_client_country = website_status?.clients_country

    const [dmt5_url, setDmt5Url] = useState(move_to_dmt5_url)
    const [dtrader_url, setDtrader] = useState(move_to_dtrader_url)

    useEffect(() => {
        if (isEUAndNotUK(current_client_country)) {
            setDmt5Url(move_to_dmt5_is_eu_url)
            setDtrader(move_to_dtrader_is_eu_url)
        }
    }, [website_status])

    return (
        <StyledContainer>
            <Flex fd="column" mb="120px" tabletL={{ mb: '60px' }}>
                <Header type="heading-2" align="center" mb="40px" tabletL={{ mb: '24px' }}>
                    Access your favourite platforms in one place
                </Header>
                <Flex tabletL={{ fd: 'column' }}>
                    <ImageWrapper>
                        <QueryImage
                            data={data['deriv_mt5_fav']}
                            alt="Deriv MT5 favorite"
                            width="100%"
                        />
                        <LearnMore to={dmt5_url} disabled={is_loading}>
                            <Text>Learn more</Text>
                            <ArrowImg src={Arrow} alt="arrow" />
                        </LearnMore>
                    </ImageWrapper>
                    <ImageWrapper>
                        <QueryImage
                            data={data['dtrader_fav']}
                            alt="Dtrader favorite"
                            width="100%"
                        />
                        <LearnMore to={dtrader_url} disabled={is_loading}>
                            <Text>Learn more</Text>
                            <ArrowImg src={Arrow} alt="arrow" />
                        </LearnMore>
                    </ImageWrapper>
                </Flex>
            </Flex>
        </StyledContainer>
    )
}

export default Favorite
