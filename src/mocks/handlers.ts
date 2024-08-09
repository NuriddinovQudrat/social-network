import { http, HttpResponse } from "msw";
import userImg from "../assets/images/user.jpg";
import { UserDataInterface } from "types/server-data.types";

const user: UserDataInterface = {
  id: 1,
  name: "Nuriddinov Qudratjon",
  email: "qudratjonnuriddinov2603@gmail.com",
  bio: "Front End Developer",
  image: userImg,
};

export const handlers = [
  http.get("/api/user", () => {
    return HttpResponse.json(user);
  }),

  http.patch("/api/user", async ({ request }) => {
    const updatedUser = await request.json();
    return HttpResponse.json(updatedUser, { status: 201 });
  }),
];
