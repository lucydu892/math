import { assertAlmostEquals } from "@std/assert";
import { Circle, Point2D } from "./geometry.ts";
import { assertEquals } from "@std/assert/equals";

Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
});

Deno.test("distanceTo x = 5 and y = 7", () => {
  //Given
  const point1 = new Point2D(0, 0);
  const point2 = new Point2D(5, 7);

  //When
  const actual = point1.distanceTo(point2);

  //Then
  assertAlmostEquals(actual, 8.6023, 0.0001)
})
