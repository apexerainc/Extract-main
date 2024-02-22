import { Button, Divider, Text } from '@nextui-org/react';
import { BoxIcon } from '../icons/BoxIcon';
import { FeatureIcon } from '../icons/FeatureIcon';
import { Flex } from '../styles/flex';

export const Features2 = () => {
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
            }}
         >
            <FeatureIcon />
            <Text h3 css={{ textAlign: 'center' }}>
               Advanced Room and Damage Classification
            </Text>
            <Text h4 css={{ textAlign: 'center' }}>
              Our AI-driven solution revolutionizes the property damage claims industry by 
              accurately classifying rooms and identifying damages with unparalleled precision. 
              This enables a streamlined claims process, reducing the time and effort required 
              to assess claims.
            </Text>
            <Divider />
            <BoxIcon />
            <Text h3 css={{ textAlign: 'center' }}>
               Instant Contents Lists
            </Text>
            <Text h4 css={{ textAlign: 'center' }}>
              With Extract, you get instant contents lists for each classified room, 
              facilitating quicker and more accurate insurance claims settlements. 
              Our technology ensures that no detail is overlooked, enhancing the 
              efficiency and accuracy of damage assessments.
            </Text>
            <Button auto flat css={{ marginTop: '2rem' }}>
               Learn More
            </Button>
         </Flex>
      </>
   );
};