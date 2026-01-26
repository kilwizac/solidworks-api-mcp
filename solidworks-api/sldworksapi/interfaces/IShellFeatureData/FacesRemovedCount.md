---
type: property
interface: IShellFeatureData
member: FacesRemovedCount
returns: System.Int32
parameters: []
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
  - facesremovedcount
  - feature
  - data
  - count
  - int32
readonly: true
---

# IShellFeatureData.FacesRemovedCount

Gets the number of faces removed in this shell feature.

## Signature

```csharp
System.Int32 FacesRemovedCount {get;}
```
## Parameters

None.

## Return Value

Number of removed faces

## Remarks

Call this property before calling
IShellFeatureData::IGetFacesRemoved
to get the size of the array for that method.

## Examples

- IShellFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IShellFeatureData)

## See Also

- `IShellFeatureData.FacesRemoved`
- `IShellFeatureData.ISetFacesRemoved`