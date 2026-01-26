---
type: property
interface: IDatumTag
member: FilledTriangle
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDatumTag.GetTriangleAtIndex
  - IDatumTag.GetTriangleCount
  - IDatumTag.IGetTriangleAtIndex
keywords:
  - filledtriangle
  - idatumtag
  - datum
  - tag
  - filled
  - triangle
  - boolean
readonly: null
---

# IDatumTag.FilledTriangle

Gets or sets whether a filled triangle or empty triangle attaches to the model on the leader for this datum feature symbol.

## Signature

```csharp
System.Boolean FilledTriangle {get; set;}
```
## Parameters

None.

## Return Value

True if this datum tag has a filled triangle, false if an empty triangle

## See Also

- `IDatumTag.GetTriangleAtIndex`
- `IDatumTag.GetTriangleCount`
- `IDatumTag.IGetTriangleAtIndex`