import {
  createProjectFailed,
  createProjectLoading,
  createProjectSuccess,
  deleteProjectFailed,
  deleteProjectLoading,
  deleteProjectSuccess,
  updateProjectFailed,
  updateProjectLoading,
  updateProjectSuccess,
} from "../slices/projectSlice";

export const _createNewProject = (data) => {
  return (dispatch, getState) => {
    dispatch(createProjectLoading);
    try {
      const data1 = {
        id: Math.random().toString(),
        name: data.name,
        icon: data.icon,
        description: data.description,
      };

      dispatch(createProjectSuccess({ data: data1 }));
    } catch (error) {
      dispatch(createProjectFailed({ errors: ["Failed to create project"] }));
    }
  };
};

export const _updateProject = (data) => {
  return (dispatch, getState) => {
    dispatch(updateProjectLoading);
    try {
      const data1 = {
        id: data.id,
        name: data.name,
        icon: data.icon,
        description: data.description,
      };

      dispatch(updateProjectSuccess({ data: data1 }));
    } catch (error) {
      dispatch(updateProjectFailed({ errors: ["Failed to update project"] }));
    }
  };
};

export const _deleteProject = (data) => {
  return (dispatch, getState) => {
    dispatch(deleteProjectLoading);
    try {
      dispatch(deleteProjectSuccess({ data }));
    } catch (error) {
      dispatch(deleteProjectFailed({ errors: ["Failed to create project"] }));
    }
  };
};
