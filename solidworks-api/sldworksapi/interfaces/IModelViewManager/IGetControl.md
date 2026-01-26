---
type: method
interface: IModelViewManager
member: IGetControl
returns: System.Object
parameters:
  -
    name: Name
    type: System.String
    description: Name of the control
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelViewManager.ActivateControlTab
  - IModelViewManager.ActivateModelTab
  - IModelViewManager.AddControl
  - IModelViewManager.AddControl3
  - IModelViewManager.DeleteControlTab
  - IModelViewManager.GetControl
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
  - igetcontrol
  - view
  - manager
  - control
  - name
  - string
  - object
---

# IModelViewManager.IGetControl

Gets the control associated with this model view.

## Signature

```csharp
System.Object IGetControl( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of the control

## Return Value

Control object

## See Also

- `IModelViewManager.ActivateControlTab`
- `IModelViewManager.ActivateModelTab`
- `IModelViewManager.AddControl`
- `IModelViewManager.AddControl3`
- `IModelViewManager.DeleteControlTab`
- `IModelViewManager.GetControl`
- `IModelViewManager.IsControlTabActive`
- `IModelViewManager.IsModelTabActive`