---
type: property
interface: IWeldmentCutListFeature
member: StrikeoutMissingItems
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWeldmentCutListFeature.KeepCurrentItemNumbers
  - IWeldmentCutListFeature.SequenceStartNumber
keywords:
  - strikeoutmissingitems
  - iweldmentcutlistfeature
  - weldment
  - cut
  - list
  - feature
  - strikeout
  - missing
  - items
  - boolean
readonly: null
---

# IWeldmentCutListFeature.StrikeoutMissingItems

Gets or sets whether to strike out missing items in the weldment cut list table.

## Signature

```csharp
System.Boolean StrikeoutMissingItems {get; set;}
```
## Parameters

None.

## Return Value

True to strike out missing items in the weldment cut list table, false to not

## Remarks

Use
IWeldmentCutListFeature::KeepMissingItems
to determine if missing cut list items are to be shown in the weldment cut list table.

## Examples

- IWeldmentCutListFeature (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWeldmentCutListFeature)

## See Also

- `IWeldmentCutListFeature.KeepCurrentItemNumbers`
- `IWeldmentCutListFeature.SequenceStartNumber`