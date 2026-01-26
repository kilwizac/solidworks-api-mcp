---
type: property
interface: ITessellation
member: CurveChordAngleTolerance
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - curvechordangletolerance
  - itessellation
  - tessellation
  - curve
  - chord
  - angle
  - tolerance
  - double
readonly: null
---

# ITessellation.CurveChordAngleTolerance

Gets or sets the maximum angle, in radians, that is allowed between a chord and its originating curve.

## Signature

```csharp
System.Double CurveChordAngleTolerance {get; set;}
```
## Parameters

None.

## Return Value

Value for the curve chord angle tolerance

## Remarks

This angle is calculated as the sum of the two angles between a chord and the curve tangents, measured at the chord ends.