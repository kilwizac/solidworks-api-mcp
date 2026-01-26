---
type: method
interface: IMoveCopyBodyFeatureData
member: GetBodiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMoveCopyBodyFeatureData.Bodies
  - IMoveCopyBodyFeatureData.ISetBodies
keywords:
  - bodies
  - see
  - also
  - ibody2
  - move
  - copy
  - rotate
  - getbodiescount
  - imovecopybodyfeaturedata
  - body
  - feature
  - data
  - count
  - int32
  - modify
  - using
  - vertex
  - vb
  - net
  - vba
---

# IMoveCopyBodyFeatureData.GetBodiesCount

Gets the number of bodies to move or rotate and copy.

## Signature

```csharp
System.Int32 GetBodiesCount()
```
## Parameters

None.

## Return Value

Number of bodies to move or rotate and copy

## Remarks

Call this method before calling
IMoveCopyBodyFeatureData::IGetBodies
.

## Examples

- Modify Move/Copy Body Using Vertex (C#) (Move_and_Copy_Body_Using_Vertex_Example_CSharp.htm)
- Modify Move/Copy Body Using Vertex (VB.NET) (Move_and_Copy_Body_Using_Vertex_Example_VBNET.htm)
- Modify Move/Copy Body Using Vertex (VBA) (Move_and_Copy_Body_using_Vertex_Example_VB.htm)

## See Also

- `IMoveCopyBodyFeatureData.Bodies`
- `IMoveCopyBodyFeatureData.ISetBodies`