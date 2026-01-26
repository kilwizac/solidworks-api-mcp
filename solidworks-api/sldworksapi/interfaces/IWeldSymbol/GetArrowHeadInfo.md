---
type: method
interface: IWeldSymbol
member: GetArrowHeadInfo
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IWeldSymbol.GetArrowHeadAtIndex
  - IWeldSymbol.GetArrowHeadCount
  - IWeldSymbol.IGetArrowHeadAtIndex
  - IWeldSymbol.IGetArrowHeadInfo
keywords:
  - getarrowheadinfo
  - iweldsymbol
  - weld
  - symbol
  - arrow
  - head
  - info
  - object
---

# IWeldSymbol.GetArrowHeadInfo

Gets an array of doubles that describe the geometry of the arrowhead on the far end of the leader line.

## Signature

```csharp
System.Object GetArrowHeadInfo()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

This information returned by this method is independent of whether this weld symbol has an arrowhead.
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
- `IWeldSymbol.IGetArrowHeadAtIndex`
- `IWeldSymbol.IGetArrowHeadInfo`