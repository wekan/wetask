import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaDatabase, FaShieldAlt, FaUsers } from '@react-icons/all-files';
import { FaBullhorn } from '@react-icons/all-files/fa/FaBullhorn';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { FaEye } from '@react-icons/all-files/fa/FaEye';
import { FaGlobe } from '@react-icons/all-files/fa/FaGlobe';
import { FaObjectGroup } from '@react-icons/all-files/fa/FaObjectGroup';
import { FaSignInAlt } from '@react-icons/all-files/fa/FaSignInAlt';
import { FaUniversalAccess } from '@react-icons/all-files/fa/FaUniversalAccess';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../routes';

export default function SettingPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const settingsMenuItems = [
    { label: 'Registration', path: '/setting/registration', icon: FaSignInAlt },
    { label: 'Email', path: '/setting/email', icon: FaEnvelope },
    { label: 'Accounts', path: '/setting/accounts', icon: FaUsers },
    {
      label: 'Boards visibility',
      path: '/setting/boards-visibility',
      icon: FaEye,
    },
    { label: 'Announcement', path: '/setting/announcement', icon: FaBullhorn },
    {
      label: 'Accessibility',
      path: '/setting/accessibility',
      icon: FaUniversalAccess,
    },
    { label: 'Layout', path: '/setting/layout', icon: FaObjectGroup },
    {
      label: 'Global Webhooks',
      path: '/setting/global-webhooks',
      icon: FaGlobe,
    },
  ];

  const isActiveMenuItem = (path) => location.pathname === path;

  const renderContent = () => {
    // Placeholder content for other settings pages (not /setting)
    const currentMenuItem = settingsMenuItems.find(
      (item) => item.path === location.pathname
    );
    return (
      <Box p={8}>
        <Heading size="lg" mb={4}>
          {currentMenuItem?.label || 'Settings'}
        </Heading>
        <Text color="gray.600">
          Content for {currentMenuItem?.label || 'this settings page'} will be
          implemented here.
        </Text>
      </Box>
    );
  };

  return (
    <Box w="100%">
      {/* Settings Content */}
      <Grid templateColumns="300px 1fr" gap={0} minH="600px">
        {/* Left Sidebar Menu */}
        <GridItem>
          <Box bg="white" minH="100%" borderRadius="md" shadow="sm">
            <List spacing={0}>
              {settingsMenuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <ListItem key={item.path}>
                    <Flex
                      p={4}
                      cursor="pointer"
                      bg={
                        isActiveMenuItem(item.path) ? '#dedede' : 'transparent'
                      }
                      _hover={{ bg: '#f0f0f0' }}
                      onClick={() => navigate(item.path)}
                      align="center"
                      gap={3}
                    >
                      <Icon as={IconComponent} color="black" boxSize={4} />
                      <Text color="black" fontSize="sm" fontWeight="medium">
                        {item.label}
                      </Text>
                    </Flex>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </GridItem>

        {/* Right Content Area */}
        <GridItem>
          <Box bg="#dedede" minH="100%" borderRadius="md" shadow="sm">
            <Box p={8}>
              {/* Show placeholder for /setting route */}
              {location.pathname !== '/setting' ? (
                renderContent()
              ) : (
                <Box p={8}>
                  <Heading size="lg" mb={4}>
                    Settings Overview
                  </Heading>
                  <Text color="gray.600">
                    Select a setting from the menu to configure your
                    preferences.
                  </Text>
                </Box>
              )}
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
