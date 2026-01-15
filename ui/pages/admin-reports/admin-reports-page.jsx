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
import { FaExclamationTriangle } from '@react-icons/all-files/fa/FaExclamationTriangle';
import { FaPaperclip } from '@react-icons/all-files/fa/FaPaperclip';
import { FaMagic } from '@react-icons/all-files/fa/FaMagic';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../routes';

export default function AdminReportsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const adminReportsMenuItems = [
    { label: 'Broken Cards', path: '/admin-reports/broken-cards', icon: FaExclamationTriangle },
    { label: 'Files Report', path: '/admin-reports/files-report', icon: FaPaperclip },
    { label: 'Rules Report', path: '/admin-reports/rules-report', icon: FaMagic },
    { label: 'Boards Report', path: '/admin-reports/boards-report', icon: FaMagic },
    { label: 'Cards Report', path: '/admin-reports/cards-report', icon: FaMagic },
  ];

  const isActiveMenuItem = (path) => location.pathname === path;

  const renderContent = () => {
    // Placeholder content for other admin reports pages (not /admin-reports)
    const currentMenuItem = adminReportsMenuItems.find(
      (item) => item.path === location.pathname
    );
    return (
      <Box p={8}>
        <Heading size="lg" mb={4}>
          {currentMenuItem?.label || 'Admin Reports'}
        </Heading>
        <Text color="gray.600">
          Content for {currentMenuItem?.label || 'this admin reports page'} will be
          implemented here.
        </Text>
      </Box>
    );
  };

  return (
    <Box w="100%">
      {/* Admin Reports Content */}
      <Grid
        templateColumns="minmax(180px, 250px) 1fr"
        gap={0}
        h="calc(100vh - 110px)"
      >
        {/* Left Sidebar Menu */}
        <GridItem>
          <Box bg="white" h="100%" borderRadius="md" shadow="sm">
            <List spacing={0}>
              {adminReportsMenuItems.map((item) => {
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
              {/* Show placeholder for /admin-reports route */}
              {location.pathname !== '/admin-reports' ? (
                renderContent()
              ) : (
                <Box p={8}>
                  <Heading size="lg" mb={4}>
                    Admin Reports Overview
                  </Heading>
                  <Text color="gray.600">
                    Select a report from the menu to view administrative data.
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