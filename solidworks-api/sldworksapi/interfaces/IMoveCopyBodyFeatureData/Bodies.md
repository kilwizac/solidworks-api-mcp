---
type: property
interface: IMoveCopyBodyFeatureData
member: Bodies
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMoveCopyBodyFeatureData.GetBodiesCount
  - IMoveCopyBodyFeatureData.IGetBodies
  - IMoveCopyBodyFeatureData.ISetBodies
keywords:
  - bodies
  - see
  - also
  - ibody2
  - move
  - copy
  - rotate
  - imovecopybodyfeaturedata
  - body
  - feature
  - data
  - object
  - vb
  - net
  - vba
readonly: null
---

# IMoveCopyBodyFeatureData.Bodies

Gets or sets the bodies to move or rotate and copy.

## Signature

```csharp
System.Object Bodies {get; set;}
```
## Parameters

None.

## Return Value

Array of bodies to move or rotate and copy

## Remarks

Use:
IMoveCopyBodyFeatureData::Copy
to get whether to copy the bodies
IMoveCopyBodyFeatureData::TransformType
to get whether to move or rotate the bodies
See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- Set Bodies for Move/Copy (C#) (Set_Bodies_for_Move_Copy_Example_CSharp.htm)
- Set Bodies for Move/Copy (VB.NET) (Set_Bodies_for_Move_Copy_Example_VBNET.htm)
- Set Bodies for Move/Copy (VBA) (Set_Bodies_for_Move_Copy_Example_VB.htm)

## See Also

- `IMoveCopyBodyFeatureData.GetBodiesCount`
- `IMoveCopyBodyFeatureData.IGetBodies`
- `IMoveCopyBodyFeatureData.ISetBodies`