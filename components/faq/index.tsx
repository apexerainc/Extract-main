import { Divider, Text } from '@nextui-org/react';
import { BoxIcon } from '../icons/BoxIcon';
import { Flex } from '../styles/flex';

export const Faq = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               gap: '$18',
               px: '$6',
            }}
            direction={'column'}
         >
            <Flex align={'center'} direction={'column'}>
               <Text span css={{ color: '$blue600' }}>
                  FAQ
               </Text>
               <Text h2>You Have Questions?</Text>
               <Text
                  span
                  css={{
                     maxWidth: '700px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  condimentum, nisl ut aliquam lacinia, nisl nisl aliquet
                  aliquet
               </Text>
            </Flex>

            <Flex
               css={{
                  'gap': '$10',
                  '@lg': {
                     px: '$64',
                  },
               }}
               direction={'column'}
            >
               <Flex css={{ gap: '$5' }} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{ gap: '$3' }}>
                     <Text h3>
                        What is EXTRACT?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        EXTRACT is a company that is streamlining the property damage claims industry through Generative AI.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{ gap: '$5' }} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{ gap: '$3' }}>
                     <Text h3>
                        How does EXTRACT use Generative AI?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        EXTRACT utilizes Generative AI to automate and optimize the property damage claims process, reducing manual effort and improving accuracy.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{ gap: '$5' }} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{ gap: '$3' }}>
                     <Text h3>
                        What are the benefits of using EXTRACT's Generative AI?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        By leveraging Generative AI, EXTRACT enables faster claims processing, reduces costs, and enhances customer satisfaction.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{ gap: '$5' }} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{ gap: '$3' }}>
                     <Text h3>
                        How can I get started with EXTRACT?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        To get started with EXTRACT and experience the benefits of Generative AI in property damage claims, visit our website and sign up for an account.
                     </Text>
                  </Flex>
               </Flex>
            </Flex>
         </Flex>

         <Divider
            css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
         />
      </>
   );
};
