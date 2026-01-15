import {
  Box,
  Button,
  HStack,
  Heading,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';
import { TaskForm } from './components/task-form';
import { TaskItem } from './components/task-item';
import { useTasks } from './hooks/use-tasks';
import '/api/tasks/tasks.methods';

// Ensure Excalidraw assets are loaded from local dist folder
if (typeof window !== 'undefined') {
  window.EXCALIDRAW_ASSET_PATH = '/excalidraw-assets/';
}

export default function TasksPage() {
  const { hideDone, setHideDone, tasks, count, pendingCount } = useTasks();
  return (
    <>
      <Stack textAlign="center" spacing={{ base: 8 }} py={{ base: 10 }}>
        <Heading fontWeight={600}>
          <Text
            as="span"
            bgGradient="linear(to-l, #675AAA, #4399E1)"
            bgClip="text"
          >
            Simple Tasks
          </Text>
        </Heading>
      </Stack>
      <div style={{ marginBottom: "2rem", border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", width: "100%", maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
        {/* Excalidraw rendering */}
        {Excalidraw ? (
          <div style={{ position: "relative", height: "500px", width: "100%" }}>
            <Excalidraw style={{ height: "100%", width: "100%" }} />
          </div>
        ) : (
          <div style={{ color: "red", padding: "1rem" }}>
            <b>Excalidraw drawing UI could not be rendered.</b><br />
            <span>typeof Excalidraw: {typeof Excalidraw}</span><br />
            <span>Check browser console for more details.</span><br />
            <span>Possible reasons: missing CSS, asset path, import error, or incompatible React version.</span>
          </div>
        )}
      </div>
      <TaskForm />
      <React.Suspense fallback={<Spinner />}>
        <Box
          mt={8}
          py={{ base: 2 }}
          px={{ base: 4 }}
          pb={{ base: 4 }}
          border={1}
          borderStyle="solid"
          borderRadius="md"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
          <HStack mt={2}>
            <Box w="70%">
              <Text
                as="span"
                color={useColorModeValue('gray.600', 'gray.400')}
                fontSize="xs"
              >
                You have {count} {count === 1 ? 'task ' : 'tasks '}
                and {pendingCount || 0} pending.
              </Text>
            </Box>
            <Stack w="30%" justify="flex-end" direction="row">
              <Button
                bg="teal.600"
                color="white"
                colorScheme="teal"
                size="xs"
                onClick={() => setHideDone(!hideDone)}
              >
                {hideDone ? 'Show All Tasks' : 'Show Pending'}
              </Button>
            </Stack>
          </HStack>
          {tasks.map((task) => (
            <TaskItem key={task._id} task={task} />
          ))}
        </Box>
      </React.Suspense>
    </>
  );
}
