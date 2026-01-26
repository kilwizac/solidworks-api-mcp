---
type: property
interface: ILoftedBendsFeatureData
member: ReferToEndPoint
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILoftedBendsFeatureData.FacetValue
  - ILoftedBendsFeatureData.FacetingOption
  - ILoftedBendsFeatureData.FormedMethod
keywords:
  - refertoendpoint
  - iloftedbendsfeaturedata
  - lofted
  - bends
  - feature
  - data
  - refer
  - end
  - point
  - boolean
readonly: null
---

# ILoftedBendsFeatureData.ReferToEndPoint

Gets or sets whether to calculate facet transitions using theoretical vertexes.

## Signature

```csharp
System.Boolean ReferToEndPoint {get; set;}
```
## Parameters

None.

## Return Value

True to calculate facet transitions using theoretical vertexes, false to calculate them using the smallest possible arcs that avoid interference between bend areas

## Remarks

This property is valid only if
ILoftedBendsFeatureData::FormedMethod
is false.

## Examples

- ILoftedBendsFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ILoftedBendsFeatureData)

## See Also

- `ILoftedBendsFeatureData.FacetValue`
- `ILoftedBendsFeatureData.FacetingOption`
- `ILoftedBendsFeatureData.FormedMethod`