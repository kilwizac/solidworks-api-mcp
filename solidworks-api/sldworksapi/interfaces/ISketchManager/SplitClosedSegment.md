---
type: method
interface: ISketchManager
member: SplitClosedSegment
returns: System.Object
parameters:
  -
    name: X1
    type: System.Double
    description: X coordinate of first point
  -
    name: Y1
    type: System.Double
    description: Y coordinate of first point
  -
    name: Z1
    type: System.Double
    description: Z coordinate of first point
  -
    name: X2
    type: System.Double
    description: X coordinate of second point
  -
    name: Y2
    type: System.Double
    description: Y coordinate of second point
  -
    name: Z2
    type: System.Double
    description: Z coordinate of second point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.SplitOpenSegment
keywords:
  - sketch
  - tools
  - split
  - segment
  - see
  - also
  - isketch
  - splitclosedsegment
  - isketchmanager
  - manager
  - closed
  - x1
  - double
  - y1
  - z1
  - x2
  - y2
  - z2
  - object
  - vba
  - vb
  - net
---

# ISketchManager.SplitClosedSegment

Splits the selected closed sketch segment into two sketch segments.

## Signature

```csharp
System.Object SplitClosedSegment( 
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

- `X1` (System.Double): X coordinate of first point
- `Y1` (System.Double): Y coordinate of first point
- `Z1` (System.Double): Z coordinate of first point
- `X2` (System.Double): X coordinate of second point
- `Y2` (System.Double): Y coordinate of second point
- `Z2` (System.Double): Z coordinate of second point

## Return Value

Array of sketch segments of the now split formerly closed sketch skegment

## Remarks

Before calling this method, be sure to disable snapping by either:
De-selecting
System Options > Sketch > Relations/Snaps > Enable snapping
- or -
Calling
ISldWorks::SetUserPreferenceToggle
(
swUserPreferenceToggle_e
.swSketchInference, false).

## Examples

- Split Closed Sketch Segment (VBA) (Split_Closed_Sketch_Segment_Example_VB.htm)
- Split Closed Sketch Segment (VB.NET) (Split_Closed_Sketch_Segment_Example_VBNET.htm)
- Split Closed Sketch Segment (C#) (Split_Closed_Sketch_Segment_Example_CSharp.htm)

## See Also

- `ISketchManager.SplitOpenSegment`