import { Card, Divider, Text } from '@nextui-org/react';
import { BoxIcon } from '../icons/BoxIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Features3 = () => {
   return (
      <>
         <Box
            css={{
               px: '$6',
               pb: '$14',
            }}
         >
            <Flex
               direction={'column'}
               justify={'center'}
               align={'center'}
               css={{
                  pt: '$20',
               }}
            >
               <Text span css={{color: '$blue600'}}>
                  Streamlined Policy Understanding
               </Text>
               <Text h3>Accelerating Claims with AI</Text>
               <Text
                  span
                  css={{
                     maxWidth: '800px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
                  Extract utilizes cutting-edge AI to transform policy document analysis, 
                  ensuring rapid and accurate claims processing. Our technology simplifies 
                  the complexity of insurance policies, enabling quicker claims cycles and 
                  enhancing customer satisfaction.
               </Text>
            </Flex>
            <Flex
               align={'center'}
               justify={'center'}
               wrap={'wrap'}
               css={{
                  gap: '1rem',
                  pt: '$14',
               }}
            >
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>Efficient Policy Analysis</Text>
                           <Text span>
                              Our AI-driven approach deciphers complex policy documents, 
                              extracting key details swiftly to streamline the claims process.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>Quick Claims Resolution</Text>
                           <Text span>
                              By accelerating policy understanding, Extract significantly 
                              reduces the time to settle claims, improving efficiency and 
                              policyholder satisfaction.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
            </Flex>
            <Flex
               align={'center'}
               wrap={'wrap'}
               justify={'center'}
               css={{
                  gap: '1rem',
                  pt: '$8',
               }}
            >
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>Advanced AI Integration</Text>
                           <Text span>
                              Leveraging the latest in AI technology, we ensure that your 
                              claims processing is as efficient and accurate as possible.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>Enhanced Customer Experience</Text>
                           <Text span>
                              Streamlined processes lead to faster claims settlement, 
                              directly impacting and improving the customer journey.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
            </Flex>
         </Box>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
