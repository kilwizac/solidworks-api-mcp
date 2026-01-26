---
type: method
interface: ISketch
member: SetWorkingPlaneOrientation
returns: System.Boolean
parameters:
  -
    name: OriginX
    type: System.Double
    description: x coordinate of the origin of the axis
  -
    name: OriginY
    type: System.Double
    description: y coordinate of the origin of the axis
  -
    name: OriginZ
    type: System.Double
    description: z coordinate of the origin of the axis
  -
    name: XAxisX
    type: System.Double
    description: x coordinate of the x vector direction
  -
    name: XAxisY
    type: System.Double
    description: y coordinate of the x vector direction
  -
    name: XAxisZ
    type: System.Double
    description: z coordinate of the x vector direction
  -
    name: YAxisX
    type: System.Double
    description: x coordinate of the y vector direction
  -
    name: YAxisY
    type: System.Double
    description: y coordinate of the y vector direction
  -
    name: YAxisZ
    type: System.Double
    description: z coordinate of the y vector direction
  -
    name: NormalX
    type: System.Double
    description: x coordinate of the normal to the planar direction
  -
    name: NormalY
    type: System.Double
    description: y coordinate of the normal to the planar direction
  -
    name: NormalZ
    type: System.Double
    description: z coordinate of the normal to the planar direction
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - 3d
  - sketches
  - orientation
  - sketch
  - see
  - also
  - isketch
  - setworkingplaneorientation
  - working
  - plane
  - origin
  - double
  - axis
  - normal
  - boolean
  - create
  - vb
  - net
  - vba
---

# ISketch.SetWorkingPlaneOrientation

Sets the orientation for sketching geometry in a 3D sketch. It sets the planar location for new 2D and 3D geometry in a 3D sketch.

## Signature

```csharp
System.Boolean SetWorkingPlaneOrientation( 
   System.Double
OriginX
,
   System.Double
OriginY
,
   System.Double
OriginZ
,
   System.Double
XAxisX
,
   System.Double
XAxisY
,
   System.Double
XAxisZ
,
   System.Double
YAxisX
,
   System.Double
YAxisY
,
   System.Double
YAxisZ
,
   System.Double
NormalX
,
   System.Double
NormalY
,
   System.Double
NormalZ
)
```
## Parameters

- `OriginX` (System.Double): x coordinate of the origin of the axis
- `OriginY` (System.Double): y coordinate of the origin of the axis
- `OriginZ` (System.Double): z coordinate of the origin of the axis
- `XAxisX` (System.Double): x coordinate of the x vector direction
- `XAxisY` (System.Double): y coordinate of the x vector direction
- `XAxisZ` (System.Double): z coordinate of the x vector direction
- `YAxisX` (System.Double): x coordinate of the y vector direction
- `YAxisY` (System.Double): y coordinate of the y vector direction
- `YAxisZ` (System.Double): z coordinate of the y vector direction
- `NormalX` (System.Double): x coordinate of the normal to the planar direction
- `NormalY` (System.Double): y coordinate of the normal to the planar direction
- `NormalZ` (System.Double): z coordinate of the normal to the planar direction

## Return Value

True if the orientation is set, false if not

## Remarks

This method sets the planar location for new 2D and 3D geometry in a 3D sketch.

## Examples

- Create 3D Sketch Plane (C#) (Create_3D_Sketch_Plane_Example_CSharp.htm)
- Create 3D Sketch Plane (VB.NET) (Create_3D_Sketch_Plane_Example_VBNET.htm)
- Create 3D Sketch Plane (VBA) (Create_3D_Sketch_Plane_Example_VB.htm)