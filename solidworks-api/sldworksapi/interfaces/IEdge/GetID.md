---
type: method
interface: IEdge
member: GetID
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEdge.RemoveId
  - IEdge.SetId
keywords:
  - id
  - edge
  - getid
  - iedge
  - int32
---

# IEdge.GetID

Gets the edge ID of this edge in an imported body.

## Signature

```csharp
System.Int32 GetID()
```
## Parameters

None.

## Return Value

Edge ID of this edge in an imported body

## Remarks

SOLIDWORKS uses this ID to track edges of imported bodies.
The ID of the edge of an imported body:
is not saved with the document.
must be unique.
can be changed by any third-party application. The intent is that if you
assign an ID to an edge of an imported body
, you can refer to that edge within your application.
is not the same as a
persistent reference ID
or
tracking ID
.
Use the
IAttribute
object to store data with an edge.

## See Also

- `IEdge.RemoveId`
- `IEdge.SetId`