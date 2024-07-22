export function orderListByPosition(list) {
  const size = list.length;
  list.sort(
    (a, b) =>
      (a.position === null ? size : a.position) -
      (b.position === null ? size : b.position)
  );
  return list;
}
