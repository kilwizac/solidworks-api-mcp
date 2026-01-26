---
type: property
interface: IMateInPlace
member: Component
returns: Component2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - components
  - see
  - also
  - icomponent2
  - inplace
  - mates
  - component
  - imateinplace
  - mate
  - place
  - component2
  - names
  - types
  - vba
readonly: true
---

# IMateInPlace.Component

Gets the component for this Inplace mate.

## Signature

```csharp
Component2 Component {get;}
```
## Parameters

None.

## Return Value

Component

## Remarks

The component instance tree of a subassembly is not loaded because a subassembly does not have a view of its own. Thus, this property returns NULL if the
Inplace
mate is in a subassembly.

## Examples

- Get Component Names and Types for Inplace Mate (VBA) (Get_Component_Names_and_Types_for_Inplace_Mate_Example_VB.htm)