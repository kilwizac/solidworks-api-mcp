---
type: method
interface: IModelDocExtension
member: UpgradeLegacyCThreads
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.HasLegacyCThreads
keywords:
  - upgradelegacycthreads
  - imodeldocextension
  - model
  - doc
  - extension
  - upgrade
  - legacy
  - threads
  - boolean
---

# IModelDocExtension.UpgradeLegacyCThreads

Upgrades cosmetic thread features in this legacy model to the latest cosmetic thread architecture.

## Signature

```csharp
System.Boolean UpgradeLegacyCThreads()
```
## Parameters

None.

## Return Value

True if cosmetic threads upgraded successfully in this legacy model, false if not

## Remarks

This method:
is valid only if the system option allowing the upgrade of legacy files containing cosmetic threads is selected.
corresponds to the user-interface command,
feature_manager_design_tree_top_node
RMB
> Upgrade cosmetic thread features
.

## See Also

- `IModelDocExtension.HasLegacyCThreads`