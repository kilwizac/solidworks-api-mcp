---
type: method
interface: ISFSymbol
member: IGetArrowHeadInfo
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ISFSymbol.GetArrowHeadAtIndex
  - ISFSymbol.GetArrowHeadCount
  - ISFSymbol.GetArrowHeadInfo
  - ISFSymbol.IGetArrowHeadAtIndex
keywords:
  - igetarrowheadinfo
  - isfsymbol
  - isf
  - symbol
  - arrow
  - head
  - info
  - double
---

# ISFSymbol.IGetArrowHeadInfo

Gets an array of doubles that describe the geometry of the arrowhead on the far end of the leader line.

## Signature

```csharp
System.Double IGetArrowHeadInfo()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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
- `ISFSymbol.GetArrowHeadInfo`
- `ISFSymbol.IGetArrowHeadAtIndex`