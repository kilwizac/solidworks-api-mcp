---
type: property
interface: IConfigurationManager
member: ShowConfigurationDescriptions
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - descriptions
  - configurationmanager
  - tree
  - showconfigurationdescriptions
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

# IConfigurationManager.ShowConfigurationDescriptions

Gets or sets whether to display configuration descriptions in ConfigurationManager.

## Signature

```csharp
System.Boolean ShowConfigurationDescriptions {get; set;}
```
## Parameters

None.

## Return Value

True to display configuration descriptions, false to not

## Remarks

If you set this property to false, you cannot set
IConfigurationManager::ShowConfigurationNames
to false. Either the name or the description of a configuration must be shown.

## Examples

- Work With Configurations (VBA) (Work_with_Configurations_Example_VB.htm)