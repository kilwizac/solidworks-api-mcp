---
type: method
interface: IComponent2
member: Select4
returns: System.Boolean
parameters:
  -
    name: Append
    type: System.Boolean
    description: True appends the selection to the selection list, false replaces the selection list
  -
    name: Data
    type: SelectData
    description: Pointer to the ISelectData object
  -
    name: ShowPopup
    type: System.Boolean
    description: True to show shortcut menu, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - selections
related:
  - IComponent2.DeSelect
  - IModelDocExtension.SelectAll
  - ISelectionMgr.GetSelectedObjectsComponent3
keywords:
  - select4
  - icomponent2
  - component2
  - append
  - boolean
  - data
  - select
  - show
  - popup
  - fire
  - notifications
  - when
  - renaming
  - components
  - vb
  - net
  - vba
---

# IComponent2.Select4

Selects this component.

## Signature

```csharp
System.Boolean Select4( 
   System.Boolean
Append
,
   SelectData
Data
,
   System.Boolean
ShowPopup
)
```
## Parameters

- `Append` (System.Boolean): True appends the selection to the selection list, false replaces the selection list
- `Data` (SelectData): Pointer to the ISelectData object
- `ShowPopup` (System.Boolean): True to show shortcut menu, false to not

## Return Value

True if the component is selected, false if not

## Examples

- Fire Notifications When Renaming Components (C#) (Fire_Notifications_When_Renaming_Components_Example_CSharp.htm)
- Fire Notifications When Renaming Components (VB.NET) (Fire_Notifications_When_Renaming_Components_Example_VBNET.htm)
- Fire Notifications When Renaming Components (VBA) (Fire_Notifications_When_Renaming_Components_Example_VB.htm)

## See Also

- `IComponent2.DeSelect`
- `IModelDocExtension.SelectAll`
- `ISelectionMgr.GetSelectedObjectsComponent3`