---
type: method
interface: IAssemblyDoc
member: SetComponentVisibility
returns: void
parameters:
  -
    name: Visibility
    type: System.Boolean
    description: True to show the selected component, false to hide it
  -
    name: Config_opt
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: Config_names
    type: System.Object
    description: Array of the names of the configurations for the component
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.ISetComponentVisibility
  - IComponent2.GetVisibility
  - IComponent2.IGetVisibility
  - IComponent2.ISetVisibility
  - IComponent2.SetVisibility
  - IComponent2.Visible
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - hide
  - show
  - components
  - icomponent2
  - visibility
  - setcomponentvisibility
  - assembly
  - doc
  - component
  - boolean
  - config
  - opt
  - int32
  - names
  - object
  - void
---

# IAssemblyDoc.SetComponentVisibility

Hides or shows the selected component in the specified configurations in this assembly document.

## Signature

```csharp
void SetComponentVisibility( 
   System.Boolean
Visibility
,
   System.Int32
Config_opt
,
   System.Object
Config_names
)
```
## Parameters

- `Visibility` (System.Boolean): True to show the selected component, false to hide it
- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_names` (System.Object): Array of the names of the configurations for the component

## Return Value

Unknown.

## See Also

- `IAssemblyDoc.ISetComponentVisibility`
- `IComponent2.GetVisibility`
- `IComponent2.IGetVisibility`
- `IComponent2.ISetVisibility`
- `IComponent2.SetVisibility`
- `IComponent2.Visible`