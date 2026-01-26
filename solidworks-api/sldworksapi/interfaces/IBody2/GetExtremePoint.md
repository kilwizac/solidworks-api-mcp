---
type: method
interface: IBody2
member: GetExtremePoint
returns: System.Boolean
parameters:
  -
    name: X
    type: System.Double
    description: X component of the direction vector
  -
    name: Y
    type: System.Double
    description: Y component of the direction vector
  -
    name: Z
    type: System.Double
    description: Z component of the direction vector
  -
    name: Outx
    type: System.Double
    description: Extreme point X coordinate
  -
    name: Outy
    type: System.Double
    description: Extreme point Y coordinate
  -
    name: Outz
    type: System.Double
    description: Extreme point Z coordinate
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - getextremepoint
  - ibody2
  - body2
  - extreme
  - point
  - double
  - outx
  - outy
  - outz
  - boolean
---

# IBody2.GetExtremePoint

Calculates the extreme point of the model in the specified direction.

## Signature

```csharp
System.Boolean GetExtremePoint( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
,
   out System.Double
Outx
,
   out System.Double
Outy
,
   out System.Double
Outz
)
```
## Parameters

- `X` (System.Double): X component of the direction vector
- `Y` (System.Double): Y component of the direction vector
- `Z` (System.Double): Z component of the direction vector
- `Outx` (System.Double): Extreme point X coordinate
- `Outy` (System.Double): Extreme point Y coordinate
- `Outz` (System.Double): Extreme point Z coordinate

## Return Value

True if a point was found, false if not

## Remarks

This method returns the furthest possible point of intersection between a plane normal to the direction vector specified and the model as the plane moves along the direction vector. For example, if the model is a right cube centered on the origin and the direction vector is (1.0, 1.0, 1.0), then the extreme point is the vertex at (1.0,
1.0, 1.0).
If there is more than one point (for example, if there is a face perpendicular to the direction vector), SOLIDWORKS returns a unique point that it finds in a deterministic way.
COM example
HRESULT auBody_c::XDispatch2::GetExtremePoint( double x, double y, double z, double*
outx, double* outy, double* outz, VARIANT_BOOL* found ) {
METHOD_PROLOGUE_EX_(auBody_c, Dispatch2)
AU_INTERFACE_VERIFY_NOT_DISCONNECTED
BOOL gotIt = pThis->GetExtremePoint(x, y, z, outx, outy, outz);
*found = gotIt ? VARIANT_True : VARIANT_false;
return gotIt ? S_OK : S_false;