---
type: property
interface: IDisplayStateSetting
member: Names
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IDisplayStateSetting.IGetNames
  - IDisplayStateSetting.ISetNames
keywords:
  - names
  - idisplaystatesetting
  - display
  - state
  - setting
  - object
  - settings
  - vba
  - vb
  - net
  - change
  - color
  - component
  - specific
readonly: null
---

# IDisplayStateSetting.Names

Gets and sets the display state names for this display state setting.

## Signature

```csharp
System.Object Names {get; set;}
```
## Parameters

None.

## Return Value

Array of display state names

## Remarks

After calling this method:
Call
IDisplayStateSetting::Entities
to specify the entities.
Call
IDisplayStateSetting::Option
to specify the display state scope of the setting.
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

- Get Display State Settings (VBA) (Get_Display_State_Settings_Example_VB.htm)
- Get Display State Settings (VB.NET) (Get_Display_State_Settings_VBNET.htm)
- Get Display State Settings (C#) (Get_Display_State_Settings_CSharp.htm)
- Change Color of Component in Specific Display State (C#) (Change_Color_of_Component_in_Specific_Display_State_Example_CSharp.htm)
- Change Color of Component in Specific Display State (VB.NET) (Change_Color_of_Component_in_Specific_Display_State_Example_VBNET.htm)
- Change Color of Component in Specific Display State (VBA) (Change_Color_of_Component_in_Specific_Display_State_Example_VB.htm)

## See Also

- `IDisplayStateSetting.IGetNames`
- `IDisplayStateSetting.ISetNames`