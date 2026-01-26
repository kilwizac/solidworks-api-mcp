---
type: method
interface: IEdge
member: RemoveId
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEdge.GetID
  - IEdge.SetId
keywords:
  - id
  - edge
  - removeid
  - iedge
  - remove
  - void
---

# IEdge.RemoveId

Removes the edge ID assigned to this edge of an imported body.

## Signature

```csharp
void RemoveId()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

SOLIDWORKS uses an edge ID to track edges of imported bodies.
The ID of the edge of an imported body:
is not saved with the document.
must be unique.
can be changed by any third-party application. The intent is that if you
assign an ID to an edge of an imported body
, you can refer to that edge within your application.
is not a
persistent reference ID
or
tracking ID
.
Use the
IAttribute
object to store data with an edge.

## See Also

- `IEdge.GetID`
- `IEdge.SetId`