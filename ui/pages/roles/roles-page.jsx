import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  HStack,
  Badge,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Select,
  ModalFooter,
} from '@chakra-ui/react';
import { FaEdit, FaTrash, FaPlus } from '@react-icons/all-files';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mock data for roles
const mockRoles = [
  {
    id: 1,
    name: 'Admin',
    description: 'Full system access',
    permissions: ['read', 'write', 'delete', 'admin'],
    userCount: 3,
  },
  {
    id: 2,
    name: 'Manager',
    description: 'Team management access',
    permissions: ['read', 'write'],
    userCount: 8,
  },
  {
    id: 3,
    name: 'User',
    description: 'Basic user access',
    permissions: ['read'],
    userCount: 25,
  },
];

export default function RolesPage() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editingRole, setEditingRole] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    permissions: [],
  });

  const handleEdit = (role) => {
    setEditingRole(role);
    setFormData({
      name: role.name,
      description: role.description,
      permissions: role.permissions,
    });
    onOpen();
  };

  const handleCreate = () => {
    setEditingRole(null);
    setFormData({
      name: '',
      description: '',
      permissions: [],
    });
    onOpen();
  };

  const handleSave = () => {
    // Here you would save the role
    console.log('Saving role:', formData);
    onClose();
  };

  const handleDelete = (roleId) => {
    // Here you would delete the role
    console.log('Deleting role:', roleId);
  };

  const getPermissionBadgeColor = (permission) => {
    switch (permission) {
      case 'admin':
        return 'red';
      case 'write':
        return 'orange';
      case 'read':
        return 'green';
      default:
        return 'gray';
    }
  };

  return (
    <Container maxW="6xl" py={8}>
      <Stack spacing={8}>
        <Box>
          <HStack justify="space-between" align="center" mb={6}>
            <Box>
              <Heading
                fontSize="3xl"
                bgGradient="linear(to-l, #675AAA, #4399E1)"
                bgClip="text"
                mb={2}
              >
                Roles Management
              </Heading>
              <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')}>
                Manage user roles and permissions
              </Text>
            </Box>
            <HStack>
              <Button
                colorScheme="blue"
                variant="outline"
                onClick={() => navigate('/setting')}
              >
                Back to Admin Panel
              </Button>
              <Button
                colorScheme="green"
                leftIcon={<FaPlus />}
                onClick={handleCreate}
              >
                Create Role
              </Button>
            </HStack>
          </HStack>

          <Box
            bg={useColorModeValue('white', 'gray.800')}
            borderRadius="lg"
            shadow="md"
            overflow="hidden"
          >
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Role Name</Th>
                  <Th>Description</Th>
                  <Th>Permissions</Th>
                  <Th>Users</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {mockRoles.map((role) => (
                  <Tr key={role.id}>
                    <Td fontWeight="bold">{role.name}</Td>
                    <Td>{role.description}</Td>
                    <Td>
                      <HStack spacing={1}>
                        {role.permissions.map((permission, index) => (
                          <Badge
                            key={index}
                            colorScheme={getPermissionBadgeColor(permission)}
                            fontSize="xs"
                          >
                            {permission}
                          </Badge>
                        ))}
                      </HStack>
                    </Td>
                    <Td>{role.userCount}</Td>
                    <Td>
                      <HStack spacing={2}>
                        <IconButton
                          size="sm"
                          icon={<FaEdit />}
                          aria-label="Edit role"
                          onClick={() => handleEdit(role)}
                        />
                        <IconButton
                          size="sm"
                          colorScheme="red"
                          icon={<FaTrash />}
                          aria-label="Delete role"
                          onClick={() => handleDelete(role.id)}
                        />
                      </HStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>

        {/* Create/Edit Role Modal */}
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {editingRole ? 'Edit Role' : 'Create New Role'}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Role Name</FormLabel>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter role name"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Input
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="Enter role description"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Permissions</FormLabel>
                  <Select
                    placeholder="Select permissions"
                    value={formData.permissions}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        permissions: Array.from(
                          e.target.selectedOptions,
                          (option) => option.value
                        ),
                      })
                    }
                    multiple
                  >
                    <option value="read">Read</option>
                    <option value="write">Write</option>
                    <option value="delete">Delete</option>
                    <option value="admin">Admin</option>
                  </Select>
                </FormControl>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={handleSave}>
                {editingRole ? 'Update' : 'Create'}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Stack>
    </Container>
  );
}