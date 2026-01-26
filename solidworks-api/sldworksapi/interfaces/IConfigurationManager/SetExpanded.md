---
type: method
interface: IConfigurationManager
member: SetExpanded
returns: void
parameters:
  -
    name: WhichPane
    type: System.Int32
    description: Display pane as defined in swFeatMgrPane_e : swFeatMgrPaneTop swFeatMgrPaneBottom
  -
    name: Expand
    type: System.Boolean
    description: True to expand all of the nodes, false to collapse them
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.SetExpanded
keywords:
  - expanded
  - configurationmanager
  - tree
  - setexpanded
  - iconfigurationmanager
  - configuration
  - manager
  - which
  - pane
  - int32
  - expand
  - boolean
  - void
  - work
  - configurations
  - vba
---

# IConfigurationManager.SetExpanded

Sets whether to display and expand all of the configuration nodes in the specified pane of the ConfigurationManager.

## Signature

```csharp
void SetExpanded( 
   System.Int32
WhichPane
,
   System.Boolean
Expand
)
```
## Parameters

- `WhichPane` (System.Int32): Display pane as defined in swFeatMgrPane_e : swFeatMgrPaneTop swFeatMgrPaneBottom
- `Expand` (System.Boolean): True to expand all of the nodes, false to collapse them

## Return Value

Unknown.

## Examples

- Work With Configurations (VBA) (Work_with_Configurations_Example_VB.htm)

## See Also

- `IConfiguration.SetExpanded`