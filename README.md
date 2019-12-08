# JavaScript Milestones

[**WEB**](https://tomashubelbauer.github.io/js-milestone)

> Calculating milestones from numbers in JavaScript.

This is a JavaScript algorithm for calculating automatic milestones for numbers.
There are two kinds of milestones: ceiling milestones and flooring milestones.
The milestone is determined based on the order of magnitude of the number.
For units, each of them is a milestone in its own right.
For tens, each ten is a milestone.
For hundreds, each hundred is a milestone.
For thousands, each thousand is a milestone.
And so on…

## Flooring Milestones

Flooring milestones are milestones where the tracked number decreases over time:
Starting at e.g. a 1000, that's reaching the milestone 1000.
Advancing to 999, 998, … 900, that's reaching the milestone 900.
Advancing to 800, that's reaching the milestone 800.
Advancing to 100, 90, 80, … 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 and 0.

Flooring milestones are useful when tracking a position in a competition to be
the number 1.

## Ceiling Milestones

Ceiling milestones are milestones where the tracked number increases over time:
Starting at 0, that's reaching the milestone 0.
Advancing through 1, 2, 3, 4, 5, 6, 7, 8 and 9, all milestones.
Reaching 10, that's a milestone. 20, 30, 40, …, 100, milestones.
200, 300, 400, …, 1000. A milestone right there.
And so on and so forth.

Ceiling milestones are useful when tracking frontiers of an unbounded value,
like the total of a currency, an amount of some physical value etc.

## To-Do

### Depend on this in IS4A

### Document the parameters

Using JSDoc and in the readme.
