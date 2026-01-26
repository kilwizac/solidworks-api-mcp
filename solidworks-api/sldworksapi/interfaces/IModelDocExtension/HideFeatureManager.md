---
type: method
interface: IModelDocExtension
member: HideFeatureManager
returns: System.Boolean
parameters:
  -
    name: Hide
    type: System.Boolean
    description: True to hide the Manager Pane, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - features
  - ui
related:
  - IModelDocExtension.FeatureManagerFilterString
  - IModelViewManager.FeatureManagerTabsVisible
keywords:
  - featuremanager
  - design
  - tree
  - see
  - also
  - ifeaturemanager
  - ifeatmgrview
  - interfaces
  - hide
  - manager
  - pane
  - hidefeaturemanager
  - imodeldocextension
  - model
  - doc
  - extension
  - feature
  - boolean
  - vba
  - vb
  - net
  - change
  - active
  - tab
---

# IModelDocExtension.HideFeatureManager

Hides or shows the Manager Pane.

## Signature

```csharp
System.Boolean HideFeatureManager( 
   System.Boolean
Hide
)
```
## Parameters

- `Hide` (System.Boolean): True to hide the Manager Pane, false to not

## Return Value

True if successful, false if not

## Remarks

The FeatureManager design tree, PropertyManager, ConfigurationManager, DimXpertManager, DisplayManager, and custum tabs reside in the Manager Pane.

## Examples

- Hide the FeatureManager Design Tree (VBA) (Hide_the_FeatureManager_Example_VB.htm)
- Hide the FeatureManager Design Tree (VB.NET) (Hide_the_FeatureManager_Example_VBNET.htm)
- Hide the FeatureManager Design Tree (C#) (Hide_the_FeatureManager_Example_CSharp.htm)
- Change Active Tab in Manager Pane (C#) (Change_Active_Tab_in_Manager_Pane_Example_CSharp.htm)
- Change Active Tab in Manager Pane (VB.NET) (Change_Active_Tab_in_Manager_Pane_Example_VBNET.htm)
- Change Active Tab in Manager Pane (VBA) (Change_Active_Tab_in_Manager_Pane_Example_VB.htm)

## See Also

- `IModelDocExtension.FeatureManagerFilterString`
- `IModelViewManager.FeatureManagerTabsVisible`