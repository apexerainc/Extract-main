import { Divider, Grid, Text } from '@nextui-org/react';
// Assuming AcmeLogo or similar icons represent the company logos. If actual logos are available, they should be imported and used instead.
import { Flex } from '../styles/flex';

export const Trusted = () => {
   return (
      <>
         <Flex
            direction={'column'}
            align={'center'}
            css={{
               'pt': '$20',
               'px': '$6',
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Text h2 css={{textAlign: 'center'}}>
               Trusted by over 10000+ customers
            </Text>
            <Text
               css={{
                  color: '$accents8',
                  maxWidth: '800px',
                  textAlign: 'center',
               }}
               weight="normal"
               size={'$lg'}
            >
               Our innovative solutions are trusted by leading names in the industry, reflecting our commitment to excellence and the trust we've built.
            </Text>
            <Grid.Container
               gap={6}
               alignItems="center"
               justify="center"
               css={{
                  'width': '100%',
                  '@sm': {
                     width: '100%',
                  },
                  '&  span': {
                     whiteSpace: 'pre',
                  },
               }}
            >
               <Grid sm={3} justify="center">
                  <Flex align={'center'} justify={'center'}>
                     {/* Replace AcmeLogo with actual logos if available */}
                     <Text weight={'semibold'} span size={'$lg'}>
                        Sureti
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <Text weight={'semibold'} span size={'$lg'}>
                        Verisk
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <Text weight={'semibold'} span size={'$lg'}>
                        CoreLogic
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <Text weight={'semibold'} span size={'$lg'}>
                        Allstate
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <Text weight={'semibold'} span size={'$lg'}>
                        Nationwide
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <Text weight={'semibold'} span size={'$lg'}>
                        Ricoh
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <Text weight={'semibold'} span size={'$lg'}>
                        Matterport
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <Text weight={'semibold'} span size={'$lg'}>
                        EagleView
                     </Text>
                  </Flex>
               </Grid>
            </Grid.Container>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
