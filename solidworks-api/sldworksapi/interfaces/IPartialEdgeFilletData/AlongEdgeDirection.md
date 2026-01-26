---
type: property
interface: IPartialEdgeFilletData
member: AlongEdgeDirection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
  - parts
related: []
keywords:
  - alongedgedirection
  - ipartialedgefilletdata
  - partial
  - edge
  - fillet
  - data
  - along
  - direction
  - boolean
readonly: true
---

# IPartialEdgeFilletData.AlongEdgeDirection

Gets which end of the edge to start the fillet.

## Signature

```csharp
System.Boolean AlongEdgeDirection {get;}
```
## Parameters

None.

## Return Value

True to start the fillet at the start point of the edge, false to start the fillet at the end point of the edge

## Remarks

To modify the starting point of the fillet after creation, you must call
IPartialEdgeFilletData::SetPartialFilletParameters
.