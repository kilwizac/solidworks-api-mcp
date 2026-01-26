---
type: method
interface: IComponent2
member: SetVisibility
returns: void
parameters:
  -
    name: State
    type: System.Int32
    description: Visibility state as defined in swComponentVisibilityState_e
  -
    name: Config_opt
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: Config_names
    type: System.Object
    description: Array of configuration names; valid only if Config_opt is set to swInConfigurationOpts_e.swSpecifyConfiguration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetVisibility
  - IComponent2.IGetVisibility
  - IComponent2.ISetVisibility
  - IComponent2.IsHidden
  - IComponent2.Visible
keywords:
  - components
  - see
  - also
  - icomponent2
  - visibility
  - show
  - setvisibility
  - component2
  - state
  - int32
  - config
  - opt
  - names
  - object
  - void
---

# IComponent2.SetVisibility

Sets the visibility state for this component.

## Signature

```csharp
void SetVisibility( 
   System.Int32
State
,
   System.Int32
Config_opt
,
   System.Object
Config_names
)
```
## Parameters

- `State` (System.Int32): Visibility state as defined in swComponentVisibilityState_e
- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_names` (System.Object): Array of configuration names; valid only if Config_opt is set to swInConfigurationOpts_e.swSpecifyConfiguration

## Return Value

Unknown.

## See Also

- `IComponent2.GetVisibility`
- `IComponent2.IGetVisibility`
- `IComponent2.ISetVisibility`
- `IComponent2.IsHidden`
- `IComponent2.Visible`