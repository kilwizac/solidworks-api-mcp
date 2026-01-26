---
type: property
interface: IWeldmentCutListFeature
member: KeepMissingItems
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
  - keepmissingitems
  - iweldmentcutlistfeature
  - weldment
  - cut
  - list
  - feature
  - keep
  - missing
  - items
  - boolean
readonly: null
---

# IWeldmentCutListFeature.KeepMissingItems

Gets or sets whether to continue to show cut list items that were deleted from the weldment in the weldment cut list table.

## Signature

```csharp
System.Boolean KeepMissingItems {get; set;}
```
## Parameters

None.

## Return Value

True to keep missing cut list items, false to not

## Remarks

Use
IWeldmentCutListFeature::StrikeoutMissingItems
to determine if deleted items are to be shown with strikeout formatting in the weldment cut list table.

## See Also

- `IWeldmentCutListFeature.KeepCurrentItemNumbers`
- `IWeldmentCutListFeature.SequenceStartNumber`