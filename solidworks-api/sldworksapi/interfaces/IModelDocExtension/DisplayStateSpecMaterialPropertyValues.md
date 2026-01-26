---
type: property
interface: IModelDocExtension
member: DisplayStateSpecMaterialPropertyValues
returns: System.Object
parameters:
  -
    name: Setting
    type: DisplayStateSetting
    description: IDisplayStateSetting (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.DisplayMode
  - IModelDocExtension.Transparency
  - IModelDocExtension.Visibility
keywords:
  - components
  - see
  - also
  - icomponent2
  - material
  - properties
  - appearance
  - setting
  - iappearancesetting
  - displaystatespecmaterialpropertyvalues
  - imodeldocextension
  - model
  - doc
  - extension
  - display
  - state
  - spec
  - values
  - object
  - change
  - color
  - component
  - specific
  - vb
  - net
  - vba
readonly: null
---

# IModelDocExtension.DisplayStateSpecMaterialPropertyValues

Gets and sets the appearance settings for the specified display state setting.

## Signature

```csharp
System.Object DisplayStateSpecMaterialPropertyValues( 
   DisplayStateSetting
Setting
) {get; set;}
```
## Parameters

- `Setting` (DisplayStateSetting): IDisplayStateSetting (see Remarks )

## Return Value

One-dimensional array of IAppearanceSetting s (see Remarks )

## Remarks

Before using this method to get or set appearance settings:
Call
IModelDocExtension::GetDisplayStateSetting
to obtain an
IDisplayStateSetting
object.
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
Call
IDisplayStateSetting::Option
to specify the display state scope of the setting.
Specify the Setting parameter using the IDisplayStateSetting object.
Each
IAppearanceSetting
in the array returned by this method maps to a component in a display state. The size of the returned array is (
IDisplayStateSetting::GetEntityCount
*
IDisplayStateSetting::GetNameCount
).
The returned array stores appearance settings (AS) for N components in M display states as follows:
Component1 DisplayState1 AS, Component1 DisplayState2 AS, ..., Component1 DisplayStateM AS,
Component2 DisplayState1 AS, Component2 DisplayState2 AS, ..., Component2 DisplayStateM AS,
...
ComponentN DisplayState1 AS, ComponentN DisplayState2 AS, ..., ComponentN DisplayStateM AS
Before using this method to set appearance settings:
Perform steps1-5 as described above.
Call
IModelDocExtension::GetAppearanceSetting
to obtain an
IAppearanceSetting
object.
Set the properties in the IAppearanceSetting object for the component in the display state.
Repeat steps 2 and 3 for each component in each display state.
Create an array of the IAppearanceSetting objects in the order described above.

## Examples

- Change Color of Component in Specific Display State (C#) (Change_Color_of_Component_in_Specific_Display_State_Example_CSharp.htm)
- Change Color of Component in Specific Display State (VB.NET) (Change_Color_of_Component_in_Specific_Display_State_Example_VBNET.htm)
- Change Color of Component in Specific Display State (VBA) (Change_Color_of_Component_in_Specific_Display_State_Example_VB.htm)

## See Also

- `IModelDocExtension.DisplayMode`
- `IModelDocExtension.Transparency`
- `IModelDocExtension.Visibility`