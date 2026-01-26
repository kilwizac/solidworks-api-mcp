---
type: method
interface: IConfigurationManager
member: RemoveMarkForAllConfigurations
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfigurationManager.AddRebuildSaveMark
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - rebuild
  - removemarkforallconfigurations
  - iconfigurationmanager
  - manager
  - remove
  - mark
  - all
  - configurations
  - boolean
---

# IConfigurationManager.RemoveMarkForAllConfigurations

Remove all marks indicating whether configurations need to be rebuilt and their configuration data saved every time the model document is saved.

## Signature

```csharp
System.Boolean RemoveMarkForAllConfigurations()
```
## Parameters

None.

## Return Value

True if marks removed successfully, false if not

## See Also

- `IConfigurationManager.AddRebuildSaveMark`