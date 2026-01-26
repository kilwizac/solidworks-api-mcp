---
type: property
interface: IModelDocExtension
member: DisplayMode
returns: System.Object
parameters:
  -
    name: Setting
    type: DisplayStateSetting
    description: IDisplayStateSetting
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.DisplayStateSpecMaterialPropertyValues
  - IModelDocExtension.Transparency
  - IModelDocExtension.Visibility
keywords:
  - components
  - see
  - also
  - icomponent2
  - display
  - mode
  - displaymode
  - imodeldocextension
  - model
  - doc
  - extension
  - setting
  - state
  - object
  - settings
  - vba
  - vb
  - net
readonly: null
---

# IModelDocExtension.DisplayMode

Gets and sets the display modes for the specified display state setting.

## Signature

```csharp
System.Object DisplayMode( 
   DisplayStateSetting
Setting
) {get; set;}
```
## Parameters

- `Setting` (DisplayStateSetting): IDisplayStateSetting

## Return Value

One-dimensional array of display modes as defined in swDisplayMode_e (see Remarks )

## Remarks

Before calling this method:
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
Each display mode in the array returned by this method maps to a component in a display state. The size of the returned array is (
IDisplayStateSetting::GetEntityCount
X
IDisplayStateSetting::GetNameCount
).
The returned array stores display modes (DM) for N components in M display states as follows:
Component1 DisplayState1 DM, Component1 DisplayState2 DM, ..., Component1 DisplayStateM DM,
Component2 DisplayState1 DM, Component2 DisplayState2 DM, ..., Component2 DisplayStateM DM,
...,
ComponentN DisplayState1 DM, ComponentN DisplayState2 DM, ..., ComponentN DisplayStateM DM

## Examples

- Get Display State Settings (VBA) (Get_Display_State_Settings_Example_VB.htm)
- Get Display State Settings (VB.NET) (Get_Display_State_Settings_VBNET.htm)
- Get Display State Settings (C#) (Get_Display_State_Settings_CSharp.htm)

## See Also

- `IModelDocExtension.DisplayStateSpecMaterialPropertyValues`
- `IModelDocExtension.Transparency`
- `IModelDocExtension.Visibility`