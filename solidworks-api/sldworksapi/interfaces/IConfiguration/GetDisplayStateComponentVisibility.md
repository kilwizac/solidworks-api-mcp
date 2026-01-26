---
type: method
interface: IConfiguration
member: GetDisplayStateComponentVisibility
returns: System.Object
parameters:
  -
    name: DisplayStateName
    type: System.String
    description: Name of the display state
  -
    name: Onlyhidden
    type: System.Boolean
    description: True to only return visibilities for hidden components, false to return visibilities for all components
  -
    name: ToplevelOnly
    type: System.Boolean
    description: True to get the top-level components only, false to get all components
  -
    name: Components
    type: System.Object
    description: Array of IComponent2 s
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.GetDisplayStateBodyProperties
  - IConfiguration.GetDisplayStateComponentProperties
  - IConfiguration.GetDisplayStateFaceProperties
  - IConfiguration.GetDisplayStateFeatureProperties
  - IConfiguration.GetDisplayStateProperties
  - IConfiguration.GetDisplayStates
  - IConfiguration.GetDisplayStatesCount
keywords:
  - display
  - states
  - getdisplaystatecomponentvisibility
  - iconfiguration
  - configuration
  - state
  - component
  - visibility
  - name
  - string
  - onlyhidden
  - boolean
  - toplevel
  - only
  - components
  - object
  - visibilities
  - vb
  - net
  - vba
---

# IConfiguration.GetDisplayStateComponentVisibility

Gets the components and their visibilities in the specified display state.

## Signature

```csharp
System.Object GetDisplayStateComponentVisibility( 
   System.String
DisplayStateName
,
   System.Boolean
Onlyhidden
,
   System.Boolean
ToplevelOnly
,
   out System.Object
Components
)
```
## Parameters

- `DisplayStateName` (System.String): Name of the display state
- `Onlyhidden` (System.Boolean): True to only return visibilities for hidden components, false to return visibilities for all components
- `ToplevelOnly` (System.Boolean): True to get the top-level components only, false to get all components
- `Components` (System.Object): Array of IComponent2 s

## Return Value

Array of longs or integers indicating component visibilities; 1 if visible, 0 if hidden

## Examples

- Get Display States and Visibilities of Components (C#) (Get_Display_State_Names_and_Visibilites_of_Components_Example_CSharp.htm)
- Get Display States and Visibilities of Components (VB.NET) (Get_Display_State_Names_and_Visibilites_of_Components_Example_VBNET.htm)
- Get Display States and Visibilities of Components (VBA) (Get_Display_State_Names_and_Visibilites_of_Components_Example_VB.htm)

## See Also

- `IConfiguration.GetDisplayStateBodyProperties`
- `IConfiguration.GetDisplayStateComponentProperties`
- `IConfiguration.GetDisplayStateFaceProperties`
- `IConfiguration.GetDisplayStateFeatureProperties`
- `IConfiguration.GetDisplayStateProperties`
- `IConfiguration.GetDisplayStates`
- `IConfiguration.GetDisplayStatesCount`