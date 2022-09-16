import { Box, Button, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function EditingNote(props) {
  const [title, setTitle] = useState(props.note.title);
  const [body, setBody] = useState(props.note.body);

  function saveTitle(event) {
    setTitle(event.target.value);
  }
  function saveBody(event) {
    setBody(event.target.value);
  }

  return (
    <Box
      bg="#eae2b7"
      p="20px"
      mb="20px"
      borderRadius="7px"
      ml="20px"
      mr="20px"
      minH="167px"
    >
      <Box>
        <Input
          placeholder="Title"
          _placeholder={{ color: 'black' }}
          defaultValue={props.note.title}
          onChange={saveTitle}
          borderColor="black"
          textColor="black"
          variant="flushed"
          size="ld"
        ></Input>
        <Input
          color="black"
          placeholder="body"
          _placeholder={{ color: 'black' }}
          variant="flushed"
          borderColor="black"
          defaultValue={props.note.body}
          onChange={saveBody}
          mb="10px"
        ></Input>
        <Box mt="10px">
          <Button
            onClick={() => props.delete(props.note._id)}
            mr="10px"
            bg="#d62828"
            _hover={{ bg: '#d62828' }}
            _focus={{ bg: '#a81f1f' }}
          >
            delete
          </Button>
          <Button
            onClick={() => props.save(props.note._id, title, body)}
            mr="10px"
            bg="#016da7"
            _hover={{ bg: '#016da7' }}
            _focus={{ bg: '#005c8d' }}
          >
            save
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
