//Sorting items based on their title
export const sortItems = (data) => {
  return data.sort(function (a, b) {
    var titleA = a.title.toUpperCase(); // ignore upper and lowercase
    var titleB = b.title.toUpperCase(); // ignore upper and lowercase
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
};
