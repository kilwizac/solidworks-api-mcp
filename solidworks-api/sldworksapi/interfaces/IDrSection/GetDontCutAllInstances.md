---
type: method
interface: IDrSection
member: GetDontCutAllInstances
returns: System.Boolean
parameters:
  -
    name: LpComp
    type: Component
    description: Pointer to the IComponent2 object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrSection.SetDontCutAllInstances
keywords:
  - section
  - views
  - see
  - also
  - idrsection
  - components
  - icomponent2
  - getdontcutallinstances
  - dr
  - dont
  - cut
  - all
  - instances
  - lp
  - comp
  - component
  - boolean
---

# IDrSection.GetDontCutAllInstances

Gets whether all instances of the specified component are uncut in this section view or only in the specified component.

## Signature

```csharp
System.Boolean GetDontCutAllInstances( 
   Component
LpComp
)
```
## Parameters

- `LpComp` (Component): Pointer to the IComponent2 object

## Return Value

True if all instances of the selected component are left uncut, false if only the selected component is left uncut

## See Also

- `IDrSection.SetDontCutAllInstances`