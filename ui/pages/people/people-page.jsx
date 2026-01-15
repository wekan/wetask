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
import { FaLock } from '@react-icons/all-files/fa/FaLock';
import { FaSitemap } from '@react-icons/all-files/fa/FaSitemap';
import { FaUser } from '@react-icons/all-files/fa/FaUser';
import { FaUsers } from '@react-icons/all-files/fa/FaUsers';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../routes';

export default function PeoplePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const peopleMenuItems = [
    { label: 'Organizations', path: '/people/organizations', icon: FaSitemap },
    { label: 'Teams', path: '/people/teams', icon: FaUsers },
    { label: 'People', path: '/people/people', icon: FaUser },
    { label: 'Locked Users', path: '/people/locked-users', icon: FaLock },
  ];

  const isActiveMenuItem = (path) => location.pathname === path;

  const renderContent = () => {
    // Placeholder content for other people pages
    const currentMenuItem = peopleMenuItems.find(
      (item) => item.path === location.pathname
    );
    return (
      <Box p={8}>
        <Heading size="lg" mb={4}>
          {currentMenuItem?.label || 'People Management'}
        </Heading>
        <Text color="gray.600">
          Content for {currentMenuItem?.label || 'this people management page'}{' '}
          will be implemented here.
        </Text>
      </Box>
    );
  };

  return (
    <Box w="100%">
      {/* People Content */}
      <Grid
        templateColumns="minmax(180px, 250px) 1fr"
        gap={0}
        h="calc(100vh - 110px)"
      >
        {/* Left Sidebar Menu */}
        <GridItem>
          <Box bg="white" h="100%" borderRadius="md" shadow="sm">
            <List spacing={0}>
              {peopleMenuItems.map((item) => {
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
          <Box bg="#dedede" h="100%" borderRadius="md" shadow="sm">
            <Box p={8}>
              {/* Show placeholder for /people route */}
              {location.pathname !== '/people' ? (
                renderContent()
              ) : (
                <Box p={8}>
                  <Heading size="lg" mb={4}>
                    People Management Overview
                  </Heading>
                  <Text color="gray.600">
                    Select a category from the menu to manage organizations,
                    teams, and people.
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
