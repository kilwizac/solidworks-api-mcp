---
type: method
interface: ISFSymbol
member: GetArrowHeadInfo
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ISFSymbol.GetArrowHeadAtIndex
  - ISFSymbol.GetArrowHeadCount
  - ISFSymbol.IGetArrowHeadAtIndex
  - ISFSymbol.IGetArrowHeadInfo
keywords:
  - getarrowheadinfo
  - isfsymbol
  - isf
  - symbol
  - arrow
  - head
  - info
  - object
---

# ISFSymbol.GetArrowHeadInfo

Gets an array of doubles that describe the geometry of the arrowhead on the far end of the leader line.

## Signature

```csharp
System.Object GetArrowHeadInfo()
```
## Parameters

None.

## Return Value

Array of doubles describing format (see Remarks )

## Remarks

Format of return information is the following array of doubles:
retval
[0]
= Arrow length (leader into arrowhead)
retval
[1]
= Arrowhead length
retval
[2]
= Arrowhead width
retval
[3]
= Arrowhead style as defined in
swArrowStyle_e

## See Also

- `ISFSymbol.GetArrowHeadAtIndex`
- `ISFSymbol.GetArrowHeadCount`
- `ISFSymbol.IGetArrowHeadAtIndex`
- `ISFSymbol.IGetArrowHeadInfo`