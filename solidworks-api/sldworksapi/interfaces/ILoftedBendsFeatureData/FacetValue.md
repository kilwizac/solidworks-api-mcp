---
type: property
interface: ILoftedBendsFeatureData
member: FacetValue
returns: System.Double
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
  - facetvalue
  - iloftedbendsfeaturedata
  - lofted
  - bends
  - feature
  - data
  - facet
  - value
  - double
readonly: null
---

# ILoftedBendsFeatureData.FacetValue

Gets or sets the value corresponding to ILoftedBendsFeatureData::FacetingOption.

## Signature

```csharp
System.Double FacetValue {get; set;}
```
## Parameters

None.

## Return Value

Faceting option value

## Remarks

This property is valid only if
ILoftedBendsFeatureData::FormedMethod
is false.

## Examples

- ILoftedBendsFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ILoftedBendsFeatureData)

## See Also

- `ILoftedBendsFeatureData.ReferToEndPoint`