---
type: method
interface: IMoveCopyBodyFeatureData
member: ISetBodies
returns: void
parameters:
  -
    name: NCount
    type: System.Int32
    description: Number of bodies to move or rotate and copy
  -
    name: PBodies
    type: Body2
    description: in-process, unmanaged C++: Pointer to an array of bodies of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMoveCopyBodyFeatureData.Bodies
  - IMoveCopyBodyFeatureData.GetBodiesCount
  - IMoveCopyBodyFeatureData.IGetBodies
keywords:
  - bodies
  - see
  - also
  - ibody2
  - move
  - copy
  - rotate
  - isetbodies
  - imovecopybodyfeaturedata
  - body
  - feature
  - data
  - count
  - int32
  - body2
  - void
---

# IMoveCopyBodyFeatureData.ISetBodies

Sets the bodies to move or rotate and copy.

## Signature

```csharp
void ISetBodies( 
   System.Int32
NCount
,
   ref Body2
PBodies
)
```
## Parameters

- `NCount` (System.Int32): Number of bodies to move or rotate and copy
- `PBodies` (Body2): in-process, unmanaged C++: Pointer to an array of bodies of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

Use:
IMoveCopyBodyFeatureData::Copy
to get whether to copy the bodies
IMoveCopyBodyFeatureData::TransformType
to get whether to move or rotate the bodies
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IMoveCopyBodyFeatureData.Bodies`
- `IMoveCopyBodyFeatureData.GetBodiesCount`
- `IMoveCopyBodyFeatureData.IGetBodies`