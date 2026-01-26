---
type: method
interface: IFlatPatternFeatureData
member: IGetExcludedFacesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IFlatPatternFeatureData.ISetExcludedFaces
keywords:
  - face
  - see
  - also
  - iface2
  - flat
  - pattern
  - features
  - igetexcludedfacescount
  - iflatpatternfeaturedata
  - feature
  - data
  - excluded
  - faces
  - count
  - int32
---

# IFlatPatternFeatureData.IGetExcludedFacesCount

Gets the number of faces that are excluded from this Flat-Pattern feature.

## Signature

```csharp
System.Int32 IGetExcludedFacesCount()
```
## Parameters

None.

## Return Value

Number of excluded faces

## Remarks

Call this method to get the size of the array returned by
IFlatPatternFeatureData::IGetExcludedFaces
and
IFlatPatternFeatureData::ExcludedFaces
.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IFlatPatternFeatureData.ISetExcludedFaces`