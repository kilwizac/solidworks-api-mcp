---
type: method
interface: IHealEdgesFeatureData
member: IGetFaces
returns: Face2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of faces whose edges to heal
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IHealEdgesFeatureData.Faces
  - IHealEdgesFeatureData.ISetFaces
keywords:
  - igetfaces
  - ihealedgesfeaturedata
  - heal
  - edges
  - feature
  - data
  - faces
  - count
  - int32
  - face2
---

# IHealEdgesFeatureData.IGetFaces

Gets the faces whose edges to heal.

## Signature

```csharp
Face2 IGetFaces( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of faces whose edges to heal

## Return Value

in-process, unmanaged C++: Pointer to an array of faces whose edges to heal VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IHealEdgesFeatureData::GetFacesCount
before using this method.

## See Also

- `IHealEdgesFeatureData.Faces`
- `IHealEdgesFeatureData.ISetFaces`