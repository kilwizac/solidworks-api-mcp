---
type: method
interface: IGtol
member: IGetArrowHeadAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the arrow head
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetArrowHeadAtIndex
  - IGtol.GetArrowHeadCount
  - IGtol.GetArrowHeadInfo
  - IGtol.IGetArrowHeadInfo
keywords:
  - arrows
  - geometric
  - tolerancing
  - igetarrowheadatindex
  - igtol
  - gtol
  - arrow
  - head
  - index
  - int32
  - double
---

# IGtol.IGetArrowHeadAtIndex

Gets information on the specified arrow head in this GTol.

## Signature

```csharp
System.Double IGetArrowHeadAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the arrow head

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The return value is an array of doubles in the following format:
[
arrowHeadPt
[3],
arrowHeadDir
[3],
arrowHeadWidth
,
arrowHeadHeight
,
arrowHeadStyle
]
where:
arrowHeadPt
[3]
XYZ arrow head tip location
arrowHeadDir
[3]
XYZ arrow head direction
arrowHeadWidth
Arrow head width where the width is measured along the arrow head direction
arrowHeadHeight
Arrow head height
arrowHeadStyle
Arrow head style as defined in
swArrowStyle_e

## See Also

- `IGtol.GetArrowHeadAtIndex`
- `IGtol.GetArrowHeadCount`
- `IGtol.GetArrowHeadInfo`
- `IGtol.IGetArrowHeadInfo`