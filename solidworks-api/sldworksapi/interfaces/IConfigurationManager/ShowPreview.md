---
type: property
interface: IConfigurationManager
member: ShowPreview
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - preview
  - configurationmanager
  - tree
  - showpreview
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

# IConfigurationManager.ShowPreview

Gets or sets whether to display the preview of a selected configuration.

## Signature

```csharp
System.Boolean ShowPreview {get; set;}
```
## Parameters

None.

## Return Value

True to display the preview, false to restore the original ConfigurationManager

## Remarks

Before using this property, you must activate and select the configuration to preview. If multiple configurations are selected, the last one's preview is displayed. The preview displays in the configuration pane below or above the pane of the selected configuration.

## Examples

- Work With Configurations (VBA) (Work_with_Configurations_Example_VB.htm)