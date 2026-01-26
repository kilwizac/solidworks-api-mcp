---
type: property
interface: IModelDocExtension
member: Visibility
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
  - IModelDocExtension.Transparency
keywords:
  - components
  - see
  - also
  - icomponent2
  - visibility
  - imodeldocextension
  - model
  - doc
  - extension
  - setting
  - display
  - state
  - object
  - settings
  - vba
  - vb
  - net
readonly: null
---

# IModelDocExtension.Visibility

Gets and sets the visibility states for the specified display state setting.

## Signature

```csharp
System.Object Visibility( 
   DisplayStateSetting
Setting
) {get; set;}
```
## Parameters

- `Setting` (DisplayStateSetting): IDisplayStateSetting

## Return Value

One-dimensional array of visibility states as defined in swVisibilityState_e (see Remarks )

## Remarks

Before calling this method:
Call
IModelDocExtension::GetDisplayStateSetting
to obtain an
IDisplayStateSetting
.
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
Each visibility state in the array returned by this method maps to a component in a display state. The size of the returned array is (
IDisplayStateSetting::GetEntityCount
X
IDisplayStateSetting::GetNameCount
).
The returned array stores visibility states (VS) for N components in M display states as follows:
Component1 DisplayState1 VS, Component1 DisplayState2 VS, ..., Component1 DisplayStateM VS,
Component2 DisplayState1 VS, Component2 DisplayState2 VS, ..., Component2 DisplayStateM VS,
...,
ComponentN DisplayState1 VS, ComponentN DisplayState2 VS, ..., ComponentN DisplayStateM VS

## Examples

- Get Display State Settings (VBA) (Get_Display_State_Settings_Example_VB.htm)
- Get Display State Settings (VB.NET) (Get_Display_State_Settings_VBNET.htm)
- Get Display State Settings (C#) (Get_Display_State_Settings_CSharp.htm)

## See Also

- `IModelDocExtension.DisplayMode`
- `IModelDocExtension.DisplayStateSpecMaterialPropertyValues`
- `IModelDocExtension.Transparency`