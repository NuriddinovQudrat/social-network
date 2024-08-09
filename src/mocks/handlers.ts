import { http, HttpResponse } from "msw";
import userImg from "../assets/images/user.jpg";

export const handlers = [
  http.get("/api/user", (resolver) => {
    return HttpResponse.json({
      id: 1,
      name: "Nuriddinov Qudratjon",
      email: "qudratjonnuriddinov2603@gmail.com",
      bio: "Front End Developer",
      image: userImg,
    });
  }),

  http.patch("/api/user", async ({ request }) => {
    const requestBody = await request.json();
    return HttpResponse.json({
      requestBody,
    });
  }),
];
