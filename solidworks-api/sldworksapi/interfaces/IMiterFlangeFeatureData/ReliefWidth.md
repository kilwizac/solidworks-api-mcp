---
type: property
interface: IMiterFlangeFeatureData
member: ReliefWidth
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
  - reliefwidth
  - imiterflangefeaturedata
  - miter
  - flange
  - feature
  - data
  - relief
  - width
  - double
readonly: null
---

# IMiterFlangeFeatureData.ReliefWidth

Gets or sets the relief width for this miter flange.

## Signature

```csharp
System.Double ReliefWidth {get; set;}
```
## Parameters

None.

## Return Value

Relief width for this miter flange

## Remarks

SOLIDWORKS uses this property with
IMiterFlangeFeatureData::ReliefDepth
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