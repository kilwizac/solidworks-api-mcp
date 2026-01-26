---
type: method
interface: IModelDoc2
member: SketchSpline
returns: void
parameters:
  -
    name: MorePts
    type: System.Int32
    description: Number of points left to specify the spline after this one ( see Remarks )
  -
    name: X
    type: System.Double
    description: x coordinate in meters
  -
    name: Y
    type: System.Double
    description: y coordinate in meters
  -
    name: Z
    type: System.Double
    description: z coordinate in meters
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - ISketchSpline
keywords:
  - sketch
  - entities
  - splines
  - see
  - also
  - isketch
  - sketchspline
  - imodeldoc2
  - model
  - doc2
  - spline
  - more
  - pts
  - int32
  - double
  - void
  - create
  - 2d
  - vba
  - vb
  - net
---

# IModelDoc2.SketchSpline

Starts a spline, or continues one, using the specified point.

## Signature

```csharp
void SketchSpline( 
   System.Int32
MorePts
,
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

- `MorePts` (System.Int32): Number of points left to specify the spline after this one ( see Remarks )
- `X` (System.Double): x coordinate in meters
- `Y` (System.Double): y coordinate in meters
- `Z` (System.Double): z coordinate in meters

## Return Value

Unknown.

## Remarks

MorePts goes from
n
to 0 in (
n
+1) calls of this method. When
n
= 0, the last call is made to this method, and the spline is created. For example, if specifying 5 points, then the value of MorePts ranges from 4 to 0.
In SOLIDWORKS 2005 SP1 and earlier, if a failure occurred in a previous call to ModelDoc2::SketchSpline, then subsequent calls to this method failed. In SOLIDWORKS 2005 SP2 and later, if you specify a negative value for MorePts prior to sending the actual data, then the method reinitializes.
In 2D sketches, z is ignored.

## Examples

- Create 2D Spline (VBA) (Create_2D_Spline_Example_VB.htm)
- Create 2D Spline (VB.NET) (Create_2D_Spline_Example_VBNET.htm)
- Create 2D Spline (C#) (Create_2D_Spline_Example_CSharp.htm)

## See Also

- `ISketchSpline`