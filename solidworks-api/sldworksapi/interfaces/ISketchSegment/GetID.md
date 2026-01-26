---
type: method
interface: ISketchSegment
member: GetID
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSegment.IGetID
keywords:
  - id
  - sketch
  - segment
  - getid
  - isketchsegment
  - object
  - all
  - elements
  - vba
  - segments
  - drawing
  - template
  - names
  - curve
  - data
  - whether
  - trimmed
  - relations
  - vb
  - net
---

# ISketchSegment.GetID

Gets the for this sketch segment.

## Signature

```csharp
System.Object GetID()
```
## Parameters

None.

## Return Value

Array with two longs or integers (see Long vs. Integer ) identifying this sketch segment ID

## Remarks

The ID of the sketch segment:
is an ordered pair (i1, i2). For the specific sketch segment type, for example, line, arc, spline, and so on), the combination of these two numbers is always unique within a specific sketch.
cannot be assigned by applications or users.
is not the same as a
persistent reference ID
.
Each entity within a specific sketch has a unique ID. However, a sketch line may have the same ID values as a sketch arc within the same sketch. Likewise, in a second sketch, you may find a different sketch element with the same ID Therefore, your application must keep track of:
sketch element type (that is, point, line, arc, spline, and so on)
owning sketch name
sketch element id to uniquely identify a sketched item
You can determine the sketch element type by using
ISketchSegment::GetType
.

## Examples

- Get All Elements of Sketch (VBA) (Get_All_Elements_of_Sketch_Example_VB.htm)
- Get All Sketch Segments in Drawing Template (VBA) (Get_All_Sketch_Segments_in_Drawing_Template_Example_VB.htm)
- Get Names of Sketch Segments (VBA) (Get_Names_of_Sketch_Segments_Example_VB.htm)
- Get Sketch Segment and Curve Data (VBA) (Get_Sketch_Segment_and_Curve_Data_Example_VB.htm)
- Get Whether Sketch Segment is Trimmed (VBA) (Get_Whether_Sketch_Segment_is_Trimmed_or_Not_Example_VB.htm)
- Get Sketch Relations (VBA) (Get_Sketch_Relations_Example_VB.htm)
- Get Sketch Relations (VB.NET) (Get_Sketch_Relations_Example_VBNET.htm)
- Get Sketch Relations (C#) (Get_Sketch_Relations_Example_CSharp.htm)

## See Also

- `ISketchSegment.IGetID`