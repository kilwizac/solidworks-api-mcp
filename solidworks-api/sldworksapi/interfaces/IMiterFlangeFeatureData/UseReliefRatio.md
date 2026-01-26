---
type: property
interface: IMiterFlangeFeatureData
member: UseReliefRatio
returns: System.Boolean
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
  - usereliefratio
  - imiterflangefeaturedata
  - miter
  - flange
  - feature
  - data
  - use
  - relief
  - ratio
  - boolean
readonly: null
---

# IMiterFlangeFeatureData.UseReliefRatio

Gets or sets whether to use the specified relief ratio for this miter flange.

## Signature

```csharp
System.Boolean UseReliefRatio {get; set;}
```
## Parameters

None.

## Return Value

True to use the specified relief ratio, false to not

## Remarks

If this property is True, SOLIDWORKS uses
IMiterMiterFlangeFeatureData::ReliefRatio
. If it is false, SOLIDWORKS uses
IMiterFlangeFeatureData::ReliefDepth
and
IMiterFlangeFeatureData::ReliefWidth
.

## See Also

- `IMiterFlangeFeatureData.ReliefType`
- `IMiterFlangeFeatureData.UseDefaultBendRelief`