---
type: method
interface: IComponent2
member: GetVisibility
returns: System.Object
parameters:
  -
    name: Config_opt
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: Config_names
    type: System.Object
    description: Array of the configuration names for this component; valid only if Config_opt is set to swInConfigurationOpts_e.swSpecifyConfiguration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.IGetVisibility
  - IComponent2.ISetVisibility
  - IComponent2.SetVisibility
  - IComponent2.Visible
keywords:
  - components
  - see
  - also
  - icomponent2
  - visibility
  - hide
  - show
  - getvisibility
  - component2
  - config
  - opt
  - int32
  - names
  - object
---

# IComponent2.GetVisibility

Gets the visibility state for this component.

## Signature

```csharp
System.Object GetVisibility( 
   System.Int32
Config_opt
,
   System.Object
Config_names
)
```
## Parameters

- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_names` (System.Object): Array of the configuration names for this component; valid only if Config_opt is set to swInConfigurationOpts_e.swSpecifyConfiguration

## Return Value

Array of the visibility states for this component

## See Also

- `IComponent2.IGetVisibility`
- `IComponent2.ISetVisibility`
- `IComponent2.SetVisibility`
- `IComponent2.Visible`