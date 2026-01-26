---
type: property
interface: ICosmeticWeldBeadFeatureData
member: Side
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - side
  - icosmeticweldbeadfeaturedata
  - cosmetic
  - weld
  - bead
  - feature
  - data
  - int32
readonly: null
---

# ICosmeticWeldBeadFeatureData.Side

Gets or sets how the weld bead is applied to selected faces or edges.

## Signature

```csharp
System.Int32 Side {get; set;}
```
## Parameters

None.

## Return Value

Weld bead configuration as defined in swCosmeticWeldBeadSide_e

## Remarks

This property is valid only if
ICosmeticWeldBeadFeatureData::TangentPropagation
is false.

## Examples

- ICosmeticWeldBeadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICosmeticWeldBeadFeatureData)