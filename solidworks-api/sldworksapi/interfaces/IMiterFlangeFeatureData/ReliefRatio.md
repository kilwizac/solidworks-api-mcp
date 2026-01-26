---
type: property
interface: IMiterFlangeFeatureData
member: ReliefRatio
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
  - reliefratio
  - imiterflangefeaturedata
  - miter
  - flange
  - feature
  - data
  - relief
  - ratio
  - double
readonly: null
---

# IMiterFlangeFeatureData.ReliefRatio

gets or sets the relief ratio for this miter flange.

## Signature

```csharp
System.Double ReliefRatio {get; set;}
```
## Parameters

None.

## Return Value

Relief ratio for rectangular or obround miter flanges

## Remarks

SOLIDWORKS uses this property only if
IMiterMiterFlangeFeatureData::UseReliefRatio
is True. If IMiterMiterFlangeFeatureData::UseReliefRatio is false, then SOLIDWORKS uses
IMiterFlangeFeatureData::ReliefDepth
with
IMiterFlangeFeatureData::ReliefWidth
.

## See Also

- `IMiterFlangeFeatureData.ReliefType`
- `IMiterFlangeFeatureData.UseDefaultBendRelief`