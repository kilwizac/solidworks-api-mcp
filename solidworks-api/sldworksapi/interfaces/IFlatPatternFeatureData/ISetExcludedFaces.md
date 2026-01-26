---
type: method
interface: IFlatPatternFeatureData
member: ISetExcludedFaces
returns: void
parameters:
  -
    name: FaceCount
    type: System.Int32
    description: Number of faces to exclude
  -
    name: FaceArray
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of IFace2s to exclude VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IFlatPatternFeatureData.ExcludedFaces
  - IFlatPatternFeatureData.IGetExcludedFaces
  - IFlatPatternFeatureData.IGetExcludedFacesCount
keywords:
  - face
  - see
  - also
  - iface2
  - flat
  - pattern
  - features
  - isetexcludedfaces
  - iflatpatternfeaturedata
  - feature
  - data
  - excluded
  - faces
  - count
  - int32
  - array
  - object
  - void
---

# IFlatPatternFeatureData.ISetExcludedFaces

Sets the faces to exclude from this Flat-Pattern feature.

## Signature

```csharp
void ISetExcludedFaces( 
   System.Int32
FaceCount
,
   ref System.Object
FaceArray
)
```
## Parameters

- `FaceCount` (System.Int32): Number of faces to exclude
- `FaceArray` (System.Object): in-process, unmanaged C++: Pointer to an array of IFace2s to exclude VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IFlatPatternFeatureData.ExcludedFaces`
- `IFlatPatternFeatureData.IGetExcludedFaces`
- `IFlatPatternFeatureData.IGetExcludedFacesCount`