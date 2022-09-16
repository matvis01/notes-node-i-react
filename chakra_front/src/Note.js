import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function Note(props) {
  return (
    <Box
      bg="#eae2b7"
      p="20px"
      mb="20px"
      borderRadius="7px"
      ml="20px"
      mr="20px"
      minH="140px"
    >
      <Box>
        <Heading color="black" mb="10px">
          {props.note.title}
        </Heading>
        <Text color="black" mb="5px">
          {props.note.body}
        </Text>
        <Box mt="10px">
          <Button
            mr="10px"
            onClick={() => props.delete(props.note._id)}
            bg="#d62828"
            _hover={{ bg: '#d62828' }}
            _focus={{ bg: '#a81f1f' }}
          >
            delete
          </Button>
          <Button
            onClick={() => props.edit(props.note._id)}
            mr="10px"
            bg="#016da7"
            _hover={{ bg: '#016da7' }}
            _focus={{ bg: '#005c8d' }}
          >
            edit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
