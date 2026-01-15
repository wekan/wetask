import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  Card,
  CardBody,
  CardHeader,
  Icon,
  Flex,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { FaUsers, FaCog, FaDatabase, FaShieldAlt } from '@react-icons/all-files';
import { FaSignInAlt } from '@react-icons/all-files/fa/FaSignInAlt';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { FaEye } from '@react-icons/all-files/fa/FaEye';
import { FaBullhorn } from '@react-icons/all-files/fa/FaBullhorn';
import { FaUniversalAccess } from '@react-icons/all-files/fa/FaUniversalAccess';
import { FaObjectGroup } from '@react-icons/all-files/fa/FaObjectGroup';
import { FaGlobe } from '@react-icons/all-files/fa/FaGlobe';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { routes } from '../../routes';

export default function SettingPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const adminSections = [
    {
      title: 'User Management',
      description: 'Manage users, roles, and permissions',
      icon: FaUsers,
      action: () => console.log('User Management clicked'),
      buttons: [
        { label: 'Organizations', action: () => console.log('Organizations clicked') },
        { label: 'Teams', action: () => console.log('Teams clicked') },
        { label: 'People', action: () => console.log('People clicked') },
        { label: 'Roles', action: () => navigate(routes.roles) },
        { label: 'Locked Users', action: () => console.log('Locked Users clicked') },
      ],
    },
    {
      title: 'System Settings',
      description: 'Configure system-wide settings',
      icon: FaCog,
      action: () => console.log('System Settings clicked'),
    },
    {
      title: 'Database',
      description: 'Database management and backups',
      icon: FaDatabase,
      action: () => console.log('Database clicked'),
    },
    {
      title: 'Security',
      description: 'Security settings and audit logs',
      icon: FaShieldAlt,
      action: () => console.log('Security clicked'),
    },
  ];

  const settingsMenuItems = [
    { label: 'Registration', path: '/setting/registration', icon: FaSignInAlt },
    { label: 'Email', path: '/setting/email', icon: FaEnvelope },
    { label: 'Accounts', path: '/setting/accounts', icon: FaUsers },
    { label: 'Boards visibility', path: '/setting/boards-visibility', icon: FaEye },
    { label: 'Announcement', path: '/setting/announcement', icon: FaBullhorn },
    { label: 'Accessibility', path: '/setting/accessibility', icon: FaUniversalAccess },
    { label: 'Layout', path: '/setting/layout', icon: FaObjectGroup },
    { label: 'Global Webhooks', path: '/setting/global-webhooks', icon: FaGlobe },
  ];

  const isActiveMenuItem = (path) => location.pathname === path;

  const renderContent = () => {
    // Default content for /setting
    if (location.pathname === '/setting') {
      return (
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
          {adminSections.map((section, index) => (
            <GridItem key={index}>
              <Card
                _hover={{
                  transform: 'translateY(-2px)',
                  shadow: 'lg',
                }}
                transition="all 0.2s"
                cursor="pointer"
                onClick={section.action}
              >
                <CardHeader>
                  <VStack spacing={3}>
                    <Icon as={section.icon} w={8} h={8} color="blue.500" />
                    <Heading size="md" textAlign="center">
                      {section.title}
                    </Heading>
                  </VStack>
                </CardHeader>
                <CardBody>
                  {section.buttons ? (
                    <VStack spacing={2}>
                      {section.buttons.map((button, btnIndex) => (
                        <Button
                          key={btnIndex}
                          size="sm"
                          variant="outline"
                          colorScheme="blue"
                          onClick={(e) => {
                            e.stopPropagation();
                            button.action();
                          }}
                          w="full"
                        >
                          {button.label}
                        </Button>
                      ))}
                    </VStack>
                  ) : (
                    <Text textAlign="center" color="gray.600">
                      {section.description}
                    </Text>
                  )}
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </Grid>
      );
    }

    // Placeholder content for other settings pages
    const currentMenuItem = settingsMenuItems.find(item => item.path === location.pathname);
    return (
      <Box p={8}>
        <Heading size="lg" mb={4}>
          {currentMenuItem?.label || 'Settings'}
        </Heading>
        <Text color="gray.600">
          Content for {currentMenuItem?.label || 'this settings page'} will be implemented here.
        </Text>
      </Box>
    );
  };

  return (
    <Container maxW="7xl" py={8}>
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
                      bg={isActiveMenuItem(item.path) ? '#dedede' : 'transparent'}
                      _hover={{ bg: '#f0f0f0' }}
                      onClick={() => navigate(item.path)}
                      align="center"
                      gap={3}
                    >
                      <Icon as={IconComponent} color="#dedede" boxSize={4} />
                      <Text color="#dedede" fontSize="sm" fontWeight="medium">
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
              {renderContent()}
            </Box>
          </Box>
        </GridItem>
      </Grid>

      <Box textAlign="center" pt={8}>
        <Button
          colorScheme="blue"
          variant="outline"
          onClick={() => navigate(routes.tasks)}
        >
          Back to Tasks
        </Button>
      </Box>
    </Container>
  );
}