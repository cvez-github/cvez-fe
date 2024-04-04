import { v4 as uuidv4 } from "uuid";
import { useRef, useState } from "react";
import {
  Drawer,
  Flex,
  TextInput,
  Textarea,
  Button,
  Title,
  Container,
} from "@mantine/core";
import appStrings from "../../utils/strings";
import { getAliasByName } from "../../utils/utils";
import { createProjectControl } from "../../controllers/createProject";
import useProjectsState from "../../context/project";
import { useNavigate } from "react-router-dom";

const demoProps = {
  h: 50,
  mt: "md",
};
// eslint-disable-next-line react/prop-types
export default function CreateProjectDrawer({ open, onClose }) {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const addProject = useProjectsState((state) => state.addProject);
  const idAlias = useRef(uuidv4());

  const handleInputChange = (event) => {
    setProjectName(event.target.value);
  };

  function handleCreateProject() {
    const alias = getAliasByName(projectName, idAlias.current);
    createProjectControl(projectName, alias, description).then((project) => {
      addProject(project);
      navigate(`/${project.id}`);
    });
  }

  return (
    <Drawer opened={open} onClose={onClose} size="100%" position="right">
      <Container size="xs" {...demoProps}>
        <Flex
          gap="lg"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <Title order={1} style={{ width: "100%" }}>
            {appStrings.language.createProject.title}
          </Title>
          <TextInput
            label={appStrings.language.createProject.projectName}
            placeholder={appStrings.language.createProject.projectName}
            variant="filled"
            style={{ width: "100%" }}
            onChange={handleInputChange}
            value={projectName}
          />
          <TextInput
            disabled
            label={appStrings.language.createProject.projectAlias}
            placeholder={appStrings.language.createProject.projectAlias}
            style={{ width: "100%" }}
            value={getAliasByName(projectName, idAlias.current)}
          />
          <Textarea
            variant="filled"
            label={appStrings.language.createProject.projectDescription}
            placeholder={appStrings.language.createProject.projectDescription}
            style={{ width: "100%" }}
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          />
        </Flex>
        <Flex justify="flex-end" gap="md" style={{ marginTop: "20px" }}>
          <Button variant="default" onClick={onClose}>
            {appStrings.language.createProject.cancel}
          </Button>
          <Button onClick={handleCreateProject}>
            {appStrings.language.createProject.create}
          </Button>
        </Flex>
      </Container>
    </Drawer>
  );
}
