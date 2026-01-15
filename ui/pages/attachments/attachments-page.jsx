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
import { FaArrowRight } from '@react-icons/all-files/fa/FaArrowRight';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../routes';

export default function AttachmentsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const attachmentsMenuItems = [
    { label: 'Move Attachment', path: '/attachments/move-attachments', icon: FaArrowRight },
  ];

  const isActiveMenuItem = (path) => location.pathname === path;

  const renderContent = () => {
    // Placeholder content for other attachments pages (not /attachments)
    const currentMenuItem = attachmentsMenuItems.find(
      (item) => item.path === location.pathname
    );
    return (
      <Box p={8}>
        <Heading size="lg" mb={4}>
          {currentMenuItem?.label || 'Attachments'}
        </Heading>
        <Text color="gray.600">
          Content for {currentMenuItem?.label || 'this attachments page'} will be
          implemented here.
        </Text>
      </Box>
    );
  };

  return (
    <Box w="100%">
      {/* Attachments Content */}
      <Grid
        templateColumns="minmax(180px, 250px) 1fr"
        gap={0}
        h="calc(100vh - 110px)"
      >
        {/* Left Sidebar Menu */}
        <GridItem>
          <Box bg="white" h="100%" borderRadius="md" shadow="sm">
            <List spacing={0}>
              {attachmentsMenuItems.map((item) => {
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
              {/* Show placeholder for /attachments route */}
              {location.pathname !== '/attachments' ? (
                renderContent()
              ) : (
                <Box p={8}>
                  <Heading size="lg" mb={4}>
                    Attachments Overview
                  </Heading>
                  <Text color="gray.600">
                    Select an attachment action from the menu to manage attachments.
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