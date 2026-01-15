import { BellIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { FaArchive } from '@react-icons/all-files/fa/FaArchive';
import { FaCalendar } from '@react-icons/all-files/fa/FaCalendar';
import { FaClone } from '@react-icons/all-files/fa/FaClone';
import { FaCog } from '@react-icons/all-files/fa/FaCog';
import { FaFlag } from '@react-icons/all-files/fa/FaFlag';
import { FaGlobe } from '@react-icons/all-files/fa/FaGlobe';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { FaImage } from '@react-icons/all-files/fa/FaImage';
import { FaKey } from '@react-icons/all-files/fa/FaKey';
import { FaList } from '@react-icons/all-files/fa/FaList';
import { FaLock } from '@react-icons/all-files/fa/FaLock';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';
import { FaSignOutAlt } from '@react-icons/all-files/fa/FaSignOutAlt';
import { FaUser } from '@react-icons/all-files/fa/FaUser';
import { Meteor } from 'meteor/meteor';
import { useUserId } from 'meteor/react-meteor-accounts';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes';

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const userId = useUserId();
  const user = Meteor.user();
  const displayName = user?.profile?.name || user?.username || 'User';
  const { isOpen, onOpen, onClose } = useDisclosure();

  const logout = () => {
    Meteor.logout(() => {
      navigate('/');
    });
  };

  const menuItems = [
    { icon: FaList, label: 'My Cards', path: '/my-cards' },
    { icon: FaCalendar, label: 'Due Cards', path: '/due-cards' },
    { icon: FaSearch, label: 'Search All Boards', path: '/global-search' },
    { icon: FaHome, label: 'All Boards', path: '/' },
    { icon: FaGlobe, label: 'Public', path: '/public' },
    { icon: FaArchive, label: 'Archive', path: '/board-archive' },
    { icon: FaClone, label: 'Templates', path: '/templates' },
    { icon: FaLock, label: 'Admin Panel', path: '/setting' },
  ];

  const profileItems = [
    {
      icon: FaUser,
      label: 'Edit Profile',
      action: () => console.log('Edit Profile'),
    },
    {
      icon: FaCog,
      label: 'Change Settings',
      action: () => console.log('Change Settings'),
    },
    {
      icon: FaImage,
      label: 'Change Avatar',
      action: () => console.log('Change Avatar'),
    },
    {
      icon: FaKey,
      label: 'Change Password',
      action: () => console.log('Change Password'),
    },
    {
      icon: FaFlag,
      label: 'Change Language',
      action: () => console.log('Change Language'),
    },
  ];

  return (
    <Box>
      <Flex
        bg="#2573a7"
        color="white"
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        align="center"
      >
        <Flex flex={{ base: 1 }} justify="start" align="center" gap={4}>
          <Button
            color="white"
            variant="ghost"
            _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
            onClick={() => navigate(routes.tasks)}
          >
            All Boards
          </Button>
          <Text fontWeight="bold" fontFamily="heading" fontSize="lg">
            Simple Tasks
          </Text>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={4}
          align="center"
        >
          <Button
            onClick={toggleColorMode}
            aria-label={colorMode === 'light' ? 'Moon Icon' : 'Sun Icon'}
            variant="ghost"
            color="white"
            _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
            size="sm"
          >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          <IconButton
            icon={<BellIcon />}
            aria-label="Notifications"
            variant="ghost"
            color="white"
            _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
            size="sm"
          />
          {userId && (
            <Flex
              align="center"
              gap={2}
              cursor="pointer"
              onClick={onOpen}
              _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
              p={2}
              borderRadius="md"
            >
              <Avatar size="sm" name={displayName} />
              <Text fontSize="sm" fontWeight={500}>
                {displayName}
              </Text>
            </Flex>
          )}
        </Stack>
      </Flex>

      {/* Member Settings Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay bg="transparent" />
        <ModalContent
          position="absolute"
          top="60px"
          right="20px"
          mt={0}
          boxShadow="lg"
          borderRadius="md"
        >
          <ModalHeader
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pb={2}
          >
            <Text fontSize="md" fontWeight="bold">
              Member Settings
            </Text>
            <ModalCloseButton size="sm" />
          </ModalHeader>
          <ModalBody pb={4} pt={0}>
            <VStack spacing={0} align="stretch">
              {/* Main Menu Items */}
              {menuItems.map((item, _index) => {
                const IconComponent = item.icon;
                return (
                  <Button
                    key={item.path}
                    variant="ghost"
                    justifyContent="flex-start"
                    leftIcon={<IconComponent />}
                    onClick={() => {
                      navigate(item.path);
                      onClose();
                    }}
                    w="full"
                    borderRadius={0}
                    py={2}
                    px={4}
                    h="auto"
                    fontSize="sm"
                  >
                    {item.label}
                  </Button>
                );
              })}

              <Divider my={1} />

              {/* Profile Items */}
              {profileItems.map((item, _index) => {
                const IconComponent = item.icon;
                return (
                  <Button
                    key={item.label}
                    variant="ghost"
                    justifyContent="flex-start"
                    leftIcon={<IconComponent />}
                    onClick={() => {
                      item.action();
                      onClose();
                    }}
                    w="full"
                    borderRadius={0}
                    py={2}
                    px={4}
                    h="auto"
                    fontSize="sm"
                  >
                    {item.label}
                  </Button>
                );
              })}

              <Divider my={1} />

              {/* Logout */}
              <Button
                variant="ghost"
                justifyContent="flex-start"
                leftIcon={<FaSignOutAlt />}
                onClick={logout}
                w="full"
                borderRadius={0}
                py={2}
                px={4}
                h="auto"
                fontSize="sm"
              >
                Log Out
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
