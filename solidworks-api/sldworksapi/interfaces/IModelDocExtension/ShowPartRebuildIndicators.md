---
type: property
interface: IModelDocExtension
member: ShowPartRebuildIndicators
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IFeature.HasFrozenUpdatePending
  - IModelDocExtension.NeedsRebuild2
keywords:
  - rebuild
  - featuremanager
  - design
  - tree
  - frozen
  - features
  - showpartrebuildindicators
  - imodeldocextension
  - model
  - doc
  - extension
  - show
  - part
  - indicators
  - boolean
  - move
  - freeze
  - bar
  - vba
  - vb
  - net
readonly: null
---

# IModelDocExtension.ShowPartRebuildIndicators

Gets or sets whether to display rebuild indicators on parts that have out-of-date frozen features.

## Signature

```csharp
System.Boolean ShowPartRebuildIndicators {get; set;}
```
## Parameters

None.

## Return Value

True to display rebuild indicators, false to not

## Examples

- Move Freeze Bar (VBA) (Move_Freeze_Bar_Example_VB.htm)
- Move Freeze Bar (VB.NET) (Move_Freeze_Bar_Example_VBNET.htm)
- Move Freeze Bar (C#) (Move_Freeze_Bar_Example_CSharp.htm)

## See Also

- `IFeature.HasFrozenUpdatePending`
- `IModelDocExtension.NeedsRebuild2`