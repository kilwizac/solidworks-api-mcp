---
type: method
interface: ISurface
member: GetClosestPointOn
returns: System.Object
parameters:
  -
    name: X
    type: System.Double
    description: x coordinate of the approximate position on the surface
  -
    name: Y
    type: System.Double
    description: y coordinate of the approximate position on the surface
  -
    name: Z
    type: System.Double
    description: z coordinate of the approximate position on the surface
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.GetProjectedPointOn
  - ISurface.IGetClosestPointOn
keywords:
  - getclosestpointon
  - isurface
  - surface
  - closest
  - point
  - double
  - object
  - create
  - imported
  - body
  - sketch
  - cut
  - half
  - using
  - macro
  - feature
  - vba
  - evaluate
  - points
---

# ISurface.GetClosestPointOn

Uses the X,Y,Z input point to determine the closest point on the surface.

## Signature

```csharp
System.Object GetClosestPointOn( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `X` (System.Double): x coordinate of the approximate position on the surface
- `Y` (System.Double): y coordinate of the approximate position on the surface
- `Z` (System.Double): z coordinate of the approximate position on the surface

## Return Value

Array of 5 doubles containing the (x,y,z) coordinates and the (u,v) parameters of the point on the surface

## Examples

- Create Imported Surface Body from Sketch (C#) (Create_Imported_Surface_Body_from_Sketch_Example_CSharp.htm)
- Cut Body in Half Using Macro Feature (VBA) (Cut_Body_in_Half_using_Macro_Feature_Example_VB.htm)
- Evaluate Points on Surface (VBA) (Evaluate_Points_on_Surface_Example_VB.htm)

## See Also

- `ISurface.GetProjectedPointOn`
- `ISurface.IGetClosestPointOn`