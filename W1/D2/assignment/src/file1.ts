interface PersonX {
  title: string;
  status: boolean;
  id: number;
}

interface PersonDetails {
  fname: string;
  lname: string;
}
function getName(first: PersonDetails, last?: PersonDetails): string {
  return first + last;
}
