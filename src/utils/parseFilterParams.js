const parseContactType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isType = (type) => ['work', 'home', 'personal'].includes(type);

  if (isType(type)) return type;
};

const parseIsFavourite = (isFavourite) => {
  const isString = typeof isFavourite === 'string';
  if (!isString) return;

  return isFavourite;
};

const parseUserId = (userId) => {
  const isString = typeof userId === 'string';
  if (!isString) return;
  return userId;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite, userId } = query;

  const parsedContactType = parseContactType(type);
  const parsedIsFavourite = parseIsFavourite(isFavourite);
  const parsedUserId = parseUserId(userId);

  return {
    type: parsedContactType,
    isFavourite: parsedIsFavourite,
    userId: parsedUserId,
  };
};
