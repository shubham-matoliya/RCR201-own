import React, { useState } from "react";
import { Button, Center, Input, useToast } from "@chakra-ui/react";
import { addPost } from "./posts.api";
import useDelayedFetch from "../../hooks/useDelayedFetch";
import { useEffect } from "react";

const AddPost = ({ onAddPost }) => {
  const toast = useToast();
  const { loading, data, error, exec, success } = useDelayedFetch(addPost);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (error) {
      toast({
        title: "Error Occurred while trying to add Post",
        description: error,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } else if (success) {
      toast({
        title: "Post is added successfully",
        description: "success",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      onAddPost(data);
    }
  }, [toast, error, success]);
  return (
    <Center>
      <Input value={message} onChange={(e) => setMessage(e.target.value)} />
      <Button
        onClick={() => exec({ content: message })}
        colorScheme="green"
        isLoading={loading}
      >
        Add
      </Button>
    </Center>
  );
};

export default AddPost;
