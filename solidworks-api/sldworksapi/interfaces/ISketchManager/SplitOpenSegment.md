---
type: method
interface: ISketchManager
member: SplitOpenSegment
returns: System.Object
parameters:
  -
    name: X
    type: System.Double
    description: X coordinate of the point that splits the sketch segment in two
  -
    name: Y
    type: System.Double
    description: Y coordinate of the point that splits the sketch segment in two
  -
    name: Z
    type: System.Double
    description: Z coordinate of the point that splits the sketch segment in two
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - file-io
  - sketches
related:
  - ISketchManager.SplitClosedSegment
keywords:
  - sketch
  - tools
  - split
  - segment
  - see
  - also
  - isketch
  - splitopensegment
  - isketchmanager
  - manager
  - open
  - double
  - object
  - vba
  - vb
  - net
---

# ISketchManager.SplitOpenSegment

Splits the selected open sketch segment into two sketch segments.

## Signature

```csharp
System.Object SplitOpenSegment( 
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

- `X` (System.Double): X coordinate of the point that splits the sketch segment in two
- `Y` (System.Double): Y coordinate of the point that splits the sketch segment in two
- `Z` (System.Double): Z coordinate of the point that splits the sketch segment in two

## Return Value

Array of sketch segments of the now split formerly open sketch skegment

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

- Split Open Sketch Segment (VBA) (Split_Open_Sketch_Segment_Example_VB.htm)
- Split Open Sketch Segment (VB.NET) (Split_Open_Sketch_Segment_Example_VBNET.htm)
- Split Open Sketch Segment (C#) (Split_Open_Sketch_Segment_Example_CSharp.htm)

## See Also

- `ISketchManager.SplitClosedSegment`