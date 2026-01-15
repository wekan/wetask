import {
  BellIcon,
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Flex,
  IconButton,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
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
          <Text
            fontWeight="bold"
            fontFamily="heading"
            fontSize="lg"
          >
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
          <IconButton
            icon={<BellIcon />}
            aria-label="Notifications"
            variant="ghost"
            color="white"
            _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
            size="sm"
          />
          {userId && (
            <Flex align="center" gap={2}>
              <Avatar size="sm" name={displayName} />
              <Text fontSize="sm" fontWeight={500}>
                {displayName}
              </Text>
            </Flex>
          )}
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
        </Stack>
      </Flex>
    </Box>
  );
}
