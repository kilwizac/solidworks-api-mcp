---
type: property
interface: IConfigurationManager
member: ShowConfigurationNames
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - names
  - configurationmanager
  - tree
  - showconfigurationnames
  - iconfigurationmanager
  - configuration
  - manager
  - show
  - boolean
  - work
  - configurations
  - vba
readonly: null
---

# IConfigurationManager.ShowConfigurationNames

Gets or sets whether to display configuration names in ConfigurationManager.

## Signature

```csharp
System.Boolean ShowConfigurationNames {get; set;}
```
## Parameters

None.

## Return Value

True to display configuration names, false to not

## Remarks

If you set this property to false, you cannot set
IConfigurationManager::ShowConfigurationDescriptions
to false. Either the name or the description of a configuration must be shown.

## Examples

- Work With Configurations (VBA) (Work_with_Configurations_Example_VB.htm)