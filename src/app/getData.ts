type Item = {
  id: number;
  title: string;
  description: string;
};

export const getData = async (): Promise<Item[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "First item",
          description: "First item description",
        },
        {
          id: 2,
          title: "Second item",
          description: "Second item description",
        },
        {
          id: 3,
          title: "Third item",
          description: "Third item description",
        },
      ]);
    }, 1000);
  });
};
