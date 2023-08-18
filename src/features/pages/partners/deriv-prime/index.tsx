import React from 'react'
import WhyDerivPrime from './why-deriv-prime'
import ConnectivityReliabilityType from './connectivity-reliability'
import Layout from 'features/components/templates/layout'
import { SEO } from 'components/containers'
import PaymentAgentAffiliateNav from 'features/components/templates/navigation/payment-agent-nav'
import Footer from 'features/components/templates/footer'
import Flex from 'features/components/atoms/flex-box'

const DerivPrime = () => {
    return (
        <Layout>
            <SEO
                description="_t_With Deriv Prime's liquidity solutions for online trading, you get unbeatable spreads on the commodities, cryptocurrencies, and forex markets._t_"
                title="_t_Liquidity solutions provider | Deriv Prime_t_"
            />
            <PaymentAgentAffiliateNav />
            <WhyDerivPrime />
            <Flex.Box pt="40x" mt="40x">
                <ConnectivityReliabilityType />
            </Flex.Box>

            <Footer />
        </Layout>
    )
}

export default DerivPrime
