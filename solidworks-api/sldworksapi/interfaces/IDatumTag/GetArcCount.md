---
type: method
interface: IDatumTag
member: GetArcCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDatumTag.GetArcAtIndex
  - IDatumTag.IGetArcAtIndex
keywords:
  - getarccount
  - idatumtag
  - datum
  - tag
  - arc
  - count
  - int32
---

# IDatumTag.GetArcCount

Gets the number of arc items in this datum tag.

## Signature

```csharp
System.Int32 GetArcCount()
```
## Parameters

None.

## Return Value

Number of arcs

## Remarks

Call this method before calling
IDatumTag::GetArcAtIndex
or
IDatumTag::IGetArcAtIndex
.

## See Also

- `IDatumTag.GetArcAtIndex`
- `IDatumTag.IGetArcAtIndex`