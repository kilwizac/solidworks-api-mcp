---
type: method
interface: ISketchManager
member: CreateCenterLine
returns: SketchSegment
parameters:
  -
    name: X1
    type: System.Double
    description: X coordinate of first end point, in meters
  -
    name: Y1
    type: System.Double
    description: Y coordinate of first end point, in meters
  -
    name: Z1
    type: System.Double
    description: Z coordinate of first end point, in meters
  -
    name: X2
    type: System.Double
    description: X coordinate of second end point, in meters
  -
    name: Y2
    type: System.Double
    description: Y coordinate of second end point, in meters
  -
    name: Z2
    type: System.Double
    description: Z coordinate of second end point, in meters
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - centerlines
  - see
  - also
  - icenterline
  - create
  - sketch
  - isketch
  - centerline
  - createcenterline
  - isketchmanager
  - manager
  - center
  - line
  - x1
  - double
  - y1
  - z1
  - x2
  - y2
  - z2
  - segment
  - 3d
  - plane
  - vb
  - net
  - vba
---

# ISketchManager.CreateCenterLine

Creates a center line between the specified points.

## Signature

```csharp
SketchSegment CreateCenterLine( 
   System.Double
X1
,
   System.Double
Y1
,
   System.Double
Z1
,
   System.Double
X2
,
   System.Double
Y2
,
   System.Double
Z2
)
```
## Parameters

- `X1` (System.Double): X coordinate of first end point, in meters
- `Y1` (System.Double): Y coordinate of first end point, in meters
- `Z1` (System.Double): Z coordinate of first end point, in meters
- `X2` (System.Double): X coordinate of second end point, in meters
- `Y2` (System.Double): Y coordinate of second end point, in meters
- `Z2` (System.Double): Z coordinate of second end point, in meters

## Return Value

Sketch segment for the center line

## Remarks

You can also create centerline construction geometry using
ISketchManager::CreateLine
and
ISketchSegment::ConstructionGeometry
.

## Examples

- Create 3D Sketch Plane (C#) (Create_3D_Sketch_Plane_Example_CSharp.htm)
- Create 3D Sketch Plane (VB.NET) (Create_3D_Sketch_Plane_Example_VBNET.htm)
- Create 3D Sketch Plane (VBA) (Create_3D_Sketch_Plane_Example_VB.htm)