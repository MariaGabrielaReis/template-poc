export function formatDate({
  value,
  hasDay = true,
  hasHours = true,
  yearWithTwoNumbers = true,
}: {
  value: Date | string;
  hasDay?: boolean;
  hasHours?: boolean;
  yearWithTwoNumbers?: boolean;
}) {
  if (value) {
    const date = value?.toString().split(`T`, 1)[0].split(`-`);
    const hour = value?.toString().split(`T`)[1];

    let formattedDate = `${date[1]}/${yearWithTwoNumbers ? date[0].substring(2, 4) : date[0]}`;
    if (hasDay) formattedDate = `${date[2]}/` + formattedDate;
    if (hasHours) formattedDate + ` - ${hour.substring(0, 5)}`;

    return date ? formattedDate : ``;
  }

  return ``;
}
