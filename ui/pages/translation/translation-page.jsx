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
import { FaFont } from '@react-icons/all-files/fa/FaFont';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../routes';

export default function TranslationPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const translationMenuItems = [
    { label: 'Translation', path: '/translation/translation-setting', icon: FaFont },
  ];

  const isActiveMenuItem = (path) => location.pathname === path;

  const renderContent = () => {
    // Placeholder content for other translation pages (not /translation)
    const currentMenuItem = translationMenuItems.find(
      (item) => item.path === location.pathname
    );
    return (
      <Box p={8}>
        <Heading size="lg" mb={4}>
          {currentMenuItem?.label || 'Translation'}
        </Heading>
        <Text color="gray.600">
          Content for {currentMenuItem?.label || 'this translation page'} will be
          implemented here.
        </Text>
      </Box>
    );
  };

  return (
    <Box w="100%">
      {/* Translation Content */}
      <Grid
        templateColumns="minmax(180px, 250px) 1fr"
        gap={0}
        h="calc(100vh - 110px)"
      >
        {/* Left Sidebar Menu */}
        <GridItem>
          <Box bg="white" h="100%" borderRadius="md" shadow="sm">
            <List spacing={0}>
              {translationMenuItems.map((item) => {
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
              {/* Show placeholder for /translation route */}
              {location.pathname !== '/translation' ? (
                renderContent()
              ) : (
                <Box p={8}>
                  <Heading size="lg" mb={4}>
                    Translation Overview
                  </Heading>
                  <Text color="gray.600">
                    Select a translation option from the menu to manage translations.
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