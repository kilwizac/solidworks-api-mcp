---
type: enum
name: swTwistControlType_e
description: Sweep twist control options.
member_count: 6
docset: swconst
categories:
  - constants
used_by: []
---

# swTwistControlType_e

Sweep twist control options.

## Values

| Member | Value | Description |
|---|---|---|
| `swTwistControlConstantTwistAlongPath` | 8 | = Defines the twist of the profile along the sweep path; corresponds to Profile Twist > Specify Twist Value in the Sweep PropertyManager |
| `swTwistControlFollowFirstSecondGuideCurves` | 3 | = The twist of the intermediate sections is determined by the vector from the first guide cruve to the second guide curve; the angle between the horizontal plane and the vector remains constant in the sketch planes of all of the intermediate sections; corresponds to Profile Twist > Follow First and Second Guide Curves in the Sweep PropertyManager (only valid if two guide curves are present) |
| `swTwistControlFollowPath` | 0 | = Corresponds to Profile orientation > Follow Path in the Sweep PropertyManager; after specifying this option, use ISweepFeatureData::PathAlignmentType to specify path alignment options as defined in swTangencyType_e |
| `swTwistControlFollowPathFirstGuideCurve` | 2 | = The twist of the intermediate sections is determined by the vector from the path to the first guide curve; the angle between the horizontal plane and the vector remains constant in the sketch planes of all of the intermediate sections; corresponds to Profile Twist > Follow Path and First Guide Curve in the Sweep PropertyManager (only valid if at least one guide curve is present) |
| `swTwistControlKeepNormalConstant` | 1 | = Twists the section along the sweep path, keeping the section parallel to the beginning section as it twists along the path; corresponds to Profile orientation > Keep Normal Constant in the Sweep PropertyManager |
| `swTwistControlNormalConstantTwistAlongPath` | 9 | = Defines the twist of the profile along the sweep path, keeping the section parallel to the beginning section as it twists along the path; corresponds to Profile orientation > Keep Normal Constant and Profile Twist > Specify Twist Value in the Sweep PropertyManager |