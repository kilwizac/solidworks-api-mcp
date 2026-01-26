---
type: method
interface: ILoop2
member: ISweepPlanarLoop
returns: Body2
parameters:
  -
    name: X
    type: System.Double
    description: X component of the sweep vector
  -
    name: Y
    type: System.Double
    description: Y component of the sweep vector
  -
    name: Z
    type: System.Double
    description: Z component of the sweep vector
  -
    name: DraftAngle
    type: System.Double
    description: Draft angle for the faces on the side of this swept body
  -
    name: StopFacesOut
    type: Face2
    description: Array of two stop faces
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ILoop2.SweepPlanarLoop
keywords:
  - temporary
  - bodies
  - isweepplanarloop
  - iloop2
  - loop2
  - sweep
  - planar
  - loop
  - double
  - draft
  - angle
  - stop
  - faces
  - out
  - face2
  - body2
---

# ILoop2.ISweepPlanarLoop

Creates a temporary body by sweeping a planar loop along a vector.

## Signature

```csharp
Body2 ISweepPlanarLoop( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
,
   System.Double
DraftAngle
,
   ref Face2
StopFacesOut
)
```
## Parameters

- `X` (System.Double): X component of the sweep vector
- `Y` (System.Double): Y component of the sweep vector
- `Z` (System.Double): Z component of the sweep vector
- `DraftAngle` (System.Double): Draft angle for the faces on the side of this swept body
- `StopFacesOut` (Face2): Array of two stop faces

## Return Value

New swept body

## Remarks

This method requires simplification of the imported body.

## See Also

- `ILoop2.SweepPlanarLoop`