---
type: method
interface: IModelView
member: GetDisplayState
returns: System.Boolean
parameters:
  -
    name: DisplayType
    type: System.Int32
    description: Display setting to check as defined in swViewDisplayType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - display
  - states
  - getdisplaystate
  - imodelview
  - model
  - view
  - state
  - type
  - int32
  - boolean
  - vba
---

# IModelView.GetDisplayState

Gets the display state of this model view.

## Signature

```csharp
System.Boolean GetDisplayState( 
   System.Int32
DisplayType
)
```
## Parameters

- `DisplayType` (System.Int32): Display setting to check as defined in swViewDisplayType_e

## Return Value

True if the setting specified is turned on, false if not

## Remarks

By passing in an available DisplayType option, you can check various display conditions for the view. For example, if you want to know if a view is shaded, you could make the following call in Visual Basic:
res = mView.GetDisplayState( swIsViewShaded )

## Examples

- Get Display State (VBA) (Get_Display_State_Example_VB.htm)