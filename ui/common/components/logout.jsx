import {
  Avatar,
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { Meteor } from 'meteor/meteor';
import { useUserId } from 'meteor/react-meteor-accounts';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Logout() {
  const userId = useUserId();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const user = Meteor.user();
  const displayName = user?.profile?.name || user?.username || 'User';

  const logout = () => {
    Meteor.logout(() => {
      navigate('/');
    });
  };

  const goToAdminPanel = () => {
    onClose();
    navigate('/setting');
  };

  if (!userId) return null;

  return (
    <>
      <Flex
        align="center"
        gap={2}
        cursor="pointer"
        onClick={onOpen}
        _hover={{ opacity: 0.8 }}
        p={2}
        borderRadius="md"
      >
        <Avatar size="sm" name={displayName} />
        <Text fontSize="sm" fontWeight={500}>
          {displayName}
        </Text>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Member Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box mb={4}>
              <Flex align="center" gap={3} mb={4}>
                <Avatar size="md" name={displayName} />
                <Box>
                  <Text fontWeight="bold">{displayName}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {user?.emails?.[0]?.address || user?.username}
                  </Text>
                </Box>
              </Flex>
            </Box>
            <VStack spacing={3}>
              <Button
                colorScheme="blue"
                variant="solid"
                onClick={goToAdminPanel}
                w="full"
              >
                Admin Panel
              </Button>
              <Button
                colorScheme="red"
                variant="outline"
                onClick={logout}
                w="full"
              >
                Log Out
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
