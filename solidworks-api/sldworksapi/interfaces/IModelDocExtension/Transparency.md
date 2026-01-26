---
type: property
interface: IModelDocExtension
member: Transparency
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
  - IModelDocExtension.DisplayMode
  - IModelDocExtension.DisplayStateSpecMaterialPropertyValues
  - IModelDocExtension.Visibility
keywords:
  - components
  - see
  - also
  - icomponent2
  - transparency
  - imodeldocextension
  - model
  - doc
  - extension
  - setting
  - display
  - state
  - object
  - settings
  - vb
  - net
  - vba
readonly: null
---

# IModelDocExtension.Transparency

Gets and sets the transparency states for the specified display state setting.

## Signature

```csharp
System.Object Transparency( 
   DisplayStateSetting
Setting
) {get; set;}
```
## Parameters

- `Setting` (DisplayStateSetting): IDisplayStateSetting

## Return Value

One-dimensional array of transparency states as defined in swTransparencyState_e (see Remarks )

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
Each transparency state in the array returned by this method maps to a component in a display state. The size of the returned array is (
IDisplayStateSetting::GetEntityCount
X
IDisplayStateSetting::GetNameCount
).
The returned array stores transparency states (TS) for N components in M display states as follows:
Component1 DisplayState1 TS, Component1 DisplayState2 TS, ..., Component1 DisplayStateM TS,
Component2 DisplayState1 TS, Component2 DisplayState2 TS, ..., Component2 DisplayStateM TS,
...,
ComponentN DisplayState1 TS, ComponentN DisplayState2 TS, ..., ComponentN DisplayStateM TS

## Examples

- Get Display State Settings (C#) (Get_Display_State_Settings_CSharp.htm)
- Get Display State Settings (VB.NET) (Get_Display_State_Settings_VBNET.htm)
- Get Display State Settings (VBA) (Get_Display_State_Settings_Example_VB.htm)

## See Also

- `IModelDocExtension.DisplayMode`
- `IModelDocExtension.DisplayStateSpecMaterialPropertyValues`
- `IModelDocExtension.Visibility`