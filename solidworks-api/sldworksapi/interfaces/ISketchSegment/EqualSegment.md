---
type: method
interface: ISketchSegment
member: EqualSegment
returns: System.Boolean
parameters:
  -
    name: SketchType
    type: System.Int32
    description: Type of entity with which to divide this sketch segment as defined in swSketchSegmentType_e
  -
    name: SegmentPoints
    type: System.Int32
    description: 2 <= Number of sketchType entities into which to divide this sketch segment <= 100
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - equalsegment
  - isketchsegment
  - sketch
  - segment
  - equal
  - type
  - int32
  - points
  - boolean
  - divide
  - vba
  - vb
  - net
---

# ISketchSegment.EqualSegment

Divides this sketch segment into equally spaced sketch segments or points.

## Signature

```csharp
System.Boolean EqualSegment( 
   System.Int32
SketchType
,
   System.Int32
SegmentPoints
)
```
## Parameters

- `SketchType` (System.Int32): Type of entity with which to divide this sketch segment as defined in swSketchSegmentType_e
- `SegmentPoints` (System.Int32): 2 <= Number of sketchType entities into which to divide this sketch segment <= 100

## Return Value

True if successful, false if not

## Examples

- Divide Sketch Segment (VBA) (Divide_Sketch_Segment_Example_VB.htm)
- Divide Sketch Segment (VB.NET) (Divide_Sketch_Segment_Example_VBNET.htm)
- Divide Sketch Segment (C#) (Divide_Sketch_Segment_Example_CSharp.htm)