---
type: method
interface: IModelDocExtension
member: ForceRebuildAll
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
  - IModelDocExtension.EditRebuildAll
  - IModelDocExtension.NeedsRebuild2
  - IModelDocExtension.Rebuild
keywords:
  - rebuild
  - configurations
  - configuration
  - see
  - also
  - iconfiguration
  - force
  - models
  - forcerebuildall
  - imodeldocextension
  - model
  - doc
  - extension
  - all
  - boolean
  - features
  - vb
  - net
  - vba
---

# IModelDocExtension.ForceRebuildAll

Forces a rebuild of all features in all configurations without activating each configuration.

## Signature

```csharp
System.Boolean ForceRebuildAll()
```
## Parameters

None.

## Return Value

True if all features in all configurations are rebuilt without activating each configuration, false if not

## Examples

- Rebuild All Features in All Configurations (C#) (Rebuild_All_Features_in_All_Configurations_Example_CSharp.htm)
- Rebuild All Features in All Configurations (VB.NET) (Rebuild_All_Features_in_All_Configurations_Example_VBNET.htm)
- Rebuild All Features in All Configurations (VBA) (Rebuild_All_Features_in_All_Configurations_Example_VB.htm)

## See Also

- `IConfiguration.AddRebuildSaveMark`
- `IConfiguration.NeedsRebuild`
- `IConfigurationManager.AddRebuildSaveMark`
- `IModelDoc2.EditRebuild3`
- `IModelDoc2.ForceRebuild3`
- `IModelDocExtension.EditRebuildAll`
- `IModelDocExtension.NeedsRebuild2`
- `IModelDocExtension.Rebuild`