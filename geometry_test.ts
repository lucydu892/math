import { assertAlmostEquals } from "@std/assert";
import { assertEquals } from "@std/assert/equals";
import { Circle, Point2D, Rectangle } from "./geometry.ts";

Deno.test("circumference of a circle with radius 5 is roughly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
});

Deno.test("area of a circle with radius 5 is roughly 78.54", () => {
  // Given
  const circle = new Circle(new Point2D(0, 0), 5);

  // When
  const actual = circle.area();

  // Then
  assertAlmostEquals(actual, 78.54, 0.01);
});

Deno.test("diameter of a circle with radius 5 is 10", () => {
  // Given
  const circle = new Circle(new Point2D(0, 0), 5);

  // When
  const actual = circle.diameter();

  // Then
  assertEquals(actual, 10);
});


Deno.test("distance between (0,0) and (5,7) is roughly 8.6023", () => {
  // Given
  const point1 = new Point2D(0, 0);
  const point2 = new Point2D(5, 7);

  // When
  const actual = point1.distanceTo(point2);

  // Then
  assertAlmostEquals(actual, 8.6023, 0.0001);
});

Deno.test("distance to same point is 0", () => {
  // Given
  const point = new Point2D(2, 3);

  // When
  const actual = point.distanceTo(point);

  // Then
  assertEquals(actual, 0);
});


Deno.test("area of rectangle 10x5 is 50", () => {
  // Given
  const rect = new Rectangle(
      new Point2D(0, 0),
      new Point2D(10, 5),
  );

  // When
  const actual = rect.area();

  // Then
  assertEquals(actual, 50);
});

Deno.test("diagonal of rectangle (0,0) to (3,4) is 5", () => {
  // Given
  const rect = new Rectangle(
      new Point2D(0, 0),
      new Point2D(3, 4),
  );

  // When
  const actual = rect.diagonal();

  // Then
  assertEquals(actual, 5);
});

Deno.test("circumference of rectangle 10x5 is 30", () => {
  // Given
  const rect = new Rectangle(
      new Point2D(0, 0),
      new Point2D(10, 5),
  );

  // When
  const actual = rect.circumference();

  // Then
  assertEquals(actual, 30);
});