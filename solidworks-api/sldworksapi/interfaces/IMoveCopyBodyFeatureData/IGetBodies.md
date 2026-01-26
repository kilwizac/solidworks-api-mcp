---
type: method
interface: IMoveCopyBodyFeatureData
member: IGetBodies
returns: Body2
parameters:
  -
    name: NCount
    type: System.Int32
    description: Number of bodies to move or rotate and copy
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
  - igetbodies
  - imovecopybodyfeaturedata
  - body
  - feature
  - data
  - count
  - int32
  - body2
---

# IMoveCopyBodyFeatureData.IGetBodies

Gets the bodies to move or rotate and copy.

## Signature

```csharp
Body2 IGetBodies( 
   System.Int32
NCount
)
```
## Parameters

- `NCount` (System.Int32): Number of bodies to move or rotate and copy

## Return Value

in-process, unmanaged C++: Pointer to an array of bodies of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IMoveCopyBodyFeatureData::GetBodiesCount
before calling this method.
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
- `IMoveCopyBodyFeatureData.ISetBodies`