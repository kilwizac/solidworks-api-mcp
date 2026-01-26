---
type: property
interface: IMoveCopyBodyFeatureData
member: TransformX
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMoveCopyBodyFeatureData.TransformY
  - IMoveCopyBodyFeatureData.TransformZ
keywords:
  - bodies
  - see
  - also
  - ibody2
  - move
  - copy
  - rotate
  - transformx
  - imovecopybodyfeaturedata
  - body
  - feature
  - data
  - transform
  - double
  - using
  - edge
  - vba
  - setting
  - transforms
  - modify
  - vertex
  - vb
  - net
readonly: null
---

# IMoveCopyBodyFeatureData.TransformX

Gets or sets the x coordinate for either moving or rotating the selected bodies.

## Signature

```csharp
System.Double TransformX {get; set;}
```
## Parameters

None.

## Return Value

x coordinate in meters for moving or radians for rotating

## Remarks

Use
IMoveCopyBodyFeatureData::TransformType
to get or set the transform type before setting this property.
IMoveCopyBodyFeatureData::TransformReferenceEntity
must be:
Nothing or null if moving the selected bodies.
- or -
a vertex if rotating the selected bodies.

## Examples

- Copy and Rotate Body Using Edge (VBA) (Copy_and_Rotate_Body_using_Edge_Example_VB.htm)
- Move and Copy Body By Setting Transforms (VBA) (Move_and_Copy_Body_by_Setting_Transforms_Example_VB.htm)
- Modify Move/Copy Body Using Vertex (C#) (Move_and_Copy_Body_Using_Vertex_Example_CSharp.htm)
- Modify Move/Copy Body Using Vertex (VB.NET) (Move_and_Copy_Body_Using_Vertex_Example_VBNET.htm)
- Modify Move/Copy Body Using Vertex (VBA) (Move_and_Copy_Body_using_Vertex_Example_VB.htm)

## See Also

- `IMoveCopyBodyFeatureData.TransformY`
- `IMoveCopyBodyFeatureData.TransformZ`