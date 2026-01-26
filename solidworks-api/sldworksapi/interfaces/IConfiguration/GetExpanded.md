---
type: method
interface: IConfiguration
member: GetExpanded
returns: System.Boolean
parameters:
  -
    name: WhichPane
    type: System.Int32
    description: Valid options in swFeatMgrPane_e : swFeatMgrPaneTop swFeatMgrPaneBottom
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.SetExpanded
keywords:
  - expanded
  - configurations
  - getexpanded
  - iconfiguration
  - configuration
  - which
  - pane
  - int32
  - boolean
---

# IConfiguration.GetExpanded

Gets whether this configuration's node is expanded in the specified pane of the ConfigurationManager.

## Signature

```csharp
System.Boolean GetExpanded( 
   System.Int32
WhichPane
)
```
## Parameters

- `WhichPane` (System.Int32): Valid options in swFeatMgrPane_e : swFeatMgrPaneTop swFeatMgrPaneBottom

## Return Value

True if node is expanded, false if not

## See Also

- `IConfiguration.SetExpanded`