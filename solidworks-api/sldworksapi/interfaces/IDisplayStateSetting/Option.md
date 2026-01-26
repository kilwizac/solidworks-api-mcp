---
type: property
interface: IDisplayStateSetting
member: Option
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - option
  - idisplaystatesetting
  - display
  - state
  - setting
  - int32
  - settings
  - vb
  - net
  - vba
  - change
  - color
  - component
  - specific
readonly: null
---

# IDisplayStateSetting.Option

Gets and sets the display state scope for this display state setting.

## Signature

```csharp
System.Int32 Option {get; set;}
```
## Parameters

None.

## Return Value

Scope for this setting as defined in swDisplayStateOpts_e

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
to specify the entities.
Get or set one or more of the following properties for the specified display states, entities, and scope:
IModelDocExtension::DisplayMode
IModelDocExtension::Transparency
IModelDocExtension::Visibility
Call
IModelDocExtension::GetAppearanceSetting
to obtain an
IAppearanceSetting
object.
Set the properties in the IAppearanceSetting object.
Get or set the material properties for the specified display states, entities, and scope using
IModelDocExtension::DisplayStateSpecMaterialPropertyValues
.

## Examples

- Get Display State Settings (C#) (Get_Display_State_Settings_CSharp.htm)
- Get Display State Settings (VB.NET) (Get_Display_State_Settings_VBNET.htm)
- Get Display State Settings (VBA) (Get_Display_State_Settings_Example_VB.htm)
- Change Color of Component in Specific Display State (C#) (Change_Color_of_Component_in_Specific_Display_State_Example_CSharp.htm)
- Change Color of Component in Specific Display State (VB.NET) (Change_Color_of_Component_in_Specific_Display_State_Example_VBNET.htm)
- Change Color of Component in Specific Display State (VBA) (Change_Color_of_Component_in_Specific_Display_State_Example_VB.htm)