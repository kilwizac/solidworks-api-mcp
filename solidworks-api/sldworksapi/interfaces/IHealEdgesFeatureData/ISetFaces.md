---
type: method
interface: IHealEdgesFeatureData
member: ISetFaces
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of faces whose edges were healed
  -
    name: EntIn
    type: Face2
    description: in-process, unmanaged C++: Pointer to faces whose edges were healed VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IHealEdgesFeatureData.Faces
  - IHealEdgesFeatureData.IGetFaces
keywords:
  - isetfaces
  - ihealedgesfeaturedata
  - heal
  - edges
  - feature
  - data
  - faces
  - count
  - int32
  - ent
  - face2
  - void
---

# IHealEdgesFeatureData.ISetFaces

Gets the faces whose edges were healed.

## Signature

```csharp
void ISetFaces( 
   System.Int32
Count
,
   ref Face2
EntIn
)
```
## Parameters

- `Count` (System.Int32): Number of faces whose edges were healed
- `EntIn` (Face2): in-process, unmanaged C++: Pointer to faces whose edges were healed VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## See Also

- `IHealEdgesFeatureData.Faces`
- `IHealEdgesFeatureData.IGetFaces`