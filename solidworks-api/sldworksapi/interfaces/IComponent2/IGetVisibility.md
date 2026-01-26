---
type: method
interface: IComponent2
member: IGetVisibility
returns: System.Int32
parameters:
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
  - IAssemblyDoc.SetComponentVisibility
  - IComponent2.GetVisibility
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
  - igetvisibility
  - component2
  - config
  - opt
  - int32
  - count
  - names
  - string
---

# IComponent2.IGetVisibility

Gets the visibility state for this component.

## Signature

```csharp
System.Int32 IGetVisibility( 
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

- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_count` (System.Int32): Number of configurations for this component
- `Config_names` (System.String): Array of configuration names of size Config_count

## Return Value

Array of visibility states of size Config_count

## See Also

- `IAssemblyDoc.SetComponentVisibility`
- `IComponent2.GetVisibility`
- `IComponent2.SetVisibility`
- `IComponent2.Visible`