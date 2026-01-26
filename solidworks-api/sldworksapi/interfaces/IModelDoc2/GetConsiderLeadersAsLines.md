---
type: method
interface: IModelDoc2
member: GetConsiderLeadersAsLines
returns: System.Boolean
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
  - lines
  - leaders
  - getconsiderleadersaslines
  - imodeldoc2
  - model
  - doc2
  - consider
  - boolean
---

# IModelDoc2.GetConsiderLeadersAsLines

Gets whether the display data of a leader is included as lines when the lines are retrieved from a view or annotation in this document.

## Signature

```csharp
System.Boolean GetConsiderLeadersAsLines()
```
## Parameters

None.

## Return Value

True if leaders are returned as line data, false if leaders are not returned as line data

## Remarks

The various GetLeaderCount and GetLeaderAtIndex mehtods return information about where the vertices of the leader are located. These methods also return the leader information as part of its line information.
Depending on what your program is trying to accomplish and which APIs it is using, this duplication of information may not be desirable.
IModelDoc2::SetConsiderLeadersAsLines
controls this behavior by setting a flag on the document that indicates whether the leader information should be returned as part of the line information. IModelDoc2::GetConsiderLeadersAsLines gets the current behavior for this document.