---
type: method
interface: IDisplayData
member: IGetArrowHeadAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the desired arrow head where the index begins at zero
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDisplayData.GetArrowHeadAtIndex
  - IDisplayData.GetArrowHeadCount
keywords:
  - igetarrowheadatindex
  - idisplaydata
  - display
  - data
  - arrow
  - head
  - index
  - int32
  - double
---

# IDisplayData.IGetArrowHeadAtIndex

Gets information on the specified arrow head.

## Signature

```csharp
System.Double IGetArrowHeadAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the desired arrow head where the index begins at zero

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The return value is the following array of doubles:
[
arrowHeadPt[3], arrowHeadDir[3], arrowHeadWidth, arrowHeadHeight, arrowHeadStyle
]
where:
arrowHeadPt[3]
XYZ arrow head tip location
arrowHeadDir[3]
XYZ arrow head direction
arrowHeadWidth
Arrow head width measured along the arrow head direction
arrowHeadHeight
Arrow head height
arrowHeadStyle
Arrow head style as defined in
swArrowStyle_e

## See Also

- `IDisplayData.GetArrowHeadAtIndex`
- `IDisplayData.GetArrowHeadCount`