---
type: property
interface: ICosmeticWeldBeadFeatureData
member: FromToLength
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - fromtolength
  - icosmeticweldbeadfeaturedata
  - cosmetic
  - weld
  - bead
  - feature
  - data
  - length
  - boolean
readonly: null
---

# ICosmeticWeldBeadFeatureData.FromToLength

Gets or sets whether to enable the from/to length properties.

## Signature

```csharp
System.Boolean FromToLength {get; set;}
```
## Parameters

None.

## Return Value

True to enable the from/to length properties, false to not (see Remarks )

## Remarks

This property is valid only if:
ICosmeticWeldBeadFeatureData::TangentPropagation
is true
- or -
ICosmeticWeldBeadFeatureData::Side
is either
swCosmeticWeldBeadSide_e
.swCosmeticWeldBeadSide_Selection or swCosmeticWeldBeadSide_e.swCosmeticWeldBeadSide_BothSides.
If this property is true, you can use the following properties:
ICosmeticWeldBeadFeatureData::FromToStartPoint
ICosmeticWeldBeadFeatureData::FromToReverse
ICosmeticWeldBeadFeatureData::FromToWeldLength

## Examples

- ICosmeticWeldBeadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICosmeticWeldBeadFeatureData)