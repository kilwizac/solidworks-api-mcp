---
type: property
interface: ILoftedBendsFeatureData
member: FacetingOption
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ILoftedBendsFeatureData.ReferToEndPoint
keywords:
  - facetingoption
  - iloftedbendsfeaturedata
  - lofted
  - bends
  - feature
  - data
  - faceting
  - option
  - int32
readonly: null
---

# ILoftedBendsFeatureData.FacetingOption

Gets or sets how facets are created in this lofted bend feature.

## Signature

```csharp
System.Int32 FacetingOption {get; set;}
```
## Parameters

None.

## Return Value

Faceting option as defined in swLoftedBendFacetOptions_e

## Remarks

This property is valid only if
ILoftedBendsFeatureData::FormedMethod
is false.
After setting this property, set
ILoftedBendsFeatureData::FacetValue
.

## Examples

- ILoftedBendsFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ILoftedBendsFeatureData)

## See Also

- `ILoftedBendsFeatureData.ReferToEndPoint`