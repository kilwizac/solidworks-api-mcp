---
type: method
interface: IModelViewManager
member: ActivateControlTab
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
  - IModelViewManager.ActivateModelTab
  - IModelViewManager.AddControl3
  - IModelViewManager.DeleteControlTab
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
  - tabs
  - activatecontroltab
  - view
  - manager
  - activate
  - control
  - tab
  - name
  - string
  - boolean
  - add
  - activex
  - vb
  - net
  - vba
---

# IModelViewManager.ActivateControlTab

Selects a control tab on the model view to be the active tab.

## Signature

```csharp
System.Boolean ActivateControlTab( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of control tab

## Return Value

True if the selected control tab is active, false if not

## Examples

- Add ActiveX Tabs to Model View (C#) (Add_ActiveX_Tabs_to_Model_View_Example_CSharp.htm)
- Add ActiveX Tabs to Model View (VB.NET) (Add_ActiveX_Tabs_to_Model_View_Example_VBNET.htm)
- Add ActiveX Tabs to Model View (VBA) (Add_ActiveX_Tabs_to_Model_View_Example_VB.htm)

## See Also

- `IModelViewManager.ActivateModelTab`
- `IModelViewManager.AddControl3`
- `IModelViewManager.DeleteControlTab`
- `IModelViewManager.GetControl`
- `IModelViewManager.IGetControl`
- `IModelViewManager.IsControlTabActive`
- `IModelViewManager.IsModelTabActive`