---
type: method
interface: IEdge
member: SetId
returns: void
parameters:
  -
    name: IdIn
    type: System.Int32
    description: Edge ID of this edge of an imported body
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEdge.GetID
  - IEdge.RemoveId
keywords:
  - id
  - edge
  - setid
  - iedge
  - int32
  - void
---

# IEdge.SetId

Sets the edge ID of this edge of an imported body.

## Signature

```csharp
void SetId( 
   System.Int32
IdIn
)
```
## Parameters

- `IdIn` (System.Int32): Edge ID of this edge of an imported body

## Return Value

Unknown.

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

- `IEdge.GetID`
- `IEdge.RemoveId`