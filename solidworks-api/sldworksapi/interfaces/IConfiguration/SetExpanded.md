---
type: method
interface: IConfiguration
member: SetExpanded
returns: void
parameters:
  -
    name: WhichPane
    type: System.Int32
    description: Display pane as defined in swFeatMgrPane_e : swFeatMgrPaneTop swFeatMgrPaneBottom
  -
    name: Expanded
    type: System.Boolean
    description: True to expand the node, false to collapse it
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.GetExpanded
  - IConfigurationManager.SetExpanded
keywords:
  - expanded
  - configurations
  - setexpanded
  - iconfiguration
  - configuration
  - which
  - pane
  - int32
  - boolean
  - void
---

# IConfiguration.SetExpanded

Sets whether to expand this configuration's node in the specified pane of the ConfigurationManager.

## Signature

```csharp
void SetExpanded( 
   System.Int32
WhichPane
,
   System.Boolean
Expanded
)
```
## Parameters

- `WhichPane` (System.Int32): Display pane as defined in swFeatMgrPane_e : swFeatMgrPaneTop swFeatMgrPaneBottom
- `Expanded` (System.Boolean): True to expand the node, false to collapse it

## Return Value

Unknown.

## See Also

- `IConfiguration.GetExpanded`
- `IConfigurationManager.SetExpanded`