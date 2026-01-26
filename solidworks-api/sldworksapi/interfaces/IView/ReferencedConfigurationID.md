---
type: property
interface: IView
member: ReferencedConfigurationID
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IModelDocExtension.GetObjectByPersistReference3
  - IModelDocExtension.GetPersistReference3
  - IView.GetReferencedModelName
  - IView.ReferencedConfiguration
  - IView.ReferencedDocument
keywords:
  - persistent
  - reference
  - ids
  - configurations
  - configuration
  - see
  - also
  - iconfiguration
  - id
  - drawing
  - views
  - iview
  - view
  - referencedconfigurationid
  - referenced
  - int32
  - vb
  - net
  - vba
readonly: true
---

# IView.ReferencedConfigurationID

Gets the persistent reference ID of the configuration referenced in this drawing view.

## Signature

```csharp
System.Int32 ReferencedConfigurationID {get;}
```
## Parameters

None.

## Return Value

Referenced configuration's persistent reference ID

## Remarks

See
Persistent Reference IDs
for more information.

## Examples

- Get Configurations Referenced in View (C#) (Get_Configurations_Referenced_in_View_Example_CSharp.htm)
- Get Configurations Referenced in View (VB.NET) (Get_Configurations_Referenced_in_View_Example_VBNET.htm)
- Get Configurations Referenced in View (VBA) (Get_Configurations_Referenced_in_View_Example_VB.htm)

## See Also

- `IModelDocExtension.GetObjectByPersistReference3`
- `IModelDocExtension.GetPersistReference3`
- `IView.GetReferencedModelName`
- `IView.ReferencedConfiguration`
- `IView.ReferencedDocument`