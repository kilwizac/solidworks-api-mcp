---
type: method
interface: IModelViewManager
member: DeleteControlTab
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Name of control tab
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelViewManager.ActivateControlTab
  - IModelViewManager.ActivateModelTab
  - IModelViewManager.GetControl
  - IModelViewManager.IGetControl
  - IModelViewManager.IsControlTabActive
  - IModelViewManager.IsModelTabActive
keywords:
  - model
  - views
  - see
  - also
  - imodelview
  - imodelviewmanager
  - interfaces
  - controls
  - deletecontroltab
  - view
  - manager
  - delete
  - control
  - tab
  - name
  - string
  - boolean
---

# IModelViewManager.DeleteControlTab

Deletes the specified control tab.

## Signature

```csharp
System.Boolean DeleteControlTab( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of control tab

## Return Value

True if control tab is deleted, false if not

## See Also

- `IModelViewManager.ActivateControlTab`
- `IModelViewManager.ActivateModelTab`
- `IModelViewManager.GetControl`
- `IModelViewManager.IGetControl`
- `IModelViewManager.IsControlTabActive`
- `IModelViewManager.IsModelTabActive`