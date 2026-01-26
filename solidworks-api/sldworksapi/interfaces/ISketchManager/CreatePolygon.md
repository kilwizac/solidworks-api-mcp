---
type: method
interface: ISketchManager
member: CreatePolygon
returns: System.Object
parameters:
  -
    name: XC
    type: System.Double
    description: X coordinate for the center
  -
    name: YC
    type: System.Double
    description: Y coordinate for the center
  -
    name: Zc
    type: System.Double
    description: Z coordinate for the center
  -
    name: Xp
    type: System.Double
    description: X coordinate of a vertex
  -
    name: Yp
    type: System.Double
    description: Y coordinate of a vertex
  -
    name: Zp
    type: System.Double
    description: Z coordinate of a vertex
  -
    name: Sides
    type: System.Int32
    description: Number of sides in the polygon
  -
    name: Inscribed
    type: System.Boolean
    description: True to show an inscribed construction circle, false to show a circumscribed construction circle
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - polygons
  - sketch
  - entities
  - see
  - also
  - isketch
  - polygon
  - createpolygon
  - isketchmanager
  - manager
  - create
  - xc
  - double
  - yc
  - zc
  - xp
  - yp
  - zp
  - sides
  - int32
  - inscribed
  - boolean
  - object
  - vba
  - vb
  - net
---

# ISketchManager.CreatePolygon

Creates a polygon in the active sketch.

## Signature

```csharp
System.Object CreatePolygon( 
   System.Double
XC
,
   System.Double
YC
,
   System.Double
Zc
,
   System.Double
Xp
,
   System.Double
Yp
,
   System.Double
Zp
,
   System.Int32
Sides
,
   System.Boolean
Inscribed
)
```
## Parameters

- `XC` (System.Double): X coordinate for the center
- `YC` (System.Double): Y coordinate for the center
- `Zc` (System.Double): Z coordinate for the center
- `Xp` (System.Double): X coordinate of a vertex
- `Yp` (System.Double): Y coordinate of a vertex
- `Zp` (System.Double): Z coordinate of a vertex
- `Sides` (System.Int32): Number of sides in the polygon
- `Inscribed` (System.Boolean): True to show an inscribed construction circle, false to show a circumscribed construction circle

## Return Value

Array of sketch segments in the polygon

## Examples

- Create Polygon (VBA) (Create_Polygon_Example_VB.htm)
- Create Polygon (VB.NET) (Create_Polygon_Example_VBNET.htm)
- Create Polygon (C#) (Create_Polygon_Example_CSharp.htm)