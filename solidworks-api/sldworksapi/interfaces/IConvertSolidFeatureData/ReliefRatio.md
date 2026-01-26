---
type: property
interface: IConvertSolidFeatureData
member: ReliefRatio
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - reliefratio
  - iconvertsolidfeaturedata
  - convert
  - solid
  - feature
  - data
  - relief
  - ratio
  - double
readonly: null
---

# IConvertSolidFeatureData.ReliefRatio

Gets or sets the bend relief ratio for this convert solid feature.

## Signature

```csharp
System.Double ReliefRatio {get; set;}
```
## Parameters

None.

## Return Value

0.05 <= Relief ratio <= 2.0

## Remarks

The setter of this property is valid only if:
IConvertSolidFeatureData::OverrideDefaultAutoReliefParameters
is true
- and -
ReliefType is Rectangular or Obround.
Relief ratio = d / part thickness,
where:
d = the width of the relief cut and the depth by which it extends past the bend region

## Examples

- IConvertSolidFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IConvertSolidFeatureData)