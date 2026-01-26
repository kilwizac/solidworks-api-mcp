---
type: property
interface: IMiterFlangeFeatureData
member: BendRadius
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - bend
  - radius
  - bendradius
  - imiterflangefeaturedata
  - miter
  - flange
  - feature
  - data
  - double
readonly: null
---

# IMiterFlangeFeatureData.BendRadius

Gets or sets the bend radius for this miter flange feature.

## Signature

```csharp
System.Double BendRadius {get; set;}
```
## Parameters

None.

## Return Value

Bend radius in meters

## Remarks

This property is only used when
IMiterFlangeFeatureData::UseDefaultBendRadius
is True.

## Examples

- IMiterFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMiterFlangeFeatureData)