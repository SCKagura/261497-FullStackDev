interface Address {
  city: string;
}

interface Post {
  title: string;
  text?: string;
}

interface User {
  id: number;
  name: string;
  isActive: boolean;
  phone: string | number | null | undefined;
  website?: string;
  role: "ADMIN" | "USER";
  address: Address;
  foods: string[];
  posts: Post[];
  greet: () => void;
}

const user: User = {
  id: 0,
  name: "Haynes",
  isActive: true,
  phone: 34234334,
  role: "ADMIN",
  address: {
    city: "Chiang Mai",
  },
  foods: ["rice", "pizza"],
  posts: [],
  greet: function () {
    console.log(`Hello, my name is ${(this as User).name}`);
  },
};

user.role = "USER";
user.posts.push({
  title: "Title",
});
user.greet();

// --------------------------------
const a = [1, 2, 5, 7] as const;
// console.log(a[5]); // error



