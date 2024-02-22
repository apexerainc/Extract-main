import { Divider, Text } from '@nextui-org/react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Statistics = () => {
   return (
      <>
         <Box
            css={{
               pt: '$20',
               pb: '$16',
               px: '$6',
            }}
         >
            <Flex direction={'column'} align={'center'}>
               <Text
                  h3
                  css={{
                     textAlign: 'center',
                  }}
               >
                  Revolutionizing Claims Processing
               </Text>
               <Text
                  span
                  css={{
                     maxWidth: '800px',
                     textAlign: 'center',
                  }}
               >
                  Extract has been pivotal in transforming the insurance claims cycle, leveraging AI to streamline processes and reduce costs effectively.
               </Text>
            </Flex>
            <Flex
               direction={'row'}
               wrap={'wrap'}
               justify={'center'}
               css={{
                  'gap': '4rem',
                  'pt': '$16',
                  '@sm': {
                     gap: '10rem',
                  },
               }}
            >
               <Flex direction={'column'}>
                  <Text h2 css={{color: '$blue600'}}>
                     40%
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Reduction in Cycle Time
                  </Text>
               </Flex>
               <Flex direction={'column'}>
                  <Text h2 css={{color: '$blue600'}}>
                     25%
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Lower Claims Costs
                  </Text>
               </Flex>
               <Flex direction={'column'}>
                  <Text h2 css={{color: '$blue600'}}>
                     95%
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Customer Satisfaction
                  </Text>
               </Flex>
               <Flex direction={'column'}>
                  <Text h2 css={{color: '$blue600'}}>
                     5000+
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Claims Processed
                  </Text>
               </Flex>
            </Flex>
         </Box>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};