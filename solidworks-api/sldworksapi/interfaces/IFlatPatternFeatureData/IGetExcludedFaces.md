---
type: method
interface: IFlatPatternFeatureData
member: IGetExcludedFaces
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IFlatPatternFeatureData.ExcludedFaces
  - IFlatPatternFeatureData.ISetExcludedFaces
keywords:
  - face
  - see
  - also
  - iface2
  - flat
  - pattern
  - features
  - igetexcludedfaces
  - iflatpatternfeaturedata
  - feature
  - data
  - excluded
  - faces
  - object
---

# IFlatPatternFeatureData.IGetExcludedFaces

Gets the faces that are excluded from this Flat-Pattern feature.

## Signature

```csharp
System.Object IGetExcludedFaces()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of IFace2s VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

To get the size of the array returned by this method, call
IFlatPatternFeatureData::IGetExcludedFacesCount
.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IFlatPatternFeatureData.ExcludedFaces`
- `IFlatPatternFeatureData.ISetExcludedFaces`