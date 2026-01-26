---
type: property
interface: IView
member: ReferencedConfiguration
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetReferencedModelName
  - IView.ReferencedConfigurationID
  - IView.ReferencedDocument
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - drawing
  - views
  - iview
  - configurations
  - view
  - referencedconfiguration
  - referenced
  - string
  - vb
  - net
  - vba
readonly: null
---

# IView.ReferencedConfiguration

Gets or sets the configuration referenced by this drawing view.

## Signature

```csharp
System.String ReferencedConfiguration {get; set;}
```
## Parameters

None.

## Return Value

Name of the configuration for the drawing view

## Remarks

After changing the configuration, you must call
IModelDoc2::EditRebuild3
to see the changes.

## Examples

- Get Configurations Referenced in View (C#) (Get_Configurations_Referenced_in_View_Example_CSharp.htm)
- Get Configurations Referenced in View (VB.NET) (Get_Configurations_Referenced_in_View_Example_VBNET.htm)
- Get Configurations Referenced in View (VBA) (Get_Configurations_Referenced_in_View_Example_VB.htm)

## See Also

- `IView.GetReferencedModelName`
- `IView.ReferencedConfigurationID`
- `IView.ReferencedDocument`