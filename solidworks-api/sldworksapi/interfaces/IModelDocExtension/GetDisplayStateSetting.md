---
type: method
interface: IModelDocExtension
member: GetDisplayStateSetting
returns: DisplayStateSetting
parameters:
  -
    name: Option
    type: System.Int32
    description: Scope of the display state setting as defined in swDisplayStateOpts_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - display
  - states
  - getdisplaystatesetting
  - imodeldocextension
  - model
  - doc
  - extension
  - state
  - setting
  - option
  - int32
  - settings
  - vba
  - vb
  - net
  - change
  - color
  - component
  - specific
---

# IModelDocExtension.GetDisplayStateSetting

Gets the display state setting for the specified scope.

## Signature

```csharp
DisplayStateSetting GetDisplayStateSetting( 
   System.Int32
Option
)
```
## Parameters

- `Option` (System.Int32): Scope of the display state setting as defined in swDisplayStateOpts_e

## Return Value

IDisplayStateSetting

## Remarks

After calling this method:
Call
IDisplayStateSetting::Names
or
IDisplayStateSetting::ISetNames
to specify the display states.
Call
IDisplayStateSetting::Entities
or
IDisplayStateSetting::ISetEntities
to specify the components.
Get or set one or more of the following properties for the specified display states, components, and scope:
IModelDocExtension::DisplayMode
IModelDocExtension::Transparency
IModelDocExtension::Visibility
Call
IModelDocExtension::GetAppearanceSetting
to obtain the
IAppearanceSetting
object.
Set the properties in the IAppearanceSetting object.
Get or set the material properties for the specified display states, components, and scope using
IModelDocExtension::DisplayStateSpecMaterialPropertyValues
.

## Examples

- Get Display State Settings (VBA) (Get_Display_State_Settings_Example_VB.htm)
- Get Display State Settings (VB.NET) (Get_Display_State_Settings_VBNET.htm)
- Get Display State Settings (C#) (Get_Display_State_Settings_CSharp.htm)
- Change Color of Component in Specific Display State (C#) (Change_Color_of_Component_in_Specific_Display_State_Example_CSharp.htm)
- Change Color of Component in Specific Display State (VB.NET) (Change_Color_of_Component_in_Specific_Display_State_Example_VBNET.htm)
- Change Color of Component in Specific Display State (VBA) (Change_Color_of_Component_in_Specific_Display_State_Example_VB.htm)