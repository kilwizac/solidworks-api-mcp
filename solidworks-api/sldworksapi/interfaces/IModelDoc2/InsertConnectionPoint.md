---
type: method
interface: IModelDoc2
member: InsertConnectionPoint
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - piping
  - connection
  - points
  - insertconnectionpoint
  - imodeldoc2
  - model
  - doc2
  - insert
  - point
  - void
---

# IModelDoc2.InsertConnectionPoint

Adds a connection point based on the selected point and selected planar item.

## Signature

```csharp
void InsertConnectionPoint()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

If the selection set is not complete, then the
Insert Connection Point
dialog is displayed.
The connection point is the point on the fitting that defines where the connection to other pipe items begins or ends.