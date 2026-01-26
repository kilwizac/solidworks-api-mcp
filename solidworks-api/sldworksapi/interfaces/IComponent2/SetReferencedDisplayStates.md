---
type: method
interface: IComponent2
member: SetReferencedDisplayStates
returns: System.Boolean
parameters:
  -
    name: ComponentDisplayStateName
    type: System.String
    description: Component display state name
  -
    name: Option
    type: System.Int32
    description: Display state option as defined in swDisplayStateOpts_e
  -
    name: AssemblyDisplayStateNames
    type: System.Object
    description: Array of assembly display state names; valid only if Option is set to swDisplayStateOpts_e.swSpecifyDisplayState
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetReferencedDisplayStates
  - IComponent2.SetVisibilityInAsmDisplayStates
keywords:
  - components
  - see
  - also
  - icomponent2
  - display
  - states
  - setreferenceddisplaystates
  - component2
  - referenced
  - component
  - state
  - name
  - string
  - option
  - int32
  - assembly
  - names
  - object
  - boolean
---

# IComponent2.SetReferencedDisplayStates

Sets the specified display state of this component to be referenced by the specified assembly display state(s).

## Signature

```csharp
System.Boolean SetReferencedDisplayStates( 
   System.String
ComponentDisplayStateName
,
   System.Int32
Option
,
   System.Object
AssemblyDisplayStateNames
)
```
## Parameters

- `ComponentDisplayStateName` (System.String): Component display state name
- `Option` (System.Int32): Display state option as defined in swDisplayStateOpts_e
- `AssemblyDisplayStateNames` (System.Object): Array of assembly display state names; valid only if Option is set to swDisplayStateOpts_e.swSpecifyDisplayState

## Return Value

True if component display state referenced successfully, false if not

## See Also

- `IComponent2.GetReferencedDisplayStates`
- `IComponent2.SetVisibilityInAsmDisplayStates`