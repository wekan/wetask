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
} from '@chakra-ui/react';
import { FaUsers, FaCog, FaDatabase, FaShieldAlt } from '@react-icons/all-files';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes';

export default function SettingPage() {
  const navigate = useNavigate();

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

  return (
    <Container maxW="6xl" py={8}>
      <Stack spacing={8}>
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

        <Box textAlign="center" pt={8}>
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={() => navigate(routes.tasks)}
          >
            Back to Tasks
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}