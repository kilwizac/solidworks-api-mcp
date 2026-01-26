---
type: method
interface: IShellFeatureData
member: IGetFacesRemoved
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of removed faces
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IShellFeatureData.FacesRemoved
  - IShellFeatureData.ISetFacesRemoved
keywords:
  - shell
  - see
  - also
  - ishellfeaturedata
  - removed
  - faces
  - igetfacesremoved
  - feature
  - data
  - count
  - int32
  - object
---

# IShellFeatureData.IGetFacesRemoved

Gets the faces removed in this shell feature.

## Signature

```csharp
System.Object IGetFacesRemoved( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of removed faces

## Return Value

in-process, unmanaged C++: Pointer to an array of removed faces of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IShellFeatureData::FacesRemovedCount
before calling this method to get the size of the array for this method.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IShellFeatureData.FacesRemoved`
- `IShellFeatureData.ISetFacesRemoved`