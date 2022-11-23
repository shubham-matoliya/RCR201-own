import React, { useEffect } from "react";
import { Box, Button, Flex, useToast } from "@chakra-ui/react";
import { deletePost } from "./posts.api";
import useDelayedFetch from "../../hooks/useDelayedFetch";

const Post = ({ id, content, onDelete }) => {
  const toast = useToast();
  const { loading, success, error, exec } = useDelayedFetch(deletePost);

  useEffect(() => {
    if (success) {
      onDelete(id);
      toast({
        title: `Post with id: ${id}, deleted successfully`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } else if (error) {
      toast({
        title: "Error Occurred while fetching data",
        description: error,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  }, [toast, success, error]);

  return (
    <Flex gap={2}>
      <Box>{content}</Box>
      <Button
        size="sm"
        isLoading={loading}
        loadingText="Deleting..."
        onClick={() => exec(id)}
      >
        Delete
      </Button>
    </Flex>
  );
};

export default Post;
