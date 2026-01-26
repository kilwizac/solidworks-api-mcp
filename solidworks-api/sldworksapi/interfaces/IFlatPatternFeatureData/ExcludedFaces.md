---
type: property
interface: IFlatPatternFeatureData
member: ExcludedFaces
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IFlatPatternFeatureData.IGetExcludedFaces
  - IFlatPatternFeatureData.ISetExcludedFaces
keywords:
  - face
  - see
  - also
  - iface2
  - flat
  - pattern
  - features
  - excludedfaces
  - iflatpatternfeaturedata
  - feature
  - data
  - excluded
  - faces
  - object
  - exclude
  - before
  - flattening
  - vba
  - vb
  - net
readonly: null
---

# IFlatPatternFeatureData.ExcludedFaces

Gets and sets the faces to exclude from this Flat-Pattern feature.

## Signature

```csharp
System.Object ExcludedFaces {get; set;}
```
## Parameters

None.

## Return Value

Array of IFace2s

## Remarks

To get the size of the array returned by this method, call
IFlatPatternFeatureData::IGetExcludedFacesCount
.
See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- Exclude Faces Before Flattening (VBA) (Exclude_Faces_Before_Flattening_Example_VB.htm)
- Exclude Faces Before Flattening (VB.NET) (Exclude_Faces_Before_Flattening_Example_VBNET.htm)
- Exclude Faces Before Flattening (C#) (Exclude_Faces_Before_Flattening_Example_CSharp.htm)

## See Also

- `IFlatPatternFeatureData.IGetExcludedFaces`
- `IFlatPatternFeatureData.ISetExcludedFaces`