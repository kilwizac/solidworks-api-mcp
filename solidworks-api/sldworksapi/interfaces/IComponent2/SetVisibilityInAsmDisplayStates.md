---
type: method
interface: IComponent2
member: SetVisibilityInAsmDisplayStates
returns: System.Boolean
parameters:
  -
    name: HideComponent
    type: System.Int32
    description: Visibility as defined in swComponentVisibilityState_e
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
  - IComponent2.GetVisibilityInAsmDisplayStates
  - IComponent2.SetReferencedDisplayStates
keywords:
  - components
  - see
  - also
  - icomponent2
  - visibility
  - setvisibilityinasmdisplaystates
  - component2
  - asm
  - display
  - states
  - hide
  - component
  - int32
  - option
  - assembly
  - state
  - names
  - object
  - boolean
---

# IComponent2.SetVisibilityInAsmDisplayStates

Sets the visibility of this component in the specified assembly display state(s).

## Signature

```csharp
System.Boolean SetVisibilityInAsmDisplayStates( 
   System.Int32
HideComponent
,
   System.Int32
Option
,
   System.Object
AssemblyDisplayStateNames
)
```
## Parameters

- `HideComponent` (System.Int32): Visibility as defined in swComponentVisibilityState_e
- `Option` (System.Int32): Display state option as defined in swDisplayStateOpts_e
- `AssemblyDisplayStateNames` (System.Object): Array of assembly display state names; valid only if Option is set to swDisplayStateOpts_e.swSpecifyDisplayState

## Return Value

True if visibility successfully set, false if not

## See Also

- `IComponent2.GetVisibilityInAsmDisplayStates`
- `IComponent2.SetReferencedDisplayStates`