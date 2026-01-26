---
type: property
interface: IMiterFlangeFeatureData
member: ReliefDepth
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMiterFlangeFeatureData.ReliefType
  - IMiterFlangeFeatureData.UseDefaultBendRelief
keywords:
  - reliefs
  - reliefdepth
  - imiterflangefeaturedata
  - miter
  - flange
  - feature
  - data
  - relief
  - depth
  - double
readonly: null
---

# IMiterFlangeFeatureData.ReliefDepth

Gets or sets the relief depth for this miter flange.

## Signature

```csharp
System.Double ReliefDepth {get; set;}
```
## Parameters

None.

## Return Value

Relief depth of this miter flange

## Remarks

SOLIDWORKS uses this property with
IMiterFlangeFeatureData::ReliefWidth
only if
IMiterMiterFlangeFeatureData::UseReliefRatio
is false. If
IMiterMiterFlangeFeatureData::UseReliefRatio
is True, then SOLIDWORKS uses
IMiterMiterFlangeFeatureData::ReliefRatio
.

## See Also

- `IMiterFlangeFeatureData.ReliefType`
- `IMiterFlangeFeatureData.UseDefaultBendRelief`