---
type: method
interface: ISketchManager
member: CreateTangentArc
returns: SketchSegment
parameters:
  -
    name: X1
    type: System.Double
    description: X coordinate of start point in meters
  -
    name: Y1
    type: System.Double
    description: Y coordinate of start point in meters
  -
    name: Z1
    type: System.Double
    description: Z coordinate of start point in meters
  -
    name: X2
    type: System.Double
    description: X coordinate of end point in meters
  -
    name: Y2
    type: System.Double
    description: Y coordinate of end point in meters
  -
    name: Z2
    type: System.Double
    description: Z coordinate of end point in meters
  -
    name: ArcType
    type: System.Int32
    description: Type of tangent arc as defined in swTangentArcTypes_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - arcs
  - tangent
  - sketch
  - see
  - also
  - isketch
  - createtangentarc
  - isketchmanager
  - manager
  - create
  - arc
  - x1
  - double
  - y1
  - z1
  - x2
  - y2
  - z2
  - type
  - int32
  - segment
  - vba
  - vb
  - net
---

# ISketchManager.CreateTangentArc

Creates a tangent arc.

## Signature

```csharp
SketchSegment CreateTangentArc( 
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
,
   System.Int32
ArcType
)
```
## Parameters

- `X1` (System.Double): X coordinate of start point in meters
- `Y1` (System.Double): Y coordinate of start point in meters
- `Z1` (System.Double): Z coordinate of start point in meters
- `X2` (System.Double): X coordinate of end point in meters
- `Y2` (System.Double): Y coordinate of end point in meters
- `Z2` (System.Double): Z coordinate of end point in meters
- `ArcType` (System.Int32): Type of tangent arc as defined in swTangentArcTypes_e

## Return Value

Sketch segment of the tangent arc

## Examples

- Create Tangent Arc (VBA) (Create_Tangent_Arc_Example_VB.htm)
- Create Tangent Arc (VB.NET) (Create_Tangent_Arc_Example_VBNET.htm)
- Create Tangent Arc (C#) (Create_Tangent_Arc_Example_CSharp.htm)