---
type: property
interface: IConfiguration
member: AddRebuildSaveMark
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related:
  - IConfiguration.NeedsRebuild
  - IConfigurationManager.AddRebuildSaveMark
  - IConfigurationManager.RemoveMarkForAllConfigurations
  - IModelDoc2.EditRebuild3
  - IModelDoc2.ForceRebuild3
  - IModelDocExtension.EditRebuildAll
  - IModelDocExtension.ForceRebuildAll
  - IModelDocExtension.NeedsRebuild2
keywords:
  - rebuild
  - configurations
  - configuration
  - see
  - also
  - iconfiguration
  - data
  - models
  - addrebuildsavemark
  - add
  - save
  - mark
  - boolean
  - vb
  - net
  - vba
readonly: null
---

# IConfiguration.AddRebuildSaveMark

Adds or removes the mark indicating whether the configuration needs to be rebuilt and its configuration data saved every time you save the model document.

## Signature

```csharp
System.Boolean AddRebuildSaveMark {get; set;}
```
## Parameters

None.

## Return Value

True to mark the configuration as needing to be rebuilt and its configuration data saved every time you save the model document, false to mark the configuration as not needing to be rebuilt and its configuration data not saved every time you save the model document

## Examples

- Save Configuration Data (C#) (Save_Configuration_Data_Example_CSharp.htm)
- Save Configuration Data (VB.NET) (Save_Configuration_Data_Example_VBNET.htm)
- Save Configuration Data (VBA) (Save_Configuration_Data_Example_VB.htm)

## See Also

- `IConfiguration.NeedsRebuild`
- `IConfigurationManager.AddRebuildSaveMark`
- `IConfigurationManager.RemoveMarkForAllConfigurations`
- `IModelDoc2.EditRebuild3`
- `IModelDoc2.ForceRebuild3`
- `IModelDocExtension.EditRebuildAll`
- `IModelDocExtension.ForceRebuildAll`
- `IModelDocExtension.NeedsRebuild2`