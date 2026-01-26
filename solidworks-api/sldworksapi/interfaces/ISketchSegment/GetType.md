---
type: method
interface: ISketchSegment
member: GetType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - gettype
  - isketchsegment
  - sketch
  - segment
  - type
  - int32
  - find
  - total
  - length
  - segments
  - vba
  - all
  - elements
  - drawing
  - template
  - curve
  - data
  - whether
  - trimmed
  - insert
  - dxf
  - file
  - add
  - dimension
  - spline
  - parameters
  - vb
  - net
---

# ISketchSegment.GetType

Gets the type of sketch segment.

## Signature

```csharp
System.Int32 GetType()
```
## Parameters

None.

## Return Value

Type of sketch segment as defined in swSketchSegments_e

## Remarks

You can use this method to determine the segment type and the appropriate function calls allowed for the specific type. For example, if you determine that this sketch segment is a spline, then it is appropriate to call
ISketchSpline::GetPoints2
. VC++ COM implementations can also use QueryInterface to determine the underlying interface supported by this ISketchSegment object.

## Examples

- Find Total Length of Sketch Segments in Sketch (VBA) (Find_Total_Length_of_Sketch_Segments_in_Sketch_Example_VB.htm)
- Get All Elements of Sketch (VBA) (Get_All_Elements_of_Sketch_Example_VB.htm)
- Get All Sketch Segments in Drawing Template (VBA) (Get_All_Sketch_Segments_in_Drawing_Template_Example_VB.htm)
- Get Sketch Segment and Curve Data (VBA) (Get_Sketch_Segment_and_Curve_Data_Example_VB.htm)
- Get Whether Sketch Segment Is Trimmed (VBA) (Get_Whether_Sketch_Segment_is_Trimmed_or_Not_Example_VB.htm)
- Insert DXF File and Add Dimension (VBA) (Insert_DXF_File_and_Add_Dimension_Example_VB.htm)
- Get Spline's Parameters (C#) (Get_Spline's_Parameters_Example_CSharp.htm)
- Get Spline's Parameters (VB.NET) (Get_Spline's_Parameters_Example_VBNET.htm)
- Get Spline's Parameters (VBA) (Get_Spline's_Parameters_Example_VB.htm)