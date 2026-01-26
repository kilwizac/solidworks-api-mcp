---
type: method
interface: IComponent2
member: ISetVisibility
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
    name: Config_count
    type: System.Int32
    description: Number of configurations for this component
  -
    name: Config_names
    type: System.String
    description: Array of configuration names of size Config_count
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetVisibility
  - IComponent2.IGetVisibility
  - IComponent2.IsHidden
  - IComponent2.SetVisibility
  - IComponent2.Visible
keywords:
  - components
  - see
  - also
  - icomponent2
  - visibility
  - show
  - isetvisibility
  - component2
  - state
  - int32
  - config
  - opt
  - count
  - names
  - string
  - void
---

# IComponent2.ISetVisibility

Sets the visibility state for this component.

## Signature

```csharp
void ISetVisibility( 
   System.Int32
State
,
   System.Int32
Config_opt
,
   System.Int32
Config_count
,
   ref System.String
Config_names
)
```
## Parameters

- `State` (System.Int32): Visibility state as defined in swComponentVisibilityState_e
- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_count` (System.Int32): Number of configurations for this component
- `Config_names` (System.String): Array of configuration names of size Config_count

## Return Value

Unknown.

## See Also

- `IComponent2.GetVisibility`
- `IComponent2.IGetVisibility`
- `IComponent2.IsHidden`
- `IComponent2.SetVisibility`
- `IComponent2.Visible`