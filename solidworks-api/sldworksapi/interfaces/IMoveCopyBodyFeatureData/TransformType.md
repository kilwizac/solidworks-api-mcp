---
type: property
interface: IMoveCopyBodyFeatureData
member: TransformType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - bodies
  - see
  - also
  - ibody2
  - move
  - copy
  - rotate
  - transformtype
  - imovecopybodyfeaturedata
  - body
  - feature
  - data
  - transform
  - type
  - int32
  - using
  - edge
  - vba
  - modify
  - vertex
  - vb
  - net
readonly: null
---

# IMoveCopyBodyFeatureData.TransformType

Gets or sets whether to move or rotate the selected bodies.

## Signature

```csharp
System.Int32 TransformType {get; set;}
```
## Parameters

None.

## Return Value

Move or rotate the selected bodies as defined in swMoveCopyBodyFeatureTransformType_e

## Remarks

Use this property to get or set the transform type before setting any of these properties:
IMoveCopyBodyFeatureData::TransformX
IMoveCopyBodyFeatureData::TransformY
IMoveCopyBodyFeatureData::TransformZ

## Examples

- Copy and Rotate Body Using Edge (VBA) (Copy_and_Rotate_Body_using_Edge_Example_VB.htm)
- Modify Move/Copy Body Using Vertex (C#) (Move_and_Copy_Body_Using_Vertex_Example_CSharp.htm)
- Modify Move/Copy Body Using Vertex (VB.NET) (Move_and_Copy_Body_Using_Vertex_Example_VBNET.htm)
- Modify Move/Copy Body Using Vertex (VBA) (Move_and_Copy_Body_using_Vertex_Example_VB.htm)