import React from 'react'
import * as styles from './meet-us-there.module.scss'
import { expo_cards } from './data'
import Typography from 'features/components/atoms/typography'
import FlexBox from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'
import Link from 'features/components/atoms/link'
import Image from 'features/components/atoms/image'

const MeetUsThere = () => {
    return (
        <FlexBox.Box
            container={'fluid'}
            direction={'col'}
            padding_inline={'4x'}
            pt={'20x'}
            md={{ padding_inline: '0x', padding_block: '40x' }}
        >
            <FlexBox.Box
                direction={'col'}
                margin_block={'40x'}
                md={{ justify: 'center', margin_block: '40x' }}
            >
                <Typography.Heading align={'center'}>
                    <Localize translate_text={'_t_Meet us there_t_'} />
                </Typography.Heading>
                <FlexBox.Box
                    direction={'col'}
                    align={'center'}
                    wrap="wrap"
                    lg={{ direction: 'row', gap: '12x', justify: 'center', mt: '20x' }}
                >
                    {expo_cards.map((card) => {
                        return (
                            <>
                                <Link
                                    style={{ textDecoration: 'none' }}
                                    url={{
                                        type: 'non-company',
                                        href: `${card.link}`,
                                        target: '_blank',
                                    }}
                                >
                                    <FlexBox.Box
                                        key={card.title}
                                        className={styles.styled_card}
                                        direction={'col'}
                                        justify={'start'}
                                        align={'start'}
                                        radius={'8x'}
                                        mt={'12x'}
                                        lg={{ mt: '0x' }}
                                    >
                                        <Image
                                            className={styles.image}
                                            src={card.image}
                                            height={48}
                                            alt={'_t_Easy start_t_'}
                                        />
                                        <FlexBox.Box
                                            padding="8x"
                                            direction={'col'}
                                            md={{ padding: '12x' }}
                                        >
                                            <Typography.Paragraph
                                                size={'xlarge'}
                                                weight={'bold'}
                                                mb={'4x'}
                                            >
                                                <Localize translate_text={card.title} />
                                            </Typography.Paragraph>
                                            <Typography.Paragraph size="small">
                                                <Localize translate_text={card.date} />
                                            </Typography.Paragraph>
                                        </FlexBox.Box>
                                    </FlexBox.Box>
                                </Link>
                            </>
                        )
                    })}
                </FlexBox.Box>
            </FlexBox.Box>
        </FlexBox.Box>
    )
}

export default MeetUsThere
