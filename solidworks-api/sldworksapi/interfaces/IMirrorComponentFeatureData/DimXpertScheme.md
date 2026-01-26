---
type: property
interface: IMirrorComponentFeatureData
member: DimXpertScheme
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - dimxpertscheme
  - imirrorcomponentfeaturedata
  - mirror
  - component
  - feature
  - data
  - dim
  - xpert
  - scheme
  - boolean
readonly: null
---

# IMirrorComponentFeatureData.DimXpertScheme

Gets or sets whether to copy the DimXpert scheme of the original components to the opposite-hand versions.

## Signature

```csharp
System.Boolean DimXpertScheme {get; set;}
```
## Parameters

None.

## Return Value

True to copy the DimXpert scheme, false (default) to not

## Remarks

This property is valid only if:
IMirrorComponentFeatureData::CreateDerivedConfigurations
is false,
- and -
IMirrorComponentFeatureData::BreakLinksToOriginalPart
is false.

## Examples

- IMirrorComponentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorComponentFeatureData)