import React from 'react';
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';
import { Layout } from './common/components/layout';

export const routes = {
  root: '/',
  notFound: '*',
  tasks: '/tasks',
  setting: '/setting',
  roles: '/roles',
  people: '/people',
  adminReports: '/admin-reports',
  attachments: '/attachments',
  translation: '/translation',
  information: '/information',
  registration: '/setting/registration',
  email: '/setting/email',
  accounts: '/setting/accounts',
  boardsVisibility: '/setting/boards-visibility',
  announcement: '/setting/announcement',
  accessibility: '/setting/accessibility',
  layout: '/setting/layout',
  globalWebhooks: '/setting/global-webhooks',
  myCards: '/my-cards',
  dueCards: '/due-cards',
  globalSearch: '/global-search',
  public: '/public',
  boardArchive: '/board-archive',
  templates: '/templates',
};

const SignInPage = React.lazy(() => import('./pages/auth/sign-in-page'));
const NotFoundPage = React.lazy(
  () => import('./pages/not-found/not-found-page')
);
const TasksPage = React.lazy(() => import('./pages/tasks/tasks-page'));
const SettingPage = React.lazy(() => import('./pages/setting/setting-page'));
import { RolesPage } from './pages/roles/roles-page';

export function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route
          element={
            <Layout loggedOnly={false}>
              <SignInPage />
            </Layout>
          }
          index
        />
        <Route
          element={
            <Layout>
              <TasksPage />
            </Layout>
          }
          path={routes.tasks}
        />
        <Route
          element={
            <Layout>
              <SettingPage />
            </Layout>
          }
          path={routes.setting}
        />
        <Route
          element={
            <Layout>
              <RolesPage />
            </Layout>
          }
          path={routes.roles}
        />
        <Route
          element={
            <Layout>
              <SettingPage />
            </Layout>
          }
          path={routes.people}
        />
        <Route
          element={
            <Layout>
              <SettingPage />
            </Layout>
          }
          path={routes.adminReports}
        />
        <Route
          element={
            <Layout>
              <SettingPage />
            </Layout>
          }
          path={routes.attachments}
        />
        <Route
          element={
            <Layout>
              <SettingPage />
            </Layout>
          }
          path={routes.translation}
        />
        <Route
          element={
            <Layout>
              <SettingPage />
            </Layout>
          }
          path={routes.information}
        />
        <Route
          element={
            <Layout>
              <SettingPage />
            </Layout>
          }
          path={routes.information}
        />
        <Route
          element={
            <Layout>
              <SettingPage />
            </Layout>
          }
          path={routes.registration}
        />
        <Route
          element={
            <Layout>
              <SettingPage />
            </Layout>
          }
          path={routes.email}
        />
        <Route
          element={
            <Layout>
              <SettingPage />
            </Layout>
          }
          path={routes.accounts}
        />
        <Route
          element={
            <Layout>
              <SettingPage />
            </Layout>
          }
          path={routes.boardsVisibility}
        />
        <Route
          element={
            <Layout>
              <SettingPage />
            </Layout>
          }
          path={routes.announcement}
        />
        <Route
          element={
            <Layout>
              <SettingPage />
            </Layout>
          }
          path={routes.accessibility}
        />
        <Route
          element={
            <Layout>
              <SettingPage />
            </Layout>
          }
          path={routes.layout}
        />
        <Route
          element={
            <Layout>
              <SettingPage />
            </Layout>
          }
          path={routes.globalWebhooks}
        />
        <Route
          element={
            <Layout>
              <TasksPage />
            </Layout>
          }
          path={routes.myCards}
        />
        <Route
          element={
            <Layout>
              <TasksPage />
            </Layout>
          }
          path={routes.dueCards}
        />
        <Route
          element={
            <Layout>
              <TasksPage />
            </Layout>
          }
          path={routes.globalSearch}
        />
        <Route
          element={
            <Layout>
              <TasksPage />
            </Layout>
          }
          path={routes.public}
        />
        <Route
          element={
            <Layout>
              <TasksPage />
            </Layout>
          }
          path={routes.boardArchive}
        />
        <Route
          element={
            <Layout>
              <TasksPage />
            </Layout>
          }
          path={routes.templates}
        />
        <Route
          element={
            <Layout loggedOnly={false}>
              <NotFoundPage />
            </Layout>
          }
          path={routes.notFound}
        />
        <Route
          element={
            <Layout loggedOnly={false}>
              <NotFoundPage />
            </Layout>
          }
          path={routes.notFound}
        />
      </ReactRoutes>
    </BrowserRouter>
  );
}
