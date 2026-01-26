---
type: property
interface: ICosmeticWeldBeadFeatureData
member: IntermittentWeld
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - intermittentweld
  - icosmeticweldbeadfeaturedata
  - cosmetic
  - weld
  - bead
  - feature
  - data
  - intermittent
  - boolean
readonly: null
---

# ICosmeticWeldBeadFeatureData.IntermittentWeld

Gets or sets whether to enable intermittent weld properties.

## Signature

```csharp
System.Boolean IntermittentWeld {get; set;}
```
## Parameters

None.

## Return Value

True to enable intermittent weld properties, false to not (see Remarks )

## Remarks

If this property is true, you can use the following properties:
ICosmeticWeldBeadFeatureData::Gap
ICosmeticWeldBeadFeatureData::GapOrPitch
ICosmeticWeldBeadFeatureData::Pitch
ICosmeticWeldBeadFeatureData::IntermittentWeldLength
ICosmeticWeldBeadFeatureData::Staggered

## Examples

- ICosmeticWeldBeadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICosmeticWeldBeadFeatureData)