---
type: method
interface: IFeature
member: IGetAffectedFaces
returns: Face2
parameters:
  -
    name: NCount
    type: System.Int32
    description: Number of faces modified by a feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IFeature.GetAffectedFaceCount
  - IFeature.GetAffectedFaces
keywords:
  - face
  - see
  - also
  - iface2
  - feature
  - igetaffectedfaces
  - ifeature
  - affected
  - faces
  - count
  - int32
  - face2
---

# IFeature.IGetAffectedFaces

Gets the faces modified by a feature, such as a draft feature.

## Signature

```csharp
Face2 IGetAffectedFaces( 
   ref System.Int32
NCount
)
```
## Parameters

- `NCount` (System.Int32): Number of faces modified by a feature

## Return Value

in-process, unmanaged C++: Pointer to array of faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

To determine size the of the array, call
IFeature::GetAffectedFaceCount
before calling this method.

## See Also

- `IFeature.GetAffectedFaceCount`
- `IFeature.GetAffectedFaces`