import { Divider, Text } from '@nextui-org/react';
import { BoxIcon } from '../icons/BoxIcon';
import { FeatureIcon } from '../icons/FeatureIcon';
import { Flex } from '../styles/flex';

export const Features1 = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '$20',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',
               '@sm': {
                  justifyContent: 'space-around',
                  px: '$32',
                  flexDirection: 'row',
               },
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Flex direction="column">
               <Text span css={{color: '$blue600'}}>
                  Image analysis of damage and recommended steps to repair
               </Text>
               <Text h3>Changing How Claims Are Processed</Text>
               <Text
                  span
                  css={{
                     maxWidth: '400px',
                     color: '$accents8',
                  }}
               >
                  By leveraging emerging AI capabilities Extract is providing Contractors, Carriers
                  and Policyholders A Change To The Way Claims Are Processed. Making It Faster, 
                  Simpler and More Accurate.
               </Text>

               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                        Intatnt Property Insights 
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        From Damage detection to repairs recomendations and everything
                        in between. Our generative AI take claim images and turns
                        them into actionable insughts
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                        Extract Key Details
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Filter through all of the noise by only extracting 
                        the most relavent information to the loss. By 
                        utilizing AI technologies we make understanding
                        the claim simple. 
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                        Document Understanding 
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        From the moment a claim is filed, know
                        what is covered and what is not through 
                        our FNOL document processing capabilities.  
                     </Text>
                  </Flex>
               </Flex>
            </Flex>
            <Flex align={'center'}>
               <FeatureIcon />
            </Flex>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
