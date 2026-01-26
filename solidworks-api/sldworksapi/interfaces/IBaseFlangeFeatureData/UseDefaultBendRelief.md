---
type: property
interface: IBaseFlangeFeatureData
member: UseDefaultBendRelief
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - usedefaultbendrelief
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - use
  - default
  - bend
  - relief
  - boolean
readonly: true
---

# IBaseFlangeFeatureData.UseDefaultBendRelief

Gets whether this base flange uses the bend relief from the original sheet metal feature.

## Signature

```csharp
System.Boolean UseDefaultBendRelief {get;}
```
## Parameters

None.

## Return Value

True uses the default bend relief, false uses a custom bend relief (see Remarks )

## Remarks

If this property is false, then you can get the type of bend relief and whether a relief ratiois used. Both were set during
initialization
of this base flange:
IBaseFlangeFeatureData::ReliefType
IBaseFlangeFeatureData::UseReliefRatio
If IBaseFlangeFeatureData::UseReliefRatio is:
True, then you can use
IBaseFlangeFeatureData::ReliefRatio
to get the relief ratio
False, then you can use
IBaseFlangeFeatureData::ReliefDepth
and
IBaseFlangeFeatureData::ReliefWidth
to get the relief depth and width.
Whether to use the default bend relief was set during the
initialization
of this base flange and cannot be changed.

## Examples

- IBaseFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBaseFlangeFeatureData)