type ObjectFormat = {
  value: string | number;
  name: string;
};

export default function findElemByValueProp(
  arr: ObjectFormat[],
  value: ObjectFormat['value'],
): ObjectFormat | undefined {
  return arr.find(elem => elem.value === value);
}
