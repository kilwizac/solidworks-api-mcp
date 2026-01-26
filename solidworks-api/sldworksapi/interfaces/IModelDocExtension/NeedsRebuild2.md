---
type: property
interface: IModelDocExtension
member: NeedsRebuild2
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IConfiguration.AddRebuildSaveMark
  - IConfiguration.NeedsRebuild
  - IModelDoc2.EditRebuild3
  - IModelDoc2.ForceRebuild3
  - IModelDoc2.Rebuild
  - IModelDocExtension.EditRebuildAll
  - IModelDocExtension.ForceRebuildAll
  - IModelDocExtension.ShowPartRebuildIndicators
keywords:
  - rebuild
  - models
  - needsrebuild2
  - imodeldocextension
  - model
  - doc
  - extension
  - needs
  - rebuild2
  - int32
  - move
  - freeze
  - bar
  - vb
  - net
  - vba
readonly: true
---

# IModelDocExtension.NeedsRebuild2

Gets whether the model document needs to be rebuilt.

## Signature

```csharp
System.Int32 NeedsRebuild2 {get;}
```
## Parameters

None.

## Return Value

Rebuild status of model document as defined in swModelRebuildStatus_e

## Examples

- Move Freeze Bar (C#) (Move_Freeze_Bar_Example_CSharp.htm)
- Move Freeze Bar (VB.NET) (Move_Freeze_Bar_Example_VBNET.htm)
- Move Freeze Bar (VBA) (Move_Freeze_Bar_Example_VB.htm)

## See Also

- `IConfiguration.AddRebuildSaveMark`
- `IConfiguration.NeedsRebuild`
- `IModelDoc2.EditRebuild3`
- `IModelDoc2.ForceRebuild3`
- `IModelDoc2.Rebuild`
- `IModelDocExtension.EditRebuildAll`
- `IModelDocExtension.ForceRebuildAll`
- `IModelDocExtension.ShowPartRebuildIndicators`