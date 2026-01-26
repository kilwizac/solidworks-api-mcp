---
type: method
interface: IStructuralMemberFeatureData
member: GetSketchSegments
returns: System.Object
parameters:
  -
    name: PBodyIn
    type: Body2
    description: IBody2 whose path sketch segments to get
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related: []
keywords:
  - getsketchsegments
  - istructuralmemberfeaturedata
  - structural
  - member
  - feature
  - data
  - sketch
  - segments
  - body
  - body2
  - object
  - vba
  - vb
  - net
---

# IStructuralMemberFeatureData.GetSketchSegments

Gets the sketch segments that define the path of the specified structural member body.

## Signature

```csharp
System.Object GetSketchSegments( 
   Body2
PBodyIn
)
```
## Parameters

- `PBodyIn` (Body2): IBody2 whose path sketch segments to get

## Return Value

Array of ISketchSegment s

## Examples

- Get Structural Member Body Sketch Segments (VBA) (Get_Structural_Member_Body_Sketch_Segments_Example_VB.htm)
- Get Structural Member Body Sketch Segments (VB.NET) (Get_Structural_Member_Body_Sketch_Segments_Example_VBNET.htm)
- Get Structural Member Body Sketch Segments (C#) (Get_Structural_Member_Body_Sketch_Segments_Example_CSharp.htm)