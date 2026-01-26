---
type: method
interface: ISketchManager
member: CreateParabola
returns: SketchSegment
parameters:
  -
    name: XFocus
    type: System.Double
    description: X coordinate for the focus
  -
    name: YFocus
    type: System.Double
    description: Y coordinate for the focus
  -
    name: ZFocus
    type: System.Double
    description: Z coordinate for the focus
  -
    name: XApex
    type: System.Double
    description: X coordinate for the apex
  -
    name: YApex
    type: System.Double
    description: Y coordinate for the apex
  -
    name: ZApex
    type: System.Double
    description: Z coordinate for the apex
  -
    name: X1
    type: System.Double
    description: X coordinate for the start point
  -
    name: Y1
    type: System.Double
    description: Y coordinate for the start point
  -
    name: Z1
    type: System.Double
    description: Z coordinate for the start point
  -
    name: X2
    type: System.Double
    description: X coordinate for the end point
  -
    name: Y2
    type: System.Double
    description: Y coordinate for the end point
  -
    name: Z2
    type: System.Double
    description: Z coordinate for the end point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.CreateConic
keywords:
  - parabolas
  - sketch
  - entities
  - see
  - also
  - isketch
  - createparabola
  - isketchmanager
  - manager
  - create
  - parabola
  - focus
  - double
  - apex
  - x1
  - y1
  - z1
  - x2
  - y2
  - z2
  - segment
  - vba
  - vb
  - net
---

# ISketchManager.CreateParabola

Creates a parabola in the active sketch.

## Signature

```csharp
SketchSegment CreateParabola( 
   System.Double
XFocus
,
   System.Double
YFocus
,
   System.Double
ZFocus
,
   System.Double
XApex
,
   System.Double
YApex
,
   System.Double
ZApex
,
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

- `XFocus` (System.Double): X coordinate for the focus
- `YFocus` (System.Double): Y coordinate for the focus
- `ZFocus` (System.Double): Z coordinate for the focus
- `XApex` (System.Double): X coordinate for the apex
- `YApex` (System.Double): Y coordinate for the apex
- `ZApex` (System.Double): Z coordinate for the apex
- `X1` (System.Double): X coordinate for the start point
- `Y1` (System.Double): Y coordinate for the start point
- `Z1` (System.Double): Z coordinate for the start point
- `X2` (System.Double): X coordinate for the end point
- `Y2` (System.Double): Y coordinate for the end point
- `Z2` (System.Double): Z coordinate for the end point

## Return Value

Sketch segment for the parabola

## Examples

- Create Parabola (VBA) (Create_Parabola_Example_VB.htm)
- Create Parabola (VB.NET) (Create_Parabola_Example_VBNET.htm)
- Create Parabola (C#) (Create_Parabola_Example_CSharp.htm)

## See Also

- `ISketchManager.CreateConic`