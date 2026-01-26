---
type: property
interface: IDragOperator
member: HearClashes
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IDragOperator.HighlightClashes
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - collision
  - detection
  - components
  - icomponent2
  - hearclashes
  - idragoperator
  - drag
  - operator
  - hear
  - clashes
  - boolean
readonly: null
---

# IDragOperator.HearClashes

Gets or sets whether sound is associated with entity clashes.

## Signature

```csharp
System.Boolean HearClashes {get; set;}
```
## Parameters

None.

## Return Value

True if the sound for clashes is enabled, false if it is disabled

## Remarks

This property enables audio feedback when collisions occur between components selected for collision detection.

## See Also

- `IDragOperator.HighlightClashes`