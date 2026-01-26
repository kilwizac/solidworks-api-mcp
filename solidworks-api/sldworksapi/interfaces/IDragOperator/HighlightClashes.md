---
type: property
interface: IDragOperator
member: HighlightClashes
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IDragOperator.HearClashes
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - collision
  - detection
  - components
  - icomponent2
  - highlightclashes
  - idragoperator
  - drag
  - operator
  - highlight
  - clashes
  - boolean
readonly: null
---

# IDragOperator.HighlightClashes

Gets or sets whether to highlight clashes.

## Signature

```csharp
System.Boolean HighlightClashes {get; set;}
```
## Parameters

None.

## Return Value

True if clash highlighting is enabled, false if it is disabled

## Remarks

This property enables visual feedback when collisions occur between components selected for collision detection.

## See Also

- `IDragOperator.HearClashes`