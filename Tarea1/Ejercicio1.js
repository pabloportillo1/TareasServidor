function normalizeUsers(data) {
  const result = {};

  for (const user of data) {
    const { id, name, roles } = user;

    if (!result[id]) {
      result[id] = {
        id,
        name,
        roles: new Set()
      };
    }

    roles.forEach(role => result[id].roles.add(role));
  }

  for (const id in result) {
    result[id].roles = [...result[id].roles];
  }

  return result;
}