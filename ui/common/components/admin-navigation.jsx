import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { FaCog } from '@react-icons/all-files/fa/FaCog';
import { FaFont } from '@react-icons/all-files/fa/FaFont';
import { FaInfoCircle } from '@react-icons/all-files/fa/FaInfoCircle';
import { FaList } from '@react-icons/all-files/fa/FaList';
import { FaPaperclip } from '@react-icons/all-files/fa/FaPaperclip';
import { FaUsers } from '@react-icons/all-files/fa/FaUsers';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function AdminNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { label: 'Settings', path: '/setting', icon: FaCog },
    { label: 'People', path: '/people', icon: FaUsers },
    { label: 'Reports', path: '/admin-reports', icon: FaList },
    { label: 'Attachments', path: '/attachments', icon: FaPaperclip },
    { label: 'Translation', path: '/translation', icon: FaFont },
    { label: 'Version', path: '/information', icon: FaInfoCircle },
  ];

  const isActiveTab = (path) => {
    if (path === '/setting') {
      return (
        location.pathname === '/setting' ||
        location.pathname.startsWith('/setting/')
      );
    }
    if (path === '/people') {
      return (
        location.pathname === '/people' ||
        location.pathname.startsWith('/people/')
      );
    }
    if (path === '/admin-reports') {
      return (
        location.pathname === '/admin-reports' ||
        location.pathname.startsWith('/admin-reports/')
      );
    }
    if (path === '/attachments') {
      return (
        location.pathname === '/attachments' ||
        location.pathname.startsWith('/attachments/')
      );
    }
    if (path === '/translation') {
      return (
        location.pathname === '/translation' ||
        location.pathname.startsWith('/translation/')
      );
    }
    if (path === '/information') {
      return (
        location.pathname === '/information' ||
        location.pathname.startsWith('/information/')
      );
    }
    return location.pathname === path;
  };

  return (
    <Box bg="#2980b9" color="white">
      <Flex minH="50px" px={{ base: 4 }} align="center" gap={6}>
        <Text fontWeight="bold" fontSize="lg">
          Admin Panel
        </Text>
        <Flex gap={2}>
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <Button
                key={tab.path}
                variant="ghost"
                color="white"
                bg={
                  isActiveTab(tab.path)
                    ? 'rgba(255, 255, 255, 0.2)'
                    : 'transparent'
                }
                _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
                size="sm"
                onClick={() => navigate(tab.path)}
                leftIcon={<IconComponent />}
              >
                {tab.label}
              </Button>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
}
