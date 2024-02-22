import { Button, Divider, Text } from '@nextui-org/react';
import { Flex } from '../styles/flex';

export const Plans = () => {
  return (
    <>
      <Flex
        css={{ py: '$20', gap: '1rem', px: '$6' }}
        justify={'center'}
        wrap={'wrap'}
        direction={'column'}
        align={'center'}
      >
        <Flex direction={'column'} align={'center'}>
          <Text span css={{ color: '$blue600' }}>
            Exciting Update
          </Text>
          <Text h2>Join Our Waitlist</Text>
          <Text css={{ textAlign: 'center', maxWidth: '600px', mt: '$5' }}>
            We're currently preparing to launch new, innovative plans designed to revolutionize the property damage claims industry with our AI-driven solutions. Sign up today to be the first to know when our plans go live!
          </Text>
        </Flex>

        <Button css={{ mt: '$10' }} auto>
          Sign Up for the Waitlist
        </Button>

        <Text css={{ mt: '$10', textAlign: 'center', maxWidth: '600px' }}>
          By joining our waitlist, you'll get early access to our platform and be able to take advantage of introductory pricing and special offers. Don't miss out on this opportunity to streamline your claims process with Extract.
        </Text>
      </Flex>

      <Divider
        css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
      />
    </>
  );
};
