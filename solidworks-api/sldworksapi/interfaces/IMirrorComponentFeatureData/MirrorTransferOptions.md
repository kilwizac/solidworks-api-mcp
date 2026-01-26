---
type: property
interface: IMirrorComponentFeatureData
member: MirrorTransferOptions
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - mirrortransferoptions
  - imirrorcomponentfeaturedata
  - mirror
  - component
  - feature
  - data
  - transfer
  - options
  - int32
readonly: null
---

# IMirrorComponentFeatureData.MirrorTransferOptions

Gets or sets the items to transfer to the opposite-hand versions.

## Signature

```csharp
System.Int32 MirrorTransferOptions {get; set;}
```
## Parameters

None.

## Return Value

Items to transfer as defined in swMirrorPartOptions_e

## Remarks

This property is valid only if:
IMirrorComponentFeatureData::CreateDerivedConfigurations
is false,
- and -
IMirrorComponentFeatureData::BreakLinksToOriginalPart
is false.
If not set, this property defaults to swMirrorPartOptions_e.swMirrorPartoptions_ImportSolids.

## Examples

- IMirrorComponentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorComponentFeatureData)