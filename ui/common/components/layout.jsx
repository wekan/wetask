import { Box } from '@chakra-ui/react';
import { useUserId } from 'meteor/react-meteor-accounts';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { routes } from '../../routes';
import { AdminNavigation } from './admin-navigation';
import { Navbar } from './navbar';

import './excalidraw-global.css';

export function Layout({ loggedOnly = true, children }) {
  const userId = useUserId();
  const location = useLocation();

  if (loggedOnly && !userId) {
    return <Navigate to={routes.root} />;
  }

  const showAdminNavigation =
    location.pathname.startsWith('/setting') ||
    [
      '/people',
      '/roles',
      '/admin-reports',
      '/attachments',
      '/translation',
      '/information',
    ].includes(location.pathname);

  return (
    <>
      <Navbar />
      {showAdminNavigation && <AdminNavigation />}
      <Box maxW="6xl" mx="auto">
        {children}
      </Box>
    </>
  );
}
