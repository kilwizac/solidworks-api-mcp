---
type: property
interface: IMirrorComponentFeatureData
member: PropagateFromOriginalPart
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
  - parts
related: []
keywords:
  - propagatefromoriginalpart
  - imirrorcomponentfeaturedata
  - mirror
  - component
  - feature
  - data
  - propagate
  - original
  - part
  - boolean
readonly: null
---

# IMirrorComponentFeatureData.PropagateFromOriginalPart

Gets or sets whether to propagate visual properties from the orginal part to the opposite-hand versions.

## Signature

```csharp
System.Boolean PropagateFromOriginalPart {get; set;}
```
## Parameters

None.

## Return Value

True to propagate visual properties from the original part, false to not

## Remarks

This property is valid only if
IMirrorComponentFeatureData::CreateDerivedConfigurations
is false.

## Examples

- IMirrorComponentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorComponentFeatureData)