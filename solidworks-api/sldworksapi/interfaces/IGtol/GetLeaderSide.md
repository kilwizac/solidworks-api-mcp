---
type: method
interface: IGtol
member: GetLeaderSide
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetLeaderAtIndex2
  - IGtol.GetLeaderCount
  - IGtol.GetLeaderInfo
  - IGtol.IGetLeaderAtIndex2
  - IGtol.IGetLeaderInfo
keywords:
  - leaders
  - geometric
  - tolerancing
  - getleaderside
  - igtol
  - gtol
  - leader
  - side
  - int32
---

# IGtol.GetLeaderSide

Gets where the leader attaches to the symbol.

## Signature

```csharp
System.Int32 GetLeaderSide()
```
## Parameters

None.

## Return Value

Leader attachment information as defined in swLeaderSide_e

## Remarks

Use...
To...
IGtol::IsAttached
Determine if this symbol is using a leader
IGtol::HasExtraLeader
Determine if this symbol is using a bent leader
IGtol::GetAllAround
Determine if this symbol is using an all around symbol
IGtol::SetLeader
Set the characteristics of the leader on this symbol

## See Also

- `IGtol.GetLeaderAtIndex2`
- `IGtol.GetLeaderCount`
- `IGtol.GetLeaderInfo`
- `IGtol.IGetLeaderAtIndex2`
- `IGtol.IGetLeaderInfo`