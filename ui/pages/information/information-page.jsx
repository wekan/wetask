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
import { FaInfoCircle } from '@react-icons/all-files/fa/FaInfoCircle';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../routes';

export default function InformationPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const informationMenuItems = [
    { label: 'Version', path: '/information/information-display', icon: FaInfoCircle },
  ];

  const isActiveMenuItem = (path) => location.pathname === path;

  const renderContent = () => {
    // Placeholder content for other information pages (not /information)
    const currentMenuItem = informationMenuItems.find(
      (item) => item.path === location.pathname
    );
    return (
      <Box p={8}>
        <Heading size="lg" mb={4}>
          {currentMenuItem?.label || 'Information'}
        </Heading>
        <Text color="gray.600">
          Content for {currentMenuItem?.label || 'this information page'} will be
          implemented here.
        </Text>
      </Box>
    );
  };

  return (
    <Box w="100%">
      {/* Information Content */}
      <Grid
        templateColumns="minmax(180px, 250px) 1fr"
        gap={0}
        h="calc(100vh - 110px)"
      >
        {/* Left Sidebar Menu */}
        <GridItem>
          <Box bg="white" h="100%" borderRadius="md" shadow="sm">
            <List spacing={0}>
              {informationMenuItems.map((item) => {
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
              {/* Show placeholder for /information route */}
              {location.pathname !== '/information' ? (
                renderContent()
              ) : (
                <Box p={8}>
                  <Heading size="lg" mb={4}>
                    Information Overview
                  </Heading>
                  <Text color="gray.600">
                    Select an information option from the menu to view details.
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