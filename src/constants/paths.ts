const basePath = '/';

export const paths = {
  basePath,
  tasks: {
    index: basePath,
    show: `${basePath}task/:id`,
    new: `${basePath}task/new`,
  },
};
