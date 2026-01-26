---
type: method
interface: IWeldSymbol
member: IGetArrowHeadInfo
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IWeldSymbol.GetArrowHeadAtIndex
  - IWeldSymbol.GetArrowHeadCount
  - IWeldSymbol.GetArrowHeadInfo
  - IWeldSymbol.IGetArrowHeadAtIndex
keywords:
  - igetarrowheadinfo
  - iweldsymbol
  - weld
  - symbol
  - arrow
  - head
  - info
  - double
---

# IWeldSymbol.IGetArrowHeadInfo

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

The information returned is independent of whether this weld symbol has an arrowhead.
Format of return information is the following array of doubles:
retval
[0] = arrow length (that is, leader into arrowhead)
retval
[1] = arrowhead length
retval
[2] = arrowhead width
retval
[3] = arrowhead style as defined in
swArrowStyle_e

## See Also

- `IWeldSymbol.GetArrowHeadAtIndex`
- `IWeldSymbol.GetArrowHeadCount`
- `IWeldSymbol.GetArrowHeadInfo`
- `IWeldSymbol.IGetArrowHeadAtIndex`