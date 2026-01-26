---
type: method
interface: ILoop2
member: SweepPlanarLoop
returns: System.Object
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
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ILoop2.ISweepPlanarLoop
keywords:
  - sweepplanarloop
  - iloop2
  - loop2
  - sweep
  - planar
  - loop
  - double
  - draft
  - angle
  - object
  - along
  - vector
  - vba
---

# ILoop2.SweepPlanarLoop

Creates a temporary body by sweeping a planar loop along a vector.

## Signature

```csharp
System.Object SweepPlanarLoop( 
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
)
```
## Parameters

- `X` (System.Double): X component of the sweep vector
- `Y` (System.Double): Y component of the sweep vector
- `Z` (System.Double): Z component of the sweep vector
- `DraftAngle` (System.Double): Draft angle for the faces on the side of this swept body

## Return Value

Array containing new swept body (element 1) and two stop faces (elements 2 and 3)

## Remarks

This method requires simplification of the imported body.

## Examples

- Sweep Planar Loop Along Vector (VBA) (Sweep_Planar_Loop_Along_Vector_Example_VB.htm)

## See Also

- `ILoop2.ISweepPlanarLoop`