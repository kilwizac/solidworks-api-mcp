---
type: enum
name: swTangencyType_e
description: Tangency options for lofts and profile twist options for sweeps.
member_count: 5
docset: swconst
categories:
  - constants
used_by: []
---

# swTangencyType_e

Tangency options for lofts and profile twist options for sweeps.

## Values

| Member | Value | Description |
|---|---|---|
| `swMinimumTwist` | 10 | = Prevents the profile from becoming self-intersecting as it follows the sweep or loft path; valid only for 3D paths; corresponds to Profile Twist > Minimum Twist in the Sweep PropertyManager |
| `swTangencyAllFaces` | 3 | = Makes the adjacent faces tangent at the profile; valid only if swTwistControlType_e is set to swTwistControlFollowPath and only when attaching a sweep or loft to existing geometry; corresponds to Profile Twist > Tangent to Adjacent Faces in the Sweep PropertyManager |
| `swTangencyDirectionVector` | 2 | = Sets a direction plane, planar face, line, edge, cylinder, axis, or a pair of vertices; valid only if swTwistControlType_e is set to swTwistControlFollowPath; corresponds to Profile Twist > Specify Direction Vector in the Sweep PropertyManager |
| `swTangencyNone` | 0 |  |
| `swTangencyNormalToProfile` | 1 | = Aligns the profile normal to the sweep or loft path; valid only for 2D paths; corresponds to Profile Twist > None in the Sweep PropertyManager |