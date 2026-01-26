---
type: method
interface: IModelViewManager
member: IsControlTabActive
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
  - IModelViewManager.AddControl
  - IModelViewManager.AddControl3
  - IModelViewManager.DeleteControlTab
  - IModelViewManager.GetControl
  - IModelViewManager.IGetControl
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
  - iscontroltabactive
  - view
  - manager
  - control
  - tab
  - active
  - name
  - string
  - boolean
  - add
  - activex
  - tabs
  - vb
  - net
  - vba
---

# IModelViewManager.IsControlTabActive

Gets whether the specified control is active.

## Signature

```csharp
System.Boolean IsControlTabActive( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of control tab

## Return Value

True if control tab is active, false if not

## Examples

- Add ActiveX Tabs to Model View (C#) (Add_ActiveX_Tabs_to_Model_View_Example_CSharp.htm)
- Add Active Tabs to Model View (VB.NET) (Add_ActiveX_Tabs_to_Model_View_Example_VBNET.htm)
- Add ActiveX Tabs to Model View (VBA) (Add_ActiveX_Tabs_to_Model_View_Example_VB.htm)

## See Also

- `IModelViewManager.ActivateControlTab`
- `IModelViewManager.ActivateModelTab`
- `IModelViewManager.AddControl`
- `IModelViewManager.AddControl3`
- `IModelViewManager.DeleteControlTab`
- `IModelViewManager.GetControl`
- `IModelViewManager.IGetControl`
- `IModelViewManager.IsModelTabActive`