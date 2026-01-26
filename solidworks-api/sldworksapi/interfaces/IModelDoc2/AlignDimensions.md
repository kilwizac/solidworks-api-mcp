---
type: method
interface: IModelDoc2
member: AlignDimensions
returns: void
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - dimensions
  - documents
  - ui
related:
  - IModelDoc2.AlignOrdinate
  - IModelDoc2.AlignParallelDimensions
  - IModelDoc2.BreakDimensionAlignment
keywords:
  - aligndimensions
  - imodeldoc2
  - model
  - doc2
  - align
  - dimensions
  - void
---

# IModelDoc2.AlignDimensions

Obsolete. Superseded by IModelDocExtension::AlignDimensions.

## Signature

```csharp
void AlignDimensions()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

This method attempts to sort the selected dimensions into three groups: linear, ordinate, and angular. Within the linear group, it sorts by measured direction. Each of these dimensions are then aligned with the other like dimensions. These are then updated and dragged together.

## See Also

- `IModelDoc2.AlignOrdinate`
- `IModelDoc2.AlignParallelDimensions`
- `IModelDoc2.BreakDimensionAlignment`