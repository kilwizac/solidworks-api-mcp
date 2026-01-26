---
type: method
interface: IModelDocExtension
member: EditRebuildAll
returns: System.Boolean
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
  - IConfigurationManager.AddRebuildSaveMark
  - IModelDoc2.EditRebuild3
  - IModelDoc2.ForceRebuild3
  - IModelDocExtension.ForceRebuildAll
  - IModelDocExtension.NeedsRebuild2
  - IModelDocExtension.Rebuild
keywords:
  - rebuild
  - configurations
  - configuration
  - see
  - also
  - iconfiguration
  - models
  - editrebuildall
  - imodeldocextension
  - model
  - doc
  - extension
  - edit
  - all
  - boolean
  - without
  - activating
  - each
  - vb
  - net
  - vba
---

# IModelDocExtension.EditRebuildAll

Rebuilds only those features that need to be rebuilt in all configurations without activating each configuration.

## Signature

```csharp
System.Boolean EditRebuildAll()
```
## Parameters

None.

## Return Value

True if only those features that need to be rebuilt are rebuilt in all configurations without activating each configuration, false if not

## Examples

- Rebuild All Configurations Without Activating Each Configuration (C#) (Rebuild_All_Configurations_Without_Activating_Each_Configuration_Example_CSharp.htm)
- Rebuild All Configurations Without Activating Each Configuration (VB.NET) (Rebuild_All_Configurations_Without_Activating_Each_Configuration_Example_VBNET.htm)
- Rebuild All Configurations Without Activating Each Configuration (VBA) (Rebuild_All_Configurations_Without_Activating_Each_Configuration_Example_VB.htm)

## See Also

- `IConfiguration.AddRebuildSaveMark`
- `IConfiguration.NeedsRebuild`
- `IConfigurationManager.AddRebuildSaveMark`
- `IModelDoc2.EditRebuild3`
- `IModelDoc2.ForceRebuild3`
- `IModelDocExtension.ForceRebuildAll`
- `IModelDocExtension.NeedsRebuild2`
- `IModelDocExtension.Rebuild`