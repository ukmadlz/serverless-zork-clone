import { MapGenerator } from "./utils/map-generator";

export async function map (event) {
  const generator = new MapGenerator({
    width: 10,
    height: 10,
  });
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Map to ya' buried treasure",
        // input: event,
        map: generator.render(),
      }
    ),
  };
};
