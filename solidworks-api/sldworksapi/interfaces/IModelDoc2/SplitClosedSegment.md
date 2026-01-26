---
type: method
interface: IModelDoc2
member: SplitClosedSegment
returns: void
parameters:
  -
    name: X0
    type: System.Double
    description: X value of first point
  -
    name: Y0
    type: System.Double
    description: Y value of first point
  -
    name: Z0
    type: System.Double
    description: Z value of first point
  -
    name: X1
    type: System.Double
    description: X value of second point
  -
    name: Y1
    type: System.Double
    description: Y value of second point
  -
    name: Z1
    type: System.Double
    description: Z value of second point
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.SplitOpenSegment
  - ISketchSegment
keywords:
  - splitclosedsegment
  - imodeldoc2
  - model
  - doc2
  - split
  - closed
  - segment
  - x0
  - double
  - y0
  - z0
  - x1
  - y1
  - z1
  - void
---

# IModelDoc2.SplitClosedSegment

Obsolete. Superseded by ISketchManager::SplitClosedSegment.

## Signature

```csharp
void SplitClosedSegment( 
   System.Double
X0
,
   System.Double
Y0
,
   System.Double
Z0
,
   System.Double
X1
,
   System.Double
Y1
,
   System.Double
Z1
)
```
## Parameters

- `X0` (System.Double): X value of first point
- `Y0` (System.Double): Y value of first point
- `Z0` (System.Double): Z value of first point
- `X1` (System.Double): X value of second point
- `Y1` (System.Double): Y value of second point
- `Z1` (System.Double): Z value of second point

## Return Value

Unknown.

## Remarks

The selected sketch segment must be a closed entity (for example, the start and end points must be the same). To split a closed sketch segment (for example, a complete circle) into two pieces, you must specify two points (x1, y1, z1) and (x2, y2, z2).

## See Also

- `IModelDoc2.SplitOpenSegment`
- `ISketchSegment`