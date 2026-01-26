---
type: method
interface: IShellFeatureData
member: ISetFacesRemoved
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of faces
  -
    name: FaceArray
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of faces to remove of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IShellFeatureData.FacesRemoved
  - IShellFeatureData.FacesRemovedCount
  - IShellFeatureData.IGetFacesRemoved
keywords:
  - shell
  - see
  - also
  - ishellfeaturedata
  - removed
  - faces
  - isetfacesremoved
  - feature
  - data
  - count
  - int32
  - face
  - array
  - object
  - void
---

# IShellFeatureData.ISetFacesRemoved

Sets the faces to remove in this shell feature.

## Signature

```csharp
void ISetFacesRemoved( 
   System.Int32
Count
,
   ref System.Object
FaceArray
)
```
## Parameters

- `Count` (System.Int32): Number of faces
- `FaceArray` (System.Object): in-process, unmanaged C++: Pointer to an array of faces to remove of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `IShellFeatureData.FacesRemoved`
- `IShellFeatureData.FacesRemovedCount`
- `IShellFeatureData.IGetFacesRemoved`