---
type: method
interface: IModelDocExtension
member: UpgradeLegacyCustomProperties
returns: System.Boolean
parameters:
  -
    name: UpgradeAllAssemComps
    type: System.Boolean
    description: True to upgrade custom properties of this top-level assembly and all of its components, false to upgrade custom properties of this top-level assembly only
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - upgradelegacycustomproperties
  - imodeldocextension
  - model
  - doc
  - extension
  - upgrade
  - legacy
  - custom
  - properties
  - all
  - assem
  - comps
  - boolean
---

# IModelDocExtension.UpgradeLegacyCustomProperties

Upgrades custom properties in this legacy (created prior to SOLIDWORKS 2018) model to the latest custom properties architecture.

## Signature

```csharp
System.Boolean UpgradeLegacyCustomProperties( 
   System.Boolean
UpgradeAllAssemComps
)
```
## Parameters

- `UpgradeAllAssemComps` (System.Boolean): True to upgrade custom properties of this top-level assembly and all of its components, false to upgrade custom properties of this top-level assembly only

## Return Value

True if custom properties are successfully upgraded, false if not

## Remarks

This method is valid only for parts, assemblies, and drawings:
created prior to 2018.
opened in resolved mode.
corresponds to the user-interface command,
feature_manager_design_tree_top_node
RMB
> Upgrade custom properties
.
This method upgrades the custom properties of:
parent parts only, not derived parts
drawings, but not models in drawing views
weldment cutlists
(optionally) all components in assemblies
After running this method, you:
must rebuild configurations to have their custom properties updated.
cannot return to the old custom properties architecture.