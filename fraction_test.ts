import {
  assertAlmostEquals,
  assertEquals,
  assertThrows,
} from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("fraction of 1/1 is 1.0", () => {
  const fraction = new Fraction(1, 1);
  assertEquals(fraction.toFloat(0.1), 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
  const fraction = new Fraction(2, 3);
  assertAlmostEquals(fraction.toFloat(0.01), 0.67);
});

Deno.test("toFloat rounds with precision 0.1", () => {
  const fraction = new Fraction(2, 3);
  assertEquals(fraction.toFloat(0.1), 0.7);
});

Deno.test("toFloat rounds negative values", () => {
  const fraction = new Fraction(-1, 3);
  assertEquals(fraction.toFloat(0.1), -0.3);
});

Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);
  left.add(right);
  assertAlmostEquals(left.toFloat(0.01), 0.67);
});

Deno.test("1/2 + 1/3 mutates to 5/6", () => {
  const left = new Fraction(1, 2);
  const right = new Fraction(1, 3);
  left.add(right);
  assertEquals(left.toString(), "5/6");
});

Deno.test("1/2 - 1/2 = 0", () => {
  const left = new Fraction(1, 2);
  const right = new Fraction(1, 2);
  left.subtract(right);
  assertEquals(left.toFloat(0.01), 0);
});

Deno.test("1/3 - 1/2 mutates to -1/6", () => {
  const left = new Fraction(1, 3);
  const right = new Fraction(1, 2);
  left.subtract(right);
  assertEquals(left.toString(), "-1/6");
});

Deno.test("1/2 * 1/2 = 0.25", () => {
  const left = new Fraction(1, 2);
  const right = new Fraction(1, 2);
  left.multiply(right);
  assertEquals(left.toFloat(0.01), 0.25);
});

Deno.test("-1/2 * 2/3 mutates to -2/6", () => {
  const left = new Fraction(-1, 2);
  const right = new Fraction(2, 3);
  left.multiply(right);
  assertEquals(left.toString(), "-2/6");
});

Deno.test("1/2 : 1/2 = 1.0", () => {
  const left = new Fraction(1, 2);
  const right = new Fraction(1, 2);
  left.divide(right);
  assertEquals(left.toFloat(0.01), 1.0);
});

Deno.test("3/4 : 2/5 mutates to 15/8", () => {
  const left = new Fraction(3, 4);
  const right = new Fraction(2, 5);
  left.divide(right);
  assertEquals(left.toString(), "15/8");
});

Deno.test("toString returns numerator/denominator", () => {
  const fraction = new Fraction(7, 9);
  assertEquals(fraction.toString(), "7/9");
});

Deno.test("parse supports whitespace", () => {
  const fraction = Fraction.parse(" 3 / 4 ");
  assertEquals(fraction.toString(), "3/4");
});

Deno.test("parse accepts decimal denominator", () => {
  const fraction = Fraction.parse("1/2.5");
  assertEquals(fraction.toString(), "1/2.5");
});

Deno.test("parse throws for invalid syntax", () => {
  assertThrows(() => Fraction.parse("1"));
  assertThrows(() => Fraction.parse("1/2/3"));
});

Deno.test("parse throws for non-numeric parts", () => {
  assertThrows(() => Fraction.parse("a/2"));
  assertThrows(() => Fraction.parse("1/x"));
});
