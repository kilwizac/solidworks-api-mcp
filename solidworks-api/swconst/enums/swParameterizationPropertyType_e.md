---
type: enum
name: swParameterizationPropertyType_e
description: Properties of U and V parameters.
member_count: 6
docset: swconst
categories:
  - constants
used_by: []
---

# swParameterizationPropertyType_e

Properties of U and V parameters.

## Values

| Member | Value | Description |
|---|---|---|
| `swParameterizationPropertyType_AllDerivativesContinuous` | 13737 |  |
| `swParameterizationPropertyType_AllDerivativesNotContinuous` | 13738 |  |
| `swParameterizationPropertyType_BoundsCoincident` | 13746 | = Bounds at the ends of the parameter range are coincident |
| `swParameterizationPropertyType_Circular` | 13740 | = The parameter represents an angle around a circle; A circle indicates that the other parameter is a constant |
| `swParameterizationPropertyType_Linear` | 13739 | = The parameter is proportional to the distance along a straight line; A straight line indicates that the other parameter is a constant |
| `swParameterizationPropertyType_Periodic` | 13701 | = Periodic parameterization |